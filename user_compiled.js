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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.close-other-project-tabs","user.close-other-project-tabs",1516746617),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Close other project tabs",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var cur_tab = lt.objs.tabs.active_tab.call(null);var cur_path = lt.objs.tabs.__GT_path.call(null,cur_tab);var cur_project_dir = lt.plugins.user.path__GT_project_dir.call(null,cur_path);var tabs = lt.object.by_tag.call(null,new cljs.core.Keyword(null,"tabset.tab","tabset.tab",1444337222));var seq__9083 = cljs.core.seq.call(null,tabs);var chunk__9084 = null;var count__9085 = 0;var i__9086 = 0;while(true){
if((i__9086 < count__9085))
{var tab = cljs.core._nth.call(null,chunk__9084,i__9086);var project_dir_9087 = lt.plugins.user.path__GT_project_dir.call(null,lt.objs.tabs.__GT_path.call(null,tab));if(cljs.core._EQ_.call(null,cur_project_dir,project_dir_9087))
{} else
{lt.object.raise.call(null,tab,new cljs.core.Keyword(null,"close","close",1108660586));
}
{
var G__9088 = seq__9083;
var G__9089 = chunk__9084;
var G__9090 = count__9085;
var G__9091 = (i__9086 + 1);
seq__9083 = G__9088;
chunk__9084 = G__9089;
count__9085 = G__9090;
i__9086 = G__9091;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9083);if(temp__4126__auto__)
{var seq__9083__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9083__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9083__$1);{
var G__9092 = cljs.core.chunk_rest.call(null,seq__9083__$1);
var G__9093 = c__7119__auto__;
var G__9094 = cljs.core.count.call(null,c__7119__auto__);
var G__9095 = 0;
seq__9083 = G__9092;
chunk__9084 = G__9093;
count__9085 = G__9094;
i__9086 = G__9095;
continue;
}
} else
{var tab = cljs.core.first.call(null,seq__9083__$1);var project_dir_9096 = lt.plugins.user.path__GT_project_dir.call(null,lt.objs.tabs.__GT_path.call(null,tab));if(cljs.core._EQ_.call(null,cur_project_dir,project_dir_9096))
{} else
{lt.object.raise.call(null,tab,new cljs.core.Keyword(null,"close","close",1108660586));
}
{
var G__9097 = cljs.core.next.call(null,seq__9083__$1);
var G__9098 = null;
var G__9099 = 0;
var G__9100 = 0;
seq__9083 = G__9097;
chunk__9084 = G__9098;
count__9085 = G__9099;
i__9086 = G__9100;
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