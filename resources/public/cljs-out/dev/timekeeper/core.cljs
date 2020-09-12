(ns ^:figwheel-hooks timekeeper.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]))

(println "This text is printed from src/timekeeper/core.cljs. Go ahead and edit it and see reloading in action.")


(defn time-component [class-name state-value time-unit-count iterable]
  "Args:
   - class-name: keyword of CSS class to add to div
   - key-prefix: string used in the div's key
   - time-unit-count: E.g. 12 for months, 7 for days of the week, 28-31 for days
                      in a month
   - iterable: Thing to map over"
  (let [unit-name (name class-name)]
    (map-indexed (fn [index unit]
                   (let [key-id        (str unit-name "-" index)
                         amount        (-> 360
                                           (/ time-unit-count)
                                           (* index)
                                           (- 90))
                         is-active?    (when (= index state-value)
                                      "active")
                         rotation      (str "rotate(" amount "deg)")
                         text-rotation (str "rotate(" (* -1 amount) "deg)")
                         text (if (> 10 unit)
                                (str "0" unit)
                                (str unit))]
                     [:div {:key   key-id
                            :class [unit-name "item" is-active?]
                            :style {:transform rotation}}
                      [:div {:key (str key-id "-tick")
                             :class ["tick"]
                             :style {:display "inline-block"}}]
                      [:div {:key   (str key-id "-text")
                             :style {:transform text-rotation
                                     :display   "inline-block"
                                     :text-align "left"
                                     :z-index "1"}}
                       text]]))
                 iterable)))

(def hand-length {:hour   "min(34vh, 34vw)"
                  :minute "min(27vh, 27vw)"
                  :second "min(30vh, 30vw)"})

(defn hands-component [class-name state-value time-unit-count]
  (let [unit-name (name class-name)
        length    (class-name hand-length)
        key-id    (str unit-name "-hand")
        amount    (-> 360
                      (/ time-unit-count)
                      (* state-value)
                      (- 90))
        rotation      (str "rotate(" amount "deg)")]
    [[:div {:key   key-id
            :class [key-id]
            :style {:transform (str rotation " translateY(30%) translateX(50%)")
                    ;;:border-style "dotted"
                    :width "100%"
                    :position "absolute"
                    :max-width length}}
      ]]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:hour   1
                          :minute 1
                          :second 1}))

(defn update-state []
  (let [current-date (js/Date.)
        new-state    (-> @app-state
                         (assoc :hour (.getHours current-date))
                         (assoc :minute (.getMinutes current-date))
                         (assoc :second (.getSeconds current-date)))]
    (reset! app-state new-state)))

(defonce state-updater (js/setInterval update-state 1000))

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this in src/timekeeper/core.cljs and watch it change!"]])

(defn center-piece []
  [[:div {:key "center"
          :style {:height "2em"
                  :width "2em"
                  ;; :background-color "rgba(122, 109, 83, 1)"
                  :background-color "rgba(174, 148, 100, 1)"
                  :z-index "1"
                  :border-radius "100%"}}]])

(defn main-page []
  [:div {:class "App"}
   (doall (concat (time-component :hour
                                  (:hour @app-state)
                                  24
                                  (range 24))
                  (time-component :minute
                                  (:minute @app-state)
                                  60
                                  (range 60))
                  (hands-component :hour
                                   (:hour @app-state)
                                   24)
                  (hands-component :minute
                                   (:minute @app-state)
                                   60)
                  (hands-component :second
                                   (:second @app-state)
                                   60)
                  (center-piece)))
   ])

(defn mount []
  (rdom/render [main-page] (.getElementById js/document "app")))

(defn mount-app-element []
  (mount))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
