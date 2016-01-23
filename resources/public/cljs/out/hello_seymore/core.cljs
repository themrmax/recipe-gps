(ns hello-seymore.core
  (:require [sablono.core :as sab]))

(def app-state (atom { :step 0 }))

(def i 1)
(def ^:constant sound-src (str "/data/audio/garlicky-beet-spread/" i ".mp3"))
(def sound (js/Audio. sound-src))
(defn play-sound [] (do (set! (.-src sound) sound-src) (.play sound)))


(defn like-seymore [data]
  (sab/html [:div
             [:h1 "Recipe step: " (:step @data)]
             [:div [:a {:href "#"
                        ;; :onClick #(swap! data update-in [:step] inc)
                        :onClick play-sound}
                    "Thumbs up"]]]))

(defn render! []
  (.render js/React
           (like-seymore app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
