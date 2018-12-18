Rails.application.routes.draw do

  resources :comics do
    resources :frames
    resources :speeches
    resources :bubbles
    resources :figures
    resources :images
    resources :shapes
  end

  root 'comics#index'
end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
