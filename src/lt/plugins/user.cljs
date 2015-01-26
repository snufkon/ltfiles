(ns lt.plugins.user
  (:require [clojure.string :as string]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            ;; [lt.util.load :as load]
            [lt.objs.files :as files]
            )
  (:require-macros [lt.macros :refer [defui behavior]]))

(defn format-time [d]
  (first (string/split (.toTimeString d) #" ")))

(def el React/createElement)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def label
  (React/createClass
   #js {:displayName "TimerLabel"
        :render (fn []
                  (this-as this
                           (el "h1" nil (str "Timer: "
                                             (-> this .-props .-time)))))}))

(defui react-panel [this]
  [:h1 {:id "app-root"} "React + LightTable!"])


(object/object* ::user.react-timer
                :tags [:user.hello]
                :behaviors [::on-close-timer-destroy]
                :init (fn [this]
                        (react-panel this)))

(def react-timer (object/create ::user.react-timer))

(cmd/command {
              :command :user.show-time
              :desc "User: Show time"
              :exec (fn []
                      (tabs/add-or-focus! react-timer)
                      (let [app-root (.getElementById js/document "app-root")
                            label-inst (React/render
                                        (el label #js {:time (format-time (js/Date.))} [])
                                        app-root)
                            refresh-timer (fn []
                                            (prn (format-time (js/Date.)))
                                            (.setProps label-inst #js {:time (format-time (js/Date.))}))
                            interval (js/window.setInterval refresh-timer 1000)]
                        (object/merge! react-timer {:interval interval})))})

(behavior ::on-close-timer-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (js/window.clearTimeout (:interval @this))
                      (object/raise this :destroy)))

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

;; (find-project "hogehoge")

;; default codes
;; UI to be associated with an object
;; (defui hello-panel [this]
;;   [:h1 "Hello World!"])

;; ;; Define an object prototype
;; (object/object* ::user.hello
;;                 :tags [:user.hello]
;;                 :behaviors [::on-close-destroy]
;;                 :init (fn [this]
;;                         (hello-panel this)))

;; ;; Currently used by :user.hello but could be reused by any
;; ;; object with a declaration in user.behaviors.
;; (behavior ::on-close-destroy
;;           :triggers #{:close}
;;           :reaction (fn [this]
;;                       (object/raise this :destroy)))

;; (def hello (object/create ::user.hello))

;; ;; Create a user command. Commands can call any function
;; ;; and be bound to any keystroke.
;; (cmd/command {:command :user.say-hello
;;               :desc "User: Say Hello"
;;               :exec (fn []
;;                       (tabs/add-or-focus! hello))})
