require "api_constraints"

namespace :api, defaults: {format: "json"} do
  devise_scope :user do
    post "sign_in", to: "sessions#create"
    post "sign_up", to: "registrations#create"
    delete "sign_out", to: "sessions#destroy"
  end

  scope module: :v1,
    constraints: ApiConstraints.new(version: 1, default: true) do
    get "search", to: "search#search"
    resources :users, only: [:show, :update, :destroy]
    resources :categories, only: :index
    resources :stories, except: [:new, :edit, :destroy] do
      resources :comments, only: :create
      post "vote", to: "votes#up_down_vote"
      resources :steps, only: [:create, :show] do
        resources :comments, only: :create
        resources :sub_steps, only: :update
        post "vote", to: "votes#up_down_vote"
      end
    end

    namespace :admin do
      resources :stories, only: :delete
    end
  end
end
