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

  <section class="similarMovies">
    <h3>Similar Movies for you</h3>
   <div class="carousel-wrapper">
      <div class="carousel-container" id="watchlist-carousel">
        <!-- Movies dynamically added -->
      </div>
      <button class="carousel-button prev"><i class="fas fa-chevron-left"></i></button>
      <button class="carousel-button next"><i class="fas fa-chevron-right"></i></button>
    </div>
    <div class ="overlay"></div>
  </section>

   <section class="footer">
        <div class="footerOne">
          <div class="contact">
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quo! Molestiae cumque sunt asperiores.</h3>
          </div>
          <div class="terms">
            <ul>
              <li>Privacy policy</li>
              <li>Terms of service</li>
              <li>Language</li>
            </ul>
          </div>
        </div>
        <div class="footerTwo">
          <div class="newsletter">
            <p>Home / Discover / Influence / Release</p>
          </div>
          <div class="social-media">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-spotify"></i></a>
          </div>
        </div>
    </section>

`
// Retrieve movie details
const movie = JSON.parse(localStorage.getItem('selectedMovie'))

const API_KEY = 'de8d95a8fd855c524e4704e6647ae343'
const BASE_URL = 'https://api.themoviedb.org/3'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

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


   function setupCarouselNavigation(sectionId) {
    const carousel = document.querySelector(`#${sectionId} .carousel-container`)
    const prevBtn = document.querySelector(`#${sectionId} .carousel-button.prev`)
    const nextBtn = document.querySelector(`#${sectionId} .carousel-button.next`)
  
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' })
    })
  
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' })
    })
  }

  async function loadCarouselWide(sectionId, endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`)
    const data = await response.json()
    const movies = data.results
  
    const carouselContainer = document.querySelector(
      `#${sectionId} .carousel-container`
    )
  
    movies.forEach((movie) => {
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie-wide')
      movieEl.innerHTML = `
          <div class="movie-img">
            <img src="${IMG_PATH}${movie.poster_path}" alt="${movie.title}">
            <div class="movie-overlay-wide">
              <h3>${movie.title}</h3>
              <span>⭐ ${movie.vote_average.toFixed(
                1
              )}  <button class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button></span>
            </div>
          </div>
        `
  
      carouselContainer.appendChild(movieEl)
    })
  
    setupCarouselNavigation(sectionId)
  }

  loadCarouselWide('similarMovies','/movie/popular')