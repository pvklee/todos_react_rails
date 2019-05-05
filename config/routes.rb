Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:show, :index, :create, :update, :destroy] do
      resources :steps, only: [:index, :create]
    end
    resources :steps, only: [:update, :destroy]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
end
