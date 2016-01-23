// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19883 = [];
var len__17884__auto___19889 = arguments.length;
var i__17885__auto___19890 = (0);
while(true){
if((i__17885__auto___19890 < len__17884__auto___19889)){
args19883.push((arguments[i__17885__auto___19890]));

var G__19891 = (i__17885__auto___19890 + (1));
i__17885__auto___19890 = G__19891;
continue;
} else {
}
break;
}

var G__19885 = args19883.length;
switch (G__19885) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19883.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19886 = (function (f,blockable,meta19887){
this.f = f;
this.blockable = blockable;
this.meta19887 = meta19887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19888,meta19887__$1){
var self__ = this;
var _19888__$1 = this;
return (new cljs.core.async.t_cljs$core$async19886(self__.f,self__.blockable,meta19887__$1));
});

cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19888){
var self__ = this;
var _19888__$1 = this;
return self__.meta19887;
});

cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19887","meta19887",-578649058,null)], null);
});

cljs.core.async.t_cljs$core$async19886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19886";

cljs.core.async.t_cljs$core$async19886.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19886");
});

cljs.core.async.__GT_t_cljs$core$async19886 = (function cljs$core$async$__GT_t_cljs$core$async19886(f__$1,blockable__$1,meta19887){
return (new cljs.core.async.t_cljs$core$async19886(f__$1,blockable__$1,meta19887));
});

}

return (new cljs.core.async.t_cljs$core$async19886(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19895 = [];
var len__17884__auto___19898 = arguments.length;
var i__17885__auto___19899 = (0);
while(true){
if((i__17885__auto___19899 < len__17884__auto___19898)){
args19895.push((arguments[i__17885__auto___19899]));

var G__19900 = (i__17885__auto___19899 + (1));
i__17885__auto___19899 = G__19900;
continue;
} else {
}
break;
}

var G__19897 = args19895.length;
switch (G__19897) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19895.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19902 = [];
var len__17884__auto___19905 = arguments.length;
var i__17885__auto___19906 = (0);
while(true){
if((i__17885__auto___19906 < len__17884__auto___19905)){
args19902.push((arguments[i__17885__auto___19906]));

var G__19907 = (i__17885__auto___19906 + (1));
i__17885__auto___19906 = G__19907;
continue;
} else {
}
break;
}

var G__19904 = args19902.length;
switch (G__19904) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19902.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19909 = [];
var len__17884__auto___19912 = arguments.length;
var i__17885__auto___19913 = (0);
while(true){
if((i__17885__auto___19913 < len__17884__auto___19912)){
args19909.push((arguments[i__17885__auto___19913]));

var G__19914 = (i__17885__auto___19913 + (1));
i__17885__auto___19913 = G__19914;
continue;
} else {
}
break;
}

var G__19911 = args19909.length;
switch (G__19911) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19909.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19916 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19916);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19916,ret){
return (function (){
return fn1.call(null,val_19916);
});})(val_19916,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19917 = [];
var len__17884__auto___19920 = arguments.length;
var i__17885__auto___19921 = (0);
while(true){
if((i__17885__auto___19921 < len__17884__auto___19920)){
args19917.push((arguments[i__17885__auto___19921]));

var G__19922 = (i__17885__auto___19921 + (1));
i__17885__auto___19921 = G__19922;
continue;
} else {
}
break;
}

var G__19919 = args19917.length;
switch (G__19919) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19917.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___19924 = n;
var x_19925 = (0);
while(true){
if((x_19925 < n__17729__auto___19924)){
(a[x_19925] = (0));

var G__19926 = (x_19925 + (1));
x_19925 = G__19926;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19927 = (i + (1));
i = G__19927;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19931 = (function (alt_flag,flag,meta19932){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19932 = meta19932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19933,meta19932__$1){
var self__ = this;
var _19933__$1 = this;
return (new cljs.core.async.t_cljs$core$async19931(self__.alt_flag,self__.flag,meta19932__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19933){
var self__ = this;
var _19933__$1 = this;
return self__.meta19932;
});})(flag))
;

cljs.core.async.t_cljs$core$async19931.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19931.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19932","meta19932",-1295114475,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19931";

cljs.core.async.t_cljs$core$async19931.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19931");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19931 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19931(alt_flag__$1,flag__$1,meta19932){
return (new cljs.core.async.t_cljs$core$async19931(alt_flag__$1,flag__$1,meta19932));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19931(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19937 = (function (alt_handler,flag,cb,meta19938){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19938 = meta19938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19939,meta19938__$1){
var self__ = this;
var _19939__$1 = this;
return (new cljs.core.async.t_cljs$core$async19937(self__.alt_handler,self__.flag,self__.cb,meta19938__$1));
});

cljs.core.async.t_cljs$core$async19937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19939){
var self__ = this;
var _19939__$1 = this;
return self__.meta19938;
});

cljs.core.async.t_cljs$core$async19937.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19938","meta19938",855132767,null)], null);
});

cljs.core.async.t_cljs$core$async19937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19937";

cljs.core.async.t_cljs$core$async19937.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19937");
});

cljs.core.async.__GT_t_cljs$core$async19937 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19937(alt_handler__$1,flag__$1,cb__$1,meta19938){
return (new cljs.core.async.t_cljs$core$async19937(alt_handler__$1,flag__$1,cb__$1,meta19938));
});

}

return (new cljs.core.async.t_cljs$core$async19937(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19940_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19940_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19941_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19941_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19942 = (i + (1));
i = G__19942;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19948 = arguments.length;
var i__17885__auto___19949 = (0);
while(true){
if((i__17885__auto___19949 < len__17884__auto___19948)){
args__17891__auto__.push((arguments[i__17885__auto___19949]));

var G__19950 = (i__17885__auto___19949 + (1));
i__17885__auto___19949 = G__19950;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19945){
var map__19946 = p__19945;
var map__19946__$1 = ((((!((map__19946 == null)))?((((map__19946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19946):map__19946);
var opts = map__19946__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19943){
var G__19944 = cljs.core.first.call(null,seq19943);
var seq19943__$1 = cljs.core.next.call(null,seq19943);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19944,seq19943__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19951 = [];
var len__17884__auto___20001 = arguments.length;
var i__17885__auto___20002 = (0);
while(true){
if((i__17885__auto___20002 < len__17884__auto___20001)){
args19951.push((arguments[i__17885__auto___20002]));

var G__20003 = (i__17885__auto___20002 + (1));
i__17885__auto___20002 = G__20003;
continue;
} else {
}
break;
}

var G__19953 = args19951.length;
switch (G__19953) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19951.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19838__auto___20005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___20005){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___20005){
return (function (state_19977){
var state_val_19978 = (state_19977[(1)]);
if((state_val_19978 === (7))){
var inst_19973 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
var statearr_19979_20006 = state_19977__$1;
(statearr_19979_20006[(2)] = inst_19973);

(statearr_19979_20006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (1))){
var state_19977__$1 = state_19977;
var statearr_19980_20007 = state_19977__$1;
(statearr_19980_20007[(2)] = null);

(statearr_19980_20007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (4))){
var inst_19956 = (state_19977[(7)]);
var inst_19956__$1 = (state_19977[(2)]);
var inst_19957 = (inst_19956__$1 == null);
var state_19977__$1 = (function (){var statearr_19981 = state_19977;
(statearr_19981[(7)] = inst_19956__$1);

return statearr_19981;
})();
if(cljs.core.truth_(inst_19957)){
var statearr_19982_20008 = state_19977__$1;
(statearr_19982_20008[(1)] = (5));

} else {
var statearr_19983_20009 = state_19977__$1;
(statearr_19983_20009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (13))){
var state_19977__$1 = state_19977;
var statearr_19984_20010 = state_19977__$1;
(statearr_19984_20010[(2)] = null);

(statearr_19984_20010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (6))){
var inst_19956 = (state_19977[(7)]);
var state_19977__$1 = state_19977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19977__$1,(11),to,inst_19956);
} else {
if((state_val_19978 === (3))){
var inst_19975 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19977__$1,inst_19975);
} else {
if((state_val_19978 === (12))){
var state_19977__$1 = state_19977;
var statearr_19985_20011 = state_19977__$1;
(statearr_19985_20011[(2)] = null);

(statearr_19985_20011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (2))){
var state_19977__$1 = state_19977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19977__$1,(4),from);
} else {
if((state_val_19978 === (11))){
var inst_19966 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
if(cljs.core.truth_(inst_19966)){
var statearr_19986_20012 = state_19977__$1;
(statearr_19986_20012[(1)] = (12));

} else {
var statearr_19987_20013 = state_19977__$1;
(statearr_19987_20013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (9))){
var state_19977__$1 = state_19977;
var statearr_19988_20014 = state_19977__$1;
(statearr_19988_20014[(2)] = null);

(statearr_19988_20014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (5))){
var state_19977__$1 = state_19977;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19989_20015 = state_19977__$1;
(statearr_19989_20015[(1)] = (8));

} else {
var statearr_19990_20016 = state_19977__$1;
(statearr_19990_20016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (14))){
var inst_19971 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
var statearr_19991_20017 = state_19977__$1;
(statearr_19991_20017[(2)] = inst_19971);

(statearr_19991_20017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (10))){
var inst_19963 = (state_19977[(2)]);
var state_19977__$1 = state_19977;
var statearr_19992_20018 = state_19977__$1;
(statearr_19992_20018[(2)] = inst_19963);

(statearr_19992_20018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19978 === (8))){
var inst_19960 = cljs.core.async.close_BANG_.call(null,to);
var state_19977__$1 = state_19977;
var statearr_19993_20019 = state_19977__$1;
(statearr_19993_20019[(2)] = inst_19960);

(statearr_19993_20019[(1)] = (10));


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
});})(c__19838__auto___20005))
;
return ((function (switch__19726__auto__,c__19838__auto___20005){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_19997 = [null,null,null,null,null,null,null,null];
(statearr_19997[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_19997[(1)] = (1));

return statearr_19997;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_19977){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_19977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e19998){if((e19998 instanceof Object)){
var ex__19730__auto__ = e19998;
var statearr_19999_20020 = state_19977;
(statearr_19999_20020[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20021 = state_19977;
state_19977 = G__20021;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_19977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_19977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___20005))
})();
var state__19840__auto__ = (function (){var statearr_20000 = f__19839__auto__.call(null);
(statearr_20000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___20005);

return statearr_20000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___20005))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20205){
var vec__20206 = p__20205;
var v = cljs.core.nth.call(null,vec__20206,(0),null);
var p = cljs.core.nth.call(null,vec__20206,(1),null);
var job = vec__20206;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19838__auto___20388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___20388,res,vec__20206,v,p,job,jobs,results){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___20388,res,vec__20206,v,p,job,jobs,results){
return (function (state_20211){
var state_val_20212 = (state_20211[(1)]);
if((state_val_20212 === (1))){
var state_20211__$1 = state_20211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20211__$1,(2),res,v);
} else {
if((state_val_20212 === (2))){
var inst_20208 = (state_20211[(2)]);
var inst_20209 = cljs.core.async.close_BANG_.call(null,res);
var state_20211__$1 = (function (){var statearr_20213 = state_20211;
(statearr_20213[(7)] = inst_20208);

return statearr_20213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20211__$1,inst_20209);
} else {
return null;
}
}
});})(c__19838__auto___20388,res,vec__20206,v,p,job,jobs,results))
;
return ((function (switch__19726__auto__,c__19838__auto___20388,res,vec__20206,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_20217 = [null,null,null,null,null,null,null,null];
(statearr_20217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_20217[(1)] = (1));

return statearr_20217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_20211){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_20211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e20218){if((e20218 instanceof Object)){
var ex__19730__auto__ = e20218;
var statearr_20219_20389 = state_20211;
(statearr_20219_20389[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20390 = state_20211;
state_20211 = G__20390;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_20211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_20211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___20388,res,vec__20206,v,p,job,jobs,results))
})();
var state__19840__auto__ = (function (){var statearr_20220 = f__19839__auto__.call(null);
(statearr_20220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___20388);

return statearr_20220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___20388,res,vec__20206,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20221){
var vec__20222 = p__20221;
var v = cljs.core.nth.call(null,vec__20222,(0),null);
var p = cljs.core.nth.call(null,vec__20222,(1),null);
var job = vec__20222;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___20391 = n;
var __20392 = (0);
while(true){
if((__20392 < n__17729__auto___20391)){
var G__20223_20393 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20223_20393) {
case "compute":
var c__19838__auto___20395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20392,c__19838__auto___20395,G__20223_20393,n__17729__auto___20391,jobs,results,process,async){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (__20392,c__19838__auto___20395,G__20223_20393,n__17729__auto___20391,jobs,results,process,async){
return (function (state_20236){
var state_val_20237 = (state_20236[(1)]);
if((state_val_20237 === (1))){
var state_20236__$1 = state_20236;
var statearr_20238_20396 = state_20236__$1;
(statearr_20238_20396[(2)] = null);

(statearr_20238_20396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (2))){
var state_20236__$1 = state_20236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20236__$1,(4),jobs);
} else {
if((state_val_20237 === (3))){
var inst_20234 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20236__$1,inst_20234);
} else {
if((state_val_20237 === (4))){
var inst_20226 = (state_20236[(2)]);
var inst_20227 = process.call(null,inst_20226);
var state_20236__$1 = state_20236;
if(cljs.core.truth_(inst_20227)){
var statearr_20239_20397 = state_20236__$1;
(statearr_20239_20397[(1)] = (5));

} else {
var statearr_20240_20398 = state_20236__$1;
(statearr_20240_20398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (5))){
var state_20236__$1 = state_20236;
var statearr_20241_20399 = state_20236__$1;
(statearr_20241_20399[(2)] = null);

(statearr_20241_20399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (6))){
var state_20236__$1 = state_20236;
var statearr_20242_20400 = state_20236__$1;
(statearr_20242_20400[(2)] = null);

(statearr_20242_20400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (7))){
var inst_20232 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20243_20401 = state_20236__$1;
(statearr_20243_20401[(2)] = inst_20232);

(statearr_20243_20401[(1)] = (3));


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
});})(__20392,c__19838__auto___20395,G__20223_20393,n__17729__auto___20391,jobs,results,process,async))
;
return ((function (__20392,switch__19726__auto__,c__19838__auto___20395,G__20223_20393,n__17729__auto___20391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_20247 = [null,null,null,null,null,null,null];
(statearr_20247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_20247[(1)] = (1));

return statearr_20247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_20236){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_20236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e20248){if((e20248 instanceof Object)){
var ex__19730__auto__ = e20248;
var statearr_20249_20402 = state_20236;
(statearr_20249_20402[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20403 = state_20236;
state_20236 = G__20403;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_20236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_20236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(__20392,switch__19726__auto__,c__19838__auto___20395,G__20223_20393,n__17729__auto___20391,jobs,results,process,async))
})();
var state__19840__auto__ = (function (){var statearr_20250 = f__19839__auto__.call(null);
(statearr_20250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___20395);

return statearr_20250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(__20392,c__19838__auto___20395,G__20223_20393,n__17729__auto___20391,jobs,results,process,async))
);


break;
case "async":
var c__19838__auto___20404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20392,c__19838__auto___20404,G__20223_20393,n__17729__auto___20391,jobs,results,process,async){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (__20392,c__19838__auto___20404,G__20223_20393,n__17729__auto___20391,jobs,results,process,async){
return (function (state_20263){
var state_val_20264 = (state_20263[(1)]);
if((state_val_20264 === (1))){
var state_20263__$1 = state_20263;
var statearr_20265_20405 = state_20263__$1;
(statearr_20265_20405[(2)] = null);

(statearr_20265_20405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (2))){
var state_20263__$1 = state_20263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20263__$1,(4),jobs);
} else {
if((state_val_20264 === (3))){
var inst_20261 = (state_20263[(2)]);
var state_20263__$1 = state_20263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20263__$1,inst_20261);
} else {
if((state_val_20264 === (4))){
var inst_20253 = (state_20263[(2)]);
var inst_20254 = async.call(null,inst_20253);
var state_20263__$1 = state_20263;
if(cljs.core.truth_(inst_20254)){
var statearr_20266_20406 = state_20263__$1;
(statearr_20266_20406[(1)] = (5));

} else {
var statearr_20267_20407 = state_20263__$1;
(statearr_20267_20407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (5))){
var state_20263__$1 = state_20263;
var statearr_20268_20408 = state_20263__$1;
(statearr_20268_20408[(2)] = null);

(statearr_20268_20408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (6))){
var state_20263__$1 = state_20263;
var statearr_20269_20409 = state_20263__$1;
(statearr_20269_20409[(2)] = null);

(statearr_20269_20409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20264 === (7))){
var inst_20259 = (state_20263[(2)]);
var state_20263__$1 = state_20263;
var statearr_20270_20410 = state_20263__$1;
(statearr_20270_20410[(2)] = inst_20259);

(statearr_20270_20410[(1)] = (3));


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
});})(__20392,c__19838__auto___20404,G__20223_20393,n__17729__auto___20391,jobs,results,process,async))
;
return ((function (__20392,switch__19726__auto__,c__19838__auto___20404,G__20223_20393,n__17729__auto___20391,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_20274 = [null,null,null,null,null,null,null];
(statearr_20274[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_20274[(1)] = (1));

return statearr_20274;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_20263){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_20263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e20275){if((e20275 instanceof Object)){
var ex__19730__auto__ = e20275;
var statearr_20276_20411 = state_20263;
(statearr_20276_20411[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20412 = state_20263;
state_20263 = G__20412;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_20263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_20263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(__20392,switch__19726__auto__,c__19838__auto___20404,G__20223_20393,n__17729__auto___20391,jobs,results,process,async))
})();
var state__19840__auto__ = (function (){var statearr_20277 = f__19839__auto__.call(null);
(statearr_20277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___20404);

return statearr_20277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(__20392,c__19838__auto___20404,G__20223_20393,n__17729__auto___20391,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20413 = (__20392 + (1));
__20392 = G__20413;
continue;
} else {
}
break;
}

var c__19838__auto___20414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___20414,jobs,results,process,async){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___20414,jobs,results,process,async){
return (function (state_20299){
var state_val_20300 = (state_20299[(1)]);
if((state_val_20300 === (1))){
var state_20299__$1 = state_20299;
var statearr_20301_20415 = state_20299__$1;
(statearr_20301_20415[(2)] = null);

(statearr_20301_20415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (2))){
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20299__$1,(4),from);
} else {
if((state_val_20300 === (3))){
var inst_20297 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20299__$1,inst_20297);
} else {
if((state_val_20300 === (4))){
var inst_20280 = (state_20299[(7)]);
var inst_20280__$1 = (state_20299[(2)]);
var inst_20281 = (inst_20280__$1 == null);
var state_20299__$1 = (function (){var statearr_20302 = state_20299;
(statearr_20302[(7)] = inst_20280__$1);

return statearr_20302;
})();
if(cljs.core.truth_(inst_20281)){
var statearr_20303_20416 = state_20299__$1;
(statearr_20303_20416[(1)] = (5));

} else {
var statearr_20304_20417 = state_20299__$1;
(statearr_20304_20417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (5))){
var inst_20283 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20299__$1 = state_20299;
var statearr_20305_20418 = state_20299__$1;
(statearr_20305_20418[(2)] = inst_20283);

(statearr_20305_20418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (6))){
var inst_20285 = (state_20299[(8)]);
var inst_20280 = (state_20299[(7)]);
var inst_20285__$1 = cljs.core.async.chan.call(null,(1));
var inst_20286 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20287 = [inst_20280,inst_20285__$1];
var inst_20288 = (new cljs.core.PersistentVector(null,2,(5),inst_20286,inst_20287,null));
var state_20299__$1 = (function (){var statearr_20306 = state_20299;
(statearr_20306[(8)] = inst_20285__$1);

return statearr_20306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20299__$1,(8),jobs,inst_20288);
} else {
if((state_val_20300 === (7))){
var inst_20295 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
var statearr_20307_20419 = state_20299__$1;
(statearr_20307_20419[(2)] = inst_20295);

(statearr_20307_20419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (8))){
var inst_20285 = (state_20299[(8)]);
var inst_20290 = (state_20299[(2)]);
var state_20299__$1 = (function (){var statearr_20308 = state_20299;
(statearr_20308[(9)] = inst_20290);

return statearr_20308;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20299__$1,(9),results,inst_20285);
} else {
if((state_val_20300 === (9))){
var inst_20292 = (state_20299[(2)]);
var state_20299__$1 = (function (){var statearr_20309 = state_20299;
(statearr_20309[(10)] = inst_20292);

return statearr_20309;
})();
var statearr_20310_20420 = state_20299__$1;
(statearr_20310_20420[(2)] = null);

(statearr_20310_20420[(1)] = (2));


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
});})(c__19838__auto___20414,jobs,results,process,async))
;
return ((function (switch__19726__auto__,c__19838__auto___20414,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_20314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_20314[(1)] = (1));

return statearr_20314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_20299){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_20299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e20315){if((e20315 instanceof Object)){
var ex__19730__auto__ = e20315;
var statearr_20316_20421 = state_20299;
(statearr_20316_20421[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20422 = state_20299;
state_20299 = G__20422;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_20299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_20299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___20414,jobs,results,process,async))
})();
var state__19840__auto__ = (function (){var statearr_20317 = f__19839__auto__.call(null);
(statearr_20317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___20414);

return statearr_20317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___20414,jobs,results,process,async))
);


var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__,jobs,results,process,async){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__,jobs,results,process,async){
return (function (state_20355){
var state_val_20356 = (state_20355[(1)]);
if((state_val_20356 === (7))){
var inst_20351 = (state_20355[(2)]);
var state_20355__$1 = state_20355;
var statearr_20357_20423 = state_20355__$1;
(statearr_20357_20423[(2)] = inst_20351);

(statearr_20357_20423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (20))){
var state_20355__$1 = state_20355;
var statearr_20358_20424 = state_20355__$1;
(statearr_20358_20424[(2)] = null);

(statearr_20358_20424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (1))){
var state_20355__$1 = state_20355;
var statearr_20359_20425 = state_20355__$1;
(statearr_20359_20425[(2)] = null);

(statearr_20359_20425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (4))){
var inst_20320 = (state_20355[(7)]);
var inst_20320__$1 = (state_20355[(2)]);
var inst_20321 = (inst_20320__$1 == null);
var state_20355__$1 = (function (){var statearr_20360 = state_20355;
(statearr_20360[(7)] = inst_20320__$1);

return statearr_20360;
})();
if(cljs.core.truth_(inst_20321)){
var statearr_20361_20426 = state_20355__$1;
(statearr_20361_20426[(1)] = (5));

} else {
var statearr_20362_20427 = state_20355__$1;
(statearr_20362_20427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (15))){
var inst_20333 = (state_20355[(8)]);
var state_20355__$1 = state_20355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20355__$1,(18),to,inst_20333);
} else {
if((state_val_20356 === (21))){
var inst_20346 = (state_20355[(2)]);
var state_20355__$1 = state_20355;
var statearr_20363_20428 = state_20355__$1;
(statearr_20363_20428[(2)] = inst_20346);

(statearr_20363_20428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (13))){
var inst_20348 = (state_20355[(2)]);
var state_20355__$1 = (function (){var statearr_20364 = state_20355;
(statearr_20364[(9)] = inst_20348);

return statearr_20364;
})();
var statearr_20365_20429 = state_20355__$1;
(statearr_20365_20429[(2)] = null);

(statearr_20365_20429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (6))){
var inst_20320 = (state_20355[(7)]);
var state_20355__$1 = state_20355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20355__$1,(11),inst_20320);
} else {
if((state_val_20356 === (17))){
var inst_20341 = (state_20355[(2)]);
var state_20355__$1 = state_20355;
if(cljs.core.truth_(inst_20341)){
var statearr_20366_20430 = state_20355__$1;
(statearr_20366_20430[(1)] = (19));

} else {
var statearr_20367_20431 = state_20355__$1;
(statearr_20367_20431[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (3))){
var inst_20353 = (state_20355[(2)]);
var state_20355__$1 = state_20355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20355__$1,inst_20353);
} else {
if((state_val_20356 === (12))){
var inst_20330 = (state_20355[(10)]);
var state_20355__$1 = state_20355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20355__$1,(14),inst_20330);
} else {
if((state_val_20356 === (2))){
var state_20355__$1 = state_20355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20355__$1,(4),results);
} else {
if((state_val_20356 === (19))){
var state_20355__$1 = state_20355;
var statearr_20368_20432 = state_20355__$1;
(statearr_20368_20432[(2)] = null);

(statearr_20368_20432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (11))){
var inst_20330 = (state_20355[(2)]);
var state_20355__$1 = (function (){var statearr_20369 = state_20355;
(statearr_20369[(10)] = inst_20330);

return statearr_20369;
})();
var statearr_20370_20433 = state_20355__$1;
(statearr_20370_20433[(2)] = null);

(statearr_20370_20433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (9))){
var state_20355__$1 = state_20355;
var statearr_20371_20434 = state_20355__$1;
(statearr_20371_20434[(2)] = null);

(statearr_20371_20434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (5))){
var state_20355__$1 = state_20355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20372_20435 = state_20355__$1;
(statearr_20372_20435[(1)] = (8));

} else {
var statearr_20373_20436 = state_20355__$1;
(statearr_20373_20436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (14))){
var inst_20335 = (state_20355[(11)]);
var inst_20333 = (state_20355[(8)]);
var inst_20333__$1 = (state_20355[(2)]);
var inst_20334 = (inst_20333__$1 == null);
var inst_20335__$1 = cljs.core.not.call(null,inst_20334);
var state_20355__$1 = (function (){var statearr_20374 = state_20355;
(statearr_20374[(11)] = inst_20335__$1);

(statearr_20374[(8)] = inst_20333__$1);

return statearr_20374;
})();
if(inst_20335__$1){
var statearr_20375_20437 = state_20355__$1;
(statearr_20375_20437[(1)] = (15));

} else {
var statearr_20376_20438 = state_20355__$1;
(statearr_20376_20438[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (16))){
var inst_20335 = (state_20355[(11)]);
var state_20355__$1 = state_20355;
var statearr_20377_20439 = state_20355__$1;
(statearr_20377_20439[(2)] = inst_20335);

(statearr_20377_20439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (10))){
var inst_20327 = (state_20355[(2)]);
var state_20355__$1 = state_20355;
var statearr_20378_20440 = state_20355__$1;
(statearr_20378_20440[(2)] = inst_20327);

(statearr_20378_20440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (18))){
var inst_20338 = (state_20355[(2)]);
var state_20355__$1 = state_20355;
var statearr_20379_20441 = state_20355__$1;
(statearr_20379_20441[(2)] = inst_20338);

(statearr_20379_20441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20356 === (8))){
var inst_20324 = cljs.core.async.close_BANG_.call(null,to);
var state_20355__$1 = state_20355;
var statearr_20380_20442 = state_20355__$1;
(statearr_20380_20442[(2)] = inst_20324);

(statearr_20380_20442[(1)] = (10));


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
}
}
}
}
});})(c__19838__auto__,jobs,results,process,async))
;
return ((function (switch__19726__auto__,c__19838__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_20384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__);

(statearr_20384[(1)] = (1));

return statearr_20384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1 = (function (state_20355){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_20355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e20385){if((e20385 instanceof Object)){
var ex__19730__auto__ = e20385;
var statearr_20386_20443 = state_20355;
(statearr_20386_20443[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20444 = state_20355;
state_20355 = G__20444;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__ = function(state_20355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1.call(this,state_20355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__,jobs,results,process,async))
})();
var state__19840__auto__ = (function (){var statearr_20387 = f__19839__auto__.call(null);
(statearr_20387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_20387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__,jobs,results,process,async))
);

return c__19838__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20445 = [];
var len__17884__auto___20448 = arguments.length;
var i__17885__auto___20449 = (0);
while(true){
if((i__17885__auto___20449 < len__17884__auto___20448)){
args20445.push((arguments[i__17885__auto___20449]));

var G__20450 = (i__17885__auto___20449 + (1));
i__17885__auto___20449 = G__20450;
continue;
} else {
}
break;
}

var G__20447 = args20445.length;
switch (G__20447) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20445.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20452 = [];
var len__17884__auto___20455 = arguments.length;
var i__17885__auto___20456 = (0);
while(true){
if((i__17885__auto___20456 < len__17884__auto___20455)){
args20452.push((arguments[i__17885__auto___20456]));

var G__20457 = (i__17885__auto___20456 + (1));
i__17885__auto___20456 = G__20457;
continue;
} else {
}
break;
}

var G__20454 = args20452.length;
switch (G__20454) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20452.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20459 = [];
var len__17884__auto___20512 = arguments.length;
var i__17885__auto___20513 = (0);
while(true){
if((i__17885__auto___20513 < len__17884__auto___20512)){
args20459.push((arguments[i__17885__auto___20513]));

var G__20514 = (i__17885__auto___20513 + (1));
i__17885__auto___20513 = G__20514;
continue;
} else {
}
break;
}

var G__20461 = args20459.length;
switch (G__20461) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20459.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19838__auto___20516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___20516,tc,fc){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___20516,tc,fc){
return (function (state_20487){
var state_val_20488 = (state_20487[(1)]);
if((state_val_20488 === (7))){
var inst_20483 = (state_20487[(2)]);
var state_20487__$1 = state_20487;
var statearr_20489_20517 = state_20487__$1;
(statearr_20489_20517[(2)] = inst_20483);

(statearr_20489_20517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (1))){
var state_20487__$1 = state_20487;
var statearr_20490_20518 = state_20487__$1;
(statearr_20490_20518[(2)] = null);

(statearr_20490_20518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (4))){
var inst_20464 = (state_20487[(7)]);
var inst_20464__$1 = (state_20487[(2)]);
var inst_20465 = (inst_20464__$1 == null);
var state_20487__$1 = (function (){var statearr_20491 = state_20487;
(statearr_20491[(7)] = inst_20464__$1);

return statearr_20491;
})();
if(cljs.core.truth_(inst_20465)){
var statearr_20492_20519 = state_20487__$1;
(statearr_20492_20519[(1)] = (5));

} else {
var statearr_20493_20520 = state_20487__$1;
(statearr_20493_20520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (13))){
var state_20487__$1 = state_20487;
var statearr_20494_20521 = state_20487__$1;
(statearr_20494_20521[(2)] = null);

(statearr_20494_20521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (6))){
var inst_20464 = (state_20487[(7)]);
var inst_20470 = p.call(null,inst_20464);
var state_20487__$1 = state_20487;
if(cljs.core.truth_(inst_20470)){
var statearr_20495_20522 = state_20487__$1;
(statearr_20495_20522[(1)] = (9));

} else {
var statearr_20496_20523 = state_20487__$1;
(statearr_20496_20523[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (3))){
var inst_20485 = (state_20487[(2)]);
var state_20487__$1 = state_20487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20487__$1,inst_20485);
} else {
if((state_val_20488 === (12))){
var state_20487__$1 = state_20487;
var statearr_20497_20524 = state_20487__$1;
(statearr_20497_20524[(2)] = null);

(statearr_20497_20524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (2))){
var state_20487__$1 = state_20487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20487__$1,(4),ch);
} else {
if((state_val_20488 === (11))){
var inst_20464 = (state_20487[(7)]);
var inst_20474 = (state_20487[(2)]);
var state_20487__$1 = state_20487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20487__$1,(8),inst_20474,inst_20464);
} else {
if((state_val_20488 === (9))){
var state_20487__$1 = state_20487;
var statearr_20498_20525 = state_20487__$1;
(statearr_20498_20525[(2)] = tc);

(statearr_20498_20525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (5))){
var inst_20467 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20468 = cljs.core.async.close_BANG_.call(null,fc);
var state_20487__$1 = (function (){var statearr_20499 = state_20487;
(statearr_20499[(8)] = inst_20467);

return statearr_20499;
})();
var statearr_20500_20526 = state_20487__$1;
(statearr_20500_20526[(2)] = inst_20468);

(statearr_20500_20526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (14))){
var inst_20481 = (state_20487[(2)]);
var state_20487__$1 = state_20487;
var statearr_20501_20527 = state_20487__$1;
(statearr_20501_20527[(2)] = inst_20481);

(statearr_20501_20527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (10))){
var state_20487__$1 = state_20487;
var statearr_20502_20528 = state_20487__$1;
(statearr_20502_20528[(2)] = fc);

(statearr_20502_20528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20488 === (8))){
var inst_20476 = (state_20487[(2)]);
var state_20487__$1 = state_20487;
if(cljs.core.truth_(inst_20476)){
var statearr_20503_20529 = state_20487__$1;
(statearr_20503_20529[(1)] = (12));

} else {
var statearr_20504_20530 = state_20487__$1;
(statearr_20504_20530[(1)] = (13));

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
});})(c__19838__auto___20516,tc,fc))
;
return ((function (switch__19726__auto__,c__19838__auto___20516,tc,fc){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_20508 = [null,null,null,null,null,null,null,null,null];
(statearr_20508[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_20508[(1)] = (1));

return statearr_20508;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_20487){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_20487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e20509){if((e20509 instanceof Object)){
var ex__19730__auto__ = e20509;
var statearr_20510_20531 = state_20487;
(statearr_20510_20531[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20532 = state_20487;
state_20487 = G__20532;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_20487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_20487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___20516,tc,fc))
})();
var state__19840__auto__ = (function (){var statearr_20511 = f__19839__auto__.call(null);
(statearr_20511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___20516);

return statearr_20511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___20516,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__){
return (function (state_20596){
var state_val_20597 = (state_20596[(1)]);
if((state_val_20597 === (7))){
var inst_20592 = (state_20596[(2)]);
var state_20596__$1 = state_20596;
var statearr_20598_20619 = state_20596__$1;
(statearr_20598_20619[(2)] = inst_20592);

(statearr_20598_20619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (1))){
var inst_20576 = init;
var state_20596__$1 = (function (){var statearr_20599 = state_20596;
(statearr_20599[(7)] = inst_20576);

return statearr_20599;
})();
var statearr_20600_20620 = state_20596__$1;
(statearr_20600_20620[(2)] = null);

(statearr_20600_20620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (4))){
var inst_20579 = (state_20596[(8)]);
var inst_20579__$1 = (state_20596[(2)]);
var inst_20580 = (inst_20579__$1 == null);
var state_20596__$1 = (function (){var statearr_20601 = state_20596;
(statearr_20601[(8)] = inst_20579__$1);

return statearr_20601;
})();
if(cljs.core.truth_(inst_20580)){
var statearr_20602_20621 = state_20596__$1;
(statearr_20602_20621[(1)] = (5));

} else {
var statearr_20603_20622 = state_20596__$1;
(statearr_20603_20622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (6))){
var inst_20583 = (state_20596[(9)]);
var inst_20579 = (state_20596[(8)]);
var inst_20576 = (state_20596[(7)]);
var inst_20583__$1 = f.call(null,inst_20576,inst_20579);
var inst_20584 = cljs.core.reduced_QMARK_.call(null,inst_20583__$1);
var state_20596__$1 = (function (){var statearr_20604 = state_20596;
(statearr_20604[(9)] = inst_20583__$1);

return statearr_20604;
})();
if(inst_20584){
var statearr_20605_20623 = state_20596__$1;
(statearr_20605_20623[(1)] = (8));

} else {
var statearr_20606_20624 = state_20596__$1;
(statearr_20606_20624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (3))){
var inst_20594 = (state_20596[(2)]);
var state_20596__$1 = state_20596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20596__$1,inst_20594);
} else {
if((state_val_20597 === (2))){
var state_20596__$1 = state_20596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20596__$1,(4),ch);
} else {
if((state_val_20597 === (9))){
var inst_20583 = (state_20596[(9)]);
var inst_20576 = inst_20583;
var state_20596__$1 = (function (){var statearr_20607 = state_20596;
(statearr_20607[(7)] = inst_20576);

return statearr_20607;
})();
var statearr_20608_20625 = state_20596__$1;
(statearr_20608_20625[(2)] = null);

(statearr_20608_20625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (5))){
var inst_20576 = (state_20596[(7)]);
var state_20596__$1 = state_20596;
var statearr_20609_20626 = state_20596__$1;
(statearr_20609_20626[(2)] = inst_20576);

(statearr_20609_20626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (10))){
var inst_20590 = (state_20596[(2)]);
var state_20596__$1 = state_20596;
var statearr_20610_20627 = state_20596__$1;
(statearr_20610_20627[(2)] = inst_20590);

(statearr_20610_20627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20597 === (8))){
var inst_20583 = (state_20596[(9)]);
var inst_20586 = cljs.core.deref.call(null,inst_20583);
var state_20596__$1 = state_20596;
var statearr_20611_20628 = state_20596__$1;
(statearr_20611_20628[(2)] = inst_20586);

(statearr_20611_20628[(1)] = (10));


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
});})(c__19838__auto__))
;
return ((function (switch__19726__auto__,c__19838__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19727__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19727__auto____0 = (function (){
var statearr_20615 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20615[(0)] = cljs$core$async$reduce_$_state_machine__19727__auto__);

(statearr_20615[(1)] = (1));

return statearr_20615;
});
var cljs$core$async$reduce_$_state_machine__19727__auto____1 = (function (state_20596){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_20596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e20616){if((e20616 instanceof Object)){
var ex__19730__auto__ = e20616;
var statearr_20617_20629 = state_20596;
(statearr_20617_20629[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20630 = state_20596;
state_20596 = G__20630;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19727__auto__ = function(state_20596){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19727__auto____1.call(this,state_20596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19727__auto____0;
cljs$core$async$reduce_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19727__auto____1;
return cljs$core$async$reduce_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__))
})();
var state__19840__auto__ = (function (){var statearr_20618 = f__19839__auto__.call(null);
(statearr_20618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_20618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__))
);

return c__19838__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20631 = [];
var len__17884__auto___20683 = arguments.length;
var i__17885__auto___20684 = (0);
while(true){
if((i__17885__auto___20684 < len__17884__auto___20683)){
args20631.push((arguments[i__17885__auto___20684]));

var G__20685 = (i__17885__auto___20684 + (1));
i__17885__auto___20684 = G__20685;
continue;
} else {
}
break;
}

var G__20633 = args20631.length;
switch (G__20633) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20631.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__){
return (function (state_20658){
var state_val_20659 = (state_20658[(1)]);
if((state_val_20659 === (7))){
var inst_20640 = (state_20658[(2)]);
var state_20658__$1 = state_20658;
var statearr_20660_20687 = state_20658__$1;
(statearr_20660_20687[(2)] = inst_20640);

(statearr_20660_20687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (1))){
var inst_20634 = cljs.core.seq.call(null,coll);
var inst_20635 = inst_20634;
var state_20658__$1 = (function (){var statearr_20661 = state_20658;
(statearr_20661[(7)] = inst_20635);

return statearr_20661;
})();
var statearr_20662_20688 = state_20658__$1;
(statearr_20662_20688[(2)] = null);

(statearr_20662_20688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (4))){
var inst_20635 = (state_20658[(7)]);
var inst_20638 = cljs.core.first.call(null,inst_20635);
var state_20658__$1 = state_20658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20658__$1,(7),ch,inst_20638);
} else {
if((state_val_20659 === (13))){
var inst_20652 = (state_20658[(2)]);
var state_20658__$1 = state_20658;
var statearr_20663_20689 = state_20658__$1;
(statearr_20663_20689[(2)] = inst_20652);

(statearr_20663_20689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (6))){
var inst_20643 = (state_20658[(2)]);
var state_20658__$1 = state_20658;
if(cljs.core.truth_(inst_20643)){
var statearr_20664_20690 = state_20658__$1;
(statearr_20664_20690[(1)] = (8));

} else {
var statearr_20665_20691 = state_20658__$1;
(statearr_20665_20691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (3))){
var inst_20656 = (state_20658[(2)]);
var state_20658__$1 = state_20658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20658__$1,inst_20656);
} else {
if((state_val_20659 === (12))){
var state_20658__$1 = state_20658;
var statearr_20666_20692 = state_20658__$1;
(statearr_20666_20692[(2)] = null);

(statearr_20666_20692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (2))){
var inst_20635 = (state_20658[(7)]);
var state_20658__$1 = state_20658;
if(cljs.core.truth_(inst_20635)){
var statearr_20667_20693 = state_20658__$1;
(statearr_20667_20693[(1)] = (4));

} else {
var statearr_20668_20694 = state_20658__$1;
(statearr_20668_20694[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (11))){
var inst_20649 = cljs.core.async.close_BANG_.call(null,ch);
var state_20658__$1 = state_20658;
var statearr_20669_20695 = state_20658__$1;
(statearr_20669_20695[(2)] = inst_20649);

(statearr_20669_20695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (9))){
var state_20658__$1 = state_20658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20670_20696 = state_20658__$1;
(statearr_20670_20696[(1)] = (11));

} else {
var statearr_20671_20697 = state_20658__$1;
(statearr_20671_20697[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (5))){
var inst_20635 = (state_20658[(7)]);
var state_20658__$1 = state_20658;
var statearr_20672_20698 = state_20658__$1;
(statearr_20672_20698[(2)] = inst_20635);

(statearr_20672_20698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (10))){
var inst_20654 = (state_20658[(2)]);
var state_20658__$1 = state_20658;
var statearr_20673_20699 = state_20658__$1;
(statearr_20673_20699[(2)] = inst_20654);

(statearr_20673_20699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20659 === (8))){
var inst_20635 = (state_20658[(7)]);
var inst_20645 = cljs.core.next.call(null,inst_20635);
var inst_20635__$1 = inst_20645;
var state_20658__$1 = (function (){var statearr_20674 = state_20658;
(statearr_20674[(7)] = inst_20635__$1);

return statearr_20674;
})();
var statearr_20675_20700 = state_20658__$1;
(statearr_20675_20700[(2)] = null);

(statearr_20675_20700[(1)] = (2));


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
});})(c__19838__auto__))
;
return ((function (switch__19726__auto__,c__19838__auto__){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_20679 = [null,null,null,null,null,null,null,null];
(statearr_20679[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_20679[(1)] = (1));

return statearr_20679;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_20658){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_20658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e20680){if((e20680 instanceof Object)){
var ex__19730__auto__ = e20680;
var statearr_20681_20701 = state_20658;
(statearr_20681_20701[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20702 = state_20658;
state_20658 = G__20702;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_20658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_20658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__))
})();
var state__19840__auto__ = (function (){var statearr_20682 = f__19839__auto__.call(null);
(statearr_20682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_20682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__))
);

return c__19838__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20924 = (function (mult,ch,cs,meta20925){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20925 = meta20925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20926,meta20925__$1){
var self__ = this;
var _20926__$1 = this;
return (new cljs.core.async.t_cljs$core$async20924(self__.mult,self__.ch,self__.cs,meta20925__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20926){
var self__ = this;
var _20926__$1 = this;
return self__.meta20925;
});})(cs))
;

cljs.core.async.t_cljs$core$async20924.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20924.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20924.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20924.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20924.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20924.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20925","meta20925",-1879784499,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20924";

cljs.core.async.t_cljs$core$async20924.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20924");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20924 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20924(mult__$1,ch__$1,cs__$1,meta20925){
return (new cljs.core.async.t_cljs$core$async20924(mult__$1,ch__$1,cs__$1,meta20925));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20924(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19838__auto___21145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___21145,cs,m,dchan,dctr,done){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___21145,cs,m,dchan,dctr,done){
return (function (state_21057){
var state_val_21058 = (state_21057[(1)]);
if((state_val_21058 === (7))){
var inst_21053 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
var statearr_21059_21146 = state_21057__$1;
(statearr_21059_21146[(2)] = inst_21053);

(statearr_21059_21146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (20))){
var inst_20958 = (state_21057[(7)]);
var inst_20968 = cljs.core.first.call(null,inst_20958);
var inst_20969 = cljs.core.nth.call(null,inst_20968,(0),null);
var inst_20970 = cljs.core.nth.call(null,inst_20968,(1),null);
var state_21057__$1 = (function (){var statearr_21060 = state_21057;
(statearr_21060[(8)] = inst_20969);

return statearr_21060;
})();
if(cljs.core.truth_(inst_20970)){
var statearr_21061_21147 = state_21057__$1;
(statearr_21061_21147[(1)] = (22));

} else {
var statearr_21062_21148 = state_21057__$1;
(statearr_21062_21148[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (27))){
var inst_20929 = (state_21057[(9)]);
var inst_21005 = (state_21057[(10)]);
var inst_21000 = (state_21057[(11)]);
var inst_20998 = (state_21057[(12)]);
var inst_21005__$1 = cljs.core._nth.call(null,inst_20998,inst_21000);
var inst_21006 = cljs.core.async.put_BANG_.call(null,inst_21005__$1,inst_20929,done);
var state_21057__$1 = (function (){var statearr_21063 = state_21057;
(statearr_21063[(10)] = inst_21005__$1);

return statearr_21063;
})();
if(cljs.core.truth_(inst_21006)){
var statearr_21064_21149 = state_21057__$1;
(statearr_21064_21149[(1)] = (30));

} else {
var statearr_21065_21150 = state_21057__$1;
(statearr_21065_21150[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (1))){
var state_21057__$1 = state_21057;
var statearr_21066_21151 = state_21057__$1;
(statearr_21066_21151[(2)] = null);

(statearr_21066_21151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (24))){
var inst_20958 = (state_21057[(7)]);
var inst_20975 = (state_21057[(2)]);
var inst_20976 = cljs.core.next.call(null,inst_20958);
var inst_20938 = inst_20976;
var inst_20939 = null;
var inst_20940 = (0);
var inst_20941 = (0);
var state_21057__$1 = (function (){var statearr_21067 = state_21057;
(statearr_21067[(13)] = inst_20941);

(statearr_21067[(14)] = inst_20940);

(statearr_21067[(15)] = inst_20939);

(statearr_21067[(16)] = inst_20975);

(statearr_21067[(17)] = inst_20938);

return statearr_21067;
})();
var statearr_21068_21152 = state_21057__$1;
(statearr_21068_21152[(2)] = null);

(statearr_21068_21152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (39))){
var state_21057__$1 = state_21057;
var statearr_21072_21153 = state_21057__$1;
(statearr_21072_21153[(2)] = null);

(statearr_21072_21153[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (4))){
var inst_20929 = (state_21057[(9)]);
var inst_20929__$1 = (state_21057[(2)]);
var inst_20930 = (inst_20929__$1 == null);
var state_21057__$1 = (function (){var statearr_21073 = state_21057;
(statearr_21073[(9)] = inst_20929__$1);

return statearr_21073;
})();
if(cljs.core.truth_(inst_20930)){
var statearr_21074_21154 = state_21057__$1;
(statearr_21074_21154[(1)] = (5));

} else {
var statearr_21075_21155 = state_21057__$1;
(statearr_21075_21155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (15))){
var inst_20941 = (state_21057[(13)]);
var inst_20940 = (state_21057[(14)]);
var inst_20939 = (state_21057[(15)]);
var inst_20938 = (state_21057[(17)]);
var inst_20954 = (state_21057[(2)]);
var inst_20955 = (inst_20941 + (1));
var tmp21069 = inst_20940;
var tmp21070 = inst_20939;
var tmp21071 = inst_20938;
var inst_20938__$1 = tmp21071;
var inst_20939__$1 = tmp21070;
var inst_20940__$1 = tmp21069;
var inst_20941__$1 = inst_20955;
var state_21057__$1 = (function (){var statearr_21076 = state_21057;
(statearr_21076[(13)] = inst_20941__$1);

(statearr_21076[(14)] = inst_20940__$1);

(statearr_21076[(15)] = inst_20939__$1);

(statearr_21076[(18)] = inst_20954);

(statearr_21076[(17)] = inst_20938__$1);

return statearr_21076;
})();
var statearr_21077_21156 = state_21057__$1;
(statearr_21077_21156[(2)] = null);

(statearr_21077_21156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (21))){
var inst_20979 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
var statearr_21081_21157 = state_21057__$1;
(statearr_21081_21157[(2)] = inst_20979);

(statearr_21081_21157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (31))){
var inst_21005 = (state_21057[(10)]);
var inst_21009 = done.call(null,null);
var inst_21010 = cljs.core.async.untap_STAR_.call(null,m,inst_21005);
var state_21057__$1 = (function (){var statearr_21082 = state_21057;
(statearr_21082[(19)] = inst_21009);

return statearr_21082;
})();
var statearr_21083_21158 = state_21057__$1;
(statearr_21083_21158[(2)] = inst_21010);

(statearr_21083_21158[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (32))){
var inst_20999 = (state_21057[(20)]);
var inst_21000 = (state_21057[(11)]);
var inst_20998 = (state_21057[(12)]);
var inst_20997 = (state_21057[(21)]);
var inst_21012 = (state_21057[(2)]);
var inst_21013 = (inst_21000 + (1));
var tmp21078 = inst_20999;
var tmp21079 = inst_20998;
var tmp21080 = inst_20997;
var inst_20997__$1 = tmp21080;
var inst_20998__$1 = tmp21079;
var inst_20999__$1 = tmp21078;
var inst_21000__$1 = inst_21013;
var state_21057__$1 = (function (){var statearr_21084 = state_21057;
(statearr_21084[(20)] = inst_20999__$1);

(statearr_21084[(22)] = inst_21012);

(statearr_21084[(11)] = inst_21000__$1);

(statearr_21084[(12)] = inst_20998__$1);

(statearr_21084[(21)] = inst_20997__$1);

return statearr_21084;
})();
var statearr_21085_21159 = state_21057__$1;
(statearr_21085_21159[(2)] = null);

(statearr_21085_21159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (40))){
var inst_21025 = (state_21057[(23)]);
var inst_21029 = done.call(null,null);
var inst_21030 = cljs.core.async.untap_STAR_.call(null,m,inst_21025);
var state_21057__$1 = (function (){var statearr_21086 = state_21057;
(statearr_21086[(24)] = inst_21029);

return statearr_21086;
})();
var statearr_21087_21160 = state_21057__$1;
(statearr_21087_21160[(2)] = inst_21030);

(statearr_21087_21160[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (33))){
var inst_21016 = (state_21057[(25)]);
var inst_21018 = cljs.core.chunked_seq_QMARK_.call(null,inst_21016);
var state_21057__$1 = state_21057;
if(inst_21018){
var statearr_21088_21161 = state_21057__$1;
(statearr_21088_21161[(1)] = (36));

} else {
var statearr_21089_21162 = state_21057__$1;
(statearr_21089_21162[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (13))){
var inst_20948 = (state_21057[(26)]);
var inst_20951 = cljs.core.async.close_BANG_.call(null,inst_20948);
var state_21057__$1 = state_21057;
var statearr_21090_21163 = state_21057__$1;
(statearr_21090_21163[(2)] = inst_20951);

(statearr_21090_21163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (22))){
var inst_20969 = (state_21057[(8)]);
var inst_20972 = cljs.core.async.close_BANG_.call(null,inst_20969);
var state_21057__$1 = state_21057;
var statearr_21091_21164 = state_21057__$1;
(statearr_21091_21164[(2)] = inst_20972);

(statearr_21091_21164[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (36))){
var inst_21016 = (state_21057[(25)]);
var inst_21020 = cljs.core.chunk_first.call(null,inst_21016);
var inst_21021 = cljs.core.chunk_rest.call(null,inst_21016);
var inst_21022 = cljs.core.count.call(null,inst_21020);
var inst_20997 = inst_21021;
var inst_20998 = inst_21020;
var inst_20999 = inst_21022;
var inst_21000 = (0);
var state_21057__$1 = (function (){var statearr_21092 = state_21057;
(statearr_21092[(20)] = inst_20999);

(statearr_21092[(11)] = inst_21000);

(statearr_21092[(12)] = inst_20998);

(statearr_21092[(21)] = inst_20997);

return statearr_21092;
})();
var statearr_21093_21165 = state_21057__$1;
(statearr_21093_21165[(2)] = null);

(statearr_21093_21165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (41))){
var inst_21016 = (state_21057[(25)]);
var inst_21032 = (state_21057[(2)]);
var inst_21033 = cljs.core.next.call(null,inst_21016);
var inst_20997 = inst_21033;
var inst_20998 = null;
var inst_20999 = (0);
var inst_21000 = (0);
var state_21057__$1 = (function (){var statearr_21094 = state_21057;
(statearr_21094[(20)] = inst_20999);

(statearr_21094[(27)] = inst_21032);

(statearr_21094[(11)] = inst_21000);

(statearr_21094[(12)] = inst_20998);

(statearr_21094[(21)] = inst_20997);

return statearr_21094;
})();
var statearr_21095_21166 = state_21057__$1;
(statearr_21095_21166[(2)] = null);

(statearr_21095_21166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (43))){
var state_21057__$1 = state_21057;
var statearr_21096_21167 = state_21057__$1;
(statearr_21096_21167[(2)] = null);

(statearr_21096_21167[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (29))){
var inst_21041 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
var statearr_21097_21168 = state_21057__$1;
(statearr_21097_21168[(2)] = inst_21041);

(statearr_21097_21168[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (44))){
var inst_21050 = (state_21057[(2)]);
var state_21057__$1 = (function (){var statearr_21098 = state_21057;
(statearr_21098[(28)] = inst_21050);

return statearr_21098;
})();
var statearr_21099_21169 = state_21057__$1;
(statearr_21099_21169[(2)] = null);

(statearr_21099_21169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (6))){
var inst_20989 = (state_21057[(29)]);
var inst_20988 = cljs.core.deref.call(null,cs);
var inst_20989__$1 = cljs.core.keys.call(null,inst_20988);
var inst_20990 = cljs.core.count.call(null,inst_20989__$1);
var inst_20991 = cljs.core.reset_BANG_.call(null,dctr,inst_20990);
var inst_20996 = cljs.core.seq.call(null,inst_20989__$1);
var inst_20997 = inst_20996;
var inst_20998 = null;
var inst_20999 = (0);
var inst_21000 = (0);
var state_21057__$1 = (function (){var statearr_21100 = state_21057;
(statearr_21100[(20)] = inst_20999);

(statearr_21100[(29)] = inst_20989__$1);

(statearr_21100[(11)] = inst_21000);

(statearr_21100[(12)] = inst_20998);

(statearr_21100[(21)] = inst_20997);

(statearr_21100[(30)] = inst_20991);

return statearr_21100;
})();
var statearr_21101_21170 = state_21057__$1;
(statearr_21101_21170[(2)] = null);

(statearr_21101_21170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (28))){
var inst_21016 = (state_21057[(25)]);
var inst_20997 = (state_21057[(21)]);
var inst_21016__$1 = cljs.core.seq.call(null,inst_20997);
var state_21057__$1 = (function (){var statearr_21102 = state_21057;
(statearr_21102[(25)] = inst_21016__$1);

return statearr_21102;
})();
if(inst_21016__$1){
var statearr_21103_21171 = state_21057__$1;
(statearr_21103_21171[(1)] = (33));

} else {
var statearr_21104_21172 = state_21057__$1;
(statearr_21104_21172[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (25))){
var inst_20999 = (state_21057[(20)]);
var inst_21000 = (state_21057[(11)]);
var inst_21002 = (inst_21000 < inst_20999);
var inst_21003 = inst_21002;
var state_21057__$1 = state_21057;
if(cljs.core.truth_(inst_21003)){
var statearr_21105_21173 = state_21057__$1;
(statearr_21105_21173[(1)] = (27));

} else {
var statearr_21106_21174 = state_21057__$1;
(statearr_21106_21174[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (34))){
var state_21057__$1 = state_21057;
var statearr_21107_21175 = state_21057__$1;
(statearr_21107_21175[(2)] = null);

(statearr_21107_21175[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (17))){
var state_21057__$1 = state_21057;
var statearr_21108_21176 = state_21057__$1;
(statearr_21108_21176[(2)] = null);

(statearr_21108_21176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (3))){
var inst_21055 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21057__$1,inst_21055);
} else {
if((state_val_21058 === (12))){
var inst_20984 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
var statearr_21109_21177 = state_21057__$1;
(statearr_21109_21177[(2)] = inst_20984);

(statearr_21109_21177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (2))){
var state_21057__$1 = state_21057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21057__$1,(4),ch);
} else {
if((state_val_21058 === (23))){
var state_21057__$1 = state_21057;
var statearr_21110_21178 = state_21057__$1;
(statearr_21110_21178[(2)] = null);

(statearr_21110_21178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (35))){
var inst_21039 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
var statearr_21111_21179 = state_21057__$1;
(statearr_21111_21179[(2)] = inst_21039);

(statearr_21111_21179[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (19))){
var inst_20958 = (state_21057[(7)]);
var inst_20962 = cljs.core.chunk_first.call(null,inst_20958);
var inst_20963 = cljs.core.chunk_rest.call(null,inst_20958);
var inst_20964 = cljs.core.count.call(null,inst_20962);
var inst_20938 = inst_20963;
var inst_20939 = inst_20962;
var inst_20940 = inst_20964;
var inst_20941 = (0);
var state_21057__$1 = (function (){var statearr_21112 = state_21057;
(statearr_21112[(13)] = inst_20941);

(statearr_21112[(14)] = inst_20940);

(statearr_21112[(15)] = inst_20939);

(statearr_21112[(17)] = inst_20938);

return statearr_21112;
})();
var statearr_21113_21180 = state_21057__$1;
(statearr_21113_21180[(2)] = null);

(statearr_21113_21180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (11))){
var inst_20958 = (state_21057[(7)]);
var inst_20938 = (state_21057[(17)]);
var inst_20958__$1 = cljs.core.seq.call(null,inst_20938);
var state_21057__$1 = (function (){var statearr_21114 = state_21057;
(statearr_21114[(7)] = inst_20958__$1);

return statearr_21114;
})();
if(inst_20958__$1){
var statearr_21115_21181 = state_21057__$1;
(statearr_21115_21181[(1)] = (16));

} else {
var statearr_21116_21182 = state_21057__$1;
(statearr_21116_21182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (9))){
var inst_20986 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
var statearr_21117_21183 = state_21057__$1;
(statearr_21117_21183[(2)] = inst_20986);

(statearr_21117_21183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (5))){
var inst_20936 = cljs.core.deref.call(null,cs);
var inst_20937 = cljs.core.seq.call(null,inst_20936);
var inst_20938 = inst_20937;
var inst_20939 = null;
var inst_20940 = (0);
var inst_20941 = (0);
var state_21057__$1 = (function (){var statearr_21118 = state_21057;
(statearr_21118[(13)] = inst_20941);

(statearr_21118[(14)] = inst_20940);

(statearr_21118[(15)] = inst_20939);

(statearr_21118[(17)] = inst_20938);

return statearr_21118;
})();
var statearr_21119_21184 = state_21057__$1;
(statearr_21119_21184[(2)] = null);

(statearr_21119_21184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (14))){
var state_21057__$1 = state_21057;
var statearr_21120_21185 = state_21057__$1;
(statearr_21120_21185[(2)] = null);

(statearr_21120_21185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (45))){
var inst_21047 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
var statearr_21121_21186 = state_21057__$1;
(statearr_21121_21186[(2)] = inst_21047);

(statearr_21121_21186[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (26))){
var inst_20989 = (state_21057[(29)]);
var inst_21043 = (state_21057[(2)]);
var inst_21044 = cljs.core.seq.call(null,inst_20989);
var state_21057__$1 = (function (){var statearr_21122 = state_21057;
(statearr_21122[(31)] = inst_21043);

return statearr_21122;
})();
if(inst_21044){
var statearr_21123_21187 = state_21057__$1;
(statearr_21123_21187[(1)] = (42));

} else {
var statearr_21124_21188 = state_21057__$1;
(statearr_21124_21188[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (16))){
var inst_20958 = (state_21057[(7)]);
var inst_20960 = cljs.core.chunked_seq_QMARK_.call(null,inst_20958);
var state_21057__$1 = state_21057;
if(inst_20960){
var statearr_21125_21189 = state_21057__$1;
(statearr_21125_21189[(1)] = (19));

} else {
var statearr_21126_21190 = state_21057__$1;
(statearr_21126_21190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (38))){
var inst_21036 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
var statearr_21127_21191 = state_21057__$1;
(statearr_21127_21191[(2)] = inst_21036);

(statearr_21127_21191[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (30))){
var state_21057__$1 = state_21057;
var statearr_21128_21192 = state_21057__$1;
(statearr_21128_21192[(2)] = null);

(statearr_21128_21192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (10))){
var inst_20941 = (state_21057[(13)]);
var inst_20939 = (state_21057[(15)]);
var inst_20947 = cljs.core._nth.call(null,inst_20939,inst_20941);
var inst_20948 = cljs.core.nth.call(null,inst_20947,(0),null);
var inst_20949 = cljs.core.nth.call(null,inst_20947,(1),null);
var state_21057__$1 = (function (){var statearr_21129 = state_21057;
(statearr_21129[(26)] = inst_20948);

return statearr_21129;
})();
if(cljs.core.truth_(inst_20949)){
var statearr_21130_21193 = state_21057__$1;
(statearr_21130_21193[(1)] = (13));

} else {
var statearr_21131_21194 = state_21057__$1;
(statearr_21131_21194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (18))){
var inst_20982 = (state_21057[(2)]);
var state_21057__$1 = state_21057;
var statearr_21132_21195 = state_21057__$1;
(statearr_21132_21195[(2)] = inst_20982);

(statearr_21132_21195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (42))){
var state_21057__$1 = state_21057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21057__$1,(45),dchan);
} else {
if((state_val_21058 === (37))){
var inst_20929 = (state_21057[(9)]);
var inst_21025 = (state_21057[(23)]);
var inst_21016 = (state_21057[(25)]);
var inst_21025__$1 = cljs.core.first.call(null,inst_21016);
var inst_21026 = cljs.core.async.put_BANG_.call(null,inst_21025__$1,inst_20929,done);
var state_21057__$1 = (function (){var statearr_21133 = state_21057;
(statearr_21133[(23)] = inst_21025__$1);

return statearr_21133;
})();
if(cljs.core.truth_(inst_21026)){
var statearr_21134_21196 = state_21057__$1;
(statearr_21134_21196[(1)] = (39));

} else {
var statearr_21135_21197 = state_21057__$1;
(statearr_21135_21197[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21058 === (8))){
var inst_20941 = (state_21057[(13)]);
var inst_20940 = (state_21057[(14)]);
var inst_20943 = (inst_20941 < inst_20940);
var inst_20944 = inst_20943;
var state_21057__$1 = state_21057;
if(cljs.core.truth_(inst_20944)){
var statearr_21136_21198 = state_21057__$1;
(statearr_21136_21198[(1)] = (10));

} else {
var statearr_21137_21199 = state_21057__$1;
(statearr_21137_21199[(1)] = (11));

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
});})(c__19838__auto___21145,cs,m,dchan,dctr,done))
;
return ((function (switch__19726__auto__,c__19838__auto___21145,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19727__auto__ = null;
var cljs$core$async$mult_$_state_machine__19727__auto____0 = (function (){
var statearr_21141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21141[(0)] = cljs$core$async$mult_$_state_machine__19727__auto__);

(statearr_21141[(1)] = (1));

return statearr_21141;
});
var cljs$core$async$mult_$_state_machine__19727__auto____1 = (function (state_21057){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_21057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e21142){if((e21142 instanceof Object)){
var ex__19730__auto__ = e21142;
var statearr_21143_21200 = state_21057;
(statearr_21143_21200[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21201 = state_21057;
state_21057 = G__21201;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19727__auto__ = function(state_21057){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19727__auto____1.call(this,state_21057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19727__auto____0;
cljs$core$async$mult_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19727__auto____1;
return cljs$core$async$mult_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___21145,cs,m,dchan,dctr,done))
})();
var state__19840__auto__ = (function (){var statearr_21144 = f__19839__auto__.call(null);
(statearr_21144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___21145);

return statearr_21144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___21145,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21202 = [];
var len__17884__auto___21205 = arguments.length;
var i__17885__auto___21206 = (0);
while(true){
if((i__17885__auto___21206 < len__17884__auto___21205)){
args21202.push((arguments[i__17885__auto___21206]));

var G__21207 = (i__17885__auto___21206 + (1));
i__17885__auto___21206 = G__21207;
continue;
} else {
}
break;
}

var G__21204 = args21202.length;
switch (G__21204) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21202.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___21219 = arguments.length;
var i__17885__auto___21220 = (0);
while(true){
if((i__17885__auto___21220 < len__17884__auto___21219)){
args__17891__auto__.push((arguments[i__17885__auto___21220]));

var G__21221 = (i__17885__auto___21220 + (1));
i__17885__auto___21220 = G__21221;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21213){
var map__21214 = p__21213;
var map__21214__$1 = ((((!((map__21214 == null)))?((((map__21214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21214):map__21214);
var opts = map__21214__$1;
var statearr_21216_21222 = state;
(statearr_21216_21222[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21214,map__21214__$1,opts){
return (function (val){
var statearr_21217_21223 = state;
(statearr_21217_21223[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21214,map__21214__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21218_21224 = state;
(statearr_21218_21224[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21209){
var G__21210 = cljs.core.first.call(null,seq21209);
var seq21209__$1 = cljs.core.next.call(null,seq21209);
var G__21211 = cljs.core.first.call(null,seq21209__$1);
var seq21209__$2 = cljs.core.next.call(null,seq21209__$1);
var G__21212 = cljs.core.first.call(null,seq21209__$2);
var seq21209__$3 = cljs.core.next.call(null,seq21209__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21210,G__21211,G__21212,seq21209__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21388 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21389){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21389 = meta21389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21390,meta21389__$1){
var self__ = this;
var _21390__$1 = this;
return (new cljs.core.async.t_cljs$core$async21388(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21389__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21390){
var self__ = this;
var _21390__$1 = this;
return self__.meta21389;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21388.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21388.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21389","meta21389",1352643908,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21388";

cljs.core.async.t_cljs$core$async21388.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21388");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21388 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21388(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21389){
return (new cljs.core.async.t_cljs$core$async21388(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21389));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21388(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19838__auto___21551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___21551,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___21551,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21488){
var state_val_21489 = (state_21488[(1)]);
if((state_val_21489 === (7))){
var inst_21406 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
var statearr_21490_21552 = state_21488__$1;
(statearr_21490_21552[(2)] = inst_21406);

(statearr_21490_21552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (20))){
var inst_21418 = (state_21488[(7)]);
var state_21488__$1 = state_21488;
var statearr_21491_21553 = state_21488__$1;
(statearr_21491_21553[(2)] = inst_21418);

(statearr_21491_21553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (27))){
var state_21488__$1 = state_21488;
var statearr_21492_21554 = state_21488__$1;
(statearr_21492_21554[(2)] = null);

(statearr_21492_21554[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (1))){
var inst_21394 = (state_21488[(8)]);
var inst_21394__$1 = calc_state.call(null);
var inst_21396 = (inst_21394__$1 == null);
var inst_21397 = cljs.core.not.call(null,inst_21396);
var state_21488__$1 = (function (){var statearr_21493 = state_21488;
(statearr_21493[(8)] = inst_21394__$1);

return statearr_21493;
})();
if(inst_21397){
var statearr_21494_21555 = state_21488__$1;
(statearr_21494_21555[(1)] = (2));

} else {
var statearr_21495_21556 = state_21488__$1;
(statearr_21495_21556[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (24))){
var inst_21441 = (state_21488[(9)]);
var inst_21448 = (state_21488[(10)]);
var inst_21462 = (state_21488[(11)]);
var inst_21462__$1 = inst_21441.call(null,inst_21448);
var state_21488__$1 = (function (){var statearr_21496 = state_21488;
(statearr_21496[(11)] = inst_21462__$1);

return statearr_21496;
})();
if(cljs.core.truth_(inst_21462__$1)){
var statearr_21497_21557 = state_21488__$1;
(statearr_21497_21557[(1)] = (29));

} else {
var statearr_21498_21558 = state_21488__$1;
(statearr_21498_21558[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (4))){
var inst_21409 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
if(cljs.core.truth_(inst_21409)){
var statearr_21499_21559 = state_21488__$1;
(statearr_21499_21559[(1)] = (8));

} else {
var statearr_21500_21560 = state_21488__$1;
(statearr_21500_21560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (15))){
var inst_21435 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
if(cljs.core.truth_(inst_21435)){
var statearr_21501_21561 = state_21488__$1;
(statearr_21501_21561[(1)] = (19));

} else {
var statearr_21502_21562 = state_21488__$1;
(statearr_21502_21562[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (21))){
var inst_21440 = (state_21488[(12)]);
var inst_21440__$1 = (state_21488[(2)]);
var inst_21441 = cljs.core.get.call(null,inst_21440__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21442 = cljs.core.get.call(null,inst_21440__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21443 = cljs.core.get.call(null,inst_21440__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21488__$1 = (function (){var statearr_21503 = state_21488;
(statearr_21503[(12)] = inst_21440__$1);

(statearr_21503[(13)] = inst_21442);

(statearr_21503[(9)] = inst_21441);

return statearr_21503;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21488__$1,(22),inst_21443);
} else {
if((state_val_21489 === (31))){
var inst_21470 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
if(cljs.core.truth_(inst_21470)){
var statearr_21504_21563 = state_21488__$1;
(statearr_21504_21563[(1)] = (32));

} else {
var statearr_21505_21564 = state_21488__$1;
(statearr_21505_21564[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (32))){
var inst_21447 = (state_21488[(14)]);
var state_21488__$1 = state_21488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21488__$1,(35),out,inst_21447);
} else {
if((state_val_21489 === (33))){
var inst_21440 = (state_21488[(12)]);
var inst_21418 = inst_21440;
var state_21488__$1 = (function (){var statearr_21506 = state_21488;
(statearr_21506[(7)] = inst_21418);

return statearr_21506;
})();
var statearr_21507_21565 = state_21488__$1;
(statearr_21507_21565[(2)] = null);

(statearr_21507_21565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (13))){
var inst_21418 = (state_21488[(7)]);
var inst_21425 = inst_21418.cljs$lang$protocol_mask$partition0$;
var inst_21426 = (inst_21425 & (64));
var inst_21427 = inst_21418.cljs$core$ISeq$;
var inst_21428 = (inst_21426) || (inst_21427);
var state_21488__$1 = state_21488;
if(cljs.core.truth_(inst_21428)){
var statearr_21508_21566 = state_21488__$1;
(statearr_21508_21566[(1)] = (16));

} else {
var statearr_21509_21567 = state_21488__$1;
(statearr_21509_21567[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (22))){
var inst_21447 = (state_21488[(14)]);
var inst_21448 = (state_21488[(10)]);
var inst_21446 = (state_21488[(2)]);
var inst_21447__$1 = cljs.core.nth.call(null,inst_21446,(0),null);
var inst_21448__$1 = cljs.core.nth.call(null,inst_21446,(1),null);
var inst_21449 = (inst_21447__$1 == null);
var inst_21450 = cljs.core._EQ_.call(null,inst_21448__$1,change);
var inst_21451 = (inst_21449) || (inst_21450);
var state_21488__$1 = (function (){var statearr_21510 = state_21488;
(statearr_21510[(14)] = inst_21447__$1);

(statearr_21510[(10)] = inst_21448__$1);

return statearr_21510;
})();
if(cljs.core.truth_(inst_21451)){
var statearr_21511_21568 = state_21488__$1;
(statearr_21511_21568[(1)] = (23));

} else {
var statearr_21512_21569 = state_21488__$1;
(statearr_21512_21569[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (36))){
var inst_21440 = (state_21488[(12)]);
var inst_21418 = inst_21440;
var state_21488__$1 = (function (){var statearr_21513 = state_21488;
(statearr_21513[(7)] = inst_21418);

return statearr_21513;
})();
var statearr_21514_21570 = state_21488__$1;
(statearr_21514_21570[(2)] = null);

(statearr_21514_21570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (29))){
var inst_21462 = (state_21488[(11)]);
var state_21488__$1 = state_21488;
var statearr_21515_21571 = state_21488__$1;
(statearr_21515_21571[(2)] = inst_21462);

(statearr_21515_21571[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (6))){
var state_21488__$1 = state_21488;
var statearr_21516_21572 = state_21488__$1;
(statearr_21516_21572[(2)] = false);

(statearr_21516_21572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (28))){
var inst_21458 = (state_21488[(2)]);
var inst_21459 = calc_state.call(null);
var inst_21418 = inst_21459;
var state_21488__$1 = (function (){var statearr_21517 = state_21488;
(statearr_21517[(7)] = inst_21418);

(statearr_21517[(15)] = inst_21458);

return statearr_21517;
})();
var statearr_21518_21573 = state_21488__$1;
(statearr_21518_21573[(2)] = null);

(statearr_21518_21573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (25))){
var inst_21484 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
var statearr_21519_21574 = state_21488__$1;
(statearr_21519_21574[(2)] = inst_21484);

(statearr_21519_21574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (34))){
var inst_21482 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
var statearr_21520_21575 = state_21488__$1;
(statearr_21520_21575[(2)] = inst_21482);

(statearr_21520_21575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (17))){
var state_21488__$1 = state_21488;
var statearr_21521_21576 = state_21488__$1;
(statearr_21521_21576[(2)] = false);

(statearr_21521_21576[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (3))){
var state_21488__$1 = state_21488;
var statearr_21522_21577 = state_21488__$1;
(statearr_21522_21577[(2)] = false);

(statearr_21522_21577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (12))){
var inst_21486 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21488__$1,inst_21486);
} else {
if((state_val_21489 === (2))){
var inst_21394 = (state_21488[(8)]);
var inst_21399 = inst_21394.cljs$lang$protocol_mask$partition0$;
var inst_21400 = (inst_21399 & (64));
var inst_21401 = inst_21394.cljs$core$ISeq$;
var inst_21402 = (inst_21400) || (inst_21401);
var state_21488__$1 = state_21488;
if(cljs.core.truth_(inst_21402)){
var statearr_21523_21578 = state_21488__$1;
(statearr_21523_21578[(1)] = (5));

} else {
var statearr_21524_21579 = state_21488__$1;
(statearr_21524_21579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (23))){
var inst_21447 = (state_21488[(14)]);
var inst_21453 = (inst_21447 == null);
var state_21488__$1 = state_21488;
if(cljs.core.truth_(inst_21453)){
var statearr_21525_21580 = state_21488__$1;
(statearr_21525_21580[(1)] = (26));

} else {
var statearr_21526_21581 = state_21488__$1;
(statearr_21526_21581[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (35))){
var inst_21473 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
if(cljs.core.truth_(inst_21473)){
var statearr_21527_21582 = state_21488__$1;
(statearr_21527_21582[(1)] = (36));

} else {
var statearr_21528_21583 = state_21488__$1;
(statearr_21528_21583[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (19))){
var inst_21418 = (state_21488[(7)]);
var inst_21437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21418);
var state_21488__$1 = state_21488;
var statearr_21529_21584 = state_21488__$1;
(statearr_21529_21584[(2)] = inst_21437);

(statearr_21529_21584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (11))){
var inst_21418 = (state_21488[(7)]);
var inst_21422 = (inst_21418 == null);
var inst_21423 = cljs.core.not.call(null,inst_21422);
var state_21488__$1 = state_21488;
if(inst_21423){
var statearr_21530_21585 = state_21488__$1;
(statearr_21530_21585[(1)] = (13));

} else {
var statearr_21531_21586 = state_21488__$1;
(statearr_21531_21586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (9))){
var inst_21394 = (state_21488[(8)]);
var state_21488__$1 = state_21488;
var statearr_21532_21587 = state_21488__$1;
(statearr_21532_21587[(2)] = inst_21394);

(statearr_21532_21587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (5))){
var state_21488__$1 = state_21488;
var statearr_21533_21588 = state_21488__$1;
(statearr_21533_21588[(2)] = true);

(statearr_21533_21588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (14))){
var state_21488__$1 = state_21488;
var statearr_21534_21589 = state_21488__$1;
(statearr_21534_21589[(2)] = false);

(statearr_21534_21589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (26))){
var inst_21448 = (state_21488[(10)]);
var inst_21455 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21448);
var state_21488__$1 = state_21488;
var statearr_21535_21590 = state_21488__$1;
(statearr_21535_21590[(2)] = inst_21455);

(statearr_21535_21590[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (16))){
var state_21488__$1 = state_21488;
var statearr_21536_21591 = state_21488__$1;
(statearr_21536_21591[(2)] = true);

(statearr_21536_21591[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (38))){
var inst_21478 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
var statearr_21537_21592 = state_21488__$1;
(statearr_21537_21592[(2)] = inst_21478);

(statearr_21537_21592[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (30))){
var inst_21442 = (state_21488[(13)]);
var inst_21441 = (state_21488[(9)]);
var inst_21448 = (state_21488[(10)]);
var inst_21465 = cljs.core.empty_QMARK_.call(null,inst_21441);
var inst_21466 = inst_21442.call(null,inst_21448);
var inst_21467 = cljs.core.not.call(null,inst_21466);
var inst_21468 = (inst_21465) && (inst_21467);
var state_21488__$1 = state_21488;
var statearr_21538_21593 = state_21488__$1;
(statearr_21538_21593[(2)] = inst_21468);

(statearr_21538_21593[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (10))){
var inst_21394 = (state_21488[(8)]);
var inst_21414 = (state_21488[(2)]);
var inst_21415 = cljs.core.get.call(null,inst_21414,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21416 = cljs.core.get.call(null,inst_21414,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21417 = cljs.core.get.call(null,inst_21414,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21418 = inst_21394;
var state_21488__$1 = (function (){var statearr_21539 = state_21488;
(statearr_21539[(7)] = inst_21418);

(statearr_21539[(16)] = inst_21415);

(statearr_21539[(17)] = inst_21417);

(statearr_21539[(18)] = inst_21416);

return statearr_21539;
})();
var statearr_21540_21594 = state_21488__$1;
(statearr_21540_21594[(2)] = null);

(statearr_21540_21594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (18))){
var inst_21432 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
var statearr_21541_21595 = state_21488__$1;
(statearr_21541_21595[(2)] = inst_21432);

(statearr_21541_21595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (37))){
var state_21488__$1 = state_21488;
var statearr_21542_21596 = state_21488__$1;
(statearr_21542_21596[(2)] = null);

(statearr_21542_21596[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (8))){
var inst_21394 = (state_21488[(8)]);
var inst_21411 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21394);
var state_21488__$1 = state_21488;
var statearr_21543_21597 = state_21488__$1;
(statearr_21543_21597[(2)] = inst_21411);

(statearr_21543_21597[(1)] = (10));


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
});})(c__19838__auto___21551,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19726__auto__,c__19838__auto___21551,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19727__auto__ = null;
var cljs$core$async$mix_$_state_machine__19727__auto____0 = (function (){
var statearr_21547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21547[(0)] = cljs$core$async$mix_$_state_machine__19727__auto__);

(statearr_21547[(1)] = (1));

return statearr_21547;
});
var cljs$core$async$mix_$_state_machine__19727__auto____1 = (function (state_21488){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_21488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e21548){if((e21548 instanceof Object)){
var ex__19730__auto__ = e21548;
var statearr_21549_21598 = state_21488;
(statearr_21549_21598[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21599 = state_21488;
state_21488 = G__21599;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19727__auto__ = function(state_21488){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19727__auto____1.call(this,state_21488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19727__auto____0;
cljs$core$async$mix_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19727__auto____1;
return cljs$core$async$mix_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___21551,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19840__auto__ = (function (){var statearr_21550 = f__19839__auto__.call(null);
(statearr_21550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___21551);

return statearr_21550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___21551,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21600 = [];
var len__17884__auto___21603 = arguments.length;
var i__17885__auto___21604 = (0);
while(true){
if((i__17885__auto___21604 < len__17884__auto___21603)){
args21600.push((arguments[i__17885__auto___21604]));

var G__21605 = (i__17885__auto___21604 + (1));
i__17885__auto___21604 = G__21605;
continue;
} else {
}
break;
}

var G__21602 = args21600.length;
switch (G__21602) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21600.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21608 = [];
var len__17884__auto___21733 = arguments.length;
var i__17885__auto___21734 = (0);
while(true){
if((i__17885__auto___21734 < len__17884__auto___21733)){
args21608.push((arguments[i__17885__auto___21734]));

var G__21735 = (i__17885__auto___21734 + (1));
i__17885__auto___21734 = G__21735;
continue;
} else {
}
break;
}

var G__21610 = args21608.length;
switch (G__21610) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21608.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__21607_SHARP_){
if(cljs.core.truth_(p1__21607_SHARP_.call(null,topic))){
return p1__21607_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21607_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21611 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21612){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21612 = meta21612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21613,meta21612__$1){
var self__ = this;
var _21613__$1 = this;
return (new cljs.core.async.t_cljs$core$async21611(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21612__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21613){
var self__ = this;
var _21613__$1 = this;
return self__.meta21612;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21611.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21611.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21611.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21611.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21611.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21611.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21611.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21612","meta21612",-1258537911,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21611";

cljs.core.async.t_cljs$core$async21611.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21611");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21611 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21611(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21612){
return (new cljs.core.async.t_cljs$core$async21611(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21612));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21611(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19838__auto___21737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___21737,mults,ensure_mult,p){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___21737,mults,ensure_mult,p){
return (function (state_21685){
var state_val_21686 = (state_21685[(1)]);
if((state_val_21686 === (7))){
var inst_21681 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21687_21738 = state_21685__$1;
(statearr_21687_21738[(2)] = inst_21681);

(statearr_21687_21738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (20))){
var state_21685__$1 = state_21685;
var statearr_21688_21739 = state_21685__$1;
(statearr_21688_21739[(2)] = null);

(statearr_21688_21739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (1))){
var state_21685__$1 = state_21685;
var statearr_21689_21740 = state_21685__$1;
(statearr_21689_21740[(2)] = null);

(statearr_21689_21740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (24))){
var inst_21664 = (state_21685[(7)]);
var inst_21673 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21664);
var state_21685__$1 = state_21685;
var statearr_21690_21741 = state_21685__$1;
(statearr_21690_21741[(2)] = inst_21673);

(statearr_21690_21741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (4))){
var inst_21616 = (state_21685[(8)]);
var inst_21616__$1 = (state_21685[(2)]);
var inst_21617 = (inst_21616__$1 == null);
var state_21685__$1 = (function (){var statearr_21691 = state_21685;
(statearr_21691[(8)] = inst_21616__$1);

return statearr_21691;
})();
if(cljs.core.truth_(inst_21617)){
var statearr_21692_21742 = state_21685__$1;
(statearr_21692_21742[(1)] = (5));

} else {
var statearr_21693_21743 = state_21685__$1;
(statearr_21693_21743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (15))){
var inst_21658 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21694_21744 = state_21685__$1;
(statearr_21694_21744[(2)] = inst_21658);

(statearr_21694_21744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (21))){
var inst_21678 = (state_21685[(2)]);
var state_21685__$1 = (function (){var statearr_21695 = state_21685;
(statearr_21695[(9)] = inst_21678);

return statearr_21695;
})();
var statearr_21696_21745 = state_21685__$1;
(statearr_21696_21745[(2)] = null);

(statearr_21696_21745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (13))){
var inst_21640 = (state_21685[(10)]);
var inst_21642 = cljs.core.chunked_seq_QMARK_.call(null,inst_21640);
var state_21685__$1 = state_21685;
if(inst_21642){
var statearr_21697_21746 = state_21685__$1;
(statearr_21697_21746[(1)] = (16));

} else {
var statearr_21698_21747 = state_21685__$1;
(statearr_21698_21747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (22))){
var inst_21670 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
if(cljs.core.truth_(inst_21670)){
var statearr_21699_21748 = state_21685__$1;
(statearr_21699_21748[(1)] = (23));

} else {
var statearr_21700_21749 = state_21685__$1;
(statearr_21700_21749[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (6))){
var inst_21664 = (state_21685[(7)]);
var inst_21616 = (state_21685[(8)]);
var inst_21666 = (state_21685[(11)]);
var inst_21664__$1 = topic_fn.call(null,inst_21616);
var inst_21665 = cljs.core.deref.call(null,mults);
var inst_21666__$1 = cljs.core.get.call(null,inst_21665,inst_21664__$1);
var state_21685__$1 = (function (){var statearr_21701 = state_21685;
(statearr_21701[(7)] = inst_21664__$1);

(statearr_21701[(11)] = inst_21666__$1);

return statearr_21701;
})();
if(cljs.core.truth_(inst_21666__$1)){
var statearr_21702_21750 = state_21685__$1;
(statearr_21702_21750[(1)] = (19));

} else {
var statearr_21703_21751 = state_21685__$1;
(statearr_21703_21751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (25))){
var inst_21675 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21704_21752 = state_21685__$1;
(statearr_21704_21752[(2)] = inst_21675);

(statearr_21704_21752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (17))){
var inst_21640 = (state_21685[(10)]);
var inst_21649 = cljs.core.first.call(null,inst_21640);
var inst_21650 = cljs.core.async.muxch_STAR_.call(null,inst_21649);
var inst_21651 = cljs.core.async.close_BANG_.call(null,inst_21650);
var inst_21652 = cljs.core.next.call(null,inst_21640);
var inst_21626 = inst_21652;
var inst_21627 = null;
var inst_21628 = (0);
var inst_21629 = (0);
var state_21685__$1 = (function (){var statearr_21705 = state_21685;
(statearr_21705[(12)] = inst_21629);

(statearr_21705[(13)] = inst_21627);

(statearr_21705[(14)] = inst_21628);

(statearr_21705[(15)] = inst_21651);

(statearr_21705[(16)] = inst_21626);

return statearr_21705;
})();
var statearr_21706_21753 = state_21685__$1;
(statearr_21706_21753[(2)] = null);

(statearr_21706_21753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (3))){
var inst_21683 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21685__$1,inst_21683);
} else {
if((state_val_21686 === (12))){
var inst_21660 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21707_21754 = state_21685__$1;
(statearr_21707_21754[(2)] = inst_21660);

(statearr_21707_21754[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (2))){
var state_21685__$1 = state_21685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21685__$1,(4),ch);
} else {
if((state_val_21686 === (23))){
var state_21685__$1 = state_21685;
var statearr_21708_21755 = state_21685__$1;
(statearr_21708_21755[(2)] = null);

(statearr_21708_21755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (19))){
var inst_21616 = (state_21685[(8)]);
var inst_21666 = (state_21685[(11)]);
var inst_21668 = cljs.core.async.muxch_STAR_.call(null,inst_21666);
var state_21685__$1 = state_21685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21685__$1,(22),inst_21668,inst_21616);
} else {
if((state_val_21686 === (11))){
var inst_21640 = (state_21685[(10)]);
var inst_21626 = (state_21685[(16)]);
var inst_21640__$1 = cljs.core.seq.call(null,inst_21626);
var state_21685__$1 = (function (){var statearr_21709 = state_21685;
(statearr_21709[(10)] = inst_21640__$1);

return statearr_21709;
})();
if(inst_21640__$1){
var statearr_21710_21756 = state_21685__$1;
(statearr_21710_21756[(1)] = (13));

} else {
var statearr_21711_21757 = state_21685__$1;
(statearr_21711_21757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (9))){
var inst_21662 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21712_21758 = state_21685__$1;
(statearr_21712_21758[(2)] = inst_21662);

(statearr_21712_21758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (5))){
var inst_21623 = cljs.core.deref.call(null,mults);
var inst_21624 = cljs.core.vals.call(null,inst_21623);
var inst_21625 = cljs.core.seq.call(null,inst_21624);
var inst_21626 = inst_21625;
var inst_21627 = null;
var inst_21628 = (0);
var inst_21629 = (0);
var state_21685__$1 = (function (){var statearr_21713 = state_21685;
(statearr_21713[(12)] = inst_21629);

(statearr_21713[(13)] = inst_21627);

(statearr_21713[(14)] = inst_21628);

(statearr_21713[(16)] = inst_21626);

return statearr_21713;
})();
var statearr_21714_21759 = state_21685__$1;
(statearr_21714_21759[(2)] = null);

(statearr_21714_21759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (14))){
var state_21685__$1 = state_21685;
var statearr_21718_21760 = state_21685__$1;
(statearr_21718_21760[(2)] = null);

(statearr_21718_21760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (16))){
var inst_21640 = (state_21685[(10)]);
var inst_21644 = cljs.core.chunk_first.call(null,inst_21640);
var inst_21645 = cljs.core.chunk_rest.call(null,inst_21640);
var inst_21646 = cljs.core.count.call(null,inst_21644);
var inst_21626 = inst_21645;
var inst_21627 = inst_21644;
var inst_21628 = inst_21646;
var inst_21629 = (0);
var state_21685__$1 = (function (){var statearr_21719 = state_21685;
(statearr_21719[(12)] = inst_21629);

(statearr_21719[(13)] = inst_21627);

(statearr_21719[(14)] = inst_21628);

(statearr_21719[(16)] = inst_21626);

return statearr_21719;
})();
var statearr_21720_21761 = state_21685__$1;
(statearr_21720_21761[(2)] = null);

(statearr_21720_21761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (10))){
var inst_21629 = (state_21685[(12)]);
var inst_21627 = (state_21685[(13)]);
var inst_21628 = (state_21685[(14)]);
var inst_21626 = (state_21685[(16)]);
var inst_21634 = cljs.core._nth.call(null,inst_21627,inst_21629);
var inst_21635 = cljs.core.async.muxch_STAR_.call(null,inst_21634);
var inst_21636 = cljs.core.async.close_BANG_.call(null,inst_21635);
var inst_21637 = (inst_21629 + (1));
var tmp21715 = inst_21627;
var tmp21716 = inst_21628;
var tmp21717 = inst_21626;
var inst_21626__$1 = tmp21717;
var inst_21627__$1 = tmp21715;
var inst_21628__$1 = tmp21716;
var inst_21629__$1 = inst_21637;
var state_21685__$1 = (function (){var statearr_21721 = state_21685;
(statearr_21721[(17)] = inst_21636);

(statearr_21721[(12)] = inst_21629__$1);

(statearr_21721[(13)] = inst_21627__$1);

(statearr_21721[(14)] = inst_21628__$1);

(statearr_21721[(16)] = inst_21626__$1);

return statearr_21721;
})();
var statearr_21722_21762 = state_21685__$1;
(statearr_21722_21762[(2)] = null);

(statearr_21722_21762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (18))){
var inst_21655 = (state_21685[(2)]);
var state_21685__$1 = state_21685;
var statearr_21723_21763 = state_21685__$1;
(statearr_21723_21763[(2)] = inst_21655);

(statearr_21723_21763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21686 === (8))){
var inst_21629 = (state_21685[(12)]);
var inst_21628 = (state_21685[(14)]);
var inst_21631 = (inst_21629 < inst_21628);
var inst_21632 = inst_21631;
var state_21685__$1 = state_21685;
if(cljs.core.truth_(inst_21632)){
var statearr_21724_21764 = state_21685__$1;
(statearr_21724_21764[(1)] = (10));

} else {
var statearr_21725_21765 = state_21685__$1;
(statearr_21725_21765[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19838__auto___21737,mults,ensure_mult,p))
;
return ((function (switch__19726__auto__,c__19838__auto___21737,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_21729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21729[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_21729[(1)] = (1));

return statearr_21729;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_21685){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_21685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e21730){if((e21730 instanceof Object)){
var ex__19730__auto__ = e21730;
var statearr_21731_21766 = state_21685;
(statearr_21731_21766[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21767 = state_21685;
state_21685 = G__21767;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_21685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_21685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___21737,mults,ensure_mult,p))
})();
var state__19840__auto__ = (function (){var statearr_21732 = f__19839__auto__.call(null);
(statearr_21732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___21737);

return statearr_21732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___21737,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21768 = [];
var len__17884__auto___21771 = arguments.length;
var i__17885__auto___21772 = (0);
while(true){
if((i__17885__auto___21772 < len__17884__auto___21771)){
args21768.push((arguments[i__17885__auto___21772]));

var G__21773 = (i__17885__auto___21772 + (1));
i__17885__auto___21772 = G__21773;
continue;
} else {
}
break;
}

var G__21770 = args21768.length;
switch (G__21770) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21768.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21775 = [];
var len__17884__auto___21778 = arguments.length;
var i__17885__auto___21779 = (0);
while(true){
if((i__17885__auto___21779 < len__17884__auto___21778)){
args21775.push((arguments[i__17885__auto___21779]));

var G__21780 = (i__17885__auto___21779 + (1));
i__17885__auto___21779 = G__21780;
continue;
} else {
}
break;
}

var G__21777 = args21775.length;
switch (G__21777) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21775.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21782 = [];
var len__17884__auto___21853 = arguments.length;
var i__17885__auto___21854 = (0);
while(true){
if((i__17885__auto___21854 < len__17884__auto___21853)){
args21782.push((arguments[i__17885__auto___21854]));

var G__21855 = (i__17885__auto___21854 + (1));
i__17885__auto___21854 = G__21855;
continue;
} else {
}
break;
}

var G__21784 = args21782.length;
switch (G__21784) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21782.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19838__auto___21857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___21857,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___21857,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21823){
var state_val_21824 = (state_21823[(1)]);
if((state_val_21824 === (7))){
var state_21823__$1 = state_21823;
var statearr_21825_21858 = state_21823__$1;
(statearr_21825_21858[(2)] = null);

(statearr_21825_21858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (1))){
var state_21823__$1 = state_21823;
var statearr_21826_21859 = state_21823__$1;
(statearr_21826_21859[(2)] = null);

(statearr_21826_21859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (4))){
var inst_21787 = (state_21823[(7)]);
var inst_21789 = (inst_21787 < cnt);
var state_21823__$1 = state_21823;
if(cljs.core.truth_(inst_21789)){
var statearr_21827_21860 = state_21823__$1;
(statearr_21827_21860[(1)] = (6));

} else {
var statearr_21828_21861 = state_21823__$1;
(statearr_21828_21861[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (15))){
var inst_21819 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
var statearr_21829_21862 = state_21823__$1;
(statearr_21829_21862[(2)] = inst_21819);

(statearr_21829_21862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (13))){
var inst_21812 = cljs.core.async.close_BANG_.call(null,out);
var state_21823__$1 = state_21823;
var statearr_21830_21863 = state_21823__$1;
(statearr_21830_21863[(2)] = inst_21812);

(statearr_21830_21863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (6))){
var state_21823__$1 = state_21823;
var statearr_21831_21864 = state_21823__$1;
(statearr_21831_21864[(2)] = null);

(statearr_21831_21864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (3))){
var inst_21821 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21823__$1,inst_21821);
} else {
if((state_val_21824 === (12))){
var inst_21809 = (state_21823[(8)]);
var inst_21809__$1 = (state_21823[(2)]);
var inst_21810 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21809__$1);
var state_21823__$1 = (function (){var statearr_21832 = state_21823;
(statearr_21832[(8)] = inst_21809__$1);

return statearr_21832;
})();
if(cljs.core.truth_(inst_21810)){
var statearr_21833_21865 = state_21823__$1;
(statearr_21833_21865[(1)] = (13));

} else {
var statearr_21834_21866 = state_21823__$1;
(statearr_21834_21866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (2))){
var inst_21786 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21787 = (0);
var state_21823__$1 = (function (){var statearr_21835 = state_21823;
(statearr_21835[(7)] = inst_21787);

(statearr_21835[(9)] = inst_21786);

return statearr_21835;
})();
var statearr_21836_21867 = state_21823__$1;
(statearr_21836_21867[(2)] = null);

(statearr_21836_21867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (11))){
var inst_21787 = (state_21823[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21823,(10),Object,null,(9));
var inst_21796 = chs__$1.call(null,inst_21787);
var inst_21797 = done.call(null,inst_21787);
var inst_21798 = cljs.core.async.take_BANG_.call(null,inst_21796,inst_21797);
var state_21823__$1 = state_21823;
var statearr_21837_21868 = state_21823__$1;
(statearr_21837_21868[(2)] = inst_21798);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21823__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (9))){
var inst_21787 = (state_21823[(7)]);
var inst_21800 = (state_21823[(2)]);
var inst_21801 = (inst_21787 + (1));
var inst_21787__$1 = inst_21801;
var state_21823__$1 = (function (){var statearr_21838 = state_21823;
(statearr_21838[(7)] = inst_21787__$1);

(statearr_21838[(10)] = inst_21800);

return statearr_21838;
})();
var statearr_21839_21869 = state_21823__$1;
(statearr_21839_21869[(2)] = null);

(statearr_21839_21869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (5))){
var inst_21807 = (state_21823[(2)]);
var state_21823__$1 = (function (){var statearr_21840 = state_21823;
(statearr_21840[(11)] = inst_21807);

return statearr_21840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21823__$1,(12),dchan);
} else {
if((state_val_21824 === (14))){
var inst_21809 = (state_21823[(8)]);
var inst_21814 = cljs.core.apply.call(null,f,inst_21809);
var state_21823__$1 = state_21823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21823__$1,(16),out,inst_21814);
} else {
if((state_val_21824 === (16))){
var inst_21816 = (state_21823[(2)]);
var state_21823__$1 = (function (){var statearr_21841 = state_21823;
(statearr_21841[(12)] = inst_21816);

return statearr_21841;
})();
var statearr_21842_21870 = state_21823__$1;
(statearr_21842_21870[(2)] = null);

(statearr_21842_21870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (10))){
var inst_21791 = (state_21823[(2)]);
var inst_21792 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21823__$1 = (function (){var statearr_21843 = state_21823;
(statearr_21843[(13)] = inst_21791);

return statearr_21843;
})();
var statearr_21844_21871 = state_21823__$1;
(statearr_21844_21871[(2)] = inst_21792);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21823__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21824 === (8))){
var inst_21805 = (state_21823[(2)]);
var state_21823__$1 = state_21823;
var statearr_21845_21872 = state_21823__$1;
(statearr_21845_21872[(2)] = inst_21805);

(statearr_21845_21872[(1)] = (5));


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
});})(c__19838__auto___21857,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19726__auto__,c__19838__auto___21857,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_21849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21849[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_21849[(1)] = (1));

return statearr_21849;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_21823){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_21823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e21850){if((e21850 instanceof Object)){
var ex__19730__auto__ = e21850;
var statearr_21851_21873 = state_21823;
(statearr_21851_21873[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21874 = state_21823;
state_21823 = G__21874;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_21823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_21823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___21857,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19840__auto__ = (function (){var statearr_21852 = f__19839__auto__.call(null);
(statearr_21852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___21857);

return statearr_21852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___21857,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21876 = [];
var len__17884__auto___21932 = arguments.length;
var i__17885__auto___21933 = (0);
while(true){
if((i__17885__auto___21933 < len__17884__auto___21932)){
args21876.push((arguments[i__17885__auto___21933]));

var G__21934 = (i__17885__auto___21933 + (1));
i__17885__auto___21933 = G__21934;
continue;
} else {
}
break;
}

var G__21878 = args21876.length;
switch (G__21878) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21876.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19838__auto___21936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___21936,out){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___21936,out){
return (function (state_21908){
var state_val_21909 = (state_21908[(1)]);
if((state_val_21909 === (7))){
var inst_21888 = (state_21908[(7)]);
var inst_21887 = (state_21908[(8)]);
var inst_21887__$1 = (state_21908[(2)]);
var inst_21888__$1 = cljs.core.nth.call(null,inst_21887__$1,(0),null);
var inst_21889 = cljs.core.nth.call(null,inst_21887__$1,(1),null);
var inst_21890 = (inst_21888__$1 == null);
var state_21908__$1 = (function (){var statearr_21910 = state_21908;
(statearr_21910[(7)] = inst_21888__$1);

(statearr_21910[(9)] = inst_21889);

(statearr_21910[(8)] = inst_21887__$1);

return statearr_21910;
})();
if(cljs.core.truth_(inst_21890)){
var statearr_21911_21937 = state_21908__$1;
(statearr_21911_21937[(1)] = (8));

} else {
var statearr_21912_21938 = state_21908__$1;
(statearr_21912_21938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21909 === (1))){
var inst_21879 = cljs.core.vec.call(null,chs);
var inst_21880 = inst_21879;
var state_21908__$1 = (function (){var statearr_21913 = state_21908;
(statearr_21913[(10)] = inst_21880);

return statearr_21913;
})();
var statearr_21914_21939 = state_21908__$1;
(statearr_21914_21939[(2)] = null);

(statearr_21914_21939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21909 === (4))){
var inst_21880 = (state_21908[(10)]);
var state_21908__$1 = state_21908;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21908__$1,(7),inst_21880);
} else {
if((state_val_21909 === (6))){
var inst_21904 = (state_21908[(2)]);
var state_21908__$1 = state_21908;
var statearr_21915_21940 = state_21908__$1;
(statearr_21915_21940[(2)] = inst_21904);

(statearr_21915_21940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21909 === (3))){
var inst_21906 = (state_21908[(2)]);
var state_21908__$1 = state_21908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21908__$1,inst_21906);
} else {
if((state_val_21909 === (2))){
var inst_21880 = (state_21908[(10)]);
var inst_21882 = cljs.core.count.call(null,inst_21880);
var inst_21883 = (inst_21882 > (0));
var state_21908__$1 = state_21908;
if(cljs.core.truth_(inst_21883)){
var statearr_21917_21941 = state_21908__$1;
(statearr_21917_21941[(1)] = (4));

} else {
var statearr_21918_21942 = state_21908__$1;
(statearr_21918_21942[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21909 === (11))){
var inst_21880 = (state_21908[(10)]);
var inst_21897 = (state_21908[(2)]);
var tmp21916 = inst_21880;
var inst_21880__$1 = tmp21916;
var state_21908__$1 = (function (){var statearr_21919 = state_21908;
(statearr_21919[(10)] = inst_21880__$1);

(statearr_21919[(11)] = inst_21897);

return statearr_21919;
})();
var statearr_21920_21943 = state_21908__$1;
(statearr_21920_21943[(2)] = null);

(statearr_21920_21943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21909 === (9))){
var inst_21888 = (state_21908[(7)]);
var state_21908__$1 = state_21908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21908__$1,(11),out,inst_21888);
} else {
if((state_val_21909 === (5))){
var inst_21902 = cljs.core.async.close_BANG_.call(null,out);
var state_21908__$1 = state_21908;
var statearr_21921_21944 = state_21908__$1;
(statearr_21921_21944[(2)] = inst_21902);

(statearr_21921_21944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21909 === (10))){
var inst_21900 = (state_21908[(2)]);
var state_21908__$1 = state_21908;
var statearr_21922_21945 = state_21908__$1;
(statearr_21922_21945[(2)] = inst_21900);

(statearr_21922_21945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21909 === (8))){
var inst_21880 = (state_21908[(10)]);
var inst_21888 = (state_21908[(7)]);
var inst_21889 = (state_21908[(9)]);
var inst_21887 = (state_21908[(8)]);
var inst_21892 = (function (){var cs = inst_21880;
var vec__21885 = inst_21887;
var v = inst_21888;
var c = inst_21889;
return ((function (cs,vec__21885,v,c,inst_21880,inst_21888,inst_21889,inst_21887,state_val_21909,c__19838__auto___21936,out){
return (function (p1__21875_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21875_SHARP_);
});
;})(cs,vec__21885,v,c,inst_21880,inst_21888,inst_21889,inst_21887,state_val_21909,c__19838__auto___21936,out))
})();
var inst_21893 = cljs.core.filterv.call(null,inst_21892,inst_21880);
var inst_21880__$1 = inst_21893;
var state_21908__$1 = (function (){var statearr_21923 = state_21908;
(statearr_21923[(10)] = inst_21880__$1);

return statearr_21923;
})();
var statearr_21924_21946 = state_21908__$1;
(statearr_21924_21946[(2)] = null);

(statearr_21924_21946[(1)] = (2));


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
});})(c__19838__auto___21936,out))
;
return ((function (switch__19726__auto__,c__19838__auto___21936,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_21928 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21928[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_21928[(1)] = (1));

return statearr_21928;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_21908){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_21908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e21929){if((e21929 instanceof Object)){
var ex__19730__auto__ = e21929;
var statearr_21930_21947 = state_21908;
(statearr_21930_21947[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21948 = state_21908;
state_21908 = G__21948;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_21908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_21908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___21936,out))
})();
var state__19840__auto__ = (function (){var statearr_21931 = f__19839__auto__.call(null);
(statearr_21931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___21936);

return statearr_21931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___21936,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21949 = [];
var len__17884__auto___21998 = arguments.length;
var i__17885__auto___21999 = (0);
while(true){
if((i__17885__auto___21999 < len__17884__auto___21998)){
args21949.push((arguments[i__17885__auto___21999]));

var G__22000 = (i__17885__auto___21999 + (1));
i__17885__auto___21999 = G__22000;
continue;
} else {
}
break;
}

var G__21951 = args21949.length;
switch (G__21951) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21949.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19838__auto___22002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___22002,out){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___22002,out){
return (function (state_21975){
var state_val_21976 = (state_21975[(1)]);
if((state_val_21976 === (7))){
var inst_21957 = (state_21975[(7)]);
var inst_21957__$1 = (state_21975[(2)]);
var inst_21958 = (inst_21957__$1 == null);
var inst_21959 = cljs.core.not.call(null,inst_21958);
var state_21975__$1 = (function (){var statearr_21977 = state_21975;
(statearr_21977[(7)] = inst_21957__$1);

return statearr_21977;
})();
if(inst_21959){
var statearr_21978_22003 = state_21975__$1;
(statearr_21978_22003[(1)] = (8));

} else {
var statearr_21979_22004 = state_21975__$1;
(statearr_21979_22004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (1))){
var inst_21952 = (0);
var state_21975__$1 = (function (){var statearr_21980 = state_21975;
(statearr_21980[(8)] = inst_21952);

return statearr_21980;
})();
var statearr_21981_22005 = state_21975__$1;
(statearr_21981_22005[(2)] = null);

(statearr_21981_22005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (4))){
var state_21975__$1 = state_21975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21975__$1,(7),ch);
} else {
if((state_val_21976 === (6))){
var inst_21970 = (state_21975[(2)]);
var state_21975__$1 = state_21975;
var statearr_21982_22006 = state_21975__$1;
(statearr_21982_22006[(2)] = inst_21970);

(statearr_21982_22006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (3))){
var inst_21972 = (state_21975[(2)]);
var inst_21973 = cljs.core.async.close_BANG_.call(null,out);
var state_21975__$1 = (function (){var statearr_21983 = state_21975;
(statearr_21983[(9)] = inst_21972);

return statearr_21983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21975__$1,inst_21973);
} else {
if((state_val_21976 === (2))){
var inst_21952 = (state_21975[(8)]);
var inst_21954 = (inst_21952 < n);
var state_21975__$1 = state_21975;
if(cljs.core.truth_(inst_21954)){
var statearr_21984_22007 = state_21975__$1;
(statearr_21984_22007[(1)] = (4));

} else {
var statearr_21985_22008 = state_21975__$1;
(statearr_21985_22008[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (11))){
var inst_21952 = (state_21975[(8)]);
var inst_21962 = (state_21975[(2)]);
var inst_21963 = (inst_21952 + (1));
var inst_21952__$1 = inst_21963;
var state_21975__$1 = (function (){var statearr_21986 = state_21975;
(statearr_21986[(8)] = inst_21952__$1);

(statearr_21986[(10)] = inst_21962);

return statearr_21986;
})();
var statearr_21987_22009 = state_21975__$1;
(statearr_21987_22009[(2)] = null);

(statearr_21987_22009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (9))){
var state_21975__$1 = state_21975;
var statearr_21988_22010 = state_21975__$1;
(statearr_21988_22010[(2)] = null);

(statearr_21988_22010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (5))){
var state_21975__$1 = state_21975;
var statearr_21989_22011 = state_21975__$1;
(statearr_21989_22011[(2)] = null);

(statearr_21989_22011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (10))){
var inst_21967 = (state_21975[(2)]);
var state_21975__$1 = state_21975;
var statearr_21990_22012 = state_21975__$1;
(statearr_21990_22012[(2)] = inst_21967);

(statearr_21990_22012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21976 === (8))){
var inst_21957 = (state_21975[(7)]);
var state_21975__$1 = state_21975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21975__$1,(11),out,inst_21957);
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
});})(c__19838__auto___22002,out))
;
return ((function (switch__19726__auto__,c__19838__auto___22002,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_21994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21994[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_21994[(1)] = (1));

return statearr_21994;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_21975){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_21975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e21995){if((e21995 instanceof Object)){
var ex__19730__auto__ = e21995;
var statearr_21996_22013 = state_21975;
(statearr_21996_22013[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22014 = state_21975;
state_21975 = G__22014;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_21975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_21975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___22002,out))
})();
var state__19840__auto__ = (function (){var statearr_21997 = f__19839__auto__.call(null);
(statearr_21997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___22002);

return statearr_21997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___22002,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22022 = (function (map_LT_,f,ch,meta22023){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22023 = meta22023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22024,meta22023__$1){
var self__ = this;
var _22024__$1 = this;
return (new cljs.core.async.t_cljs$core$async22022(self__.map_LT_,self__.f,self__.ch,meta22023__$1));
});

cljs.core.async.t_cljs$core$async22022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22024){
var self__ = this;
var _22024__$1 = this;
return self__.meta22023;
});

cljs.core.async.t_cljs$core$async22022.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22022.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22022.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22025 = (function (map_LT_,f,ch,meta22023,_,fn1,meta22026){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22023 = meta22023;
this._ = _;
this.fn1 = fn1;
this.meta22026 = meta22026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22027,meta22026__$1){
var self__ = this;
var _22027__$1 = this;
return (new cljs.core.async.t_cljs$core$async22025(self__.map_LT_,self__.f,self__.ch,self__.meta22023,self__._,self__.fn1,meta22026__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22027){
var self__ = this;
var _22027__$1 = this;
return self__.meta22026;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22015_SHARP_){
return f1.call(null,(((p1__22015_SHARP_ == null))?null:self__.f.call(null,p1__22015_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22025.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22023","meta22023",2010479903,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22022","cljs.core.async/t_cljs$core$async22022",-97770831,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22026","meta22026",-1833228490,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22025";

cljs.core.async.t_cljs$core$async22025.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22025");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22025 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22025(map_LT___$1,f__$1,ch__$1,meta22023__$1,___$2,fn1__$1,meta22026){
return (new cljs.core.async.t_cljs$core$async22025(map_LT___$1,f__$1,ch__$1,meta22023__$1,___$2,fn1__$1,meta22026));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22025(self__.map_LT_,self__.f,self__.ch,self__.meta22023,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22022.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22023","meta22023",2010479903,null)], null);
});

cljs.core.async.t_cljs$core$async22022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22022";

cljs.core.async.t_cljs$core$async22022.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22022");
});

cljs.core.async.__GT_t_cljs$core$async22022 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22022(map_LT___$1,f__$1,ch__$1,meta22023){
return (new cljs.core.async.t_cljs$core$async22022(map_LT___$1,f__$1,ch__$1,meta22023));
});

}

return (new cljs.core.async.t_cljs$core$async22022(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22031 = (function (map_GT_,f,ch,meta22032){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22032 = meta22032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22033,meta22032__$1){
var self__ = this;
var _22033__$1 = this;
return (new cljs.core.async.t_cljs$core$async22031(self__.map_GT_,self__.f,self__.ch,meta22032__$1));
});

cljs.core.async.t_cljs$core$async22031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22033){
var self__ = this;
var _22033__$1 = this;
return self__.meta22032;
});

cljs.core.async.t_cljs$core$async22031.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22031.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22031.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22032","meta22032",1651548619,null)], null);
});

cljs.core.async.t_cljs$core$async22031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22031";

cljs.core.async.t_cljs$core$async22031.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22031");
});

cljs.core.async.__GT_t_cljs$core$async22031 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22031(map_GT___$1,f__$1,ch__$1,meta22032){
return (new cljs.core.async.t_cljs$core$async22031(map_GT___$1,f__$1,ch__$1,meta22032));
});

}

return (new cljs.core.async.t_cljs$core$async22031(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22037 = (function (filter_GT_,p,ch,meta22038){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22038 = meta22038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22039,meta22038__$1){
var self__ = this;
var _22039__$1 = this;
return (new cljs.core.async.t_cljs$core$async22037(self__.filter_GT_,self__.p,self__.ch,meta22038__$1));
});

cljs.core.async.t_cljs$core$async22037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22039){
var self__ = this;
var _22039__$1 = this;
return self__.meta22038;
});

cljs.core.async.t_cljs$core$async22037.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22037.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22037.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22037.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22038","meta22038",-2015075600,null)], null);
});

cljs.core.async.t_cljs$core$async22037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22037";

cljs.core.async.t_cljs$core$async22037.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22037");
});

cljs.core.async.__GT_t_cljs$core$async22037 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22037(filter_GT___$1,p__$1,ch__$1,meta22038){
return (new cljs.core.async.t_cljs$core$async22037(filter_GT___$1,p__$1,ch__$1,meta22038));
});

}

return (new cljs.core.async.t_cljs$core$async22037(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22040 = [];
var len__17884__auto___22084 = arguments.length;
var i__17885__auto___22085 = (0);
while(true){
if((i__17885__auto___22085 < len__17884__auto___22084)){
args22040.push((arguments[i__17885__auto___22085]));

var G__22086 = (i__17885__auto___22085 + (1));
i__17885__auto___22085 = G__22086;
continue;
} else {
}
break;
}

var G__22042 = args22040.length;
switch (G__22042) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22040.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19838__auto___22088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___22088,out){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___22088,out){
return (function (state_22063){
var state_val_22064 = (state_22063[(1)]);
if((state_val_22064 === (7))){
var inst_22059 = (state_22063[(2)]);
var state_22063__$1 = state_22063;
var statearr_22065_22089 = state_22063__$1;
(statearr_22065_22089[(2)] = inst_22059);

(statearr_22065_22089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22064 === (1))){
var state_22063__$1 = state_22063;
var statearr_22066_22090 = state_22063__$1;
(statearr_22066_22090[(2)] = null);

(statearr_22066_22090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22064 === (4))){
var inst_22045 = (state_22063[(7)]);
var inst_22045__$1 = (state_22063[(2)]);
var inst_22046 = (inst_22045__$1 == null);
var state_22063__$1 = (function (){var statearr_22067 = state_22063;
(statearr_22067[(7)] = inst_22045__$1);

return statearr_22067;
})();
if(cljs.core.truth_(inst_22046)){
var statearr_22068_22091 = state_22063__$1;
(statearr_22068_22091[(1)] = (5));

} else {
var statearr_22069_22092 = state_22063__$1;
(statearr_22069_22092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22064 === (6))){
var inst_22045 = (state_22063[(7)]);
var inst_22050 = p.call(null,inst_22045);
var state_22063__$1 = state_22063;
if(cljs.core.truth_(inst_22050)){
var statearr_22070_22093 = state_22063__$1;
(statearr_22070_22093[(1)] = (8));

} else {
var statearr_22071_22094 = state_22063__$1;
(statearr_22071_22094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22064 === (3))){
var inst_22061 = (state_22063[(2)]);
var state_22063__$1 = state_22063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22063__$1,inst_22061);
} else {
if((state_val_22064 === (2))){
var state_22063__$1 = state_22063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22063__$1,(4),ch);
} else {
if((state_val_22064 === (11))){
var inst_22053 = (state_22063[(2)]);
var state_22063__$1 = state_22063;
var statearr_22072_22095 = state_22063__$1;
(statearr_22072_22095[(2)] = inst_22053);

(statearr_22072_22095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22064 === (9))){
var state_22063__$1 = state_22063;
var statearr_22073_22096 = state_22063__$1;
(statearr_22073_22096[(2)] = null);

(statearr_22073_22096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22064 === (5))){
var inst_22048 = cljs.core.async.close_BANG_.call(null,out);
var state_22063__$1 = state_22063;
var statearr_22074_22097 = state_22063__$1;
(statearr_22074_22097[(2)] = inst_22048);

(statearr_22074_22097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22064 === (10))){
var inst_22056 = (state_22063[(2)]);
var state_22063__$1 = (function (){var statearr_22075 = state_22063;
(statearr_22075[(8)] = inst_22056);

return statearr_22075;
})();
var statearr_22076_22098 = state_22063__$1;
(statearr_22076_22098[(2)] = null);

(statearr_22076_22098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22064 === (8))){
var inst_22045 = (state_22063[(7)]);
var state_22063__$1 = state_22063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22063__$1,(11),out,inst_22045);
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
});})(c__19838__auto___22088,out))
;
return ((function (switch__19726__auto__,c__19838__auto___22088,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_22080 = [null,null,null,null,null,null,null,null,null];
(statearr_22080[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_22080[(1)] = (1));

return statearr_22080;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_22063){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_22063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e22081){if((e22081 instanceof Object)){
var ex__19730__auto__ = e22081;
var statearr_22082_22099 = state_22063;
(statearr_22082_22099[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22100 = state_22063;
state_22063 = G__22100;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_22063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_22063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___22088,out))
})();
var state__19840__auto__ = (function (){var statearr_22083 = f__19839__auto__.call(null);
(statearr_22083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___22088);

return statearr_22083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___22088,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22101 = [];
var len__17884__auto___22104 = arguments.length;
var i__17885__auto___22105 = (0);
while(true){
if((i__17885__auto___22105 < len__17884__auto___22104)){
args22101.push((arguments[i__17885__auto___22105]));

var G__22106 = (i__17885__auto___22105 + (1));
i__17885__auto___22105 = G__22106;
continue;
} else {
}
break;
}

var G__22103 = args22101.length;
switch (G__22103) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22101.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__){
return (function (state_22273){
var state_val_22274 = (state_22273[(1)]);
if((state_val_22274 === (7))){
var inst_22269 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
var statearr_22275_22316 = state_22273__$1;
(statearr_22275_22316[(2)] = inst_22269);

(statearr_22275_22316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (20))){
var inst_22239 = (state_22273[(7)]);
var inst_22250 = (state_22273[(2)]);
var inst_22251 = cljs.core.next.call(null,inst_22239);
var inst_22225 = inst_22251;
var inst_22226 = null;
var inst_22227 = (0);
var inst_22228 = (0);
var state_22273__$1 = (function (){var statearr_22276 = state_22273;
(statearr_22276[(8)] = inst_22227);

(statearr_22276[(9)] = inst_22250);

(statearr_22276[(10)] = inst_22228);

(statearr_22276[(11)] = inst_22225);

(statearr_22276[(12)] = inst_22226);

return statearr_22276;
})();
var statearr_22277_22317 = state_22273__$1;
(statearr_22277_22317[(2)] = null);

(statearr_22277_22317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (1))){
var state_22273__$1 = state_22273;
var statearr_22278_22318 = state_22273__$1;
(statearr_22278_22318[(2)] = null);

(statearr_22278_22318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (4))){
var inst_22214 = (state_22273[(13)]);
var inst_22214__$1 = (state_22273[(2)]);
var inst_22215 = (inst_22214__$1 == null);
var state_22273__$1 = (function (){var statearr_22279 = state_22273;
(statearr_22279[(13)] = inst_22214__$1);

return statearr_22279;
})();
if(cljs.core.truth_(inst_22215)){
var statearr_22280_22319 = state_22273__$1;
(statearr_22280_22319[(1)] = (5));

} else {
var statearr_22281_22320 = state_22273__$1;
(statearr_22281_22320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (15))){
var state_22273__$1 = state_22273;
var statearr_22285_22321 = state_22273__$1;
(statearr_22285_22321[(2)] = null);

(statearr_22285_22321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (21))){
var state_22273__$1 = state_22273;
var statearr_22286_22322 = state_22273__$1;
(statearr_22286_22322[(2)] = null);

(statearr_22286_22322[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (13))){
var inst_22227 = (state_22273[(8)]);
var inst_22228 = (state_22273[(10)]);
var inst_22225 = (state_22273[(11)]);
var inst_22226 = (state_22273[(12)]);
var inst_22235 = (state_22273[(2)]);
var inst_22236 = (inst_22228 + (1));
var tmp22282 = inst_22227;
var tmp22283 = inst_22225;
var tmp22284 = inst_22226;
var inst_22225__$1 = tmp22283;
var inst_22226__$1 = tmp22284;
var inst_22227__$1 = tmp22282;
var inst_22228__$1 = inst_22236;
var state_22273__$1 = (function (){var statearr_22287 = state_22273;
(statearr_22287[(8)] = inst_22227__$1);

(statearr_22287[(10)] = inst_22228__$1);

(statearr_22287[(14)] = inst_22235);

(statearr_22287[(11)] = inst_22225__$1);

(statearr_22287[(12)] = inst_22226__$1);

return statearr_22287;
})();
var statearr_22288_22323 = state_22273__$1;
(statearr_22288_22323[(2)] = null);

(statearr_22288_22323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (22))){
var state_22273__$1 = state_22273;
var statearr_22289_22324 = state_22273__$1;
(statearr_22289_22324[(2)] = null);

(statearr_22289_22324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (6))){
var inst_22214 = (state_22273[(13)]);
var inst_22223 = f.call(null,inst_22214);
var inst_22224 = cljs.core.seq.call(null,inst_22223);
var inst_22225 = inst_22224;
var inst_22226 = null;
var inst_22227 = (0);
var inst_22228 = (0);
var state_22273__$1 = (function (){var statearr_22290 = state_22273;
(statearr_22290[(8)] = inst_22227);

(statearr_22290[(10)] = inst_22228);

(statearr_22290[(11)] = inst_22225);

(statearr_22290[(12)] = inst_22226);

return statearr_22290;
})();
var statearr_22291_22325 = state_22273__$1;
(statearr_22291_22325[(2)] = null);

(statearr_22291_22325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (17))){
var inst_22239 = (state_22273[(7)]);
var inst_22243 = cljs.core.chunk_first.call(null,inst_22239);
var inst_22244 = cljs.core.chunk_rest.call(null,inst_22239);
var inst_22245 = cljs.core.count.call(null,inst_22243);
var inst_22225 = inst_22244;
var inst_22226 = inst_22243;
var inst_22227 = inst_22245;
var inst_22228 = (0);
var state_22273__$1 = (function (){var statearr_22292 = state_22273;
(statearr_22292[(8)] = inst_22227);

(statearr_22292[(10)] = inst_22228);

(statearr_22292[(11)] = inst_22225);

(statearr_22292[(12)] = inst_22226);

return statearr_22292;
})();
var statearr_22293_22326 = state_22273__$1;
(statearr_22293_22326[(2)] = null);

(statearr_22293_22326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (3))){
var inst_22271 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22273__$1,inst_22271);
} else {
if((state_val_22274 === (12))){
var inst_22259 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
var statearr_22294_22327 = state_22273__$1;
(statearr_22294_22327[(2)] = inst_22259);

(statearr_22294_22327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (2))){
var state_22273__$1 = state_22273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22273__$1,(4),in$);
} else {
if((state_val_22274 === (23))){
var inst_22267 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
var statearr_22295_22328 = state_22273__$1;
(statearr_22295_22328[(2)] = inst_22267);

(statearr_22295_22328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (19))){
var inst_22254 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
var statearr_22296_22329 = state_22273__$1;
(statearr_22296_22329[(2)] = inst_22254);

(statearr_22296_22329[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (11))){
var inst_22239 = (state_22273[(7)]);
var inst_22225 = (state_22273[(11)]);
var inst_22239__$1 = cljs.core.seq.call(null,inst_22225);
var state_22273__$1 = (function (){var statearr_22297 = state_22273;
(statearr_22297[(7)] = inst_22239__$1);

return statearr_22297;
})();
if(inst_22239__$1){
var statearr_22298_22330 = state_22273__$1;
(statearr_22298_22330[(1)] = (14));

} else {
var statearr_22299_22331 = state_22273__$1;
(statearr_22299_22331[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (9))){
var inst_22261 = (state_22273[(2)]);
var inst_22262 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22273__$1 = (function (){var statearr_22300 = state_22273;
(statearr_22300[(15)] = inst_22261);

return statearr_22300;
})();
if(cljs.core.truth_(inst_22262)){
var statearr_22301_22332 = state_22273__$1;
(statearr_22301_22332[(1)] = (21));

} else {
var statearr_22302_22333 = state_22273__$1;
(statearr_22302_22333[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (5))){
var inst_22217 = cljs.core.async.close_BANG_.call(null,out);
var state_22273__$1 = state_22273;
var statearr_22303_22334 = state_22273__$1;
(statearr_22303_22334[(2)] = inst_22217);

(statearr_22303_22334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (14))){
var inst_22239 = (state_22273[(7)]);
var inst_22241 = cljs.core.chunked_seq_QMARK_.call(null,inst_22239);
var state_22273__$1 = state_22273;
if(inst_22241){
var statearr_22304_22335 = state_22273__$1;
(statearr_22304_22335[(1)] = (17));

} else {
var statearr_22305_22336 = state_22273__$1;
(statearr_22305_22336[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (16))){
var inst_22257 = (state_22273[(2)]);
var state_22273__$1 = state_22273;
var statearr_22306_22337 = state_22273__$1;
(statearr_22306_22337[(2)] = inst_22257);

(statearr_22306_22337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22274 === (10))){
var inst_22228 = (state_22273[(10)]);
var inst_22226 = (state_22273[(12)]);
var inst_22233 = cljs.core._nth.call(null,inst_22226,inst_22228);
var state_22273__$1 = state_22273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22273__$1,(13),out,inst_22233);
} else {
if((state_val_22274 === (18))){
var inst_22239 = (state_22273[(7)]);
var inst_22248 = cljs.core.first.call(null,inst_22239);
var state_22273__$1 = state_22273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22273__$1,(20),out,inst_22248);
} else {
if((state_val_22274 === (8))){
var inst_22227 = (state_22273[(8)]);
var inst_22228 = (state_22273[(10)]);
var inst_22230 = (inst_22228 < inst_22227);
var inst_22231 = inst_22230;
var state_22273__$1 = state_22273;
if(cljs.core.truth_(inst_22231)){
var statearr_22307_22338 = state_22273__$1;
(statearr_22307_22338[(1)] = (10));

} else {
var statearr_22308_22339 = state_22273__$1;
(statearr_22308_22339[(1)] = (11));

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
}
}
}
}
}
}
});})(c__19838__auto__))
;
return ((function (switch__19726__auto__,c__19838__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____0 = (function (){
var statearr_22312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22312[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__);

(statearr_22312[(1)] = (1));

return statearr_22312;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____1 = (function (state_22273){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_22273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e22313){if((e22313 instanceof Object)){
var ex__19730__auto__ = e22313;
var statearr_22314_22340 = state_22273;
(statearr_22314_22340[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22341 = state_22273;
state_22273 = G__22341;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__ = function(state_22273){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____1.call(this,state_22273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19727__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__))
})();
var state__19840__auto__ = (function (){var statearr_22315 = f__19839__auto__.call(null);
(statearr_22315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_22315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__))
);

return c__19838__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22342 = [];
var len__17884__auto___22345 = arguments.length;
var i__17885__auto___22346 = (0);
while(true){
if((i__17885__auto___22346 < len__17884__auto___22345)){
args22342.push((arguments[i__17885__auto___22346]));

var G__22347 = (i__17885__auto___22346 + (1));
i__17885__auto___22346 = G__22347;
continue;
} else {
}
break;
}

var G__22344 = args22342.length;
switch (G__22344) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22342.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22349 = [];
var len__17884__auto___22352 = arguments.length;
var i__17885__auto___22353 = (0);
while(true){
if((i__17885__auto___22353 < len__17884__auto___22352)){
args22349.push((arguments[i__17885__auto___22353]));

var G__22354 = (i__17885__auto___22353 + (1));
i__17885__auto___22353 = G__22354;
continue;
} else {
}
break;
}

var G__22351 = args22349.length;
switch (G__22351) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22349.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22356 = [];
var len__17884__auto___22407 = arguments.length;
var i__17885__auto___22408 = (0);
while(true){
if((i__17885__auto___22408 < len__17884__auto___22407)){
args22356.push((arguments[i__17885__auto___22408]));

var G__22409 = (i__17885__auto___22408 + (1));
i__17885__auto___22408 = G__22409;
continue;
} else {
}
break;
}

var G__22358 = args22356.length;
switch (G__22358) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22356.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19838__auto___22411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___22411,out){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___22411,out){
return (function (state_22382){
var state_val_22383 = (state_22382[(1)]);
if((state_val_22383 === (7))){
var inst_22377 = (state_22382[(2)]);
var state_22382__$1 = state_22382;
var statearr_22384_22412 = state_22382__$1;
(statearr_22384_22412[(2)] = inst_22377);

(statearr_22384_22412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (1))){
var inst_22359 = null;
var state_22382__$1 = (function (){var statearr_22385 = state_22382;
(statearr_22385[(7)] = inst_22359);

return statearr_22385;
})();
var statearr_22386_22413 = state_22382__$1;
(statearr_22386_22413[(2)] = null);

(statearr_22386_22413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (4))){
var inst_22362 = (state_22382[(8)]);
var inst_22362__$1 = (state_22382[(2)]);
var inst_22363 = (inst_22362__$1 == null);
var inst_22364 = cljs.core.not.call(null,inst_22363);
var state_22382__$1 = (function (){var statearr_22387 = state_22382;
(statearr_22387[(8)] = inst_22362__$1);

return statearr_22387;
})();
if(inst_22364){
var statearr_22388_22414 = state_22382__$1;
(statearr_22388_22414[(1)] = (5));

} else {
var statearr_22389_22415 = state_22382__$1;
(statearr_22389_22415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (6))){
var state_22382__$1 = state_22382;
var statearr_22390_22416 = state_22382__$1;
(statearr_22390_22416[(2)] = null);

(statearr_22390_22416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (3))){
var inst_22379 = (state_22382[(2)]);
var inst_22380 = cljs.core.async.close_BANG_.call(null,out);
var state_22382__$1 = (function (){var statearr_22391 = state_22382;
(statearr_22391[(9)] = inst_22379);

return statearr_22391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22382__$1,inst_22380);
} else {
if((state_val_22383 === (2))){
var state_22382__$1 = state_22382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22382__$1,(4),ch);
} else {
if((state_val_22383 === (11))){
var inst_22362 = (state_22382[(8)]);
var inst_22371 = (state_22382[(2)]);
var inst_22359 = inst_22362;
var state_22382__$1 = (function (){var statearr_22392 = state_22382;
(statearr_22392[(7)] = inst_22359);

(statearr_22392[(10)] = inst_22371);

return statearr_22392;
})();
var statearr_22393_22417 = state_22382__$1;
(statearr_22393_22417[(2)] = null);

(statearr_22393_22417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (9))){
var inst_22362 = (state_22382[(8)]);
var state_22382__$1 = state_22382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22382__$1,(11),out,inst_22362);
} else {
if((state_val_22383 === (5))){
var inst_22362 = (state_22382[(8)]);
var inst_22359 = (state_22382[(7)]);
var inst_22366 = cljs.core._EQ_.call(null,inst_22362,inst_22359);
var state_22382__$1 = state_22382;
if(inst_22366){
var statearr_22395_22418 = state_22382__$1;
(statearr_22395_22418[(1)] = (8));

} else {
var statearr_22396_22419 = state_22382__$1;
(statearr_22396_22419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (10))){
var inst_22374 = (state_22382[(2)]);
var state_22382__$1 = state_22382;
var statearr_22397_22420 = state_22382__$1;
(statearr_22397_22420[(2)] = inst_22374);

(statearr_22397_22420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22383 === (8))){
var inst_22359 = (state_22382[(7)]);
var tmp22394 = inst_22359;
var inst_22359__$1 = tmp22394;
var state_22382__$1 = (function (){var statearr_22398 = state_22382;
(statearr_22398[(7)] = inst_22359__$1);

return statearr_22398;
})();
var statearr_22399_22421 = state_22382__$1;
(statearr_22399_22421[(2)] = null);

(statearr_22399_22421[(1)] = (2));


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
});})(c__19838__auto___22411,out))
;
return ((function (switch__19726__auto__,c__19838__auto___22411,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_22403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22403[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_22403[(1)] = (1));

return statearr_22403;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_22382){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_22382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e22404){if((e22404 instanceof Object)){
var ex__19730__auto__ = e22404;
var statearr_22405_22422 = state_22382;
(statearr_22405_22422[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22423 = state_22382;
state_22382 = G__22423;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_22382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_22382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___22411,out))
})();
var state__19840__auto__ = (function (){var statearr_22406 = f__19839__auto__.call(null);
(statearr_22406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___22411);

return statearr_22406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___22411,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22424 = [];
var len__17884__auto___22494 = arguments.length;
var i__17885__auto___22495 = (0);
while(true){
if((i__17885__auto___22495 < len__17884__auto___22494)){
args22424.push((arguments[i__17885__auto___22495]));

var G__22496 = (i__17885__auto___22495 + (1));
i__17885__auto___22495 = G__22496;
continue;
} else {
}
break;
}

var G__22426 = args22424.length;
switch (G__22426) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22424.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19838__auto___22498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___22498,out){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___22498,out){
return (function (state_22464){
var state_val_22465 = (state_22464[(1)]);
if((state_val_22465 === (7))){
var inst_22460 = (state_22464[(2)]);
var state_22464__$1 = state_22464;
var statearr_22466_22499 = state_22464__$1;
(statearr_22466_22499[(2)] = inst_22460);

(statearr_22466_22499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (1))){
var inst_22427 = (new Array(n));
var inst_22428 = inst_22427;
var inst_22429 = (0);
var state_22464__$1 = (function (){var statearr_22467 = state_22464;
(statearr_22467[(7)] = inst_22429);

(statearr_22467[(8)] = inst_22428);

return statearr_22467;
})();
var statearr_22468_22500 = state_22464__$1;
(statearr_22468_22500[(2)] = null);

(statearr_22468_22500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (4))){
var inst_22432 = (state_22464[(9)]);
var inst_22432__$1 = (state_22464[(2)]);
var inst_22433 = (inst_22432__$1 == null);
var inst_22434 = cljs.core.not.call(null,inst_22433);
var state_22464__$1 = (function (){var statearr_22469 = state_22464;
(statearr_22469[(9)] = inst_22432__$1);

return statearr_22469;
})();
if(inst_22434){
var statearr_22470_22501 = state_22464__$1;
(statearr_22470_22501[(1)] = (5));

} else {
var statearr_22471_22502 = state_22464__$1;
(statearr_22471_22502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (15))){
var inst_22454 = (state_22464[(2)]);
var state_22464__$1 = state_22464;
var statearr_22472_22503 = state_22464__$1;
(statearr_22472_22503[(2)] = inst_22454);

(statearr_22472_22503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (13))){
var state_22464__$1 = state_22464;
var statearr_22473_22504 = state_22464__$1;
(statearr_22473_22504[(2)] = null);

(statearr_22473_22504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (6))){
var inst_22429 = (state_22464[(7)]);
var inst_22450 = (inst_22429 > (0));
var state_22464__$1 = state_22464;
if(cljs.core.truth_(inst_22450)){
var statearr_22474_22505 = state_22464__$1;
(statearr_22474_22505[(1)] = (12));

} else {
var statearr_22475_22506 = state_22464__$1;
(statearr_22475_22506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (3))){
var inst_22462 = (state_22464[(2)]);
var state_22464__$1 = state_22464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22464__$1,inst_22462);
} else {
if((state_val_22465 === (12))){
var inst_22428 = (state_22464[(8)]);
var inst_22452 = cljs.core.vec.call(null,inst_22428);
var state_22464__$1 = state_22464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22464__$1,(15),out,inst_22452);
} else {
if((state_val_22465 === (2))){
var state_22464__$1 = state_22464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22464__$1,(4),ch);
} else {
if((state_val_22465 === (11))){
var inst_22444 = (state_22464[(2)]);
var inst_22445 = (new Array(n));
var inst_22428 = inst_22445;
var inst_22429 = (0);
var state_22464__$1 = (function (){var statearr_22476 = state_22464;
(statearr_22476[(10)] = inst_22444);

(statearr_22476[(7)] = inst_22429);

(statearr_22476[(8)] = inst_22428);

return statearr_22476;
})();
var statearr_22477_22507 = state_22464__$1;
(statearr_22477_22507[(2)] = null);

(statearr_22477_22507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (9))){
var inst_22428 = (state_22464[(8)]);
var inst_22442 = cljs.core.vec.call(null,inst_22428);
var state_22464__$1 = state_22464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22464__$1,(11),out,inst_22442);
} else {
if((state_val_22465 === (5))){
var inst_22429 = (state_22464[(7)]);
var inst_22437 = (state_22464[(11)]);
var inst_22428 = (state_22464[(8)]);
var inst_22432 = (state_22464[(9)]);
var inst_22436 = (inst_22428[inst_22429] = inst_22432);
var inst_22437__$1 = (inst_22429 + (1));
var inst_22438 = (inst_22437__$1 < n);
var state_22464__$1 = (function (){var statearr_22478 = state_22464;
(statearr_22478[(12)] = inst_22436);

(statearr_22478[(11)] = inst_22437__$1);

return statearr_22478;
})();
if(cljs.core.truth_(inst_22438)){
var statearr_22479_22508 = state_22464__$1;
(statearr_22479_22508[(1)] = (8));

} else {
var statearr_22480_22509 = state_22464__$1;
(statearr_22480_22509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (14))){
var inst_22457 = (state_22464[(2)]);
var inst_22458 = cljs.core.async.close_BANG_.call(null,out);
var state_22464__$1 = (function (){var statearr_22482 = state_22464;
(statearr_22482[(13)] = inst_22457);

return statearr_22482;
})();
var statearr_22483_22510 = state_22464__$1;
(statearr_22483_22510[(2)] = inst_22458);

(statearr_22483_22510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (10))){
var inst_22448 = (state_22464[(2)]);
var state_22464__$1 = state_22464;
var statearr_22484_22511 = state_22464__$1;
(statearr_22484_22511[(2)] = inst_22448);

(statearr_22484_22511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (8))){
var inst_22437 = (state_22464[(11)]);
var inst_22428 = (state_22464[(8)]);
var tmp22481 = inst_22428;
var inst_22428__$1 = tmp22481;
var inst_22429 = inst_22437;
var state_22464__$1 = (function (){var statearr_22485 = state_22464;
(statearr_22485[(7)] = inst_22429);

(statearr_22485[(8)] = inst_22428__$1);

return statearr_22485;
})();
var statearr_22486_22512 = state_22464__$1;
(statearr_22486_22512[(2)] = null);

(statearr_22486_22512[(1)] = (2));


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
});})(c__19838__auto___22498,out))
;
return ((function (switch__19726__auto__,c__19838__auto___22498,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_22490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22490[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_22490[(1)] = (1));

return statearr_22490;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_22464){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_22464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e22491){if((e22491 instanceof Object)){
var ex__19730__auto__ = e22491;
var statearr_22492_22513 = state_22464;
(statearr_22492_22513[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22514 = state_22464;
state_22464 = G__22514;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_22464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_22464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___22498,out))
})();
var state__19840__auto__ = (function (){var statearr_22493 = f__19839__auto__.call(null);
(statearr_22493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___22498);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___22498,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22515 = [];
var len__17884__auto___22589 = arguments.length;
var i__17885__auto___22590 = (0);
while(true){
if((i__17885__auto___22590 < len__17884__auto___22589)){
args22515.push((arguments[i__17885__auto___22590]));

var G__22591 = (i__17885__auto___22590 + (1));
i__17885__auto___22590 = G__22591;
continue;
} else {
}
break;
}

var G__22517 = args22515.length;
switch (G__22517) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22515.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19838__auto___22593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___22593,out){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___22593,out){
return (function (state_22559){
var state_val_22560 = (state_22559[(1)]);
if((state_val_22560 === (7))){
var inst_22555 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22561_22594 = state_22559__$1;
(statearr_22561_22594[(2)] = inst_22555);

(statearr_22561_22594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (1))){
var inst_22518 = [];
var inst_22519 = inst_22518;
var inst_22520 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22559__$1 = (function (){var statearr_22562 = state_22559;
(statearr_22562[(7)] = inst_22519);

(statearr_22562[(8)] = inst_22520);

return statearr_22562;
})();
var statearr_22563_22595 = state_22559__$1;
(statearr_22563_22595[(2)] = null);

(statearr_22563_22595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (4))){
var inst_22523 = (state_22559[(9)]);
var inst_22523__$1 = (state_22559[(2)]);
var inst_22524 = (inst_22523__$1 == null);
var inst_22525 = cljs.core.not.call(null,inst_22524);
var state_22559__$1 = (function (){var statearr_22564 = state_22559;
(statearr_22564[(9)] = inst_22523__$1);

return statearr_22564;
})();
if(inst_22525){
var statearr_22565_22596 = state_22559__$1;
(statearr_22565_22596[(1)] = (5));

} else {
var statearr_22566_22597 = state_22559__$1;
(statearr_22566_22597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (15))){
var inst_22549 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22567_22598 = state_22559__$1;
(statearr_22567_22598[(2)] = inst_22549);

(statearr_22567_22598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (13))){
var state_22559__$1 = state_22559;
var statearr_22568_22599 = state_22559__$1;
(statearr_22568_22599[(2)] = null);

(statearr_22568_22599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (6))){
var inst_22519 = (state_22559[(7)]);
var inst_22544 = inst_22519.length;
var inst_22545 = (inst_22544 > (0));
var state_22559__$1 = state_22559;
if(cljs.core.truth_(inst_22545)){
var statearr_22569_22600 = state_22559__$1;
(statearr_22569_22600[(1)] = (12));

} else {
var statearr_22570_22601 = state_22559__$1;
(statearr_22570_22601[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (3))){
var inst_22557 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22559__$1,inst_22557);
} else {
if((state_val_22560 === (12))){
var inst_22519 = (state_22559[(7)]);
var inst_22547 = cljs.core.vec.call(null,inst_22519);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22559__$1,(15),out,inst_22547);
} else {
if((state_val_22560 === (2))){
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22559__$1,(4),ch);
} else {
if((state_val_22560 === (11))){
var inst_22523 = (state_22559[(9)]);
var inst_22527 = (state_22559[(10)]);
var inst_22537 = (state_22559[(2)]);
var inst_22538 = [];
var inst_22539 = inst_22538.push(inst_22523);
var inst_22519 = inst_22538;
var inst_22520 = inst_22527;
var state_22559__$1 = (function (){var statearr_22571 = state_22559;
(statearr_22571[(11)] = inst_22539);

(statearr_22571[(7)] = inst_22519);

(statearr_22571[(8)] = inst_22520);

(statearr_22571[(12)] = inst_22537);

return statearr_22571;
})();
var statearr_22572_22602 = state_22559__$1;
(statearr_22572_22602[(2)] = null);

(statearr_22572_22602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (9))){
var inst_22519 = (state_22559[(7)]);
var inst_22535 = cljs.core.vec.call(null,inst_22519);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22559__$1,(11),out,inst_22535);
} else {
if((state_val_22560 === (5))){
var inst_22523 = (state_22559[(9)]);
var inst_22527 = (state_22559[(10)]);
var inst_22520 = (state_22559[(8)]);
var inst_22527__$1 = f.call(null,inst_22523);
var inst_22528 = cljs.core._EQ_.call(null,inst_22527__$1,inst_22520);
var inst_22529 = cljs.core.keyword_identical_QMARK_.call(null,inst_22520,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22530 = (inst_22528) || (inst_22529);
var state_22559__$1 = (function (){var statearr_22573 = state_22559;
(statearr_22573[(10)] = inst_22527__$1);

return statearr_22573;
})();
if(cljs.core.truth_(inst_22530)){
var statearr_22574_22603 = state_22559__$1;
(statearr_22574_22603[(1)] = (8));

} else {
var statearr_22575_22604 = state_22559__$1;
(statearr_22575_22604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (14))){
var inst_22552 = (state_22559[(2)]);
var inst_22553 = cljs.core.async.close_BANG_.call(null,out);
var state_22559__$1 = (function (){var statearr_22577 = state_22559;
(statearr_22577[(13)] = inst_22552);

return statearr_22577;
})();
var statearr_22578_22605 = state_22559__$1;
(statearr_22578_22605[(2)] = inst_22553);

(statearr_22578_22605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (10))){
var inst_22542 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22579_22606 = state_22559__$1;
(statearr_22579_22606[(2)] = inst_22542);

(statearr_22579_22606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (8))){
var inst_22523 = (state_22559[(9)]);
var inst_22519 = (state_22559[(7)]);
var inst_22527 = (state_22559[(10)]);
var inst_22532 = inst_22519.push(inst_22523);
var tmp22576 = inst_22519;
var inst_22519__$1 = tmp22576;
var inst_22520 = inst_22527;
var state_22559__$1 = (function (){var statearr_22580 = state_22559;
(statearr_22580[(7)] = inst_22519__$1);

(statearr_22580[(8)] = inst_22520);

(statearr_22580[(14)] = inst_22532);

return statearr_22580;
})();
var statearr_22581_22607 = state_22559__$1;
(statearr_22581_22607[(2)] = null);

(statearr_22581_22607[(1)] = (2));


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
});})(c__19838__auto___22593,out))
;
return ((function (switch__19726__auto__,c__19838__auto___22593,out){
return (function() {
var cljs$core$async$state_machine__19727__auto__ = null;
var cljs$core$async$state_machine__19727__auto____0 = (function (){
var statearr_22585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22585[(0)] = cljs$core$async$state_machine__19727__auto__);

(statearr_22585[(1)] = (1));

return statearr_22585;
});
var cljs$core$async$state_machine__19727__auto____1 = (function (state_22559){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_22559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e22586){if((e22586 instanceof Object)){
var ex__19730__auto__ = e22586;
var statearr_22587_22608 = state_22559;
(statearr_22587_22608[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22609 = state_22559;
state_22559 = G__22609;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
cljs$core$async$state_machine__19727__auto__ = function(state_22559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19727__auto____1.call(this,state_22559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19727__auto____0;
cljs$core$async$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19727__auto____1;
return cljs$core$async$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___22593,out))
})();
var state__19840__auto__ = (function (){var statearr_22588 = f__19839__auto__.call(null);
(statearr_22588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___22593);

return statearr_22588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___22593,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map