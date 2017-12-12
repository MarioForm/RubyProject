Rails.application.routes.draw do
  get '/movies/searchMovie' => "movies#searchMovie", as: 'searchMovie'
  get '/movies/showMovieDetails' => "movies#showMovieDetails", as: 'showMovieDetails'
  get '/movies/showUserMovies/:user_id' => "movies#showUserMovies", as: 'showUserMovies'
  get '/movies/sortedMovies' => "movies#sortedMovies", as: 'sortedMovies'
  root 'movies#searchMovie'
    
  resources :likes
  resources :movies
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
