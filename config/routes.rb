Rails.application.routes.draw do
  resources :bubbles
  resources :figures
  resources :texts
  resources :images
  resources :frames
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
