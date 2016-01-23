(ns recipe-gps.core
  (:require [sablono.core :as sab]))

(def app-state (atom { :step 0 }))

(defn next-step [data]
  (let [i (:step @data)
        sound-src (str "/data/audio/garlicky-beet-spread/" i ".mp3")
        sound (js/Audio. sound-src)]
    (do
      (set! (.-src sound) sound-src)
      (.play sound)
      (swap! data update-in [:step] inc))))

(defn increment-counter  [data] (swap! data update-in [:step] inc))


(defn recipe-step [data]
  (sab/html [:div
             [:h1 "Recipe step: " (:step @data)]
             [:div [:a {:href "#"
                        :onClick #(next-step data)
                        }
                    "OK, finished that."]]]))

(defn render! []
  (.render js/React
           (recipe-step app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
