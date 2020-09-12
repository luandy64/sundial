// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19182){
var map__19183 = p__19182;
var map__19183__$1 = (((((!((map__19183 == null))))?(((((map__19183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19183):map__19183);
var m = map__19183__$1;
var n = cljs.core.get.call(null,map__19183__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19185_19217 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19186_19218 = null;
var count__19187_19219 = (0);
var i__19188_19220 = (0);
while(true){
if((i__19188_19220 < count__19187_19219)){
var f_19221 = cljs.core._nth.call(null,chunk__19186_19218,i__19188_19220);
cljs.core.println.call(null,"  ",f_19221);


var G__19222 = seq__19185_19217;
var G__19223 = chunk__19186_19218;
var G__19224 = count__19187_19219;
var G__19225 = (i__19188_19220 + (1));
seq__19185_19217 = G__19222;
chunk__19186_19218 = G__19223;
count__19187_19219 = G__19224;
i__19188_19220 = G__19225;
continue;
} else {
var temp__5720__auto___19226 = cljs.core.seq.call(null,seq__19185_19217);
if(temp__5720__auto___19226){
var seq__19185_19227__$1 = temp__5720__auto___19226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19185_19227__$1)){
var c__4556__auto___19228 = cljs.core.chunk_first.call(null,seq__19185_19227__$1);
var G__19229 = cljs.core.chunk_rest.call(null,seq__19185_19227__$1);
var G__19230 = c__4556__auto___19228;
var G__19231 = cljs.core.count.call(null,c__4556__auto___19228);
var G__19232 = (0);
seq__19185_19217 = G__19229;
chunk__19186_19218 = G__19230;
count__19187_19219 = G__19231;
i__19188_19220 = G__19232;
continue;
} else {
var f_19233 = cljs.core.first.call(null,seq__19185_19227__$1);
cljs.core.println.call(null,"  ",f_19233);


var G__19234 = cljs.core.next.call(null,seq__19185_19227__$1);
var G__19235 = null;
var G__19236 = (0);
var G__19237 = (0);
seq__19185_19217 = G__19234;
chunk__19186_19218 = G__19235;
count__19187_19219 = G__19236;
i__19188_19220 = G__19237;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19238 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19238);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19238)))?cljs.core.second.call(null,arglists_19238):arglists_19238));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19189_19239 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19190_19240 = null;
var count__19191_19241 = (0);
var i__19192_19242 = (0);
while(true){
if((i__19192_19242 < count__19191_19241)){
var vec__19203_19243 = cljs.core._nth.call(null,chunk__19190_19240,i__19192_19242);
var name_19244 = cljs.core.nth.call(null,vec__19203_19243,(0),null);
var map__19206_19245 = cljs.core.nth.call(null,vec__19203_19243,(1),null);
var map__19206_19246__$1 = (((((!((map__19206_19245 == null))))?(((((map__19206_19245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19206_19245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19206_19245):map__19206_19245);
var doc_19247 = cljs.core.get.call(null,map__19206_19246__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19248 = cljs.core.get.call(null,map__19206_19246__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19244);

cljs.core.println.call(null," ",arglists_19248);

if(cljs.core.truth_(doc_19247)){
cljs.core.println.call(null," ",doc_19247);
} else {
}


var G__19249 = seq__19189_19239;
var G__19250 = chunk__19190_19240;
var G__19251 = count__19191_19241;
var G__19252 = (i__19192_19242 + (1));
seq__19189_19239 = G__19249;
chunk__19190_19240 = G__19250;
count__19191_19241 = G__19251;
i__19192_19242 = G__19252;
continue;
} else {
var temp__5720__auto___19253 = cljs.core.seq.call(null,seq__19189_19239);
if(temp__5720__auto___19253){
var seq__19189_19254__$1 = temp__5720__auto___19253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19189_19254__$1)){
var c__4556__auto___19255 = cljs.core.chunk_first.call(null,seq__19189_19254__$1);
var G__19256 = cljs.core.chunk_rest.call(null,seq__19189_19254__$1);
var G__19257 = c__4556__auto___19255;
var G__19258 = cljs.core.count.call(null,c__4556__auto___19255);
var G__19259 = (0);
seq__19189_19239 = G__19256;
chunk__19190_19240 = G__19257;
count__19191_19241 = G__19258;
i__19192_19242 = G__19259;
continue;
} else {
var vec__19208_19260 = cljs.core.first.call(null,seq__19189_19254__$1);
var name_19261 = cljs.core.nth.call(null,vec__19208_19260,(0),null);
var map__19211_19262 = cljs.core.nth.call(null,vec__19208_19260,(1),null);
var map__19211_19263__$1 = (((((!((map__19211_19262 == null))))?(((((map__19211_19262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19211_19262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19211_19262):map__19211_19262);
var doc_19264 = cljs.core.get.call(null,map__19211_19263__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19265 = cljs.core.get.call(null,map__19211_19263__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19261);

cljs.core.println.call(null," ",arglists_19265);

if(cljs.core.truth_(doc_19264)){
cljs.core.println.call(null," ",doc_19264);
} else {
}


var G__19266 = cljs.core.next.call(null,seq__19189_19254__$1);
var G__19267 = null;
var G__19268 = (0);
var G__19269 = (0);
seq__19189_19239 = G__19266;
chunk__19190_19240 = G__19267;
count__19191_19241 = G__19268;
i__19192_19242 = G__19269;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__19213 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19214 = null;
var count__19215 = (0);
var i__19216 = (0);
while(true){
if((i__19216 < count__19215)){
var role = cljs.core._nth.call(null,chunk__19214,i__19216);
var temp__5720__auto___19270__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19270__$1)){
var spec_19271 = temp__5720__auto___19270__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19271));
} else {
}


var G__19272 = seq__19213;
var G__19273 = chunk__19214;
var G__19274 = count__19215;
var G__19275 = (i__19216 + (1));
seq__19213 = G__19272;
chunk__19214 = G__19273;
count__19215 = G__19274;
i__19216 = G__19275;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__19213);
if(temp__5720__auto____$1){
var seq__19213__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19213__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__19213__$1);
var G__19276 = cljs.core.chunk_rest.call(null,seq__19213__$1);
var G__19277 = c__4556__auto__;
var G__19278 = cljs.core.count.call(null,c__4556__auto__);
var G__19279 = (0);
seq__19213 = G__19276;
chunk__19214 = G__19277;
count__19215 = G__19278;
i__19216 = G__19279;
continue;
} else {
var role = cljs.core.first.call(null,seq__19213__$1);
var temp__5720__auto___19280__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19280__$2)){
var spec_19281 = temp__5720__auto___19280__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19281));
} else {
}


var G__19282 = cljs.core.next.call(null,seq__19213__$1);
var G__19283 = null;
var G__19284 = (0);
var G__19285 = (0);
seq__19213 = G__19282;
chunk__19214 = G__19283;
count__19215 = G__19284;
i__19216 = G__19285;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19286 = cljs.core.conj.call(null,via,t);
var G__19287 = cljs.core.ex_cause.call(null,t);
via = G__19286;
t = G__19287;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19290 = datafied_throwable;
var map__19290__$1 = (((((!((map__19290 == null))))?(((((map__19290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19290):map__19290);
var via = cljs.core.get.call(null,map__19290__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19290__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19290__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19291 = cljs.core.last.call(null,via);
var map__19291__$1 = (((((!((map__19291 == null))))?(((((map__19291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19291):map__19291);
var type = cljs.core.get.call(null,map__19291__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19291__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19291__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19292 = data;
var map__19292__$1 = (((((!((map__19292 == null))))?(((((map__19292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19292):map__19292);
var problems = cljs.core.get.call(null,map__19292__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19292__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19292__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19293 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19293__$1 = (((((!((map__19293 == null))))?(((((map__19293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19293):map__19293);
var top_data = map__19293__$1;
var source = cljs.core.get.call(null,map__19293__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19298 = phase;
var G__19298__$1 = (((G__19298 instanceof cljs.core.Keyword))?G__19298.fqn:null);
switch (G__19298__$1) {
case "read-source":
var map__19299 = data;
var map__19299__$1 = (((((!((map__19299 == null))))?(((((map__19299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19299):map__19299);
var line = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19299__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19301 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19301__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19301,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19301);
var G__19301__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19301__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19301__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19301__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19301__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19302 = top_data;
var G__19302__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19302,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19302);
var G__19302__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19302__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19302__$1);
var G__19302__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19302__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19302__$2);
var G__19302__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19302__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19302__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19302__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19302__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19303 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19303,(0),null);
var method = cljs.core.nth.call(null,vec__19303,(1),null);
var file = cljs.core.nth.call(null,vec__19303,(2),null);
var line = cljs.core.nth.call(null,vec__19303,(3),null);
var G__19306 = top_data;
var G__19306__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19306,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19306);
var G__19306__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19306__$1);
var G__19306__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__19306__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19306__$2);
var G__19306__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19306__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19306__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19306__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19306__$4;
}

break;
case "execution":
var vec__19307 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19307,(0),null);
var method = cljs.core.nth.call(null,vec__19307,(1),null);
var file = cljs.core.nth.call(null,vec__19307,(2),null);
var line = cljs.core.nth.call(null,vec__19307,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__19289_SHARP_){
var or__4126__auto__ = (p1__19289_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19289_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__19310 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19310__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19310,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19310);
var G__19310__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19310__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19310__$1);
var G__19310__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__19310__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19310__$2);
var G__19310__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19310__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19310__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19310__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19310__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19298__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19314){
var map__19315 = p__19314;
var map__19315__$1 = (((((!((map__19315 == null))))?(((((map__19315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19315):map__19315);
var triage_data = map__19315__$1;
var phase = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19317 = phase;
var G__19317__$1 = (((G__19317 instanceof cljs.core.Keyword))?G__19317.fqn:null);
switch (G__19317__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19318_19327 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19319_19328 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19320_19329 = true;
var _STAR_print_fn_STAR__temp_val__19321_19330 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19320_19329);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19321_19330);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19312_SHARP_){
return cljs.core.dissoc.call(null,p1__19312_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19319_19328);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19318_19327);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19322_19331 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19323_19332 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19324_19333 = true;
var _STAR_print_fn_STAR__temp_val__19325_19334 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19324_19333);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19325_19334);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19313_SHARP_){
return cljs.core.dissoc.call(null,p1__19313_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19323_19332);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19322_19331);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19317__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
