Rails.application.routes.draw do
  get '/movies/searchMovie' => "movies#searchMovie", as: 'searchMovie'
  get '/movies/showMovieDetails' => "movies#showMovieDetails", as: 'showMovieDetails'
  get '/movies/showUserMovies/:username' => "movies#showUserMovies", as: 'showUserMovies'
  root 'movies#searchMovie'
    
  resources :likes
  resources :movies
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
