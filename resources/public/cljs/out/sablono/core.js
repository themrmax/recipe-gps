// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__18564__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__18563 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__18563,(0),null);
var body = cljs.core.nthnext.call(null,vec__18563,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__18564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18565__i = 0, G__18565__a = new Array(arguments.length -  0);
while (G__18565__i < G__18565__a.length) {G__18565__a[G__18565__i] = arguments[G__18565__i + 0]; ++G__18565__i;}
  args = new cljs.core.IndexedSeq(G__18565__a,0);
} 
return G__18564__delegate.call(this,args);};
G__18564.cljs$lang$maxFixedArity = 0;
G__18564.cljs$lang$applyTo = (function (arglist__18566){
var args = cljs.core.seq(arglist__18566);
return G__18564__delegate(args);
});
G__18564.cljs$core$IFn$_invoke$arity$variadic = G__18564__delegate;
return G__18564;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17598__auto__ = (function sablono$core$update_arglists_$_iter__18571(s__18572){
return (new cljs.core.LazySeq(null,(function (){
var s__18572__$1 = s__18572;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18572__$1);
if(temp__4425__auto__){
var s__18572__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18572__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__18572__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__18574 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__18573 = (0);
while(true){
if((i__18573 < size__17597__auto__)){
var args = cljs.core._nth.call(null,c__17596__auto__,i__18573);
cljs.core.chunk_append.call(null,b__18574,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__18575 = (i__18573 + (1));
i__18573 = G__18575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18574),sablono$core$update_arglists_$_iter__18571.call(null,cljs.core.chunk_rest.call(null,s__18572__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18574),null);
}
} else {
var args = cljs.core.first.call(null,s__18572__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__18571.call(null,cljs.core.rest.call(null,s__18572__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18581 = arguments.length;
var i__17885__auto___18582 = (0);
while(true){
if((i__17885__auto___18582 < len__17884__auto___18581)){
args__17891__auto__.push((arguments[i__17885__auto___18582]));

var G__18583 = (i__17885__auto___18582 + (1));
i__17885__auto___18582 = G__18583;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17598__auto__ = (function sablono$core$iter__18577(s__18578){
return (new cljs.core.LazySeq(null,(function (){
var s__18578__$1 = s__18578;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18578__$1);
if(temp__4425__auto__){
var s__18578__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18578__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__18578__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__18580 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__18579 = (0);
while(true){
if((i__18579 < size__17597__auto__)){
var style = cljs.core._nth.call(null,c__17596__auto__,i__18579);
cljs.core.chunk_append.call(null,b__18580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__18584 = (i__18579 + (1));
i__18579 = G__18584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18580),sablono$core$iter__18577.call(null,cljs.core.chunk_rest.call(null,s__18578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18580),null);
}
} else {
var style = cljs.core.first.call(null,s__18578__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__18577.call(null,cljs.core.rest.call(null,s__18578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq18576){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18576));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to18585 = (function sablono$core$link_to18585(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18588 = arguments.length;
var i__17885__auto___18589 = (0);
while(true){
if((i__17885__auto___18589 < len__17884__auto___18588)){
args__17891__auto__.push((arguments[i__17885__auto___18589]));

var G__18590 = (i__17885__auto___18589 + (1));
i__17885__auto___18589 = G__18590;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.link_to18585.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.link_to18585.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to18585.cljs$lang$maxFixedArity = (1);

sablono.core.link_to18585.cljs$lang$applyTo = (function (seq18586){
var G__18587 = cljs.core.first.call(null,seq18586);
var seq18586__$1 = cljs.core.next.call(null,seq18586);
return sablono.core.link_to18585.cljs$core$IFn$_invoke$arity$variadic(G__18587,seq18586__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18585);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to18591 = (function sablono$core$mail_to18591(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18596 = arguments.length;
var i__17885__auto___18597 = (0);
while(true){
if((i__17885__auto___18597 < len__17884__auto___18596)){
args__17891__auto__.push((arguments[i__17885__auto___18597]));

var G__18598 = (i__17885__auto___18597 + (1));
i__17885__auto___18597 = G__18598;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.mail_to18591.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.mail_to18591.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__18594){
var vec__18595 = p__18594;
var content = cljs.core.nth.call(null,vec__18595,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16826__auto__ = content;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to18591.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to18591.cljs$lang$applyTo = (function (seq18592){
var G__18593 = cljs.core.first.call(null,seq18592);
var seq18592__$1 = cljs.core.next.call(null,seq18592);
return sablono.core.mail_to18591.cljs$core$IFn$_invoke$arity$variadic(G__18593,seq18592__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18591);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list18599 = (function sablono$core$unordered_list18599(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17598__auto__ = (function sablono$core$unordered_list18599_$_iter__18604(s__18605){
return (new cljs.core.LazySeq(null,(function (){
var s__18605__$1 = s__18605;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18605__$1);
if(temp__4425__auto__){
var s__18605__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18605__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__18605__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__18607 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__18606 = (0);
while(true){
if((i__18606 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__18606);
cljs.core.chunk_append.call(null,b__18607,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__18608 = (i__18606 + (1));
i__18606 = G__18608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18607),sablono$core$unordered_list18599_$_iter__18604.call(null,cljs.core.chunk_rest.call(null,s__18605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18607),null);
}
} else {
var x = cljs.core.first.call(null,s__18605__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list18599_$_iter__18604.call(null,cljs.core.rest.call(null,s__18605__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18599);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list18609 = (function sablono$core$ordered_list18609(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17598__auto__ = (function sablono$core$ordered_list18609_$_iter__18614(s__18615){
return (new cljs.core.LazySeq(null,(function (){
var s__18615__$1 = s__18615;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18615__$1);
if(temp__4425__auto__){
var s__18615__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18615__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__18615__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__18617 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__18616 = (0);
while(true){
if((i__18616 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__18616);
cljs.core.chunk_append.call(null,b__18617,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__18618 = (i__18616 + (1));
i__18616 = G__18618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18617),sablono$core$ordered_list18609_$_iter__18614.call(null,cljs.core.chunk_rest.call(null,s__18615__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18617),null);
}
} else {
var x = cljs.core.first.call(null,s__18615__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list18609_$_iter__18614.call(null,cljs.core.rest.call(null,s__18615__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18609);
/**
 * Create an image element.
 */
sablono.core.image18619 = (function sablono$core$image18619(var_args){
var args18620 = [];
var len__17884__auto___18623 = arguments.length;
var i__17885__auto___18624 = (0);
while(true){
if((i__17885__auto___18624 < len__17884__auto___18623)){
args18620.push((arguments[i__17885__auto___18624]));

var G__18625 = (i__17885__auto___18624 + (1));
i__17885__auto___18624 = G__18625;
continue;
} else {
}
break;
}

var G__18622 = args18620.length;
switch (G__18622) {
case 1:
return sablono.core.image18619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image18619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18620.length)].join('')));

}
});

sablono.core.image18619.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image18619.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image18619.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18619);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__18627_SHARP_,p2__18628_SHARP_){
return [cljs.core.str(p1__18627_SHARP_),cljs.core.str("["),cljs.core.str(p2__18628_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__18629_SHARP_,p2__18630_SHARP_){
return [cljs.core.str(p1__18629_SHARP_),cljs.core.str("-"),cljs.core.str(p2__18630_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field18631 = (function sablono$core$color_field18631(var_args){
var args18632 = [];
var len__17884__auto___18699 = arguments.length;
var i__17885__auto___18700 = (0);
while(true){
if((i__17885__auto___18700 < len__17884__auto___18699)){
args18632.push((arguments[i__17885__auto___18700]));

var G__18701 = (i__17885__auto___18700 + (1));
i__17885__auto___18700 = G__18701;
continue;
} else {
}
break;
}

var G__18634 = args18632.length;
switch (G__18634) {
case 1:
return sablono.core.color_field18631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field18631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18632.length)].join('')));

}
});

sablono.core.color_field18631.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.color_field18631.call(null,name__18552__auto__,null);
});

sablono.core.color_field18631.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.color_field18631.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18631);

/**
 * Creates a date input field.
 */
sablono.core.date_field18635 = (function sablono$core$date_field18635(var_args){
var args18636 = [];
var len__17884__auto___18703 = arguments.length;
var i__17885__auto___18704 = (0);
while(true){
if((i__17885__auto___18704 < len__17884__auto___18703)){
args18636.push((arguments[i__17885__auto___18704]));

var G__18705 = (i__17885__auto___18704 + (1));
i__17885__auto___18704 = G__18705;
continue;
} else {
}
break;
}

var G__18638 = args18636.length;
switch (G__18638) {
case 1:
return sablono.core.date_field18635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field18635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18636.length)].join('')));

}
});

sablono.core.date_field18635.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.date_field18635.call(null,name__18552__auto__,null);
});

sablono.core.date_field18635.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.date_field18635.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18635);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field18639 = (function sablono$core$datetime_field18639(var_args){
var args18640 = [];
var len__17884__auto___18707 = arguments.length;
var i__17885__auto___18708 = (0);
while(true){
if((i__17885__auto___18708 < len__17884__auto___18707)){
args18640.push((arguments[i__17885__auto___18708]));

var G__18709 = (i__17885__auto___18708 + (1));
i__17885__auto___18708 = G__18709;
continue;
} else {
}
break;
}

var G__18642 = args18640.length;
switch (G__18642) {
case 1:
return sablono.core.datetime_field18639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field18639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18640.length)].join('')));

}
});

sablono.core.datetime_field18639.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.datetime_field18639.call(null,name__18552__auto__,null);
});

sablono.core.datetime_field18639.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.datetime_field18639.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18639);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field18643 = (function sablono$core$datetime_local_field18643(var_args){
var args18644 = [];
var len__17884__auto___18711 = arguments.length;
var i__17885__auto___18712 = (0);
while(true){
if((i__17885__auto___18712 < len__17884__auto___18711)){
args18644.push((arguments[i__17885__auto___18712]));

var G__18713 = (i__17885__auto___18712 + (1));
i__17885__auto___18712 = G__18713;
continue;
} else {
}
break;
}

var G__18646 = args18644.length;
switch (G__18646) {
case 1:
return sablono.core.datetime_local_field18643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field18643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18644.length)].join('')));

}
});

sablono.core.datetime_local_field18643.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.datetime_local_field18643.call(null,name__18552__auto__,null);
});

sablono.core.datetime_local_field18643.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.datetime_local_field18643.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18643);

/**
 * Creates a email input field.
 */
sablono.core.email_field18647 = (function sablono$core$email_field18647(var_args){
var args18648 = [];
var len__17884__auto___18715 = arguments.length;
var i__17885__auto___18716 = (0);
while(true){
if((i__17885__auto___18716 < len__17884__auto___18715)){
args18648.push((arguments[i__17885__auto___18716]));

var G__18717 = (i__17885__auto___18716 + (1));
i__17885__auto___18716 = G__18717;
continue;
} else {
}
break;
}

var G__18650 = args18648.length;
switch (G__18650) {
case 1:
return sablono.core.email_field18647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field18647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18648.length)].join('')));

}
});

sablono.core.email_field18647.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.email_field18647.call(null,name__18552__auto__,null);
});

sablono.core.email_field18647.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.email_field18647.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18647);

/**
 * Creates a file input field.
 */
sablono.core.file_field18651 = (function sablono$core$file_field18651(var_args){
var args18652 = [];
var len__17884__auto___18719 = arguments.length;
var i__17885__auto___18720 = (0);
while(true){
if((i__17885__auto___18720 < len__17884__auto___18719)){
args18652.push((arguments[i__17885__auto___18720]));

var G__18721 = (i__17885__auto___18720 + (1));
i__17885__auto___18720 = G__18721;
continue;
} else {
}
break;
}

var G__18654 = args18652.length;
switch (G__18654) {
case 1:
return sablono.core.file_field18651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field18651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18652.length)].join('')));

}
});

sablono.core.file_field18651.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.file_field18651.call(null,name__18552__auto__,null);
});

sablono.core.file_field18651.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.file_field18651.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18651);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field18655 = (function sablono$core$hidden_field18655(var_args){
var args18656 = [];
var len__17884__auto___18723 = arguments.length;
var i__17885__auto___18724 = (0);
while(true){
if((i__17885__auto___18724 < len__17884__auto___18723)){
args18656.push((arguments[i__17885__auto___18724]));

var G__18725 = (i__17885__auto___18724 + (1));
i__17885__auto___18724 = G__18725;
continue;
} else {
}
break;
}

var G__18658 = args18656.length;
switch (G__18658) {
case 1:
return sablono.core.hidden_field18655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field18655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18656.length)].join('')));

}
});

sablono.core.hidden_field18655.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.hidden_field18655.call(null,name__18552__auto__,null);
});

sablono.core.hidden_field18655.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.hidden_field18655.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18655);

/**
 * Creates a month input field.
 */
sablono.core.month_field18659 = (function sablono$core$month_field18659(var_args){
var args18660 = [];
var len__17884__auto___18727 = arguments.length;
var i__17885__auto___18728 = (0);
while(true){
if((i__17885__auto___18728 < len__17884__auto___18727)){
args18660.push((arguments[i__17885__auto___18728]));

var G__18729 = (i__17885__auto___18728 + (1));
i__17885__auto___18728 = G__18729;
continue;
} else {
}
break;
}

var G__18662 = args18660.length;
switch (G__18662) {
case 1:
return sablono.core.month_field18659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field18659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18660.length)].join('')));

}
});

sablono.core.month_field18659.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.month_field18659.call(null,name__18552__auto__,null);
});

sablono.core.month_field18659.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.month_field18659.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18659);

/**
 * Creates a number input field.
 */
sablono.core.number_field18663 = (function sablono$core$number_field18663(var_args){
var args18664 = [];
var len__17884__auto___18731 = arguments.length;
var i__17885__auto___18732 = (0);
while(true){
if((i__17885__auto___18732 < len__17884__auto___18731)){
args18664.push((arguments[i__17885__auto___18732]));

var G__18733 = (i__17885__auto___18732 + (1));
i__17885__auto___18732 = G__18733;
continue;
} else {
}
break;
}

var G__18666 = args18664.length;
switch (G__18666) {
case 1:
return sablono.core.number_field18663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field18663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18664.length)].join('')));

}
});

sablono.core.number_field18663.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.number_field18663.call(null,name__18552__auto__,null);
});

sablono.core.number_field18663.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.number_field18663.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18663);

/**
 * Creates a password input field.
 */
sablono.core.password_field18667 = (function sablono$core$password_field18667(var_args){
var args18668 = [];
var len__17884__auto___18735 = arguments.length;
var i__17885__auto___18736 = (0);
while(true){
if((i__17885__auto___18736 < len__17884__auto___18735)){
args18668.push((arguments[i__17885__auto___18736]));

var G__18737 = (i__17885__auto___18736 + (1));
i__17885__auto___18736 = G__18737;
continue;
} else {
}
break;
}

var G__18670 = args18668.length;
switch (G__18670) {
case 1:
return sablono.core.password_field18667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field18667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18668.length)].join('')));

}
});

sablono.core.password_field18667.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.password_field18667.call(null,name__18552__auto__,null);
});

sablono.core.password_field18667.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.password_field18667.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18667);

/**
 * Creates a range input field.
 */
sablono.core.range_field18671 = (function sablono$core$range_field18671(var_args){
var args18672 = [];
var len__17884__auto___18739 = arguments.length;
var i__17885__auto___18740 = (0);
while(true){
if((i__17885__auto___18740 < len__17884__auto___18739)){
args18672.push((arguments[i__17885__auto___18740]));

var G__18741 = (i__17885__auto___18740 + (1));
i__17885__auto___18740 = G__18741;
continue;
} else {
}
break;
}

var G__18674 = args18672.length;
switch (G__18674) {
case 1:
return sablono.core.range_field18671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field18671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18672.length)].join('')));

}
});

sablono.core.range_field18671.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.range_field18671.call(null,name__18552__auto__,null);
});

sablono.core.range_field18671.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.range_field18671.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18671);

/**
 * Creates a search input field.
 */
sablono.core.search_field18675 = (function sablono$core$search_field18675(var_args){
var args18676 = [];
var len__17884__auto___18743 = arguments.length;
var i__17885__auto___18744 = (0);
while(true){
if((i__17885__auto___18744 < len__17884__auto___18743)){
args18676.push((arguments[i__17885__auto___18744]));

var G__18745 = (i__17885__auto___18744 + (1));
i__17885__auto___18744 = G__18745;
continue;
} else {
}
break;
}

var G__18678 = args18676.length;
switch (G__18678) {
case 1:
return sablono.core.search_field18675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field18675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18676.length)].join('')));

}
});

sablono.core.search_field18675.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.search_field18675.call(null,name__18552__auto__,null);
});

sablono.core.search_field18675.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.search_field18675.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18675);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field18679 = (function sablono$core$tel_field18679(var_args){
var args18680 = [];
var len__17884__auto___18747 = arguments.length;
var i__17885__auto___18748 = (0);
while(true){
if((i__17885__auto___18748 < len__17884__auto___18747)){
args18680.push((arguments[i__17885__auto___18748]));

var G__18749 = (i__17885__auto___18748 + (1));
i__17885__auto___18748 = G__18749;
continue;
} else {
}
break;
}

var G__18682 = args18680.length;
switch (G__18682) {
case 1:
return sablono.core.tel_field18679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field18679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18680.length)].join('')));

}
});

sablono.core.tel_field18679.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.tel_field18679.call(null,name__18552__auto__,null);
});

sablono.core.tel_field18679.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.tel_field18679.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18679);

/**
 * Creates a text input field.
 */
sablono.core.text_field18683 = (function sablono$core$text_field18683(var_args){
var args18684 = [];
var len__17884__auto___18751 = arguments.length;
var i__17885__auto___18752 = (0);
while(true){
if((i__17885__auto___18752 < len__17884__auto___18751)){
args18684.push((arguments[i__17885__auto___18752]));

var G__18753 = (i__17885__auto___18752 + (1));
i__17885__auto___18752 = G__18753;
continue;
} else {
}
break;
}

var G__18686 = args18684.length;
switch (G__18686) {
case 1:
return sablono.core.text_field18683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field18683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18684.length)].join('')));

}
});

sablono.core.text_field18683.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.text_field18683.call(null,name__18552__auto__,null);
});

sablono.core.text_field18683.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.text_field18683.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18683);

/**
 * Creates a time input field.
 */
sablono.core.time_field18687 = (function sablono$core$time_field18687(var_args){
var args18688 = [];
var len__17884__auto___18755 = arguments.length;
var i__17885__auto___18756 = (0);
while(true){
if((i__17885__auto___18756 < len__17884__auto___18755)){
args18688.push((arguments[i__17885__auto___18756]));

var G__18757 = (i__17885__auto___18756 + (1));
i__17885__auto___18756 = G__18757;
continue;
} else {
}
break;
}

var G__18690 = args18688.length;
switch (G__18690) {
case 1:
return sablono.core.time_field18687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field18687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18688.length)].join('')));

}
});

sablono.core.time_field18687.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.time_field18687.call(null,name__18552__auto__,null);
});

sablono.core.time_field18687.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.time_field18687.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18687);

/**
 * Creates a url input field.
 */
sablono.core.url_field18691 = (function sablono$core$url_field18691(var_args){
var args18692 = [];
var len__17884__auto___18759 = arguments.length;
var i__17885__auto___18760 = (0);
while(true){
if((i__17885__auto___18760 < len__17884__auto___18759)){
args18692.push((arguments[i__17885__auto___18760]));

var G__18761 = (i__17885__auto___18760 + (1));
i__17885__auto___18760 = G__18761;
continue;
} else {
}
break;
}

var G__18694 = args18692.length;
switch (G__18694) {
case 1:
return sablono.core.url_field18691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field18691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18692.length)].join('')));

}
});

sablono.core.url_field18691.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.url_field18691.call(null,name__18552__auto__,null);
});

sablono.core.url_field18691.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.url_field18691.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18691);

/**
 * Creates a week input field.
 */
sablono.core.week_field18695 = (function sablono$core$week_field18695(var_args){
var args18696 = [];
var len__17884__auto___18763 = arguments.length;
var i__17885__auto___18764 = (0);
while(true){
if((i__17885__auto___18764 < len__17884__auto___18763)){
args18696.push((arguments[i__17885__auto___18764]));

var G__18765 = (i__17885__auto___18764 + (1));
i__17885__auto___18764 = G__18765;
continue;
} else {
}
break;
}

var G__18698 = args18696.length;
switch (G__18698) {
case 1:
return sablono.core.week_field18695.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field18695.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18696.length)].join('')));

}
});

sablono.core.week_field18695.cljs$core$IFn$_invoke$arity$1 = (function (name__18552__auto__){
return sablono.core.week_field18695.call(null,name__18552__auto__,null);
});

sablono.core.week_field18695.cljs$core$IFn$_invoke$arity$2 = (function (name__18552__auto__,value__18553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__18552__auto__,value__18553__auto__);
});

sablono.core.week_field18695.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18695);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box18767 = (function sablono$core$check_box18767(var_args){
var args18768 = [];
var len__17884__auto___18771 = arguments.length;
var i__17885__auto___18772 = (0);
while(true){
if((i__17885__auto___18772 < len__17884__auto___18771)){
args18768.push((arguments[i__17885__auto___18772]));

var G__18773 = (i__17885__auto___18772 + (1));
i__17885__auto___18772 = G__18773;
continue;
} else {
}
break;
}

var G__18770 = args18768.length;
switch (G__18770) {
case 1:
return sablono.core.check_box18767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box18767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box18767.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18768.length)].join('')));

}
});

sablono.core.check_box18767.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box18767.call(null,name,null);
});

sablono.core.check_box18767.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box18767.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box18767.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box18767.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18767);
/**
 * Creates a radio button.
 */
sablono.core.radio_button18775 = (function sablono$core$radio_button18775(var_args){
var args18776 = [];
var len__17884__auto___18779 = arguments.length;
var i__17885__auto___18780 = (0);
while(true){
if((i__17885__auto___18780 < len__17884__auto___18779)){
args18776.push((arguments[i__17885__auto___18780]));

var G__18781 = (i__17885__auto___18780 + (1));
i__17885__auto___18780 = G__18781;
continue;
} else {
}
break;
}

var G__18778 = args18776.length;
switch (G__18778) {
case 1:
return sablono.core.radio_button18775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button18775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button18775.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18776.length)].join('')));

}
});

sablono.core.radio_button18775.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button18775.call(null,group,null);
});

sablono.core.radio_button18775.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button18775.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button18775.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button18775.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18775);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options18783 = (function sablono$core$select_options18783(coll){
var iter__17598__auto__ = (function sablono$core$select_options18783_$_iter__18792(s__18793){
return (new cljs.core.LazySeq(null,(function (){
var s__18793__$1 = s__18793;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18793__$1);
if(temp__4425__auto__){
var s__18793__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18793__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__18793__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__18795 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__18794 = (0);
while(true){
if((i__18794 < size__17597__auto__)){
var x = cljs.core._nth.call(null,c__17596__auto__,i__18794);
cljs.core.chunk_append.call(null,b__18795,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18798 = x;
var text = cljs.core.nth.call(null,vec__18798,(0),null);
var val = cljs.core.nth.call(null,vec__18798,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__18798,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options18783.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__18800 = (i__18794 + (1));
i__18794 = G__18800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18795),sablono$core$select_options18783_$_iter__18792.call(null,cljs.core.chunk_rest.call(null,s__18793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18795),null);
}
} else {
var x = cljs.core.first.call(null,s__18793__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18799 = x;
var text = cljs.core.nth.call(null,vec__18799,(0),null);
var val = cljs.core.nth.call(null,vec__18799,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__18799,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options18783.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options18783_$_iter__18792.call(null,cljs.core.rest.call(null,s__18793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18783);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down18801 = (function sablono$core$drop_down18801(var_args){
var args18802 = [];
var len__17884__auto___18805 = arguments.length;
var i__17885__auto___18806 = (0);
while(true){
if((i__17885__auto___18806 < len__17884__auto___18805)){
args18802.push((arguments[i__17885__auto___18806]));

var G__18807 = (i__17885__auto___18806 + (1));
i__17885__auto___18806 = G__18807;
continue;
} else {
}
break;
}

var G__18804 = args18802.length;
switch (G__18804) {
case 2:
return sablono.core.drop_down18801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down18801.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18802.length)].join('')));

}
});

sablono.core.drop_down18801.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down18801.call(null,name,options,null);
});

sablono.core.drop_down18801.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down18801.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18801);
/**
 * Creates a text area element.
 */
sablono.core.text_area18809 = (function sablono$core$text_area18809(var_args){
var args18810 = [];
var len__17884__auto___18813 = arguments.length;
var i__17885__auto___18814 = (0);
while(true){
if((i__17885__auto___18814 < len__17884__auto___18813)){
args18810.push((arguments[i__17885__auto___18814]));

var G__18815 = (i__17885__auto___18814 + (1));
i__17885__auto___18814 = G__18815;
continue;
} else {
}
break;
}

var G__18812 = args18810.length;
switch (G__18812) {
case 1:
return sablono.core.text_area18809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area18809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18810.length)].join('')));

}
});

sablono.core.text_area18809.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area18809.call(null,name,null);
});

sablono.core.text_area18809.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area18809.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18809);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label18817 = (function sablono$core$label18817(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18817);
/**
 * Creates a submit button.
 */
sablono.core.submit_button18818 = (function sablono$core$submit_button18818(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18818);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button18819 = (function sablono$core$reset_button18819(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18819);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to18820 = (function sablono$core$form_to18820(var_args){
var args__17891__auto__ = [];
var len__17884__auto___18825 = arguments.length;
var i__17885__auto___18826 = (0);
while(true){
if((i__17885__auto___18826 < len__17884__auto___18825)){
args__17891__auto__.push((arguments[i__17885__auto___18826]));

var G__18827 = (i__17885__auto___18826 + (1));
i__17885__auto___18826 = G__18827;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return sablono.core.form_to18820.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

sablono.core.form_to18820.cljs$core$IFn$_invoke$arity$variadic = (function (p__18823,body){
var vec__18824 = p__18823;
var method = cljs.core.nth.call(null,vec__18824,(0),null);
var action = cljs.core.nth.call(null,vec__18824,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to18820.cljs$lang$maxFixedArity = (1);

sablono.core.form_to18820.cljs$lang$applyTo = (function (seq18821){
var G__18822 = cljs.core.first.call(null,seq18821);
var seq18821__$1 = cljs.core.next.call(null,seq18821);
return sablono.core.form_to18820.cljs$core$IFn$_invoke$arity$variadic(G__18822,seq18821__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18820);

//# sourceMappingURL=core.js.map