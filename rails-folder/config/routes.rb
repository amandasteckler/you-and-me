Rails.application.routes.draw do
  resources :users, :sessions, :posts, :boards, :images

  post '/login', to: "sessions#create"
  post '/images/new', to: "images#new"
end
