// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('sundial.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
sundial.core.time_component = (function sundial$core$time_component(class_name,state_value,time_unit_count,iterable){

var unit_name = cljs.core.name(class_name);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,unit){
var key_id = [unit_name,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('');
var amount = ((((360) / time_unit_count) * index) - (90));
var is_active_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,state_value))?"active":null);
var rotation = ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount),"deg)"].join('');
var text_rotation = ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((-1) * amount)),"deg)"].join('');
var text = ((((10) > unit))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,key_id,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [unit_name,"item",is_active_QMARK_], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,rotation], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[key_id,"-tick"].join(''),cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tick"], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"inline-block"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[key_id,"-text"].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$transform,text_rotation,cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$text_DASH_align,"left",cljs.core.cst$kw$z_DASH_index,"1"], null)], null),text], null)], null);
}),iterable);
});
sundial.core.hand_length = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hour,"min(34vh, 34vw)",cljs.core.cst$kw$minute,"min(27vh, 27vw)",cljs.core.cst$kw$second,"min(30vh, 30vw)"], null);
sundial.core.hands_component = (function sundial$core$hands_component(class_name,state_value,time_unit_count){
var unit_name = cljs.core.name(class_name);
var length = (class_name.cljs$core$IFn$_invoke$arity$1 ? class_name.cljs$core$IFn$_invoke$arity$1(sundial.core.hand_length) : class_name.call(null,sundial.core.hand_length));
var key_id = [unit_name,"-hand"].join('');
var amount = ((((360) / time_unit_count) * state_value) - (90));
var rotation = ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount),"deg)"].join('');
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,key_id,cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_id], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$transform,[rotation," translateY(30%) translateX(50%)"].join(''),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$max_DASH_width,length], null)], null)], null)], null);
});
if((typeof sundial !== 'undefined') && (typeof sundial.core !== 'undefined') && (typeof sundial.core.app_state !== 'undefined')){
} else {
sundial.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hour,(1),cljs.core.cst$kw$minute,(1),cljs.core.cst$kw$second,(1)], null));
}
sundial.core.update_state = (function sundial$core$update_state(){
var current_date = (new Date());
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(sundial.core.app_state),cljs.core.cst$kw$hour,current_date.getHours()),cljs.core.cst$kw$minute,current_date.getMinutes()),cljs.core.cst$kw$second,current_date.getSeconds());
return cljs.core.reset_BANG_(sundial.core.app_state,new_state);
});
if((typeof sundial !== 'undefined') && (typeof sundial.core !== 'undefined') && (typeof sundial.core.state_updater !== 'undefined')){
} else {
sundial.core.state_updater = setInterval(sundial.core.update_state,(1000));
}
sundial.core.get_app_element = (function sundial$core$get_app_element(){
return goog.dom.getElement("app");
});
sundial.core.center_piece = (function sundial$core$center_piece(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"center",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$height,"2em",cljs.core.cst$kw$width,"2em",cljs.core.cst$kw$background_DASH_color,"rgba(174, 148, 100, 1)",cljs.core.cst$kw$z_DASH_index,"1",cljs.core.cst$kw$border_DASH_radius,"100%"], null)], null)], null)], null);
});
sundial.core.main_page = (function sundial$core$main_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"App"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(sundial.core.time_component(cljs.core.cst$kw$hour,cljs.core.cst$kw$hour.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sundial.core.app_state)),(24),cljs.core.range.cljs$core$IFn$_invoke$arity$1((24))),sundial.core.time_component(cljs.core.cst$kw$minute,cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sundial.core.app_state)),(60),cljs.core.range.cljs$core$IFn$_invoke$arity$1((60))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sundial.core.hands_component(cljs.core.cst$kw$hour,cljs.core.cst$kw$hour.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sundial.core.app_state)),(24)),sundial.core.hands_component(cljs.core.cst$kw$minute,cljs.core.cst$kw$minute.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sundial.core.app_state)),(60)),sundial.core.hands_component(cljs.core.cst$kw$second,cljs.core.cst$kw$second.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sundial.core.app_state)),(60)),sundial.core.center_piece()], 0)))], null);
});
sundial.core.mount = (function sundial$core$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sundial.core.main_page], null),document.getElementById("app"));
});
sundial.core.mount_app_element = (function sundial$core$mount_app_element(){
return sundial.core.mount();
});
sundial.core.mount_app_element();
sundial.core.on_reload = (function sundial$core$on_reload(){
return sundial.core.mount_app_element();
});
