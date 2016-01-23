// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23880 = arguments.length;
var i__17885__auto___23881 = (0);
while(true){
if((i__17885__auto___23881 < len__17884__auto___23880)){
args__17891__auto__.push((arguments[i__17885__auto___23881]));

var G__23882 = (i__17885__auto___23881 + (1));
i__17885__auto___23881 = G__23882;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23872_23883 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23873_23884 = null;
var count__23874_23885 = (0);
var i__23875_23886 = (0);
while(true){
if((i__23875_23886 < count__23874_23885)){
var k_23887 = cljs.core._nth.call(null,chunk__23873_23884,i__23875_23886);
e.setAttribute(cljs.core.name.call(null,k_23887),cljs.core.get.call(null,attrs,k_23887));

var G__23888 = seq__23872_23883;
var G__23889 = chunk__23873_23884;
var G__23890 = count__23874_23885;
var G__23891 = (i__23875_23886 + (1));
seq__23872_23883 = G__23888;
chunk__23873_23884 = G__23889;
count__23874_23885 = G__23890;
i__23875_23886 = G__23891;
continue;
} else {
var temp__4425__auto___23892 = cljs.core.seq.call(null,seq__23872_23883);
if(temp__4425__auto___23892){
var seq__23872_23893__$1 = temp__4425__auto___23892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23872_23893__$1)){
var c__17629__auto___23894 = cljs.core.chunk_first.call(null,seq__23872_23893__$1);
var G__23895 = cljs.core.chunk_rest.call(null,seq__23872_23893__$1);
var G__23896 = c__17629__auto___23894;
var G__23897 = cljs.core.count.call(null,c__17629__auto___23894);
var G__23898 = (0);
seq__23872_23883 = G__23895;
chunk__23873_23884 = G__23896;
count__23874_23885 = G__23897;
i__23875_23886 = G__23898;
continue;
} else {
var k_23899 = cljs.core.first.call(null,seq__23872_23893__$1);
e.setAttribute(cljs.core.name.call(null,k_23899),cljs.core.get.call(null,attrs,k_23899));

var G__23900 = cljs.core.next.call(null,seq__23872_23893__$1);
var G__23901 = null;
var G__23902 = (0);
var G__23903 = (0);
seq__23872_23883 = G__23900;
chunk__23873_23884 = G__23901;
count__23874_23885 = G__23902;
i__23875_23886 = G__23903;
continue;
}
} else {
}
}
break;
}

var seq__23876_23904 = cljs.core.seq.call(null,children);
var chunk__23877_23905 = null;
var count__23878_23906 = (0);
var i__23879_23907 = (0);
while(true){
if((i__23879_23907 < count__23878_23906)){
var ch_23908 = cljs.core._nth.call(null,chunk__23877_23905,i__23879_23907);
e.appendChild(ch_23908);

var G__23909 = seq__23876_23904;
var G__23910 = chunk__23877_23905;
var G__23911 = count__23878_23906;
var G__23912 = (i__23879_23907 + (1));
seq__23876_23904 = G__23909;
chunk__23877_23905 = G__23910;
count__23878_23906 = G__23911;
i__23879_23907 = G__23912;
continue;
} else {
var temp__4425__auto___23913 = cljs.core.seq.call(null,seq__23876_23904);
if(temp__4425__auto___23913){
var seq__23876_23914__$1 = temp__4425__auto___23913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23876_23914__$1)){
var c__17629__auto___23915 = cljs.core.chunk_first.call(null,seq__23876_23914__$1);
var G__23916 = cljs.core.chunk_rest.call(null,seq__23876_23914__$1);
var G__23917 = c__17629__auto___23915;
var G__23918 = cljs.core.count.call(null,c__17629__auto___23915);
var G__23919 = (0);
seq__23876_23904 = G__23916;
chunk__23877_23905 = G__23917;
count__23878_23906 = G__23918;
i__23879_23907 = G__23919;
continue;
} else {
var ch_23920 = cljs.core.first.call(null,seq__23876_23914__$1);
e.appendChild(ch_23920);

var G__23921 = cljs.core.next.call(null,seq__23876_23914__$1);
var G__23922 = null;
var G__23923 = (0);
var G__23924 = (0);
seq__23876_23904 = G__23921;
chunk__23877_23905 = G__23922;
count__23878_23906 = G__23923;
i__23879_23907 = G__23924;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23869){
var G__23870 = cljs.core.first.call(null,seq23869);
var seq23869__$1 = cljs.core.next.call(null,seq23869);
var G__23871 = cljs.core.first.call(null,seq23869__$1);
var seq23869__$2 = cljs.core.next.call(null,seq23869__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23870,G__23871,seq23869__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23925 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23925.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23925.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23925.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23925);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23926,st_map){
var map__23931 = p__23926;
var map__23931__$1 = ((((!((map__23931 == null)))?((((map__23931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23931):map__23931);
var container_el = cljs.core.get.call(null,map__23931__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23931,map__23931__$1,container_el){
return (function (p__23933){
var vec__23934 = p__23933;
var k = cljs.core.nth.call(null,vec__23934,(0),null);
var v = cljs.core.nth.call(null,vec__23934,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23931,map__23931__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23935,dom_str){
var map__23938 = p__23935;
var map__23938__$1 = ((((!((map__23938 == null)))?((((map__23938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23938):map__23938);
var c = map__23938__$1;
var content_area_el = cljs.core.get.call(null,map__23938__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23940){
var map__23943 = p__23940;
var map__23943__$1 = ((((!((map__23943 == null)))?((((map__23943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23943):map__23943);
var content_area_el = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__){
return (function (state_23986){
var state_val_23987 = (state_23986[(1)]);
if((state_val_23987 === (1))){
var inst_23971 = (state_23986[(7)]);
var inst_23971__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23972 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23973 = ["10px","10px","100%","68px","1.0"];
var inst_23974 = cljs.core.PersistentHashMap.fromArrays(inst_23972,inst_23973);
var inst_23975 = cljs.core.merge.call(null,inst_23974,style);
var inst_23976 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23971__$1,inst_23975);
var inst_23977 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23971__$1,msg);
var inst_23978 = cljs.core.async.timeout.call(null,(300));
var state_23986__$1 = (function (){var statearr_23988 = state_23986;
(statearr_23988[(8)] = inst_23977);

(statearr_23988[(9)] = inst_23976);

(statearr_23988[(7)] = inst_23971__$1);

return statearr_23988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23986__$1,(2),inst_23978);
} else {
if((state_val_23987 === (2))){
var inst_23971 = (state_23986[(7)]);
var inst_23980 = (state_23986[(2)]);
var inst_23981 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23982 = ["auto"];
var inst_23983 = cljs.core.PersistentHashMap.fromArrays(inst_23981,inst_23982);
var inst_23984 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23971,inst_23983);
var state_23986__$1 = (function (){var statearr_23989 = state_23986;
(statearr_23989[(10)] = inst_23980);

return statearr_23989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23986__$1,inst_23984);
} else {
return null;
}
}
});})(c__19838__auto__))
;
return ((function (switch__19726__auto__,c__19838__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto____0 = (function (){
var statearr_23993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23993[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto__);

(statearr_23993[(1)] = (1));

return statearr_23993;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto____1 = (function (state_23986){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_23986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e23994){if((e23994 instanceof Object)){
var ex__19730__auto__ = e23994;
var statearr_23995_23997 = state_23986;
(statearr_23995_23997[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23998 = state_23986;
state_23986 = G__23998;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto__ = function(state_23986){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto____1.call(this,state_23986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__))
})();
var state__19840__auto__ = (function (){var statearr_23996 = f__19839__auto__.call(null);
(statearr_23996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_23996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__))
);

return c__19838__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__24000 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__24000,(0),null);
var ln = cljs.core.nth.call(null,vec__24000,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24003 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24003,(0),null);
var file_line = cljs.core.nth.call(null,vec__24003,(1),null);
var file_column = cljs.core.nth.call(null,vec__24003,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24003,file_name,file_line,file_column){
return (function (p1__24001_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24001_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24003,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16826__auto__ = file_line;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var and__16814__auto__ = cause;
if(cljs.core.truth_(and__16814__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16814__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24006 = figwheel.client.heads_up.ensure_container.call(null);
var map__24006__$1 = ((((!((map__24006 == null)))?((((map__24006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24006):map__24006);
var content_area_el = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__){
return (function (state_24054){
var state_val_24055 = (state_24054[(1)]);
if((state_val_24055 === (1))){
var inst_24037 = (state_24054[(7)]);
var inst_24037__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24038 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24039 = ["0.0"];
var inst_24040 = cljs.core.PersistentHashMap.fromArrays(inst_24038,inst_24039);
var inst_24041 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24037__$1,inst_24040);
var inst_24042 = cljs.core.async.timeout.call(null,(300));
var state_24054__$1 = (function (){var statearr_24056 = state_24054;
(statearr_24056[(8)] = inst_24041);

(statearr_24056[(7)] = inst_24037__$1);

return statearr_24056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24054__$1,(2),inst_24042);
} else {
if((state_val_24055 === (2))){
var inst_24037 = (state_24054[(7)]);
var inst_24044 = (state_24054[(2)]);
var inst_24045 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24046 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24047 = cljs.core.PersistentHashMap.fromArrays(inst_24045,inst_24046);
var inst_24048 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24037,inst_24047);
var inst_24049 = cljs.core.async.timeout.call(null,(200));
var state_24054__$1 = (function (){var statearr_24057 = state_24054;
(statearr_24057[(9)] = inst_24044);

(statearr_24057[(10)] = inst_24048);

return statearr_24057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24054__$1,(3),inst_24049);
} else {
if((state_val_24055 === (3))){
var inst_24037 = (state_24054[(7)]);
var inst_24051 = (state_24054[(2)]);
var inst_24052 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24037,"");
var state_24054__$1 = (function (){var statearr_24058 = state_24054;
(statearr_24058[(11)] = inst_24051);

return statearr_24058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24054__$1,inst_24052);
} else {
return null;
}
}
}
});})(c__19838__auto__))
;
return ((function (switch__19726__auto__,c__19838__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19727__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19727__auto____0 = (function (){
var statearr_24062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24062[(0)] = figwheel$client$heads_up$clear_$_state_machine__19727__auto__);

(statearr_24062[(1)] = (1));

return statearr_24062;
});
var figwheel$client$heads_up$clear_$_state_machine__19727__auto____1 = (function (state_24054){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24063){if((e24063 instanceof Object)){
var ex__19730__auto__ = e24063;
var statearr_24064_24066 = state_24054;
(statearr_24064_24066[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24067 = state_24054;
state_24054 = G__24067;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19727__auto__ = function(state_24054){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19727__auto____1.call(this,state_24054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19727__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19727__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__))
})();
var state__19840__auto__ = (function (){var statearr_24065 = f__19839__auto__.call(null);
(statearr_24065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_24065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__))
);

return c__19838__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__){
return (function (state_24099){
var state_val_24100 = (state_24099[(1)]);
if((state_val_24100 === (1))){
var inst_24089 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24099__$1 = state_24099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24099__$1,(2),inst_24089);
} else {
if((state_val_24100 === (2))){
var inst_24091 = (state_24099[(2)]);
var inst_24092 = cljs.core.async.timeout.call(null,(400));
var state_24099__$1 = (function (){var statearr_24101 = state_24099;
(statearr_24101[(7)] = inst_24091);

return statearr_24101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24099__$1,(3),inst_24092);
} else {
if((state_val_24100 === (3))){
var inst_24094 = (state_24099[(2)]);
var inst_24095 = figwheel.client.heads_up.clear.call(null);
var state_24099__$1 = (function (){var statearr_24102 = state_24099;
(statearr_24102[(8)] = inst_24094);

return statearr_24102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24099__$1,(4),inst_24095);
} else {
if((state_val_24100 === (4))){
var inst_24097 = (state_24099[(2)]);
var state_24099__$1 = state_24099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24099__$1,inst_24097);
} else {
return null;
}
}
}
}
});})(c__19838__auto__))
;
return ((function (switch__19726__auto__,c__19838__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto____0 = (function (){
var statearr_24106 = [null,null,null,null,null,null,null,null,null];
(statearr_24106[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto__);

(statearr_24106[(1)] = (1));

return statearr_24106;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto____1 = (function (state_24099){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24107){if((e24107 instanceof Object)){
var ex__19730__auto__ = e24107;
var statearr_24108_24110 = state_24099;
(statearr_24108_24110[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24111 = state_24099;
state_24099 = G__24111;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto__ = function(state_24099){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto____1.call(this,state_24099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__))
})();
var state__19840__auto__ = (function (){var statearr_24109 = f__19839__auto__.call(null);
(statearr_24109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_24109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__))
);

return c__19838__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map