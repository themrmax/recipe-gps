// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23695_23709 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23696_23710 = null;
var count__23697_23711 = (0);
var i__23698_23712 = (0);
while(true){
if((i__23698_23712 < count__23697_23711)){
var f_23713 = cljs.core._nth.call(null,chunk__23696_23710,i__23698_23712);
cljs.core.println.call(null,"  ",f_23713);

var G__23714 = seq__23695_23709;
var G__23715 = chunk__23696_23710;
var G__23716 = count__23697_23711;
var G__23717 = (i__23698_23712 + (1));
seq__23695_23709 = G__23714;
chunk__23696_23710 = G__23715;
count__23697_23711 = G__23716;
i__23698_23712 = G__23717;
continue;
} else {
var temp__4425__auto___23718 = cljs.core.seq.call(null,seq__23695_23709);
if(temp__4425__auto___23718){
var seq__23695_23719__$1 = temp__4425__auto___23718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23695_23719__$1)){
var c__17629__auto___23720 = cljs.core.chunk_first.call(null,seq__23695_23719__$1);
var G__23721 = cljs.core.chunk_rest.call(null,seq__23695_23719__$1);
var G__23722 = c__17629__auto___23720;
var G__23723 = cljs.core.count.call(null,c__17629__auto___23720);
var G__23724 = (0);
seq__23695_23709 = G__23721;
chunk__23696_23710 = G__23722;
count__23697_23711 = G__23723;
i__23698_23712 = G__23724;
continue;
} else {
var f_23725 = cljs.core.first.call(null,seq__23695_23719__$1);
cljs.core.println.call(null,"  ",f_23725);

var G__23726 = cljs.core.next.call(null,seq__23695_23719__$1);
var G__23727 = null;
var G__23728 = (0);
var G__23729 = (0);
seq__23695_23709 = G__23726;
chunk__23696_23710 = G__23727;
count__23697_23711 = G__23728;
i__23698_23712 = G__23729;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23730 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23730);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23730)))?cljs.core.second.call(null,arglists_23730):arglists_23730));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23699 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23700 = null;
var count__23701 = (0);
var i__23702 = (0);
while(true){
if((i__23702 < count__23701)){
var vec__23703 = cljs.core._nth.call(null,chunk__23700,i__23702);
var name = cljs.core.nth.call(null,vec__23703,(0),null);
var map__23704 = cljs.core.nth.call(null,vec__23703,(1),null);
var map__23704__$1 = ((((!((map__23704 == null)))?((((map__23704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23704):map__23704);
var doc = cljs.core.get.call(null,map__23704__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23704__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23731 = seq__23699;
var G__23732 = chunk__23700;
var G__23733 = count__23701;
var G__23734 = (i__23702 + (1));
seq__23699 = G__23731;
chunk__23700 = G__23732;
count__23701 = G__23733;
i__23702 = G__23734;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23699);
if(temp__4425__auto__){
var seq__23699__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23699__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23699__$1);
var G__23735 = cljs.core.chunk_rest.call(null,seq__23699__$1);
var G__23736 = c__17629__auto__;
var G__23737 = cljs.core.count.call(null,c__17629__auto__);
var G__23738 = (0);
seq__23699 = G__23735;
chunk__23700 = G__23736;
count__23701 = G__23737;
i__23702 = G__23738;
continue;
} else {
var vec__23706 = cljs.core.first.call(null,seq__23699__$1);
var name = cljs.core.nth.call(null,vec__23706,(0),null);
var map__23707 = cljs.core.nth.call(null,vec__23706,(1),null);
var map__23707__$1 = ((((!((map__23707 == null)))?((((map__23707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23707):map__23707);
var doc = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23739 = cljs.core.next.call(null,seq__23699__$1);
var G__23740 = null;
var G__23741 = (0);
var G__23742 = (0);
seq__23699 = G__23739;
chunk__23700 = G__23740;
count__23701 = G__23741;
i__23702 = G__23742;
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
}
});

//# sourceMappingURL=repl.js.map