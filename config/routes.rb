Rails.application.routes.draw do
  resources :department_heads
  resources :units
  resources :lecturers
  resources :cohorts
  resources :courses
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
