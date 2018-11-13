Rails.application.routes.draw do
  resources :comics, only: [:index, :show, :edit, :update, :destroy, :new] do
    resources :frames, only: [:index, :new, :create, :show, :edit, :update, :destroy]
    resources :speeches, only: [:index, :new, :create, :show, :edit, :update, :destroy]
    resources :bubbles, only: [:index, :new, :create, :show, :edit, :update, :destroy]
    resources :figures, only: [:index, :new, :create, :show, :edit, :update, :destroy]
    resources :images, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  end

  root 'comics#index'
end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
