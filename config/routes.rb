Rails.application.routes.draw do
  get "pages/:page", to: "pages#show", as: "page"
  root "pages#show", page: "home"
end
