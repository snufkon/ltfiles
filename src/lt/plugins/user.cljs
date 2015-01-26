(ns lt.plugins.user
  (:require [clojure.string :as string]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn- current-editor-path
  []
  (let [ed (pool/last-active)]
    (-> @ed :info :path)))

(defn- path->project-dir
  [path]
  (if-let [project-path (files/walk-up-find path "project.clj")]
    (files/parent project-path)
    nil))

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
