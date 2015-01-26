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
lt.plugins.user.react_panel = (function react_panel(this$){var e__7768__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"app-root"], null),"React + LightTable!"], null));var seq__8339_8345 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8340_8346 = null;var count__8341_8347 = 0;var i__8342_8348 = 0;while(true){
if((i__8342_8348 < count__8341_8347))
{var vec__8343_8349 = cljs.core._nth.call(null,chunk__8340_8346,i__8342_8348);var ev__7769__auto___8350 = cljs.core.nth.call(null,vec__8343_8349,0,null);var func__7770__auto___8351 = cljs.core.nth.call(null,vec__8343_8349,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___8350,func__7770__auto___8351);
{
var G__8352 = seq__8339_8345;
var G__8353 = chunk__8340_8346;
var G__8354 = count__8341_8347;
var G__8355 = (i__8342_8348 + 1);
seq__8339_8345 = G__8352;
chunk__8340_8346 = G__8353;
count__8341_8347 = G__8354;
i__8342_8348 = G__8355;
continue;
}
} else
{var temp__4126__auto___8356 = cljs.core.seq.call(null,seq__8339_8345);if(temp__4126__auto___8356)
{var seq__8339_8357__$1 = temp__4126__auto___8356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8339_8357__$1))
{var c__7119__auto___8358 = cljs.core.chunk_first.call(null,seq__8339_8357__$1);{
var G__8359 = cljs.core.chunk_rest.call(null,seq__8339_8357__$1);
var G__8360 = c__7119__auto___8358;
var G__8361 = cljs.core.count.call(null,c__7119__auto___8358);
var G__8362 = 0;
seq__8339_8345 = G__8359;
chunk__8340_8346 = G__8360;
count__8341_8347 = G__8361;
i__8342_8348 = G__8362;
continue;
}
} else
{var vec__8344_8363 = cljs.core.first.call(null,seq__8339_8357__$1);var ev__7769__auto___8364 = cljs.core.nth.call(null,vec__8344_8363,0,null);var func__7770__auto___8365 = cljs.core.nth.call(null,vec__8344_8363,1,null);lt.util.dom.on.call(null,e__7768__auto__,ev__7769__auto___8364,func__7770__auto___8365);
{
var G__8366 = cljs.core.next.call(null,seq__8339_8357__$1);
var G__8367 = null;
var G__8368 = 0;
var G__8369 = 0;
seq__8339_8345 = G__8366;
chunk__8340_8346 = G__8367;
count__8341_8347 = G__8368;
i__8342_8348 = G__8369;
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
}

//# sourceMappingURL=user_compiled.js.map