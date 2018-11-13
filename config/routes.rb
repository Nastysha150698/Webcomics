Rails.application.routes.draw do
  resources :comics, only: [:index, :show, :edit, :update, :destroy, :new] do
    resources :frames
    resources :speeches
    resources :bubbles
    resources :figures, only: [:index, :new, :create, :show, :edit, :update, :destroy]
    resources :images
  end

  root 'comics#index'
end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
