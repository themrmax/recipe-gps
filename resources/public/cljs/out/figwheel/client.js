// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24114 = cljs.core._EQ_;
var expr__24115 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24114.call(null,"true",expr__24115))){
return true;
} else {
if(cljs.core.truth_(pred__24114.call(null,"false",expr__24115))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24115)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24117__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24118__i = 0, G__24118__a = new Array(arguments.length -  0);
while (G__24118__i < G__24118__a.length) {G__24118__a[G__24118__i] = arguments[G__24118__i + 0]; ++G__24118__i;}
  args = new cljs.core.IndexedSeq(G__24118__a,0);
} 
return G__24117__delegate.call(this,args);};
G__24117.cljs$lang$maxFixedArity = 0;
G__24117.cljs$lang$applyTo = (function (arglist__24119){
var args = cljs.core.seq(arglist__24119);
return G__24117__delegate(args);
});
G__24117.cljs$core$IFn$_invoke$arity$variadic = G__24117__delegate;
return G__24117;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24120){
var map__24123 = p__24120;
var map__24123__$1 = ((((!((map__24123 == null)))?((((map__24123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24123):map__24123);
var message = cljs.core.get.call(null,map__24123__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24123__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19838__auto___24285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___24285,ch){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___24285,ch){
return (function (state_24254){
var state_val_24255 = (state_24254[(1)]);
if((state_val_24255 === (7))){
var inst_24250 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24256_24286 = state_24254__$1;
(statearr_24256_24286[(2)] = inst_24250);

(statearr_24256_24286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (1))){
var state_24254__$1 = state_24254;
var statearr_24257_24287 = state_24254__$1;
(statearr_24257_24287[(2)] = null);

(statearr_24257_24287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (4))){
var inst_24207 = (state_24254[(7)]);
var inst_24207__$1 = (state_24254[(2)]);
var state_24254__$1 = (function (){var statearr_24258 = state_24254;
(statearr_24258[(7)] = inst_24207__$1);

return statearr_24258;
})();
if(cljs.core.truth_(inst_24207__$1)){
var statearr_24259_24288 = state_24254__$1;
(statearr_24259_24288[(1)] = (5));

} else {
var statearr_24260_24289 = state_24254__$1;
(statearr_24260_24289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (15))){
var inst_24214 = (state_24254[(8)]);
var inst_24229 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24214);
var inst_24230 = cljs.core.first.call(null,inst_24229);
var inst_24231 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24230);
var inst_24232 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24231)].join('');
var inst_24233 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24232);
var state_24254__$1 = state_24254;
var statearr_24261_24290 = state_24254__$1;
(statearr_24261_24290[(2)] = inst_24233);

(statearr_24261_24290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (13))){
var inst_24238 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24262_24291 = state_24254__$1;
(statearr_24262_24291[(2)] = inst_24238);

(statearr_24262_24291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (6))){
var state_24254__$1 = state_24254;
var statearr_24263_24292 = state_24254__$1;
(statearr_24263_24292[(2)] = null);

(statearr_24263_24292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (17))){
var inst_24236 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24264_24293 = state_24254__$1;
(statearr_24264_24293[(2)] = inst_24236);

(statearr_24264_24293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (3))){
var inst_24252 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24254__$1,inst_24252);
} else {
if((state_val_24255 === (12))){
var inst_24213 = (state_24254[(9)]);
var inst_24227 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24213,opts);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24227)){
var statearr_24265_24294 = state_24254__$1;
(statearr_24265_24294[(1)] = (15));

} else {
var statearr_24266_24295 = state_24254__$1;
(statearr_24266_24295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (2))){
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(4),ch);
} else {
if((state_val_24255 === (11))){
var inst_24214 = (state_24254[(8)]);
var inst_24219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24220 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24214);
var inst_24221 = cljs.core.async.timeout.call(null,(1000));
var inst_24222 = [inst_24220,inst_24221];
var inst_24223 = (new cljs.core.PersistentVector(null,2,(5),inst_24219,inst_24222,null));
var state_24254__$1 = state_24254;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24254__$1,(14),inst_24223);
} else {
if((state_val_24255 === (9))){
var inst_24214 = (state_24254[(8)]);
var inst_24240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24241 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24214);
var inst_24242 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24241);
var inst_24243 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24242)].join('');
var inst_24244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24243);
var state_24254__$1 = (function (){var statearr_24267 = state_24254;
(statearr_24267[(10)] = inst_24240);

return statearr_24267;
})();
var statearr_24268_24296 = state_24254__$1;
(statearr_24268_24296[(2)] = inst_24244);

(statearr_24268_24296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (5))){
var inst_24207 = (state_24254[(7)]);
var inst_24209 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24210 = (new cljs.core.PersistentArrayMap(null,2,inst_24209,null));
var inst_24211 = (new cljs.core.PersistentHashSet(null,inst_24210,null));
var inst_24212 = figwheel.client.focus_msgs.call(null,inst_24211,inst_24207);
var inst_24213 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24212);
var inst_24214 = cljs.core.first.call(null,inst_24212);
var inst_24215 = figwheel.client.autoload_QMARK_.call(null);
var state_24254__$1 = (function (){var statearr_24269 = state_24254;
(statearr_24269[(9)] = inst_24213);

(statearr_24269[(8)] = inst_24214);

return statearr_24269;
})();
if(cljs.core.truth_(inst_24215)){
var statearr_24270_24297 = state_24254__$1;
(statearr_24270_24297[(1)] = (8));

} else {
var statearr_24271_24298 = state_24254__$1;
(statearr_24271_24298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (14))){
var inst_24225 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24272_24299 = state_24254__$1;
(statearr_24272_24299[(2)] = inst_24225);

(statearr_24272_24299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (16))){
var state_24254__$1 = state_24254;
var statearr_24273_24300 = state_24254__$1;
(statearr_24273_24300[(2)] = null);

(statearr_24273_24300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (10))){
var inst_24246 = (state_24254[(2)]);
var state_24254__$1 = (function (){var statearr_24274 = state_24254;
(statearr_24274[(11)] = inst_24246);

return statearr_24274;
})();
var statearr_24275_24301 = state_24254__$1;
(statearr_24275_24301[(2)] = null);

(statearr_24275_24301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (8))){
var inst_24213 = (state_24254[(9)]);
var inst_24217 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24213,opts);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24217)){
var statearr_24276_24302 = state_24254__$1;
(statearr_24276_24302[(1)] = (11));

} else {
var statearr_24277_24303 = state_24254__$1;
(statearr_24277_24303[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19838__auto___24285,ch))
;
return ((function (switch__19726__auto__,c__19838__auto___24285,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____0 = (function (){
var statearr_24281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24281[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__);

(statearr_24281[(1)] = (1));

return statearr_24281;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____1 = (function (state_24254){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24282){if((e24282 instanceof Object)){
var ex__19730__auto__ = e24282;
var statearr_24283_24304 = state_24254;
(statearr_24283_24304[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24305 = state_24254;
state_24254 = G__24305;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__ = function(state_24254){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____1.call(this,state_24254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19727__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___24285,ch))
})();
var state__19840__auto__ = (function (){var statearr_24284 = f__19839__auto__.call(null);
(statearr_24284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___24285);

return statearr_24284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___24285,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24306_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24306_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24313 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24313){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24311 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24312 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24311,_STAR_print_newline_STAR_24312,base_path_24313){
return (function() { 
var G__24314__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24315__i = 0, G__24315__a = new Array(arguments.length -  0);
while (G__24315__i < G__24315__a.length) {G__24315__a[G__24315__i] = arguments[G__24315__i + 0]; ++G__24315__i;}
  args = new cljs.core.IndexedSeq(G__24315__a,0);
} 
return G__24314__delegate.call(this,args);};
G__24314.cljs$lang$maxFixedArity = 0;
G__24314.cljs$lang$applyTo = (function (arglist__24316){
var args = cljs.core.seq(arglist__24316);
return G__24314__delegate(args);
});
G__24314.cljs$core$IFn$_invoke$arity$variadic = G__24314__delegate;
return G__24314;
})()
;})(_STAR_print_fn_STAR_24311,_STAR_print_newline_STAR_24312,base_path_24313))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24312;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24311;
}}catch (e24310){if((e24310 instanceof Error)){
var e = e24310;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24313], null));
} else {
var e = e24310;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24313))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24317){
var map__24324 = p__24317;
var map__24324__$1 = ((((!((map__24324 == null)))?((((map__24324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24324):map__24324);
var opts = map__24324__$1;
var build_id = cljs.core.get.call(null,map__24324__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24324,map__24324__$1,opts,build_id){
return (function (p__24326){
var vec__24327 = p__24326;
var map__24328 = cljs.core.nth.call(null,vec__24327,(0),null);
var map__24328__$1 = ((((!((map__24328 == null)))?((((map__24328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24328):map__24328);
var msg = map__24328__$1;
var msg_name = cljs.core.get.call(null,map__24328__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24327,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24327,map__24328,map__24328__$1,msg,msg_name,_,map__24324,map__24324__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24327,map__24328,map__24328__$1,msg,msg_name,_,map__24324,map__24324__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24324,map__24324__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24334){
var vec__24335 = p__24334;
var map__24336 = cljs.core.nth.call(null,vec__24335,(0),null);
var map__24336__$1 = ((((!((map__24336 == null)))?((((map__24336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24336):map__24336);
var msg = map__24336__$1;
var msg_name = cljs.core.get.call(null,map__24336__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24335,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24338){
var map__24348 = p__24338;
var map__24348__$1 = ((((!((map__24348 == null)))?((((map__24348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24348):map__24348);
var on_compile_warning = cljs.core.get.call(null,map__24348__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24348__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24348,map__24348__$1,on_compile_warning,on_compile_fail){
return (function (p__24350){
var vec__24351 = p__24350;
var map__24352 = cljs.core.nth.call(null,vec__24351,(0),null);
var map__24352__$1 = ((((!((map__24352 == null)))?((((map__24352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24352):map__24352);
var msg = map__24352__$1;
var msg_name = cljs.core.get.call(null,map__24352__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24351,(1));
var pred__24354 = cljs.core._EQ_;
var expr__24355 = msg_name;
if(cljs.core.truth_(pred__24354.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24355))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24354.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24355))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24348,map__24348__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__,msg_hist,msg_names,msg){
return (function (state_24571){
var state_val_24572 = (state_24571[(1)]);
if((state_val_24572 === (7))){
var inst_24495 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24495)){
var statearr_24573_24619 = state_24571__$1;
(statearr_24573_24619[(1)] = (8));

} else {
var statearr_24574_24620 = state_24571__$1;
(statearr_24574_24620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (20))){
var inst_24565 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24575_24621 = state_24571__$1;
(statearr_24575_24621[(2)] = inst_24565);

(statearr_24575_24621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (27))){
var inst_24561 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24576_24622 = state_24571__$1;
(statearr_24576_24622[(2)] = inst_24561);

(statearr_24576_24622[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (1))){
var inst_24488 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24488)){
var statearr_24577_24623 = state_24571__$1;
(statearr_24577_24623[(1)] = (2));

} else {
var statearr_24578_24624 = state_24571__$1;
(statearr_24578_24624[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (24))){
var inst_24563 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24579_24625 = state_24571__$1;
(statearr_24579_24625[(2)] = inst_24563);

(statearr_24579_24625[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (4))){
var inst_24569 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24571__$1,inst_24569);
} else {
if((state_val_24572 === (15))){
var inst_24567 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24580_24626 = state_24571__$1;
(statearr_24580_24626[(2)] = inst_24567);

(statearr_24580_24626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (21))){
var inst_24526 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24581_24627 = state_24571__$1;
(statearr_24581_24627[(2)] = inst_24526);

(statearr_24581_24627[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (31))){
var inst_24550 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24550)){
var statearr_24582_24628 = state_24571__$1;
(statearr_24582_24628[(1)] = (34));

} else {
var statearr_24583_24629 = state_24571__$1;
(statearr_24583_24629[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (32))){
var inst_24559 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24584_24630 = state_24571__$1;
(statearr_24584_24630[(2)] = inst_24559);

(statearr_24584_24630[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (33))){
var inst_24548 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24585_24631 = state_24571__$1;
(statearr_24585_24631[(2)] = inst_24548);

(statearr_24585_24631[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (13))){
var inst_24509 = figwheel.client.heads_up.clear.call(null);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(16),inst_24509);
} else {
if((state_val_24572 === (22))){
var inst_24530 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24531 = figwheel.client.heads_up.append_message.call(null,inst_24530);
var state_24571__$1 = state_24571;
var statearr_24586_24632 = state_24571__$1;
(statearr_24586_24632[(2)] = inst_24531);

(statearr_24586_24632[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (36))){
var inst_24557 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24587_24633 = state_24571__$1;
(statearr_24587_24633[(2)] = inst_24557);

(statearr_24587_24633[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (29))){
var inst_24541 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24588_24634 = state_24571__$1;
(statearr_24588_24634[(2)] = inst_24541);

(statearr_24588_24634[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (6))){
var inst_24490 = (state_24571[(7)]);
var state_24571__$1 = state_24571;
var statearr_24589_24635 = state_24571__$1;
(statearr_24589_24635[(2)] = inst_24490);

(statearr_24589_24635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (28))){
var inst_24537 = (state_24571[(2)]);
var inst_24538 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24539 = figwheel.client.heads_up.display_warning.call(null,inst_24538);
var state_24571__$1 = (function (){var statearr_24590 = state_24571;
(statearr_24590[(8)] = inst_24537);

return statearr_24590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(29),inst_24539);
} else {
if((state_val_24572 === (25))){
var inst_24535 = figwheel.client.heads_up.clear.call(null);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(28),inst_24535);
} else {
if((state_val_24572 === (34))){
var inst_24552 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(37),inst_24552);
} else {
if((state_val_24572 === (17))){
var inst_24517 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24591_24636 = state_24571__$1;
(statearr_24591_24636[(2)] = inst_24517);

(statearr_24591_24636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (3))){
var inst_24507 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24507)){
var statearr_24592_24637 = state_24571__$1;
(statearr_24592_24637[(1)] = (13));

} else {
var statearr_24593_24638 = state_24571__$1;
(statearr_24593_24638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (12))){
var inst_24503 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24594_24639 = state_24571__$1;
(statearr_24594_24639[(2)] = inst_24503);

(statearr_24594_24639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (2))){
var inst_24490 = (state_24571[(7)]);
var inst_24490__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24571__$1 = (function (){var statearr_24595 = state_24571;
(statearr_24595[(7)] = inst_24490__$1);

return statearr_24595;
})();
if(cljs.core.truth_(inst_24490__$1)){
var statearr_24596_24640 = state_24571__$1;
(statearr_24596_24640[(1)] = (5));

} else {
var statearr_24597_24641 = state_24571__$1;
(statearr_24597_24641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (23))){
var inst_24533 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24533)){
var statearr_24598_24642 = state_24571__$1;
(statearr_24598_24642[(1)] = (25));

} else {
var statearr_24599_24643 = state_24571__$1;
(statearr_24599_24643[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (35))){
var state_24571__$1 = state_24571;
var statearr_24600_24644 = state_24571__$1;
(statearr_24600_24644[(2)] = null);

(statearr_24600_24644[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (19))){
var inst_24528 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24528)){
var statearr_24601_24645 = state_24571__$1;
(statearr_24601_24645[(1)] = (22));

} else {
var statearr_24602_24646 = state_24571__$1;
(statearr_24602_24646[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (11))){
var inst_24499 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24603_24647 = state_24571__$1;
(statearr_24603_24647[(2)] = inst_24499);

(statearr_24603_24647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (9))){
var inst_24501 = figwheel.client.heads_up.clear.call(null);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(12),inst_24501);
} else {
if((state_val_24572 === (5))){
var inst_24492 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24571__$1 = state_24571;
var statearr_24604_24648 = state_24571__$1;
(statearr_24604_24648[(2)] = inst_24492);

(statearr_24604_24648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (14))){
var inst_24519 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24519)){
var statearr_24605_24649 = state_24571__$1;
(statearr_24605_24649[(1)] = (18));

} else {
var statearr_24606_24650 = state_24571__$1;
(statearr_24606_24650[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (26))){
var inst_24543 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24571__$1 = state_24571;
if(cljs.core.truth_(inst_24543)){
var statearr_24607_24651 = state_24571__$1;
(statearr_24607_24651[(1)] = (30));

} else {
var statearr_24608_24652 = state_24571__$1;
(statearr_24608_24652[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (16))){
var inst_24511 = (state_24571[(2)]);
var inst_24512 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24513 = figwheel.client.format_messages.call(null,inst_24512);
var inst_24514 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24515 = figwheel.client.heads_up.display_error.call(null,inst_24513,inst_24514);
var state_24571__$1 = (function (){var statearr_24609 = state_24571;
(statearr_24609[(9)] = inst_24511);

return statearr_24609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(17),inst_24515);
} else {
if((state_val_24572 === (30))){
var inst_24545 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24546 = figwheel.client.heads_up.display_warning.call(null,inst_24545);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(33),inst_24546);
} else {
if((state_val_24572 === (10))){
var inst_24505 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24610_24653 = state_24571__$1;
(statearr_24610_24653[(2)] = inst_24505);

(statearr_24610_24653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (18))){
var inst_24521 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24522 = figwheel.client.format_messages.call(null,inst_24521);
var inst_24523 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24524 = figwheel.client.heads_up.display_error.call(null,inst_24522,inst_24523);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(21),inst_24524);
} else {
if((state_val_24572 === (37))){
var inst_24554 = (state_24571[(2)]);
var state_24571__$1 = state_24571;
var statearr_24611_24654 = state_24571__$1;
(statearr_24611_24654[(2)] = inst_24554);

(statearr_24611_24654[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24572 === (8))){
var inst_24497 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24571__$1 = state_24571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24571__$1,(11),inst_24497);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19838__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19726__auto__,c__19838__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____0 = (function (){
var statearr_24615 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24615[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__);

(statearr_24615[(1)] = (1));

return statearr_24615;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____1 = (function (state_24571){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24616){if((e24616 instanceof Object)){
var ex__19730__auto__ = e24616;
var statearr_24617_24655 = state_24571;
(statearr_24617_24655[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24656 = state_24571;
state_24571 = G__24656;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__ = function(state_24571){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____1.call(this,state_24571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__,msg_hist,msg_names,msg))
})();
var state__19840__auto__ = (function (){var statearr_24618 = f__19839__auto__.call(null);
(statearr_24618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_24618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__,msg_hist,msg_names,msg))
);

return c__19838__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19838__auto___24719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___24719,ch){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___24719,ch){
return (function (state_24702){
var state_val_24703 = (state_24702[(1)]);
if((state_val_24703 === (1))){
var state_24702__$1 = state_24702;
var statearr_24704_24720 = state_24702__$1;
(statearr_24704_24720[(2)] = null);

(statearr_24704_24720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (2))){
var state_24702__$1 = state_24702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24702__$1,(4),ch);
} else {
if((state_val_24703 === (3))){
var inst_24700 = (state_24702[(2)]);
var state_24702__$1 = state_24702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24702__$1,inst_24700);
} else {
if((state_val_24703 === (4))){
var inst_24690 = (state_24702[(7)]);
var inst_24690__$1 = (state_24702[(2)]);
var state_24702__$1 = (function (){var statearr_24705 = state_24702;
(statearr_24705[(7)] = inst_24690__$1);

return statearr_24705;
})();
if(cljs.core.truth_(inst_24690__$1)){
var statearr_24706_24721 = state_24702__$1;
(statearr_24706_24721[(1)] = (5));

} else {
var statearr_24707_24722 = state_24702__$1;
(statearr_24707_24722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (5))){
var inst_24690 = (state_24702[(7)]);
var inst_24692 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24690);
var state_24702__$1 = state_24702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24702__$1,(8),inst_24692);
} else {
if((state_val_24703 === (6))){
var state_24702__$1 = state_24702;
var statearr_24708_24723 = state_24702__$1;
(statearr_24708_24723[(2)] = null);

(statearr_24708_24723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (7))){
var inst_24698 = (state_24702[(2)]);
var state_24702__$1 = state_24702;
var statearr_24709_24724 = state_24702__$1;
(statearr_24709_24724[(2)] = inst_24698);

(statearr_24709_24724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24703 === (8))){
var inst_24694 = (state_24702[(2)]);
var state_24702__$1 = (function (){var statearr_24710 = state_24702;
(statearr_24710[(8)] = inst_24694);

return statearr_24710;
})();
var statearr_24711_24725 = state_24702__$1;
(statearr_24711_24725[(2)] = null);

(statearr_24711_24725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19838__auto___24719,ch))
;
return ((function (switch__19726__auto__,c__19838__auto___24719,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19727__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19727__auto____0 = (function (){
var statearr_24715 = [null,null,null,null,null,null,null,null,null];
(statearr_24715[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19727__auto__);

(statearr_24715[(1)] = (1));

return statearr_24715;
});
var figwheel$client$heads_up_plugin_$_state_machine__19727__auto____1 = (function (state_24702){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24716){if((e24716 instanceof Object)){
var ex__19730__auto__ = e24716;
var statearr_24717_24726 = state_24702;
(statearr_24717_24726[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24727 = state_24702;
state_24702 = G__24727;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19727__auto__ = function(state_24702){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19727__auto____1.call(this,state_24702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19727__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19727__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___24719,ch))
})();
var state__19840__auto__ = (function (){var statearr_24718 = f__19839__auto__.call(null);
(statearr_24718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___24719);

return statearr_24718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___24719,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__){
return (function (state_24748){
var state_val_24749 = (state_24748[(1)]);
if((state_val_24749 === (1))){
var inst_24743 = cljs.core.async.timeout.call(null,(3000));
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24748__$1,(2),inst_24743);
} else {
if((state_val_24749 === (2))){
var inst_24745 = (state_24748[(2)]);
var inst_24746 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24748__$1 = (function (){var statearr_24750 = state_24748;
(statearr_24750[(7)] = inst_24745);

return statearr_24750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24748__$1,inst_24746);
} else {
return null;
}
}
});})(c__19838__auto__))
;
return ((function (switch__19726__auto__,c__19838__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____0 = (function (){
var statearr_24754 = [null,null,null,null,null,null,null,null];
(statearr_24754[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____1 = (function (state_24748){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_24748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object)){
var ex__19730__auto__ = e24755;
var statearr_24756_24758 = state_24748;
(statearr_24756_24758[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24759 = state_24748;
state_24748 = G__24759;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__ = function(state_24748){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____1.call(this,state_24748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19727__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__))
})();
var state__19840__auto__ = (function (){var statearr_24757 = f__19839__auto__.call(null);
(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__))
);

return c__19838__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24760){
var map__24767 = p__24760;
var map__24767__$1 = ((((!((map__24767 == null)))?((((map__24767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24767):map__24767);
var ed = map__24767__$1;
var formatted_exception = cljs.core.get.call(null,map__24767__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24767__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24767__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24769_24773 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24770_24774 = null;
var count__24771_24775 = (0);
var i__24772_24776 = (0);
while(true){
if((i__24772_24776 < count__24771_24775)){
var msg_24777 = cljs.core._nth.call(null,chunk__24770_24774,i__24772_24776);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24777);

var G__24778 = seq__24769_24773;
var G__24779 = chunk__24770_24774;
var G__24780 = count__24771_24775;
var G__24781 = (i__24772_24776 + (1));
seq__24769_24773 = G__24778;
chunk__24770_24774 = G__24779;
count__24771_24775 = G__24780;
i__24772_24776 = G__24781;
continue;
} else {
var temp__4425__auto___24782 = cljs.core.seq.call(null,seq__24769_24773);
if(temp__4425__auto___24782){
var seq__24769_24783__$1 = temp__4425__auto___24782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24769_24783__$1)){
var c__17629__auto___24784 = cljs.core.chunk_first.call(null,seq__24769_24783__$1);
var G__24785 = cljs.core.chunk_rest.call(null,seq__24769_24783__$1);
var G__24786 = c__17629__auto___24784;
var G__24787 = cljs.core.count.call(null,c__17629__auto___24784);
var G__24788 = (0);
seq__24769_24773 = G__24785;
chunk__24770_24774 = G__24786;
count__24771_24775 = G__24787;
i__24772_24776 = G__24788;
continue;
} else {
var msg_24789 = cljs.core.first.call(null,seq__24769_24783__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24789);

var G__24790 = cljs.core.next.call(null,seq__24769_24783__$1);
var G__24791 = null;
var G__24792 = (0);
var G__24793 = (0);
seq__24769_24773 = G__24790;
chunk__24770_24774 = G__24791;
count__24771_24775 = G__24792;
i__24772_24776 = G__24793;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24794){
var map__24797 = p__24794;
var map__24797__$1 = ((((!((map__24797 == null)))?((((map__24797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24797):map__24797);
var w = map__24797__$1;
var message = cljs.core.get.call(null,map__24797__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24805 = cljs.core.seq.call(null,plugins);
var chunk__24806 = null;
var count__24807 = (0);
var i__24808 = (0);
while(true){
if((i__24808 < count__24807)){
var vec__24809 = cljs.core._nth.call(null,chunk__24806,i__24808);
var k = cljs.core.nth.call(null,vec__24809,(0),null);
var plugin = cljs.core.nth.call(null,vec__24809,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24811 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24805,chunk__24806,count__24807,i__24808,pl_24811,vec__24809,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24811.call(null,msg_hist);
});})(seq__24805,chunk__24806,count__24807,i__24808,pl_24811,vec__24809,k,plugin))
);
} else {
}

var G__24812 = seq__24805;
var G__24813 = chunk__24806;
var G__24814 = count__24807;
var G__24815 = (i__24808 + (1));
seq__24805 = G__24812;
chunk__24806 = G__24813;
count__24807 = G__24814;
i__24808 = G__24815;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24805);
if(temp__4425__auto__){
var seq__24805__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24805__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24805__$1);
var G__24816 = cljs.core.chunk_rest.call(null,seq__24805__$1);
var G__24817 = c__17629__auto__;
var G__24818 = cljs.core.count.call(null,c__17629__auto__);
var G__24819 = (0);
seq__24805 = G__24816;
chunk__24806 = G__24817;
count__24807 = G__24818;
i__24808 = G__24819;
continue;
} else {
var vec__24810 = cljs.core.first.call(null,seq__24805__$1);
var k = cljs.core.nth.call(null,vec__24810,(0),null);
var plugin = cljs.core.nth.call(null,vec__24810,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24820 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24805,chunk__24806,count__24807,i__24808,pl_24820,vec__24810,k,plugin,seq__24805__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24820.call(null,msg_hist);
});})(seq__24805,chunk__24806,count__24807,i__24808,pl_24820,vec__24810,k,plugin,seq__24805__$1,temp__4425__auto__))
);
} else {
}

var G__24821 = cljs.core.next.call(null,seq__24805__$1);
var G__24822 = null;
var G__24823 = (0);
var G__24824 = (0);
seq__24805 = G__24821;
chunk__24806 = G__24822;
count__24807 = G__24823;
i__24808 = G__24824;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24825 = [];
var len__17884__auto___24828 = arguments.length;
var i__17885__auto___24829 = (0);
while(true){
if((i__17885__auto___24829 < len__17884__auto___24828)){
args24825.push((arguments[i__17885__auto___24829]));

var G__24830 = (i__17885__auto___24829 + (1));
i__17885__auto___24829 = G__24830;
continue;
} else {
}
break;
}

var G__24827 = args24825.length;
switch (G__24827) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24825.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___24836 = arguments.length;
var i__17885__auto___24837 = (0);
while(true){
if((i__17885__auto___24837 < len__17884__auto___24836)){
args__17891__auto__.push((arguments[i__17885__auto___24837]));

var G__24838 = (i__17885__auto___24837 + (1));
i__17885__auto___24837 = G__24838;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24833){
var map__24834 = p__24833;
var map__24834__$1 = ((((!((map__24834 == null)))?((((map__24834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24834):map__24834);
var opts = map__24834__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24832){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24832));
});

//# sourceMappingURL=client.js.map