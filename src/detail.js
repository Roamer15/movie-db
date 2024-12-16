import "./movie.css"
import "./style.css"

document.querySelector('#detail').innerHTML = `
     <div id="navabar">
          <div id="logo">
            <img src="../public/images/Logo.png" alt="logo" id="symbol">
            <img src="../public/images/SaintStream.png" alt="logo">
          </div>
           <div class="bars">
            <img src="../public/images/Logo.png" alt="logo" id="symbol">
            <i class="fa-solid fa-bars"></i>
            </div>
          <div id="menu">
            <a href="../index.html" class="menu-item" type="active">Home</a>
            <a href="#" class="menu-item">Discover</a>
            <a href="#" class="menu-item">Movie Release</a>
            <a href="#" class="menu-item">Forum</a>
            <a href="#" class="menu-item">About</a>
          </div>
          <div id="buttons">
            <input type="text" placeholder="Search a movie..." id="search-bar">
            <button class="header-btn" id="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="header-btn"><i class="fa-regular fa-bell"></i></button>
            <button class="header-btn"><i class="fa-solid fa-user-circle"></i></i></button>
          </div>
      </div>

 <section id="hero-banner" class="hero-banner">
     <div class="movie-content">
      <h1 id="movie-title">Movie Title</h1>
      <div id="playBtn">
          <button id="playOne"><i class="fa-solid fa-circle-play"></i> Play Now</button>
          <button id="playThree"><i class="fa-regular fa-circle-play"></i> Watch Trailer</button>
          <button class="bookmark-btn" id="playTwo"><i class="fa-regular fa-bookmark"></i> Add Watchlist</button>
      </div>
    </div>
  </section>

  <section class = "description">
      <h3>Story Line</h3>
      <p id="movie-overview">Movie overview...</p>
  </section>

`
// Retrieve movie details
const movie = JSON.parse(localStorage.getItem('selectedMovie'))

if (movie) {
  // Populate your HTML elements with movie data
  const movieSection = document.getElementById('hero-banner')
  movieSection.style.backgroundImage = `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path})')`
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-overview').textContent = movie.overview;
} else {
  console.error('No movie data found in localStorage.');
}

function saveToLocalStorage(movie) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [] // Retrieve existing watchlist or create empty array
  const movieExists = watchlist.some((item) => item.id === movie.id) // Check if the movie already exists

  if (!movieExists) {
    watchlist.push(movie); // Add movie to watchlist
    localStorage.setItem('watchlist', JSON.stringify(watchlist)) // Save updated list
  }
}

   // Add event listener to bookmark button
   const bookmarkButton = playBtn.querySelector('.bookmark-btn')
   bookmarkButton.addEventListener('click', () => {
     // Toggle bookmark icon color
     const icon = bookmarkButton.querySelector('i')
     icon.classList.toggle('fa-regular')
     icon.classList.toggle('fa-solid')
     icon.style.color = icon.classList.contains("fa-solid") ? 'green' : '' // Green when solid

     // Save movie to localStorage
     saveToLocalStorage(movie)
   })
