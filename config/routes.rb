Rails.application.routes.draw do

  get 'comics_on_react/index'

  resources :fonts
  resources :comics do
    resources :frames
    resources :speeches
    resources :bubbles
    resources :figures
    resources :images
  end

  root 'comics#index'
end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
