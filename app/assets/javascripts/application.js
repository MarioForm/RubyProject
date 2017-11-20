// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {
    $('#searchForm').on('submit', function(e) {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

$('i').hover(function() {
    $(this).css({"color":"white"});
}, function() {
    $(this).css({"color":"#337ab7"});
});

function getMovies(searchText) {
    axios.get('http://www.omdbapi.com/?apikey=5a685335&s='+searchText)
        .then(function(response) {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, function(index, movie) {
                output += `
                  <div class="col-md-3">
                    <div class="well text-center">
                      <img src="${movie.Poster}" alt="No Image Available">
                      <h5>${movie.Title}</h5>
                      <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Details</a>
                    </div>
                  </div>
                `;
            });
            
            $('#movies').html(output);
        })
        .catch(function(err) {
            console.log(err);
        });
};

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movies/showMovieDetails';
    return false;
};

function getMovie() {
  let movieId = sessionStorage.getItem('movieId'); 
    
  axios.get('http://www.omdbapi.com/?apikey=5a685335&i='+movieId)
        .then(function(response) {
            console.log(response);
            let movie = response.data;
      
             let output =`
                <div class="row movieInfo">
                  <div class="col-md-4">
                    <img src="${movie.Poster}" class="thumbnail" alt="No Image Available">
                  </div>
                  <div class="col-md-8">
                    <h2>${movie.Title}</h2>
                    <ul class="list-group">
                      <li class="list-group-item"><strong>Genre: </strong> ${movie.Genre}</li>
                      <li class="list-group-item"><strong>Released: </strong> ${movie.Released}</li>
                      <li class="list-group-item"><strong>Rated: </strong> ${movie.Rated}</li>
                      <li class="list-group-item"><strong>IMDB Rating: </strong> ${movie.imdbRating}</li>
                      <li class="list-group-item"><strong>Director: </strong> ${movie.Director}</li>
                      <li class="list-group-item"><strong>Writer: </strong> ${movie.Writer}</li>
                      <li class="list-group-item"><strong>Main Actors: </strong> ${movie.Actors}</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="well">
                    <h4>Plot</h4>
                    ${movie.Plot}
                    <hr>
                    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View on IMDB</a>
                    <a href="http://stuweb.jcu.edu/ctherrien18/cs475/omdbSite.html" class="btn btn-default">Go Back To Search</a>
                  </div>
                </div>
            `;
      
            $('#movie').html(output);
        })
        .catch(function(err) {
            console.log(err);
        });
};