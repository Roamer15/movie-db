import '../styles/movie.css'

document.querySelector('#detail').innerHTML = `
     <div id="navabar">
          <div id="logo">
            <img src="/images/Logo.png" alt="logo" id="symbol">
            <img src="/images/SaintStream.png" alt="logo">
          </div>
           <div class="bars">
            <img src="/images/Logo.png" alt="logo" id="symbol">
            <i class="fa-solid fa-bars"></i>
            </div>
            <div id="side-navbar" class="hidden">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Discover</a></li>
                <li><a href="#">Movie Release</a></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">Favourites</a></li>
                <li><a href="#">About</a></li>
              </ul>
          </div>
          <div id="overlay"></div>

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
      <span id="greytext"></span>
      <div id="playBtn">
          <button id="playone"><i class="fa-solid fa-circle-play"></i> Play Now</button>
          <button id="playthree"><i class="fa-regular fa-circle-play"></i> Watch Trailer</button>
          <button class="bookmark-btn" id="playtwo"><i class="fa-regular fa-bookmark"></i> Add Watchlist</button>
      </div>
    </div>
  </section>

  <section class = "description">
      <h3>Story Line</h3>
      <p id="movie-overview">Movie overview...</p>
  </section>

  <section id="similarmovies">
    <h3>Similar Movies for you</h3>
   <div class="carousel-wrapper">
      <div class="carousel-container" id="watchlist-carousel">
        <!-- Movies dynamically added -->
      </div>
      <button class="carousel-button prev"><i class="fas fa-chevron-left"></i></button>
      <button class="carousel-button next"><i class="fas fa-chevron-right"></i></button>
    </div>
  </section>

   <section class="footer">
        <div class="footerone">
          <div class="contact">
            <h3>Our platform it trusted by millions & features best updated movies all around the world.</h3>
          </div>
          <div class="terms">
            <ul>
              <li>Privacy policy</li>
              <li>Terms of service</li>
              <li>Language</li>
            </ul>
          </div>
        </div>
        <div class="footertwo">
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
console.log(movie)

const API_KEY = ''
const BASE_URL = 'https://api.themoviedb.org/3'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

if (movie) {
  // Populate your HTML elements with movie data
  const movieSection = document.getElementById('hero-banner')
  movieSection.style.backgroundImage = `url('https://image.tmdb.org/t/p/w1280${
    movie.backdrop_path || movie.poster_path
  })')`
  document.getElementById('movie-title').textContent = movie.title
  document.getElementById('movie-overview').textContent = movie.overview
  document.getElementById(
    'greytext'
  ).textContent = `Date: ${movie.release_date} | Popularity score:${movie.popularity}`
  changeButtonColor(movieSection, movie)
} else {
  console.error('No movie data found in localStorage.')
}

function saveToLocalStorage (movie) {
  const watchlist = JSON.parse(localStorage.getItem('favourite')) || [] // Retrieve existing watchlist or create empty array
  const movieExists = watchlist.some((item) => item.id === movie.id) // Check if the movie already exists

  if (!movieExists) {
    watchlist.push(movie) // Add movie to watchlist
    localStorage.setItem('favourite', JSON.stringify(watchlist)) // Save updated list
  }
}

function changeButtonColor (className, movie) {
  const bookmarkButton = className.querySelector('.bookmark-btn')

  if (!bookmarkButton) {
    console.error('Bookmark button not found within the provided element.')
    return
  }

  bookmarkButton.addEventListener('click', () => {
    const icon = bookmarkButton.querySelector('i')

    if (!icon) {
      console.error('Icon inside the bookmark button is not found.')
      return
    }

    // Toggle bookmark icon classes and color
    icon.classList.toggle('fa-regular')
    icon.classList.toggle('fa-solid')
    icon.style.color = icon.classList.contains('fa-solid') ? 'green' : '' // Green if solid

    // Save or remove movie from localStorage
    saveToLocalStorage(movie)
  })
}

async function sameClassMovies () {
  // Get movie ID from localStorage instead of URL
  const popularContainer = document.querySelector('.carousel-container')
  console.log(movie.id)
  if (!movie.id) {
    console.error('Error: Movie ID not found.')
    return
  }

  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movie.id}/similar?api_key=${API_KEY}`
    )
    if (!response.ok) {
      console.error(`Error fetching similar movies: ${response.status}`)
      return
    }

    const data = await response.json()
    const similarMoviesContainer =
      document.getElementById('watchlist-carousel')
    similarMoviesContainer.innerHTML = ''

    data.results.forEach((movie) => {
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie-similar')
      movieEl.innerHTML = `
           <div class="movie-img">
              <img src="${IMG_PATH}${movie.poster_path}" alt="${movie.title}">
            </div>
            <div class="movie-details">
               <h3 class="movie-title">${movie.title}</h3>
           <div class="movie-rating">
              ⭐ ${movie.vote_average.toFixed(1)}
               <button class="bookmark-btn">
                  <i class="fa-regular fa-bookmark"></i>
                </button>
            </div>
          </div>
        `
      similarMoviesContainer.appendChild(movieEl)
      changeButtonColor(movieEl, movie)
    })
  } catch (error) {
    console.error('Error fetching similar movies:', error.message)
  }

  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')

  prevBtn.addEventListener('click', () => {
    popularContainer.scrollLeft -= 300
  })

  nextBtn.addEventListener('click', () => {
    popularContainer.scrollLeft += 300
  })
}

const bars = document.querySelector('.bars')
const sideNavbar = document.getElementById('side-navbar')
const overlay = document.getElementById('overlay')

// Toggle Side Navbar
bars.addEventListener('click', () => {
  sideNavbar.classList.toggle('show')
  overlay.classList.toggle('active')
})

// Close Side Navbar when clicking on the overlay
overlay.addEventListener('click', () => {
  sideNavbar.classList.remove('show')
  overlay.classList.remove('active')
})

// Call the function
sameClassMovies()
