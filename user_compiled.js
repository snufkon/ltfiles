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
lt.plugins.user.current_editor_path = (function current_editor_path(){var ed = lt.objs.editor.pool.last_active.call(null);return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));
});
lt.plugins.user.path__GT_project_dir = (function path__GT_project_dir(path){var temp__4124__auto__ = lt.objs.files.walk_up_find.call(null,path,"project.clj");if(cljs.core.truth_(temp__4124__auto__))
{var project_path = temp__4124__auto__;return lt.objs.files.parent.call(null,project_path);
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.close-other-project-tabs","user.close-other-project-tabs",1516746617),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Close other project tabs",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var cur_tab = lt.objs.tabs.active_tab.call(null);var cur_path = lt.objs.tabs.__GT_path.call(null,cur_tab);var cur_project_dir = lt.plugins.user.path__GT_project_dir.call(null,cur_path);var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var seq__8010 = cljs.core.seq.call(null,tabs);var chunk__8011 = null;var count__8012 = 0;var i__8013 = 0;while(true){
if((i__8013 < count__8012))
{var tab = cljs.core._nth.call(null,chunk__8011,i__8013);var project_dir_8014 = lt.plugins.user.path__GT_project_dir.call(null,lt.objs.tabs.__GT_path.call(null,tab));if(cljs.core._EQ_.call(null,cur_project_dir,project_dir_8014))
{} else
{lt.object.raise.call(null,tab,new cljs.core.Keyword(null,"close","close",1108660586));
}
{
var G__8015 = seq__8010;
var G__8016 = chunk__8011;
var G__8017 = count__8012;
var G__8018 = (i__8013 + 1);
seq__8010 = G__8015;
chunk__8011 = G__8016;
count__8012 = G__8017;
i__8013 = G__8018;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8010);if(temp__4126__auto__)
{var seq__8010__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8010__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8010__$1);{
var G__8019 = cljs.core.chunk_rest.call(null,seq__8010__$1);
var G__8020 = c__7119__auto__;
var G__8021 = cljs.core.count.call(null,c__7119__auto__);
var G__8022 = 0;
seq__8010 = G__8019;
chunk__8011 = G__8020;
count__8012 = G__8021;
i__8013 = G__8022;
continue;
}
} else
{var tab = cljs.core.first.call(null,seq__8010__$1);var project_dir_8023 = lt.plugins.user.path__GT_project_dir.call(null,lt.objs.tabs.__GT_path.call(null,tab));if(cljs.core._EQ_.call(null,cur_project_dir,project_dir_8023))
{} else
{lt.object.raise.call(null,tab,new cljs.core.Keyword(null,"close","close",1108660586));
}
{
var G__8024 = cljs.core.next.call(null,seq__8010__$1);
var G__8025 = null;
var G__8026 = 0;
var G__8027 = 0;
seq__8010 = G__8024;
chunk__8011 = G__8025;
count__8012 = G__8026;
i__8013 = G__8027;
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
}

//# sourceMappingURL=user_compiled.js.map