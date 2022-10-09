Rails.application.routes.draw do
  resources :department_heads,only: [:index, :create]
  resources :units,only: [:show, :index, :create, :update]
  resources :lecturers
  resources :cohorts,only: [:show, :index]
  resources :courses,only: [:show, :index]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
