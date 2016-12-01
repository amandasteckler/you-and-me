Rails.application.routes.draw do
  resources :users, :sessions, :posts, :boards
end
