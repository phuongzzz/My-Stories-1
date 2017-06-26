root "pages#show", page: "home"
get "pages/:page", to: "pages#show", as: "page"
resources :stories, except: [:index, :show, :destroy]
