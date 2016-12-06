Rails.application.routes.draw do
  resources :users, :sessions, :posts, :boards, :images

  post '/login', to: "sessions#create"
end
