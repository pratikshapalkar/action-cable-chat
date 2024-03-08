Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  root 'messages#index'
  resources :messages
  resources :rooms
end
