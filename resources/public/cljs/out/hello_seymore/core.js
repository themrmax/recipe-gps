// Compiled by ClojureScript 1.7.170 {}
goog.provide('hello_seymore.core');
goog.require('cljs.core');
goog.require('sablono.core');
hello_seymore.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),(0)], null));
hello_seymore.core.i = (1);
hello_seymore.core.sound_src = [cljs.core.str("/data/audio/garlicky-beet-spread/"),cljs.core.str(hello_seymore.core.i),cljs.core.str(".mp3")].join('');
hello_seymore.core.sound = (new Audio(hello_seymore.core.sound_src));
hello_seymore.core.play_sound = (function hello_seymore$core$play_sound(){
hello_seymore.core.sound.src = hello_seymore.core.sound_src;

return hello_seymore.core.sound.play();
});
hello_seymore.core.like_seymore = (function hello_seymore$core$like_seymore(data){
return React.createElement("div",null,React.createElement("h1",null,"Recipe step: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",{"href": "#", "onClick": hello_seymore.core.play_sound},"Thumbs up")));
});
hello_seymore.core.render_BANG_ = (function hello_seymore$core$render_BANG_(){
return React.render(hello_seymore.core.like_seymore.call(null,hello_seymore.core.app_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,hello_seymore.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return hello_seymore.core.render_BANG_.call(null);
}));
hello_seymore.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map