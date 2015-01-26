if(!lt.util.load.provided_QMARK_('lt.plugins.user')) {
goog.provide('lt.plugins.user');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('lt.objs.files');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('lt.object');
lt.plugins.user.format_time = (function format_time(d){return cljs.core.first.call(null,clojure.string.split.call(null,d.toTimeString(),/ /));
});
lt.plugins.user.el = React.createElement;
lt.plugins.user.label = React.createClass.call(null,{"render": (function (){var this$ = this;return lt.plugins.user.el.call(null,"h1",null,[cljs.core.str("Timer: "),cljs.core.str(this$.props.time)].join(''));
}), "displayName": "TimerLabel"});
lt.plugins.user.react_panel = (function react_panel(this$){var e__7768__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"app-root"], null),"React + LightTable!"], null));var seq__9016_9026 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9017_9027 = null;var count__9018_9028 = 0;var i__9019_9029 = 0;while(true){
if((i__9019_9029 < count__9018_9028))
{var vec__9020_9030 = cljs.core._nth.call(null,chunk__9017_9027,i__9019_9029);var ev__7769__auto___9031 = cljs.core.nth.call(null,vec__9020_9030,0,null);var func__7770__auto___9032 = cljs.core.nth.call(null,vec__9020_9030,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___9031,func__7770__auto___9032);
{
var G__9033 = seq__9016_9026;
var G__9034 = chunk__9017_9027;
var G__9035 = count__9018_9028;
var G__9036 = (i__9019_9029 + 1);
seq__9016_9026 = G__9033;
chunk__9017_9027 = G__9034;
count__9018_9028 = G__9035;
i__9019_9029 = G__9036;
continue;
}
} else
{var temp__4126__auto___9037 = cljs.core.seq.call(null,seq__9016_9026);if(temp__4126__auto___9037)
{var seq__9016_9038__$1 = temp__4126__auto___9037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9016_9038__$1))
{var c__7119__auto___9039 = cljs.core.chunk_first.call(null,seq__9016_9038__$1);{
var G__9040 = cljs.core.chunk_rest.call(null,seq__9016_9038__$1);
var G__9041 = c__7119__auto___9039;
var G__9042 = cljs.core.count.call(null,c__7119__auto___9039);
var G__9043 = 0;
seq__9016_9026 = G__9040;
chunk__9017_9027 = G__9041;
count__9018_9028 = G__9042;
i__9019_9029 = G__9043;
continue;
}
} else
{var vec__9021_9044 = cljs.core.first.call(null,seq__9016_9038__$1);var ev__7769__auto___9045 = cljs.core.nth.call(null,vec__9021_9044,0,null);var func__7770__auto___9046 = cljs.core.nth.call(null,vec__9021_9044,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___9045,func__7770__auto___9046);
{
var G__9047 = cljs.core.next.call(null,seq__9016_9038__$1);
var G__9048 = null;
var G__9049 = 0;
var G__9050 = 0;
seq__9016_9026 = G__9047;
chunk__9017_9027 = G__9048;
count__9018_9028 = G__9049;
i__9019_9029 = G__9050;
continue;
}
}
} else
{}
}
break;
}
return e__7768__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","user.react-timer","lt.plugins.user/user.react-timer",2123273580),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user.hello","user.hello",1535287393)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.user","on-close-timer-destroy","lt.plugins.user/on-close-timer-destroy",4442404817)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.user.react_panel.call(null,this$);
}));
lt.plugins.user.react_timer = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.user","user.react-timer","lt.plugins.user/user.react-timer",2123273580));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.show-time","user.show-time",1670717612),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Show time",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.user.react_timer);
var app_root = document.getElementById("app-root");var label_inst = React.render.call(null,lt.plugins.user.el.call(null,lt.plugins.user.label,{"time": lt.plugins.user.format_time.call(null,(new Date()))},cljs.core.PersistentVector.EMPTY),app_root);var refresh_timer = ((function (app_root,label_inst){
return (function (){cljs.core.prn.call(null,lt.plugins.user.format_time.call(null,(new Date())));
return label_inst.setProps({"time": lt.plugins.user.format_time.call(null,(new Date()))});
});})(app_root,label_inst))
;var interval = window.setInterval(refresh_timer,1000);return lt.object.merge_BANG_.call(null,lt.plugins.user.react_timer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1584322615),interval], null));
})], null));
lt.plugins.user.__BEH__on_close_timer_destroy = (function __BEH__on_close_timer_destroy(this$){window.clearTimeout(new cljs.core.Keyword(null,"interval","interval",1584322615).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","on-close-timer-destroy","lt.plugins.user/on-close-timer-destroy",4442404817),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.__BEH__on_close_timer_destroy);
lt.plugins.user.current_editor_path = (function current_editor_path(){var ed = lt.objs.editor.pool.last_active.call(null);return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.user.path__GT_project_dir = (function path__GT_project_dir(path){var temp__4124__auto__ = lt.objs.files.walk_up_find.call(null,path,"project.clj");if(cljs.core.truth_(temp__4124__auto__))
{var project_path = temp__4124__auto__;return lt.objs.files.parent.call(null,project_path);
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.close-other-project-tabs","user.close-other-project-tabs",1516746617),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Close other project tabs",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var cur_tab = lt.objs.tabs.active_tab.call(null);var cur_path = lt.objs.tabs.__GT_path.call(null,cur_tab);var cur_project_dir = lt.plugins.user.path__GT_project_dir.call(null,cur_path);var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var seq__9022 = cljs.core.seq.call(null,tabs);var chunk__9023 = null;var count__9024 = 0;var i__9025 = 0;while(true){
if((i__9025 < count__9024))
{var tab = cljs.core._nth.call(null,chunk__9023,i__9025);var project_dir_9051 = lt.plugins.user.path__GT_project_dir.call(null,lt.objs.tabs.__GT_path.call(null,tab));if(cljs.core._EQ_.call(null,cur_project_dir,project_dir_9051))
{} else
{lt.object.raise.call(null,tab,new cljs.core.Keyword(null,"close","close",1108660586));
}
{
var G__9052 = seq__9022;
var G__9053 = chunk__9023;
var G__9054 = count__9024;
var G__9055 = (i__9025 + 1);
seq__9022 = G__9052;
chunk__9023 = G__9053;
count__9024 = G__9054;
i__9025 = G__9055;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9022);if(temp__4126__auto__)
{var seq__9022__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9022__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9022__$1);{
var G__9056 = cljs.core.chunk_rest.call(null,seq__9022__$1);
var G__9057 = c__7119__auto__;
var G__9058 = cljs.core.count.call(null,c__7119__auto__);
var G__9059 = 0;
seq__9022 = G__9056;
chunk__9023 = G__9057;
count__9024 = G__9058;
i__9025 = G__9059;
continue;
}
} else
{var tab = cljs.core.first.call(null,seq__9022__$1);var project_dir_9060 = lt.plugins.user.path__GT_project_dir.call(null,lt.objs.tabs.__GT_path.call(null,tab));if(cljs.core._EQ_.call(null,cur_project_dir,project_dir_9060))
{} else
{lt.object.raise.call(null,tab,new cljs.core.Keyword(null,"close","close",1108660586));
}
{
var G__9061 = cljs.core.next.call(null,seq__9022__$1);
var G__9062 = null;
var G__9063 = 0;
var G__9064 = 0;
seq__9022 = G__9061;
chunk__9023 = G__9062;
count__9024 = G__9063;
i__9025 = G__9064;
continue;
}
}
} else
{return null;
}
}
break;
}
})], null));
}

//# sourceMappingURL=user_compiled.js.map