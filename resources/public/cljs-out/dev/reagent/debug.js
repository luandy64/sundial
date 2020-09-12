// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11157__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11158__i = 0, G__11158__a = new Array(arguments.length -  0);
while (G__11158__i < G__11158__a.length) {G__11158__a[G__11158__i] = arguments[G__11158__i + 0]; ++G__11158__i;}
  args = new cljs.core.IndexedSeq(G__11158__a,0,null);
} 
return G__11157__delegate.call(this,args);};
G__11157.cljs$lang$maxFixedArity = 0;
G__11157.cljs$lang$applyTo = (function (arglist__11159){
var args = cljs.core.seq(arglist__11159);
return G__11157__delegate(args);
});
G__11157.cljs$core$IFn$_invoke$arity$variadic = G__11157__delegate;
return G__11157;
})()
);

(o.error = (function() { 
var G__11160__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11161__i = 0, G__11161__a = new Array(arguments.length -  0);
while (G__11161__i < G__11161__a.length) {G__11161__a[G__11161__i] = arguments[G__11161__i + 0]; ++G__11161__i;}
  args = new cljs.core.IndexedSeq(G__11161__a,0,null);
} 
return G__11160__delegate.call(this,args);};
G__11160.cljs$lang$maxFixedArity = 0;
G__11160.cljs$lang$applyTo = (function (arglist__11162){
var args = cljs.core.seq(arglist__11162);
return G__11160__delegate(args);
});
G__11160.cljs$core$IFn$_invoke$arity$variadic = G__11160__delegate;
return G__11160;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
