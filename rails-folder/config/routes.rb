Rails.application.routes.draw do
  resources :users, :sessions, :posts, :boards

  post '/login', to: "sessions#create" 
end
