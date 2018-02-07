Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'
  get '/about-me' => 'pages#about'
  get '/portfolio' => 'pages#portfolio'
  get '/contact' => 'pages#contact'
  get '/whereto' => 'pages#whereto'
  get '/friendlybean' => 'pages#friendlybean'
  get '/plenty' => 'pages#plenty'
end