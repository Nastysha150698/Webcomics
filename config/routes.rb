Rails.application.routes.draw do
  resources :frames
  resources :comics
  resources :bubbles
  resources :figures
  resources :texts
  resources :images
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
