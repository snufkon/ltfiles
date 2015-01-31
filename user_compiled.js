if(!lt.util.load.provided_QMARK_('lt.plugins.user')) {
goog.provide('lt.plugins.user');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.console');
goog.require('lt.objs.context');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('lt.objs.files');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.context');
goog.require('lt.objs.console');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('lt.object');
lt.plugins.user.print_obj_info = (function print_obj_info(obj){var obj__$1 = (((function (){var G__9047 = obj;if(G__9047)
{var bit__7021__auto__ = (G__9047.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__7021__auto__) || (G__9047.cljs$core$IDeref$))
{return true;
} else
{if((!G__9047.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__9047);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__9047);
}
})())?cljs.core.deref.call(null,obj):obj);cljs.core.println.call(null,"object keys:",cljs.core.keys.call(null,obj__$1));
cljs.core.println.call(null,"id:",new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(obj__$1));
cljs.core.println.call(null,"type:",new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(obj__$1));
cljs.core.println.call(null,"tags:",new cljs.core.Keyword("lt.object","tags","lt.object/tags",701827975).cljs$core$IFn$_invoke$arity$1(obj__$1));
cljs.core.println.call(null,"triggers:",new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(obj__$1));
cljs.core.println.call(null,"behaviors:",new cljs.core.Keyword(null,"behaviors","behaviors",607554515).cljs$core$IFn$_invoke$arity$1(obj__$1));
return cljs.core.println.call(null,"children:",new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(obj__$1));
});
lt.plugins.user.current_editor_path = (function current_editor_path(){var ed = lt.objs.editor.pool.last_active.call(null);return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.user.path__GT_project_dir = (function path__GT_project_dir(path){var temp__4124__auto__ = lt.objs.files.walk_up_find.call(null,path,"project.clj");if(cljs.core.truth_(temp__4124__auto__))
{var project_path = temp__4124__auto__;return lt.objs.files.parent.call(null,project_path);
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.close-other-project-tabs","user.close-other-project-tabs",1516746617),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Close other project tabs",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var cur_tab = lt.objs.tabs.active_tab.call(null);var cur_path = lt.objs.tabs.__GT_path.call(null,cur_tab);var cur_project_dir = lt.plugins.user.path__GT_project_dir.call(null,cur_path);var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var seq__9048 = cljs.core.seq.call(null,tabs);var chunk__9049 = null;var count__9050 = 0;var i__9051 = 0;while(true){
if((i__9051 < count__9050))
{var tab = cljs.core._nth.call(null,chunk__9049,i__9051);var project_dir_9052 = lt.plugins.user.path__GT_project_dir.call(null,lt.objs.tabs.__GT_path.call(null,tab));if(cljs.core._EQ_.call(null,cur_project_dir,project_dir_9052))
{} else
{lt.object.raise.call(null,tab,new cljs.core.Keyword(null,"close","close",1108660586));
}
{
var G__9053 = seq__9048;
var G__9054 = chunk__9049;
var G__9055 = count__9050;
var G__9056 = (i__9051 + 1);
seq__9048 = G__9053;
chunk__9049 = G__9054;
count__9050 = G__9055;
i__9051 = G__9056;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9048);if(temp__4126__auto__)
{var seq__9048__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9048__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9048__$1);{
var G__9057 = cljs.core.chunk_rest.call(null,seq__9048__$1);
var G__9058 = c__7119__auto__;
var G__9059 = cljs.core.count.call(null,c__7119__auto__);
var G__9060 = 0;
seq__9048 = G__9057;
chunk__9049 = G__9058;
count__9050 = G__9059;
i__9051 = G__9060;
continue;
}
} else
{var tab = cljs.core.first.call(null,seq__9048__$1);var project_dir_9061 = lt.plugins.user.path__GT_project_dir.call(null,lt.objs.tabs.__GT_path.call(null,tab));if(cljs.core._EQ_.call(null,cur_project_dir,project_dir_9061))
{} else
{lt.object.raise.call(null,tab,new cljs.core.Keyword(null,"close","close",1108660586));
}
{
var G__9062 = cljs.core.next.call(null,seq__9048__$1);
var G__9063 = null;
var G__9064 = 0;
var G__9065 = 0;
seq__9048 = G__9062;
chunk__9049 = G__9063;
count__9050 = G__9064;
i__9051 = G__9065;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.instarepl-with-off-live-mode","user.instarepl-with-off-live-mode",3710454487),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Open a clojure instarepl starting with off live mode",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"instarepl","instarepl",1043123260));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"instarepl.toggle-live","instarepl.toggle-live",2218373139));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.console-tab","user.console-tab",4094415854),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Open the console in a tab with smarter way",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"console-tab","console-tab",3389753745));
var console_ts = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.console.console));var console_ts_id = lt.object.__GT_id.call(null,console_ts);var cur_ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var cur_ts_id = lt.object.__GT_id.call(null,cur_ts);if(cljs.core._EQ_.call(null,console_ts_id,cur_ts_id))
{var temp__4124__auto__ = lt.objs.tabs.next_tabset.call(null,cur_ts);if(cljs.core.truth_(temp__4124__auto__))
{var ts = temp__4124__auto__;return lt.objs.tabs.move_tab_to_tabset.call(null,lt.objs.console.console,ts);
} else
{return lt.objs.tabs.move_tab_to_tabset.call(null,lt.objs.console.console,lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabset.new","tabset.new",1444331601)));
}
} else
{return lt.objs.tabs.active_BANG_.call(null,lt.objs.console.console);
}
})], null));
}

//# sourceMappingURL=user_compiled.js.map