// Replace 'YOUR_API_KEY' with your actual API key from TMDb or OMDb
const apiKey = '7c97d79abbb18bab9ea8a5a3a2cef427';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('resultsContainer');

// Event listener for the search button
searchButton.addEventListener('click', () => {
  const query = searchInput.value;
  if (query) {
    searchMovies(query);
  }
});

// Function to search for movies
function searchMovies(query) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayResults(data.results);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Function to display search results
function displayResults(movies) {
  resultsContainer.innerHTML = '';
  if (movies.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }
  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <h2>${movie.title}</h2>
      <p>Release Date: ${movie.release_date}</p>
      <p>Rating: ${movie.vote_average}</p>
      <p>${movie.overview}</p>
    `;
    resultsContainer.appendChild(movieElement);
  });
}
