Rails.application.routes.draw do

  get 'comics_on_react/index'
  post 'comics_on_react/tuneFigure'
  post 'comics_on_react/tuneSpeech'
  post 'comics_on_react/tuneImage'

  post 'comics_on_react/updateImage'

  # post 'comics_on_react/create'

  post 'comics_on_react/destroyFigure'
  post 'comics_on_react/destroySpeech'
  post 'comics_on_react/destroyImage'

  post 'comics_on_react/saveLayersOrder'

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
