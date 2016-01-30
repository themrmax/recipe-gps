(ns recipegps.core
  (:require [reagent.core :as r]))

(def recipe-data
{:author "Melissa Clark"
 :title "Garlicky Beet Spread with Yogurt, Dill and Horseradish"
 :url "http://cooking.nytimes.com/recipes/1014374-garlicky-beet-spread-with-yogurt-dill-and-horseradish"
 :steps [
  {:steptext "Heat oven to 375 degrees.", :duration 10},
  {:steptext "Scrub and trim [2 medium beets].", :duration 120},
  {:steptext "Place beets in a small baking dish and drizzle with olive oil.", :duration 60},
  {:steptext "Add 3 tablespoons water to bottom of dish and cover tightly with foil.", :duration 60},
  {:steptext "Bake until tender, about 1 to 1 1/2 hours, turning beets after 45 minutes.", :duration 10},
  {:steptext "Take out of the oven and let cool.", :duration 30},
  {:steptext "Set up your food processor/blender.", :duration 30},
  {:steptext "Peel and mince [1 large clove garlic].", :duration 60},
  {:steptext "Chop [2 tablespoons of dill].", :duration 60},
  {:steptext "Juice [1/2 lemon].", :duration 60},
  {:steptext "Peel beets.", :duration 60},
  {:steptext "Add [1/2 cup walnuts], garlic and [1 teaspoon salt]", :duration 60},
  {:steptext "Process until very finely ground.", :duration 60},
  {:steptext "Scrape down sides of bowl.", :duration 30},
  {:steptext "Add the peeled beets, [2 tablespoons oil], [1 cup yogurt], lemon  juice, dill and [1.5 teaspoons prepared horseradish].", :duration  60},
  {:steptext "Pulse until relatively smooth.", :duration 30},
  {:steptext "Taste for seasoning and add more lemon or salt, or both, if needed.", :duration 30},
  {:steptext "Serve with latkes or fritters, or use as a dip for vegetables.", :duration 10}
  ]})
(def app-state (r/atom { :step 0 }))
(defonce seconds-remaining (r/atom 10))

(defn next-step [data]
  (let [i (:step @data)
        sound-src (str "/data/audio/garlicky-beet-spread/" i ".mp3")
        sound (js/Audio. sound-src)]
    (do
      (set! (.-src sound) sound-src)
      (.play sound)
      (swap! data update-in [:step] inc)
      (reset! seconds-remaining (:duration (nth (:steps recipe-data) (:step @app-state)))))))


(defn timer-component []
  (js/setInterval #(swap! seconds-remaining dec) 1000)
  (fn []
      [:div
       "Seconds Remaining for this step: " (max @seconds-remaining 0)]))




(defn next-step-button []
  [:div.next-step-button
   [:div [:a {:href "#" :on-click #(next-step app-state)} "OK Finished that."]]])

(defn reset-timer-button []
  [:div.reset-timer-button
   [:div [:a {:href "#" :on-click #(reset! seconds-remaining 50)} "reset timer"]]])

(defn simple-example []
  [:div
   [:h1 (str "Current step: " (:steptext (nth (:steps recipe-data) (:step @app-state))))]
   [:h1 (str "Next step: " (:steptext (nth (:steps recipe-data) (inc (:step @app-state)))))]
  [timer-component]
   [next-step-button]
   [reset-timer-button]])

(defn ^:export run []
  (r/render [simple-example]
            (js/document.getElementById "app")))
