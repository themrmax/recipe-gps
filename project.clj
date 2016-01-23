(defproject recipe-gps "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/data.json "0.2.6"]
                 [sablono "0.3.6"]]
  :plugins [[lein-figwheel "0.5.0-1"]]
  :clean-targets [:target-path "out" "resources/public/cljs"] 
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main recipe-gps.core 
                                   :asset-path "cljs/out"
                                   :output-to  "resources/public/cljs/main.js"
                                   :output-dir "resources/public/cljs/out"} 
                        }]
              }
  :figwheel {
             :css-dirs ["resources/public/css"]
             })
