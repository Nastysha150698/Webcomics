Rails.application.routes.draw do
  resources :comics
  resources :frames
  resources :speeches
  resources :bubbles
  resources :figures
  resources :images

  root 'comics#index'
end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
