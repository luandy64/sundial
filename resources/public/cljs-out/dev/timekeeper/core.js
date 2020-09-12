// Compiled by ClojureScript 1.10.773 {}
goog.provide('timekeeper.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.println.call(null,"This text is printed from src/timekeeper/core.cljs. Go ahead and edit it and see reloading in action.");
timekeeper.core.time_component = (function timekeeper$core$time_component(class_name,state_value,time_unit_count,iterable){

var unit_name = cljs.core.name.call(null,class_name);
return cljs.core.map_indexed.call(null,(function (index,unit){
var key_id = [unit_name,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('');
var amount = ((((360) / time_unit_count) * index) - (90));
var is_active_QMARK_ = ((cljs.core._EQ_.call(null,index,state_value))?"active":null);
var rotation = ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount),"deg)"].join('');
var text_rotation = ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((-1) * amount)),"deg)"].join('');
var text = ((((10) > unit))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key_id,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [unit_name,"item",is_active_QMARK_], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),rotation], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),[key_id,"-tick"].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tick"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[key_id,"-text"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),text_rotation,new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1"], null)], null),text], null)], null);
}),iterable);
});
timekeeper.core.hand_length = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hour","hour",-555989214),"min(34vh, 34vw)",new cljs.core.Keyword(null,"minute","minute",-642875969),"min(27vh, 27vw)",new cljs.core.Keyword(null,"second","second",-444702010),"min(30vh, 30vw)"], null);
timekeeper.core.hands_component = (function timekeeper$core$hands_component(class_name,state_value,time_unit_count){
var unit_name = cljs.core.name.call(null,class_name);
var length = class_name.call(null,timekeeper.core.hand_length);
var key_id = [unit_name,"-hand"].join('');
var amount = ((((360) / time_unit_count) * state_value) - (90));
var rotation = ["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount),"deg)"].join('');
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key_id,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_id], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),[rotation," translateY(30%) translateX(50%)"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),length], null)], null)], null)], null);
});
if((typeof timekeeper !== 'undefined') && (typeof timekeeper.core !== 'undefined') && (typeof timekeeper.core.app_state !== 'undefined')){
} else {
timekeeper.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hour","hour",-555989214),(1),new cljs.core.Keyword(null,"minute","minute",-642875969),(1),new cljs.core.Keyword(null,"second","second",-444702010),(1)], null));
}
timekeeper.core.update_state = (function timekeeper$core$update_state(){
var current_date = (new Date());
var new_state = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,timekeeper.core.app_state),new cljs.core.Keyword(null,"hour","hour",-555989214),current_date.getHours()),new cljs.core.Keyword(null,"minute","minute",-642875969),current_date.getMinutes()),new cljs.core.Keyword(null,"second","second",-444702010),current_date.getSeconds());
return cljs.core.reset_BANG_.call(null,timekeeper.core.app_state,new_state);
});
if((typeof timekeeper !== 'undefined') && (typeof timekeeper.core !== 'undefined') && (typeof timekeeper.core.state_updater !== 'undefined')){
} else {
timekeeper.core.state_updater = setInterval(timekeeper.core.update_state,(1000));
}
timekeeper.core.get_app_element = (function timekeeper$core$get_app_element(){
return goog.dom.getElement("app");
});
timekeeper.core.hello_world = (function timekeeper$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timekeeper.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this in src/timekeeper/core.cljs and watch it change!"], null)], null);
});
timekeeper.core.center_piece = (function timekeeper$core$center_piece(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"2em",new cljs.core.Keyword(null,"width","width",-384071477),"2em",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(174, 148, 100, 1)",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100%"], null)], null)], null)], null);
});
timekeeper.core.main_page = (function timekeeper$core$main_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"App"], null),cljs.core.doall.call(null,cljs.core.concat.call(null,timekeeper.core.time_component.call(null,new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"hour","hour",-555989214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timekeeper.core.app_state)),(24),cljs.core.range.call(null,(24))),timekeeper.core.time_component.call(null,new cljs.core.Keyword(null,"minute","minute",-642875969),new cljs.core.Keyword(null,"minute","minute",-642875969).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timekeeper.core.app_state)),(60),cljs.core.range.call(null,(60))),timekeeper.core.hands_component.call(null,new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"hour","hour",-555989214).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timekeeper.core.app_state)),(24)),timekeeper.core.hands_component.call(null,new cljs.core.Keyword(null,"minute","minute",-642875969),new cljs.core.Keyword(null,"minute","minute",-642875969).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timekeeper.core.app_state)),(60)),timekeeper.core.hands_component.call(null,new cljs.core.Keyword(null,"second","second",-444702010),new cljs.core.Keyword(null,"second","second",-444702010).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timekeeper.core.app_state)),(60)),timekeeper.core.center_piece.call(null)))], null);
});
timekeeper.core.mount = (function timekeeper$core$mount(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timekeeper.core.main_page], null),document.getElementById("app"));
});
timekeeper.core.mount_app_element = (function timekeeper$core$mount_app_element(){
return timekeeper.core.mount.call(null);
});
timekeeper.core.mount_app_element.call(null);
timekeeper.core.on_reload = (function timekeeper$core$on_reload(){
return timekeeper.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
