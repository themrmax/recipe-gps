// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22671_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22671_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22676 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22677 = null;
var count__22678 = (0);
var i__22679 = (0);
while(true){
if((i__22679 < count__22678)){
var n = cljs.core._nth.call(null,chunk__22677,i__22679);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22680 = seq__22676;
var G__22681 = chunk__22677;
var G__22682 = count__22678;
var G__22683 = (i__22679 + (1));
seq__22676 = G__22680;
chunk__22677 = G__22681;
count__22678 = G__22682;
i__22679 = G__22683;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22676);
if(temp__4425__auto__){
var seq__22676__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22676__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22676__$1);
var G__22684 = cljs.core.chunk_rest.call(null,seq__22676__$1);
var G__22685 = c__17629__auto__;
var G__22686 = cljs.core.count.call(null,c__17629__auto__);
var G__22687 = (0);
seq__22676 = G__22684;
chunk__22677 = G__22685;
count__22678 = G__22686;
i__22679 = G__22687;
continue;
} else {
var n = cljs.core.first.call(null,seq__22676__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22688 = cljs.core.next.call(null,seq__22676__$1);
var G__22689 = null;
var G__22690 = (0);
var G__22691 = (0);
seq__22676 = G__22688;
chunk__22677 = G__22689;
count__22678 = G__22690;
i__22679 = G__22691;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22730_22737 = cljs.core.seq.call(null,deps);
var chunk__22731_22738 = null;
var count__22732_22739 = (0);
var i__22733_22740 = (0);
while(true){
if((i__22733_22740 < count__22732_22739)){
var dep_22741 = cljs.core._nth.call(null,chunk__22731_22738,i__22733_22740);
topo_sort_helper_STAR_.call(null,dep_22741,(depth + (1)),state);

var G__22742 = seq__22730_22737;
var G__22743 = chunk__22731_22738;
var G__22744 = count__22732_22739;
var G__22745 = (i__22733_22740 + (1));
seq__22730_22737 = G__22742;
chunk__22731_22738 = G__22743;
count__22732_22739 = G__22744;
i__22733_22740 = G__22745;
continue;
} else {
var temp__4425__auto___22746 = cljs.core.seq.call(null,seq__22730_22737);
if(temp__4425__auto___22746){
var seq__22730_22747__$1 = temp__4425__auto___22746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22730_22747__$1)){
var c__17629__auto___22748 = cljs.core.chunk_first.call(null,seq__22730_22747__$1);
var G__22749 = cljs.core.chunk_rest.call(null,seq__22730_22747__$1);
var G__22750 = c__17629__auto___22748;
var G__22751 = cljs.core.count.call(null,c__17629__auto___22748);
var G__22752 = (0);
seq__22730_22737 = G__22749;
chunk__22731_22738 = G__22750;
count__22732_22739 = G__22751;
i__22733_22740 = G__22752;
continue;
} else {
var dep_22753 = cljs.core.first.call(null,seq__22730_22747__$1);
topo_sort_helper_STAR_.call(null,dep_22753,(depth + (1)),state);

var G__22754 = cljs.core.next.call(null,seq__22730_22747__$1);
var G__22755 = null;
var G__22756 = (0);
var G__22757 = (0);
seq__22730_22737 = G__22754;
chunk__22731_22738 = G__22755;
count__22732_22739 = G__22756;
i__22733_22740 = G__22757;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22734){
var vec__22736 = p__22734;
var x = cljs.core.nth.call(null,vec__22736,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22736,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22736,x,xs,get_deps__$1){
return (function (p1__22692_SHARP_){
return clojure.set.difference.call(null,p1__22692_SHARP_,x);
});})(vec__22736,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22770 = cljs.core.seq.call(null,provides);
var chunk__22771 = null;
var count__22772 = (0);
var i__22773 = (0);
while(true){
if((i__22773 < count__22772)){
var prov = cljs.core._nth.call(null,chunk__22771,i__22773);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22774_22782 = cljs.core.seq.call(null,requires);
var chunk__22775_22783 = null;
var count__22776_22784 = (0);
var i__22777_22785 = (0);
while(true){
if((i__22777_22785 < count__22776_22784)){
var req_22786 = cljs.core._nth.call(null,chunk__22775_22783,i__22777_22785);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22786,prov);

var G__22787 = seq__22774_22782;
var G__22788 = chunk__22775_22783;
var G__22789 = count__22776_22784;
var G__22790 = (i__22777_22785 + (1));
seq__22774_22782 = G__22787;
chunk__22775_22783 = G__22788;
count__22776_22784 = G__22789;
i__22777_22785 = G__22790;
continue;
} else {
var temp__4425__auto___22791 = cljs.core.seq.call(null,seq__22774_22782);
if(temp__4425__auto___22791){
var seq__22774_22792__$1 = temp__4425__auto___22791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22774_22792__$1)){
var c__17629__auto___22793 = cljs.core.chunk_first.call(null,seq__22774_22792__$1);
var G__22794 = cljs.core.chunk_rest.call(null,seq__22774_22792__$1);
var G__22795 = c__17629__auto___22793;
var G__22796 = cljs.core.count.call(null,c__17629__auto___22793);
var G__22797 = (0);
seq__22774_22782 = G__22794;
chunk__22775_22783 = G__22795;
count__22776_22784 = G__22796;
i__22777_22785 = G__22797;
continue;
} else {
var req_22798 = cljs.core.first.call(null,seq__22774_22792__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22798,prov);

var G__22799 = cljs.core.next.call(null,seq__22774_22792__$1);
var G__22800 = null;
var G__22801 = (0);
var G__22802 = (0);
seq__22774_22782 = G__22799;
chunk__22775_22783 = G__22800;
count__22776_22784 = G__22801;
i__22777_22785 = G__22802;
continue;
}
} else {
}
}
break;
}

var G__22803 = seq__22770;
var G__22804 = chunk__22771;
var G__22805 = count__22772;
var G__22806 = (i__22773 + (1));
seq__22770 = G__22803;
chunk__22771 = G__22804;
count__22772 = G__22805;
i__22773 = G__22806;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22770);
if(temp__4425__auto__){
var seq__22770__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22770__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22770__$1);
var G__22807 = cljs.core.chunk_rest.call(null,seq__22770__$1);
var G__22808 = c__17629__auto__;
var G__22809 = cljs.core.count.call(null,c__17629__auto__);
var G__22810 = (0);
seq__22770 = G__22807;
chunk__22771 = G__22808;
count__22772 = G__22809;
i__22773 = G__22810;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22770__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22778_22811 = cljs.core.seq.call(null,requires);
var chunk__22779_22812 = null;
var count__22780_22813 = (0);
var i__22781_22814 = (0);
while(true){
if((i__22781_22814 < count__22780_22813)){
var req_22815 = cljs.core._nth.call(null,chunk__22779_22812,i__22781_22814);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22815,prov);

var G__22816 = seq__22778_22811;
var G__22817 = chunk__22779_22812;
var G__22818 = count__22780_22813;
var G__22819 = (i__22781_22814 + (1));
seq__22778_22811 = G__22816;
chunk__22779_22812 = G__22817;
count__22780_22813 = G__22818;
i__22781_22814 = G__22819;
continue;
} else {
var temp__4425__auto___22820__$1 = cljs.core.seq.call(null,seq__22778_22811);
if(temp__4425__auto___22820__$1){
var seq__22778_22821__$1 = temp__4425__auto___22820__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22778_22821__$1)){
var c__17629__auto___22822 = cljs.core.chunk_first.call(null,seq__22778_22821__$1);
var G__22823 = cljs.core.chunk_rest.call(null,seq__22778_22821__$1);
var G__22824 = c__17629__auto___22822;
var G__22825 = cljs.core.count.call(null,c__17629__auto___22822);
var G__22826 = (0);
seq__22778_22811 = G__22823;
chunk__22779_22812 = G__22824;
count__22780_22813 = G__22825;
i__22781_22814 = G__22826;
continue;
} else {
var req_22827 = cljs.core.first.call(null,seq__22778_22821__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22827,prov);

var G__22828 = cljs.core.next.call(null,seq__22778_22821__$1);
var G__22829 = null;
var G__22830 = (0);
var G__22831 = (0);
seq__22778_22811 = G__22828;
chunk__22779_22812 = G__22829;
count__22780_22813 = G__22830;
i__22781_22814 = G__22831;
continue;
}
} else {
}
}
break;
}

var G__22832 = cljs.core.next.call(null,seq__22770__$1);
var G__22833 = null;
var G__22834 = (0);
var G__22835 = (0);
seq__22770 = G__22832;
chunk__22771 = G__22833;
count__22772 = G__22834;
i__22773 = G__22835;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22840_22844 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22841_22845 = null;
var count__22842_22846 = (0);
var i__22843_22847 = (0);
while(true){
if((i__22843_22847 < count__22842_22846)){
var ns_22848 = cljs.core._nth.call(null,chunk__22841_22845,i__22843_22847);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22848);

var G__22849 = seq__22840_22844;
var G__22850 = chunk__22841_22845;
var G__22851 = count__22842_22846;
var G__22852 = (i__22843_22847 + (1));
seq__22840_22844 = G__22849;
chunk__22841_22845 = G__22850;
count__22842_22846 = G__22851;
i__22843_22847 = G__22852;
continue;
} else {
var temp__4425__auto___22853 = cljs.core.seq.call(null,seq__22840_22844);
if(temp__4425__auto___22853){
var seq__22840_22854__$1 = temp__4425__auto___22853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22840_22854__$1)){
var c__17629__auto___22855 = cljs.core.chunk_first.call(null,seq__22840_22854__$1);
var G__22856 = cljs.core.chunk_rest.call(null,seq__22840_22854__$1);
var G__22857 = c__17629__auto___22855;
var G__22858 = cljs.core.count.call(null,c__17629__auto___22855);
var G__22859 = (0);
seq__22840_22844 = G__22856;
chunk__22841_22845 = G__22857;
count__22842_22846 = G__22858;
i__22843_22847 = G__22859;
continue;
} else {
var ns_22860 = cljs.core.first.call(null,seq__22840_22854__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22860);

var G__22861 = cljs.core.next.call(null,seq__22840_22854__$1);
var G__22862 = null;
var G__22863 = (0);
var G__22864 = (0);
seq__22840_22844 = G__22861;
chunk__22841_22845 = G__22862;
count__22842_22846 = G__22863;
i__22843_22847 = G__22864;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22865__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22866__i = 0, G__22866__a = new Array(arguments.length -  0);
while (G__22866__i < G__22866__a.length) {G__22866__a[G__22866__i] = arguments[G__22866__i + 0]; ++G__22866__i;}
  args = new cljs.core.IndexedSeq(G__22866__a,0);
} 
return G__22865__delegate.call(this,args);};
G__22865.cljs$lang$maxFixedArity = 0;
G__22865.cljs$lang$applyTo = (function (arglist__22867){
var args = cljs.core.seq(arglist__22867);
return G__22865__delegate(args);
});
G__22865.cljs$core$IFn$_invoke$arity$variadic = G__22865__delegate;
return G__22865;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22869 = cljs.core._EQ_;
var expr__22870 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22869.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22870))){
var path_parts = ((function (pred__22869,expr__22870){
return (function (p1__22868_SHARP_){
return clojure.string.split.call(null,p1__22868_SHARP_,/[\/\\]/);
});})(pred__22869,expr__22870))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22869,expr__22870){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22872){if((e22872 instanceof Error)){
var e = e22872;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22872;

}
}})());
});
;})(path_parts,sep,root,pred__22869,expr__22870))
} else {
if(cljs.core.truth_(pred__22869.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22870))){
return ((function (pred__22869,expr__22870){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22869,expr__22870){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22869,expr__22870))
);

return deferred.addErrback(((function (deferred,pred__22869,expr__22870){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22869,expr__22870))
);
});
;})(pred__22869,expr__22870))
} else {
return ((function (pred__22869,expr__22870){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22869,expr__22870))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22873,callback){
var map__22876 = p__22873;
var map__22876__$1 = ((((!((map__22876 == null)))?((((map__22876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22876):map__22876);
var file_msg = map__22876__$1;
var request_url = cljs.core.get.call(null,map__22876__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22876,map__22876__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22876,map__22876__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__){
return (function (state_22900){
var state_val_22901 = (state_22900[(1)]);
if((state_val_22901 === (7))){
var inst_22896 = (state_22900[(2)]);
var state_22900__$1 = state_22900;
var statearr_22902_22922 = state_22900__$1;
(statearr_22902_22922[(2)] = inst_22896);

(statearr_22902_22922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22901 === (1))){
var state_22900__$1 = state_22900;
var statearr_22903_22923 = state_22900__$1;
(statearr_22903_22923[(2)] = null);

(statearr_22903_22923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22901 === (4))){
var inst_22880 = (state_22900[(7)]);
var inst_22880__$1 = (state_22900[(2)]);
var state_22900__$1 = (function (){var statearr_22904 = state_22900;
(statearr_22904[(7)] = inst_22880__$1);

return statearr_22904;
})();
if(cljs.core.truth_(inst_22880__$1)){
var statearr_22905_22924 = state_22900__$1;
(statearr_22905_22924[(1)] = (5));

} else {
var statearr_22906_22925 = state_22900__$1;
(statearr_22906_22925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22901 === (6))){
var state_22900__$1 = state_22900;
var statearr_22907_22926 = state_22900__$1;
(statearr_22907_22926[(2)] = null);

(statearr_22907_22926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22901 === (3))){
var inst_22898 = (state_22900[(2)]);
var state_22900__$1 = state_22900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22900__$1,inst_22898);
} else {
if((state_val_22901 === (2))){
var state_22900__$1 = state_22900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22900__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22901 === (11))){
var inst_22892 = (state_22900[(2)]);
var state_22900__$1 = (function (){var statearr_22908 = state_22900;
(statearr_22908[(8)] = inst_22892);

return statearr_22908;
})();
var statearr_22909_22927 = state_22900__$1;
(statearr_22909_22927[(2)] = null);

(statearr_22909_22927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22901 === (9))){
var inst_22884 = (state_22900[(9)]);
var inst_22886 = (state_22900[(10)]);
var inst_22888 = inst_22886.call(null,inst_22884);
var state_22900__$1 = state_22900;
var statearr_22910_22928 = state_22900__$1;
(statearr_22910_22928[(2)] = inst_22888);

(statearr_22910_22928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22901 === (5))){
var inst_22880 = (state_22900[(7)]);
var inst_22882 = figwheel.client.file_reloading.blocking_load.call(null,inst_22880);
var state_22900__$1 = state_22900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22900__$1,(8),inst_22882);
} else {
if((state_val_22901 === (10))){
var inst_22884 = (state_22900[(9)]);
var inst_22890 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22884);
var state_22900__$1 = state_22900;
var statearr_22911_22929 = state_22900__$1;
(statearr_22911_22929[(2)] = inst_22890);

(statearr_22911_22929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22901 === (8))){
var inst_22880 = (state_22900[(7)]);
var inst_22886 = (state_22900[(10)]);
var inst_22884 = (state_22900[(2)]);
var inst_22885 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22886__$1 = cljs.core.get.call(null,inst_22885,inst_22880);
var state_22900__$1 = (function (){var statearr_22912 = state_22900;
(statearr_22912[(9)] = inst_22884);

(statearr_22912[(10)] = inst_22886__$1);

return statearr_22912;
})();
if(cljs.core.truth_(inst_22886__$1)){
var statearr_22913_22930 = state_22900__$1;
(statearr_22913_22930[(1)] = (9));

} else {
var statearr_22914_22931 = state_22900__$1;
(statearr_22914_22931[(1)] = (10));

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
});})(c__19838__auto__))
;
return ((function (switch__19726__auto__,c__19838__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19727__auto__ = null;
var figwheel$client$file_reloading$state_machine__19727__auto____0 = (function (){
var statearr_22918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22918[(0)] = figwheel$client$file_reloading$state_machine__19727__auto__);

(statearr_22918[(1)] = (1));

return statearr_22918;
});
var figwheel$client$file_reloading$state_machine__19727__auto____1 = (function (state_22900){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_22900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e22919){if((e22919 instanceof Object)){
var ex__19730__auto__ = e22919;
var statearr_22920_22932 = state_22900;
(statearr_22920_22932[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22933 = state_22900;
state_22900 = G__22933;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19727__auto__ = function(state_22900){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19727__auto____1.call(this,state_22900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19727__auto____0;
figwheel$client$file_reloading$state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19727__auto____1;
return figwheel$client$file_reloading$state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__))
})();
var state__19840__auto__ = (function (){var statearr_22921 = f__19839__auto__.call(null);
(statearr_22921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_22921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__))
);

return c__19838__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22934,callback){
var map__22937 = p__22934;
var map__22937__$1 = ((((!((map__22937 == null)))?((((map__22937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22937):map__22937);
var file_msg = map__22937__$1;
var namespace = cljs.core.get.call(null,map__22937__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22937,map__22937__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22937,map__22937__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22939){
var map__22942 = p__22939;
var map__22942__$1 = ((((!((map__22942 == null)))?((((map__22942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22942):map__22942);
var file_msg = map__22942__$1;
var namespace = cljs.core.get.call(null,map__22942__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22944,callback){
var map__22947 = p__22944;
var map__22947__$1 = ((((!((map__22947 == null)))?((((map__22947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22947):map__22947);
var file_msg = map__22947__$1;
var request_url = cljs.core.get.call(null,map__22947__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22947__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19838__auto___23035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto___23035,out){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto___23035,out){
return (function (state_23017){
var state_val_23018 = (state_23017[(1)]);
if((state_val_23018 === (1))){
var inst_22995 = cljs.core.nth.call(null,files,(0),null);
var inst_22996 = cljs.core.nthnext.call(null,files,(1));
var inst_22997 = files;
var state_23017__$1 = (function (){var statearr_23019 = state_23017;
(statearr_23019[(7)] = inst_22996);

(statearr_23019[(8)] = inst_22997);

(statearr_23019[(9)] = inst_22995);

return statearr_23019;
})();
var statearr_23020_23036 = state_23017__$1;
(statearr_23020_23036[(2)] = null);

(statearr_23020_23036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (2))){
var inst_23000 = (state_23017[(10)]);
var inst_22997 = (state_23017[(8)]);
var inst_23000__$1 = cljs.core.nth.call(null,inst_22997,(0),null);
var inst_23001 = cljs.core.nthnext.call(null,inst_22997,(1));
var inst_23002 = (inst_23000__$1 == null);
var inst_23003 = cljs.core.not.call(null,inst_23002);
var state_23017__$1 = (function (){var statearr_23021 = state_23017;
(statearr_23021[(10)] = inst_23000__$1);

(statearr_23021[(11)] = inst_23001);

return statearr_23021;
})();
if(inst_23003){
var statearr_23022_23037 = state_23017__$1;
(statearr_23022_23037[(1)] = (4));

} else {
var statearr_23023_23038 = state_23017__$1;
(statearr_23023_23038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (3))){
var inst_23015 = (state_23017[(2)]);
var state_23017__$1 = state_23017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23017__$1,inst_23015);
} else {
if((state_val_23018 === (4))){
var inst_23000 = (state_23017[(10)]);
var inst_23005 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23000);
var state_23017__$1 = state_23017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23017__$1,(7),inst_23005);
} else {
if((state_val_23018 === (5))){
var inst_23011 = cljs.core.async.close_BANG_.call(null,out);
var state_23017__$1 = state_23017;
var statearr_23024_23039 = state_23017__$1;
(statearr_23024_23039[(2)] = inst_23011);

(statearr_23024_23039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (6))){
var inst_23013 = (state_23017[(2)]);
var state_23017__$1 = state_23017;
var statearr_23025_23040 = state_23017__$1;
(statearr_23025_23040[(2)] = inst_23013);

(statearr_23025_23040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (7))){
var inst_23001 = (state_23017[(11)]);
var inst_23007 = (state_23017[(2)]);
var inst_23008 = cljs.core.async.put_BANG_.call(null,out,inst_23007);
var inst_22997 = inst_23001;
var state_23017__$1 = (function (){var statearr_23026 = state_23017;
(statearr_23026[(12)] = inst_23008);

(statearr_23026[(8)] = inst_22997);

return statearr_23026;
})();
var statearr_23027_23041 = state_23017__$1;
(statearr_23027_23041[(2)] = null);

(statearr_23027_23041[(1)] = (2));


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
});})(c__19838__auto___23035,out))
;
return ((function (switch__19726__auto__,c__19838__auto___23035,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____0 = (function (){
var statearr_23031 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23031[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__);

(statearr_23031[(1)] = (1));

return statearr_23031;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____1 = (function (state_23017){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_23017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e23032){if((e23032 instanceof Object)){
var ex__19730__auto__ = e23032;
var statearr_23033_23042 = state_23017;
(statearr_23033_23042[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23043 = state_23017;
state_23017 = G__23043;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__ = function(state_23017){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____1.call(this,state_23017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto___23035,out))
})();
var state__19840__auto__ = (function (){var statearr_23034 = f__19839__auto__.call(null);
(statearr_23034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto___23035);

return statearr_23034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto___23035,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23044,opts){
var map__23048 = p__23044;
var map__23048__$1 = ((((!((map__23048 == null)))?((((map__23048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23048):map__23048);
var eval_body__$1 = cljs.core.get.call(null,map__23048__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23048__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23050){var e = e23050;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23051_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23051_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23056){
var vec__23057 = p__23056;
var k = cljs.core.nth.call(null,vec__23057,(0),null);
var v = cljs.core.nth.call(null,vec__23057,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23058){
var vec__23059 = p__23058;
var k = cljs.core.nth.call(null,vec__23059,(0),null);
var v = cljs.core.nth.call(null,vec__23059,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23063,p__23064){
var map__23311 = p__23063;
var map__23311__$1 = ((((!((map__23311 == null)))?((((map__23311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23311):map__23311);
var opts = map__23311__$1;
var before_jsload = cljs.core.get.call(null,map__23311__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23311__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23311__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23312 = p__23064;
var map__23312__$1 = ((((!((map__23312 == null)))?((((map__23312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23312):map__23312);
var msg = map__23312__$1;
var files = cljs.core.get.call(null,map__23312__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23312__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23312__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19838__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19839__auto__ = (function (){var switch__19726__auto__ = ((function (c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23465){
var state_val_23466 = (state_23465[(1)]);
if((state_val_23466 === (7))){
var inst_23327 = (state_23465[(7)]);
var inst_23329 = (state_23465[(8)]);
var inst_23328 = (state_23465[(9)]);
var inst_23326 = (state_23465[(10)]);
var inst_23334 = cljs.core._nth.call(null,inst_23327,inst_23329);
var inst_23335 = figwheel.client.file_reloading.eval_body.call(null,inst_23334,opts);
var inst_23336 = (inst_23329 + (1));
var tmp23467 = inst_23327;
var tmp23468 = inst_23328;
var tmp23469 = inst_23326;
var inst_23326__$1 = tmp23469;
var inst_23327__$1 = tmp23467;
var inst_23328__$1 = tmp23468;
var inst_23329__$1 = inst_23336;
var state_23465__$1 = (function (){var statearr_23470 = state_23465;
(statearr_23470[(7)] = inst_23327__$1);

(statearr_23470[(8)] = inst_23329__$1);

(statearr_23470[(9)] = inst_23328__$1);

(statearr_23470[(11)] = inst_23335);

(statearr_23470[(10)] = inst_23326__$1);

return statearr_23470;
})();
var statearr_23471_23557 = state_23465__$1;
(statearr_23471_23557[(2)] = null);

(statearr_23471_23557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (20))){
var inst_23369 = (state_23465[(12)]);
var inst_23377 = figwheel.client.file_reloading.sort_files.call(null,inst_23369);
var state_23465__$1 = state_23465;
var statearr_23472_23558 = state_23465__$1;
(statearr_23472_23558[(2)] = inst_23377);

(statearr_23472_23558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (27))){
var state_23465__$1 = state_23465;
var statearr_23473_23559 = state_23465__$1;
(statearr_23473_23559[(2)] = null);

(statearr_23473_23559[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (1))){
var inst_23318 = (state_23465[(13)]);
var inst_23315 = before_jsload.call(null,files);
var inst_23316 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23317 = (function (){return ((function (inst_23318,inst_23315,inst_23316,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23060_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23060_SHARP_);
});
;})(inst_23318,inst_23315,inst_23316,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23318__$1 = cljs.core.filter.call(null,inst_23317,files);
var inst_23319 = cljs.core.not_empty.call(null,inst_23318__$1);
var state_23465__$1 = (function (){var statearr_23474 = state_23465;
(statearr_23474[(14)] = inst_23315);

(statearr_23474[(15)] = inst_23316);

(statearr_23474[(13)] = inst_23318__$1);

return statearr_23474;
})();
if(cljs.core.truth_(inst_23319)){
var statearr_23475_23560 = state_23465__$1;
(statearr_23475_23560[(1)] = (2));

} else {
var statearr_23476_23561 = state_23465__$1;
(statearr_23476_23561[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (24))){
var state_23465__$1 = state_23465;
var statearr_23477_23562 = state_23465__$1;
(statearr_23477_23562[(2)] = null);

(statearr_23477_23562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (39))){
var inst_23419 = (state_23465[(16)]);
var state_23465__$1 = state_23465;
var statearr_23478_23563 = state_23465__$1;
(statearr_23478_23563[(2)] = inst_23419);

(statearr_23478_23563[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (46))){
var inst_23460 = (state_23465[(2)]);
var state_23465__$1 = state_23465;
var statearr_23479_23564 = state_23465__$1;
(statearr_23479_23564[(2)] = inst_23460);

(statearr_23479_23564[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (4))){
var inst_23363 = (state_23465[(2)]);
var inst_23364 = cljs.core.List.EMPTY;
var inst_23365 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23364);
var inst_23366 = (function (){return ((function (inst_23363,inst_23364,inst_23365,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23061_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23061_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23061_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_23363,inst_23364,inst_23365,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23367 = cljs.core.filter.call(null,inst_23366,files);
var inst_23368 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23369 = cljs.core.concat.call(null,inst_23367,inst_23368);
var state_23465__$1 = (function (){var statearr_23480 = state_23465;
(statearr_23480[(17)] = inst_23363);

(statearr_23480[(18)] = inst_23365);

(statearr_23480[(12)] = inst_23369);

return statearr_23480;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23481_23565 = state_23465__$1;
(statearr_23481_23565[(1)] = (16));

} else {
var statearr_23482_23566 = state_23465__$1;
(statearr_23482_23566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (15))){
var inst_23353 = (state_23465[(2)]);
var state_23465__$1 = state_23465;
var statearr_23483_23567 = state_23465__$1;
(statearr_23483_23567[(2)] = inst_23353);

(statearr_23483_23567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (21))){
var inst_23379 = (state_23465[(19)]);
var inst_23379__$1 = (state_23465[(2)]);
var inst_23380 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23379__$1);
var state_23465__$1 = (function (){var statearr_23484 = state_23465;
(statearr_23484[(19)] = inst_23379__$1);

return statearr_23484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23465__$1,(22),inst_23380);
} else {
if((state_val_23466 === (31))){
var inst_23463 = (state_23465[(2)]);
var state_23465__$1 = state_23465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23465__$1,inst_23463);
} else {
if((state_val_23466 === (32))){
var inst_23419 = (state_23465[(16)]);
var inst_23424 = inst_23419.cljs$lang$protocol_mask$partition0$;
var inst_23425 = (inst_23424 & (64));
var inst_23426 = inst_23419.cljs$core$ISeq$;
var inst_23427 = (inst_23425) || (inst_23426);
var state_23465__$1 = state_23465;
if(cljs.core.truth_(inst_23427)){
var statearr_23485_23568 = state_23465__$1;
(statearr_23485_23568[(1)] = (35));

} else {
var statearr_23486_23569 = state_23465__$1;
(statearr_23486_23569[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (40))){
var inst_23440 = (state_23465[(20)]);
var inst_23439 = (state_23465[(2)]);
var inst_23440__$1 = cljs.core.get.call(null,inst_23439,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23441 = cljs.core.get.call(null,inst_23439,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23442 = cljs.core.not_empty.call(null,inst_23440__$1);
var state_23465__$1 = (function (){var statearr_23487 = state_23465;
(statearr_23487[(20)] = inst_23440__$1);

(statearr_23487[(21)] = inst_23441);

return statearr_23487;
})();
if(cljs.core.truth_(inst_23442)){
var statearr_23488_23570 = state_23465__$1;
(statearr_23488_23570[(1)] = (41));

} else {
var statearr_23489_23571 = state_23465__$1;
(statearr_23489_23571[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (33))){
var state_23465__$1 = state_23465;
var statearr_23490_23572 = state_23465__$1;
(statearr_23490_23572[(2)] = false);

(statearr_23490_23572[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (13))){
var inst_23339 = (state_23465[(22)]);
var inst_23343 = cljs.core.chunk_first.call(null,inst_23339);
var inst_23344 = cljs.core.chunk_rest.call(null,inst_23339);
var inst_23345 = cljs.core.count.call(null,inst_23343);
var inst_23326 = inst_23344;
var inst_23327 = inst_23343;
var inst_23328 = inst_23345;
var inst_23329 = (0);
var state_23465__$1 = (function (){var statearr_23491 = state_23465;
(statearr_23491[(7)] = inst_23327);

(statearr_23491[(8)] = inst_23329);

(statearr_23491[(9)] = inst_23328);

(statearr_23491[(10)] = inst_23326);

return statearr_23491;
})();
var statearr_23492_23573 = state_23465__$1;
(statearr_23492_23573[(2)] = null);

(statearr_23492_23573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (22))){
var inst_23379 = (state_23465[(19)]);
var inst_23387 = (state_23465[(23)]);
var inst_23382 = (state_23465[(24)]);
var inst_23383 = (state_23465[(25)]);
var inst_23382__$1 = (state_23465[(2)]);
var inst_23383__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23382__$1);
var inst_23384 = (function (){var all_files = inst_23379;
var res_SINGLEQUOTE_ = inst_23382__$1;
var res = inst_23383__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23379,inst_23387,inst_23382,inst_23383,inst_23382__$1,inst_23383__$1,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23062_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23062_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23379,inst_23387,inst_23382,inst_23383,inst_23382__$1,inst_23383__$1,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23385 = cljs.core.filter.call(null,inst_23384,inst_23382__$1);
var inst_23386 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23387__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23386);
var inst_23388 = cljs.core.not_empty.call(null,inst_23387__$1);
var state_23465__$1 = (function (){var statearr_23493 = state_23465;
(statearr_23493[(23)] = inst_23387__$1);

(statearr_23493[(24)] = inst_23382__$1);

(statearr_23493[(25)] = inst_23383__$1);

(statearr_23493[(26)] = inst_23385);

return statearr_23493;
})();
if(cljs.core.truth_(inst_23388)){
var statearr_23494_23574 = state_23465__$1;
(statearr_23494_23574[(1)] = (23));

} else {
var statearr_23495_23575 = state_23465__$1;
(statearr_23495_23575[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (36))){
var state_23465__$1 = state_23465;
var statearr_23496_23576 = state_23465__$1;
(statearr_23496_23576[(2)] = false);

(statearr_23496_23576[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (41))){
var inst_23440 = (state_23465[(20)]);
var inst_23444 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23445 = cljs.core.map.call(null,inst_23444,inst_23440);
var inst_23446 = cljs.core.pr_str.call(null,inst_23445);
var inst_23447 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23446)].join('');
var inst_23448 = figwheel.client.utils.log.call(null,inst_23447);
var state_23465__$1 = state_23465;
var statearr_23497_23577 = state_23465__$1;
(statearr_23497_23577[(2)] = inst_23448);

(statearr_23497_23577[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (43))){
var inst_23441 = (state_23465[(21)]);
var inst_23451 = (state_23465[(2)]);
var inst_23452 = cljs.core.not_empty.call(null,inst_23441);
var state_23465__$1 = (function (){var statearr_23498 = state_23465;
(statearr_23498[(27)] = inst_23451);

return statearr_23498;
})();
if(cljs.core.truth_(inst_23452)){
var statearr_23499_23578 = state_23465__$1;
(statearr_23499_23578[(1)] = (44));

} else {
var statearr_23500_23579 = state_23465__$1;
(statearr_23500_23579[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (29))){
var inst_23379 = (state_23465[(19)]);
var inst_23387 = (state_23465[(23)]);
var inst_23419 = (state_23465[(16)]);
var inst_23382 = (state_23465[(24)]);
var inst_23383 = (state_23465[(25)]);
var inst_23385 = (state_23465[(26)]);
var inst_23415 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23418 = (function (){var all_files = inst_23379;
var res_SINGLEQUOTE_ = inst_23382;
var res = inst_23383;
var files_not_loaded = inst_23385;
var dependencies_that_loaded = inst_23387;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23379,inst_23387,inst_23419,inst_23382,inst_23383,inst_23385,inst_23415,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23417){
var map__23501 = p__23417;
var map__23501__$1 = ((((!((map__23501 == null)))?((((map__23501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23501):map__23501);
var namespace = cljs.core.get.call(null,map__23501__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23379,inst_23387,inst_23419,inst_23382,inst_23383,inst_23385,inst_23415,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23419__$1 = cljs.core.group_by.call(null,inst_23418,inst_23385);
var inst_23421 = (inst_23419__$1 == null);
var inst_23422 = cljs.core.not.call(null,inst_23421);
var state_23465__$1 = (function (){var statearr_23503 = state_23465;
(statearr_23503[(28)] = inst_23415);

(statearr_23503[(16)] = inst_23419__$1);

return statearr_23503;
})();
if(inst_23422){
var statearr_23504_23580 = state_23465__$1;
(statearr_23504_23580[(1)] = (32));

} else {
var statearr_23505_23581 = state_23465__$1;
(statearr_23505_23581[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (44))){
var inst_23441 = (state_23465[(21)]);
var inst_23454 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23441);
var inst_23455 = cljs.core.pr_str.call(null,inst_23454);
var inst_23456 = [cljs.core.str("not required: "),cljs.core.str(inst_23455)].join('');
var inst_23457 = figwheel.client.utils.log.call(null,inst_23456);
var state_23465__$1 = state_23465;
var statearr_23506_23582 = state_23465__$1;
(statearr_23506_23582[(2)] = inst_23457);

(statearr_23506_23582[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (6))){
var inst_23360 = (state_23465[(2)]);
var state_23465__$1 = state_23465;
var statearr_23507_23583 = state_23465__$1;
(statearr_23507_23583[(2)] = inst_23360);

(statearr_23507_23583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (28))){
var inst_23385 = (state_23465[(26)]);
var inst_23412 = (state_23465[(2)]);
var inst_23413 = cljs.core.not_empty.call(null,inst_23385);
var state_23465__$1 = (function (){var statearr_23508 = state_23465;
(statearr_23508[(29)] = inst_23412);

return statearr_23508;
})();
if(cljs.core.truth_(inst_23413)){
var statearr_23509_23584 = state_23465__$1;
(statearr_23509_23584[(1)] = (29));

} else {
var statearr_23510_23585 = state_23465__$1;
(statearr_23510_23585[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (25))){
var inst_23383 = (state_23465[(25)]);
var inst_23399 = (state_23465[(2)]);
var inst_23400 = cljs.core.not_empty.call(null,inst_23383);
var state_23465__$1 = (function (){var statearr_23511 = state_23465;
(statearr_23511[(30)] = inst_23399);

return statearr_23511;
})();
if(cljs.core.truth_(inst_23400)){
var statearr_23512_23586 = state_23465__$1;
(statearr_23512_23586[(1)] = (26));

} else {
var statearr_23513_23587 = state_23465__$1;
(statearr_23513_23587[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (34))){
var inst_23434 = (state_23465[(2)]);
var state_23465__$1 = state_23465;
if(cljs.core.truth_(inst_23434)){
var statearr_23514_23588 = state_23465__$1;
(statearr_23514_23588[(1)] = (38));

} else {
var statearr_23515_23589 = state_23465__$1;
(statearr_23515_23589[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (17))){
var state_23465__$1 = state_23465;
var statearr_23516_23590 = state_23465__$1;
(statearr_23516_23590[(2)] = recompile_dependents);

(statearr_23516_23590[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (3))){
var state_23465__$1 = state_23465;
var statearr_23517_23591 = state_23465__$1;
(statearr_23517_23591[(2)] = null);

(statearr_23517_23591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (12))){
var inst_23356 = (state_23465[(2)]);
var state_23465__$1 = state_23465;
var statearr_23518_23592 = state_23465__$1;
(statearr_23518_23592[(2)] = inst_23356);

(statearr_23518_23592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (2))){
var inst_23318 = (state_23465[(13)]);
var inst_23325 = cljs.core.seq.call(null,inst_23318);
var inst_23326 = inst_23325;
var inst_23327 = null;
var inst_23328 = (0);
var inst_23329 = (0);
var state_23465__$1 = (function (){var statearr_23519 = state_23465;
(statearr_23519[(7)] = inst_23327);

(statearr_23519[(8)] = inst_23329);

(statearr_23519[(9)] = inst_23328);

(statearr_23519[(10)] = inst_23326);

return statearr_23519;
})();
var statearr_23520_23593 = state_23465__$1;
(statearr_23520_23593[(2)] = null);

(statearr_23520_23593[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (23))){
var inst_23379 = (state_23465[(19)]);
var inst_23387 = (state_23465[(23)]);
var inst_23382 = (state_23465[(24)]);
var inst_23383 = (state_23465[(25)]);
var inst_23385 = (state_23465[(26)]);
var inst_23390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23392 = (function (){var all_files = inst_23379;
var res_SINGLEQUOTE_ = inst_23382;
var res = inst_23383;
var files_not_loaded = inst_23385;
var dependencies_that_loaded = inst_23387;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23379,inst_23387,inst_23382,inst_23383,inst_23385,inst_23390,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23391){
var map__23521 = p__23391;
var map__23521__$1 = ((((!((map__23521 == null)))?((((map__23521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23521):map__23521);
var request_url = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23379,inst_23387,inst_23382,inst_23383,inst_23385,inst_23390,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23393 = cljs.core.reverse.call(null,inst_23387);
var inst_23394 = cljs.core.map.call(null,inst_23392,inst_23393);
var inst_23395 = cljs.core.pr_str.call(null,inst_23394);
var inst_23396 = figwheel.client.utils.log.call(null,inst_23395);
var state_23465__$1 = (function (){var statearr_23523 = state_23465;
(statearr_23523[(31)] = inst_23390);

return statearr_23523;
})();
var statearr_23524_23594 = state_23465__$1;
(statearr_23524_23594[(2)] = inst_23396);

(statearr_23524_23594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (35))){
var state_23465__$1 = state_23465;
var statearr_23525_23595 = state_23465__$1;
(statearr_23525_23595[(2)] = true);

(statearr_23525_23595[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (19))){
var inst_23369 = (state_23465[(12)]);
var inst_23375 = figwheel.client.file_reloading.expand_files.call(null,inst_23369);
var state_23465__$1 = state_23465;
var statearr_23526_23596 = state_23465__$1;
(statearr_23526_23596[(2)] = inst_23375);

(statearr_23526_23596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (11))){
var state_23465__$1 = state_23465;
var statearr_23527_23597 = state_23465__$1;
(statearr_23527_23597[(2)] = null);

(statearr_23527_23597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (9))){
var inst_23358 = (state_23465[(2)]);
var state_23465__$1 = state_23465;
var statearr_23528_23598 = state_23465__$1;
(statearr_23528_23598[(2)] = inst_23358);

(statearr_23528_23598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (5))){
var inst_23329 = (state_23465[(8)]);
var inst_23328 = (state_23465[(9)]);
var inst_23331 = (inst_23329 < inst_23328);
var inst_23332 = inst_23331;
var state_23465__$1 = state_23465;
if(cljs.core.truth_(inst_23332)){
var statearr_23529_23599 = state_23465__$1;
(statearr_23529_23599[(1)] = (7));

} else {
var statearr_23530_23600 = state_23465__$1;
(statearr_23530_23600[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (14))){
var inst_23339 = (state_23465[(22)]);
var inst_23348 = cljs.core.first.call(null,inst_23339);
var inst_23349 = figwheel.client.file_reloading.eval_body.call(null,inst_23348,opts);
var inst_23350 = cljs.core.next.call(null,inst_23339);
var inst_23326 = inst_23350;
var inst_23327 = null;
var inst_23328 = (0);
var inst_23329 = (0);
var state_23465__$1 = (function (){var statearr_23531 = state_23465;
(statearr_23531[(7)] = inst_23327);

(statearr_23531[(8)] = inst_23329);

(statearr_23531[(9)] = inst_23328);

(statearr_23531[(10)] = inst_23326);

(statearr_23531[(32)] = inst_23349);

return statearr_23531;
})();
var statearr_23532_23601 = state_23465__$1;
(statearr_23532_23601[(2)] = null);

(statearr_23532_23601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (45))){
var state_23465__$1 = state_23465;
var statearr_23533_23602 = state_23465__$1;
(statearr_23533_23602[(2)] = null);

(statearr_23533_23602[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (26))){
var inst_23379 = (state_23465[(19)]);
var inst_23387 = (state_23465[(23)]);
var inst_23382 = (state_23465[(24)]);
var inst_23383 = (state_23465[(25)]);
var inst_23385 = (state_23465[(26)]);
var inst_23402 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23404 = (function (){var all_files = inst_23379;
var res_SINGLEQUOTE_ = inst_23382;
var res = inst_23383;
var files_not_loaded = inst_23385;
var dependencies_that_loaded = inst_23387;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23379,inst_23387,inst_23382,inst_23383,inst_23385,inst_23402,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23403){
var map__23534 = p__23403;
var map__23534__$1 = ((((!((map__23534 == null)))?((((map__23534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23534):map__23534);
var namespace = cljs.core.get.call(null,map__23534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23379,inst_23387,inst_23382,inst_23383,inst_23385,inst_23402,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23405 = cljs.core.map.call(null,inst_23404,inst_23383);
var inst_23406 = cljs.core.pr_str.call(null,inst_23405);
var inst_23407 = figwheel.client.utils.log.call(null,inst_23406);
var inst_23408 = (function (){var all_files = inst_23379;
var res_SINGLEQUOTE_ = inst_23382;
var res = inst_23383;
var files_not_loaded = inst_23385;
var dependencies_that_loaded = inst_23387;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23379,inst_23387,inst_23382,inst_23383,inst_23385,inst_23402,inst_23404,inst_23405,inst_23406,inst_23407,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23379,inst_23387,inst_23382,inst_23383,inst_23385,inst_23402,inst_23404,inst_23405,inst_23406,inst_23407,state_val_23466,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23409 = setTimeout(inst_23408,(10));
var state_23465__$1 = (function (){var statearr_23536 = state_23465;
(statearr_23536[(33)] = inst_23402);

(statearr_23536[(34)] = inst_23407);

return statearr_23536;
})();
var statearr_23537_23603 = state_23465__$1;
(statearr_23537_23603[(2)] = inst_23409);

(statearr_23537_23603[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (16))){
var state_23465__$1 = state_23465;
var statearr_23538_23604 = state_23465__$1;
(statearr_23538_23604[(2)] = reload_dependents);

(statearr_23538_23604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (38))){
var inst_23419 = (state_23465[(16)]);
var inst_23436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23419);
var state_23465__$1 = state_23465;
var statearr_23539_23605 = state_23465__$1;
(statearr_23539_23605[(2)] = inst_23436);

(statearr_23539_23605[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (30))){
var state_23465__$1 = state_23465;
var statearr_23540_23606 = state_23465__$1;
(statearr_23540_23606[(2)] = null);

(statearr_23540_23606[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (10))){
var inst_23339 = (state_23465[(22)]);
var inst_23341 = cljs.core.chunked_seq_QMARK_.call(null,inst_23339);
var state_23465__$1 = state_23465;
if(inst_23341){
var statearr_23541_23607 = state_23465__$1;
(statearr_23541_23607[(1)] = (13));

} else {
var statearr_23542_23608 = state_23465__$1;
(statearr_23542_23608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (18))){
var inst_23373 = (state_23465[(2)]);
var state_23465__$1 = state_23465;
if(cljs.core.truth_(inst_23373)){
var statearr_23543_23609 = state_23465__$1;
(statearr_23543_23609[(1)] = (19));

} else {
var statearr_23544_23610 = state_23465__$1;
(statearr_23544_23610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (42))){
var state_23465__$1 = state_23465;
var statearr_23545_23611 = state_23465__$1;
(statearr_23545_23611[(2)] = null);

(statearr_23545_23611[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (37))){
var inst_23431 = (state_23465[(2)]);
var state_23465__$1 = state_23465;
var statearr_23546_23612 = state_23465__$1;
(statearr_23546_23612[(2)] = inst_23431);

(statearr_23546_23612[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23466 === (8))){
var inst_23339 = (state_23465[(22)]);
var inst_23326 = (state_23465[(10)]);
var inst_23339__$1 = cljs.core.seq.call(null,inst_23326);
var state_23465__$1 = (function (){var statearr_23547 = state_23465;
(statearr_23547[(22)] = inst_23339__$1);

return statearr_23547;
})();
if(inst_23339__$1){
var statearr_23548_23613 = state_23465__$1;
(statearr_23548_23613[(1)] = (10));

} else {
var statearr_23549_23614 = state_23465__$1;
(statearr_23549_23614[(1)] = (11));

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
}
});})(c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19726__auto__,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____0 = (function (){
var statearr_23553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23553[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__);

(statearr_23553[(1)] = (1));

return statearr_23553;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____1 = (function (state_23465){
while(true){
var ret_value__19728__auto__ = (function (){try{while(true){
var result__19729__auto__ = switch__19726__auto__.call(null,state_23465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19729__auto__;
}
break;
}
}catch (e23554){if((e23554 instanceof Object)){
var ex__19730__auto__ = e23554;
var statearr_23555_23615 = state_23465;
(statearr_23555_23615[(5)] = ex__19730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23616 = state_23465;
state_23465 = G__23616;
continue;
} else {
return ret_value__19728__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__ = function(state_23465){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____1.call(this,state_23465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19727__auto__;
})()
;})(switch__19726__auto__,c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19840__auto__ = (function (){var statearr_23556 = f__19839__auto__.call(null);
(statearr_23556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19838__auto__);

return statearr_23556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19840__auto__);
});})(c__19838__auto__,map__23311,map__23311__$1,opts,before_jsload,on_jsload,reload_dependents,map__23312,map__23312__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19838__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23619,link){
var map__23622 = p__23619;
var map__23622__$1 = ((((!((map__23622 == null)))?((((map__23622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23622):map__23622);
var file = cljs.core.get.call(null,map__23622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23622,map__23622__$1,file){
return (function (p1__23617_SHARP_,p2__23618_SHARP_){
if(cljs.core._EQ_.call(null,p1__23617_SHARP_,p2__23618_SHARP_)){
return p1__23617_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23622,map__23622__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23628){
var map__23629 = p__23628;
var map__23629__$1 = ((((!((map__23629 == null)))?((((map__23629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23629):map__23629);
var match_length = cljs.core.get.call(null,map__23629__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23629__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23624_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23624_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23631 = [];
var len__17884__auto___23634 = arguments.length;
var i__17885__auto___23635 = (0);
while(true){
if((i__17885__auto___23635 < len__17884__auto___23634)){
args23631.push((arguments[i__17885__auto___23635]));

var G__23636 = (i__17885__auto___23635 + (1));
i__17885__auto___23635 = G__23636;
continue;
} else {
}
break;
}

var G__23633 = args23631.length;
switch (G__23633) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23631.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23638_SHARP_,p2__23639_SHARP_){
return cljs.core.assoc.call(null,p1__23638_SHARP_,cljs.core.get.call(null,p2__23639_SHARP_,key),p2__23639_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23640){
var map__23643 = p__23640;
var map__23643__$1 = ((((!((map__23643 == null)))?((((map__23643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23643):map__23643);
var f_data = map__23643__$1;
var file = cljs.core.get.call(null,map__23643__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23645,files_msg){
var map__23652 = p__23645;
var map__23652__$1 = ((((!((map__23652 == null)))?((((map__23652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23652):map__23652);
var opts = map__23652__$1;
var on_cssload = cljs.core.get.call(null,map__23652__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23654_23658 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23655_23659 = null;
var count__23656_23660 = (0);
var i__23657_23661 = (0);
while(true){
if((i__23657_23661 < count__23656_23660)){
var f_23662 = cljs.core._nth.call(null,chunk__23655_23659,i__23657_23661);
figwheel.client.file_reloading.reload_css_file.call(null,f_23662);

var G__23663 = seq__23654_23658;
var G__23664 = chunk__23655_23659;
var G__23665 = count__23656_23660;
var G__23666 = (i__23657_23661 + (1));
seq__23654_23658 = G__23663;
chunk__23655_23659 = G__23664;
count__23656_23660 = G__23665;
i__23657_23661 = G__23666;
continue;
} else {
var temp__4425__auto___23667 = cljs.core.seq.call(null,seq__23654_23658);
if(temp__4425__auto___23667){
var seq__23654_23668__$1 = temp__4425__auto___23667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23654_23668__$1)){
var c__17629__auto___23669 = cljs.core.chunk_first.call(null,seq__23654_23668__$1);
var G__23670 = cljs.core.chunk_rest.call(null,seq__23654_23668__$1);
var G__23671 = c__17629__auto___23669;
var G__23672 = cljs.core.count.call(null,c__17629__auto___23669);
var G__23673 = (0);
seq__23654_23658 = G__23670;
chunk__23655_23659 = G__23671;
count__23656_23660 = G__23672;
i__23657_23661 = G__23673;
continue;
} else {
var f_23674 = cljs.core.first.call(null,seq__23654_23668__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23674);

var G__23675 = cljs.core.next.call(null,seq__23654_23668__$1);
var G__23676 = null;
var G__23677 = (0);
var G__23678 = (0);
seq__23654_23658 = G__23675;
chunk__23655_23659 = G__23676;
count__23656_23660 = G__23677;
i__23657_23661 = G__23678;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23652,map__23652__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23652,map__23652__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map