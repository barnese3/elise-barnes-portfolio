Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'
  get '/about' => 'pages#about'
  get '/portfolio' => 'pages#portfolio'
  get '/contact' => 'pages#contact'
  get '/services-and-prices' => 'pages#services-and-prices'
  get '/thanks' => 'pages#thanks'
  get '/client-portal' => 'pages#client-portal'
  # get '/friendlybean' => 'pages#friendlybean'
  # get '/plenty' => 'pages#plenty'
  # get '/crystal-cove' => 'pages#crystal-cove'
end