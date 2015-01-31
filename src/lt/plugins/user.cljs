(ns lt.plugins.user
  (:require [clojure.string :as string]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.console :as console]
            [lt.objs.context :as ctx])
  (:require-macros [lt.macros :refer [defui behavior]]))

;; TODO: use defmulti by lt.object.type
(defn- print-obj-info
  [obj]
  (let [obj (if (satisfies? IDeref obj)
              @obj
              obj)]
    (println "object keys:" (keys obj))
    (println "id:" (:lt.object/id obj))
    (println "type:" (:lt.object/type obj))
    (println "tags:" (:lt.object/tags obj))
    (println "triggers:" (:triggers obj))
    (println "behaviors:" (:behaviors obj))
    (println "children:" (:children obj))))

(defn- current-editor-path
  []
  (let [ed (pool/last-active)]
    (-> @ed :info :path)))

(defn- path->project-dir
  [path]
  (if-let [project-path (files/walk-up-find path "project.clj")]
    (files/parent project-path)
    nil))


;; Commands ===================================================================

(cmd/command {:command :user.close-other-project-tabs
              :desc "User: Close other project tabs"
              :exec (fn []
                      (let [cur-tab (tabs/active-tab)
                            cur-path (tabs/->path cur-tab)
                            cur-project-dir (path->project-dir cur-path)
                            tabs (object/by-tag :tabset.tab)]
                        (doseq [tab tabs]
                          (let [project-dir (-> tab tabs/->path path->project-dir)]
                            (when-not (= cur-project-dir project-dir)
                              (object/raise tab :close))))))})

(cmd/command {:command :user.instarepl-with-off-live-mode
              :desc "User: Open a clojure instarepl starting with off live mode"
              :exec (fn []
                      (cmd/exec! :instarepl)
                      (cmd/exec! :instarepl.toggle-live))})

(cmd/command {:command :user.console-tab
              :desc "User: Open the console in a tab with smarter way"
              :exec (fn []
                      (cmd/exec! :console-tab)
                      (let [console-ts (:lt.objs.tabs/tabset @console/console)
                            console-ts-id (object/->id console-ts)
                            cur-ts (ctx/->obj :tabset)
                            cur-ts-id (object/->id cur-ts)]
                        (if (= console-ts-id cur-ts-id)
                          (if-let [ts (tabs/next-tabset cur-ts)]
                            (tabs/move-tab-to-tabset console/console ts)
                            (->> (cmd/exec! :tabset.new)
                                 (tabs/move-tab-to-tabset console/console)))
                          (tabs/active! console/console))))})
