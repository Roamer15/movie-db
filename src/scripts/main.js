import '../styles/style.css'

document.querySelector('#app').innerHTML = `
      <div id="header">
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
                <li><a href="#" class="menu-item" id="favourites-link">Favourites</a></li>
                <li><a href="#">About</a></li>
              </ul>
          </div>

          <div id="menu">
            <a href="#" class="menu-item" type="active">Home</a>
            <a href="#" class="menu-item">Discover</a>
            <a href="#" class="menu-item">Movie Release</a>
            <a href="#" class="menu-item">Forum</a>
            <a href="#" class="menu-item" id="favourites-link">Favourites</a>
            <a href="#" class="menu-item">About</a>
          </div>
          <div id="buttons">
            <input type="text" placeholder="Search a movie..." id="search-bar">
            <button class="header-btn" id="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            <button class="header-btn"><i class="fa-regular fa-bell"></i></button>
            <button class="header-btn"><i class="fa-solid fa-user-circle"></i></i></button>
          </div>
      </div>

      <!-- Search Results Overlay -->
        <div id="search-results"></div>

        <div class="favorites-container hidden" id="favorites-container">
            <h2>My Favorite Movies</h2>
            <div class="favorites-list" id="favorites-list"></div>
        </div>
        
  <!-- Hero Banner -->
  <section class="hero-banner">
    <div class="slideshow">
      <div class="slide active">
      </div>
      <!-- Add additional slides dynamically via JavaScript -->
  <div class="navigation">
        <i class="fas fa-chevron-left prev"></i>
        <i class="fas fa-chevron-right next"></i>
      </div>
    </div>
  </section>

  <section id="movie-partners">
  <button class="nav-btn prev" id="recent">&#8250;</button>
      <img src="/images/Disney1.png" alt="disney">
      <img src="/images/Netflix.png" alt="netflix">
      <img src="/images/hbomax.png" alt="hbomax">
      <img src="/images/pixar.png" alt="pixar">
      <img src="/images/marvel.png" alt="marvel">
      <img src="/images/starwars.webp" alt="starwars">
      <img src="/images/geographic.png" alt="geographic">
      <img src ="/images/youtube.png" alt ="youtube">
    <button class="nav-btn next" id="recent">&#8250;</button>
  </section>

  <section class="popular-section">
  <h2>Popular of the Week</h2>
  <div class="popular-container">
    <button class="scroll-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
    <div class="popular-items">
      <!-- Movie cards will be added dynamically via JavaScript -->
    </div>
    <button class="scroll-btn next-btn"><i class="fas fa-chevron-right"></i></button>
  </div>
   <div class ="overlay"></div>
</section>

  <!-- Other Sections -->
  <section id="just-released" class="carousel">
    <h2>Just Released</h2>
    <div class="carousel-wrapper">
      <div class="carousel-container" id="released-carousel">
        <!-- Movies dynamically added -->
      </div>
      <button class="carousel-button prev"><i class="fas fa-chevron-left"></i></button>
      <button class="carousel-button next"><i class="fas fa-chevron-right"></i></button>
    </div>
     <div class ="overlay"></div>
  </section>

   <section id="watchlist" class="carousel">
    <h2>Your Watchlist</h2>
    <div class="carousel-wrapper">
      <div class="carousel-container" id="watchlist-carousel">
        <!-- Movies dynamically added -->
      </div>
      <button class="carousel-button prev"><i class="fas fa-chevron-left"></i></button>
      <button class="carousel-button next"><i class="fas fa-chevron-right"></i></button>
      <div class ="overlay"></div>
      </div>
  </section>
   <section id="mostliked" class="carousel">
    <h3>Your Likes</h3>
   <div class="carousel-wrapper">
      <div class="carousel-container" id="watchlist-carousel">
        <!-- Movies dynamically added -->
      </div>
      <button class="carousel-button prev"><i class="fas fa-chevron-left"></i></button>
      <button class="carousel-button next"><i class="fas fa-chevron-right"></i></button>
    </div>
    <div class ="overlay"></div>
    </section>

    <section class="result">
      <div id="resultDisplay">
      
      </div>
    </section>
    
    <section class="bottom-banner">
      <div class="slideshow-container">
        <!-- Images will be dynamically injected here -->
      </div>
    </section>

    <section id="tags">
        <div class="tag">Fantasy</div>
        <div class="tag">Adventure</div>
        <div class="tag">Science Fiction</div>
        <div class="tag">Action</div>
     </section>

     <section class="genre-related">
     <!-- Genre related movies  will be displayed here-->
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

const API_KEY = ''
const BASE_URL = 'https://api.themoviedb.org/3'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

const API_GENRE_URL = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`

const genres = [
  {
    id: 28,
    name: 'Action'
  },
  {
    id: 12,
    name: 'Adventure'
  },
  {
    id: 16,
    name: 'Animation'
  },
  {
    id: 35,
    name: 'Comedy'
  },
  {
    id: 80,
    name: 'Crime'
  },
  {
    id: 99,
    name: 'Documentary'
  },
  {
    id: 18,
    name: 'Drama'
  },
  {
    id: 10751,
    name: 'Family'
  },
  {
    id: 14,
    name: 'Fantasy'
  },
  {
    id: 36,
    name: 'History'
  },
  {
    id: 27,
    name: 'Horror'
  },
  {
    id: 10402,
    name: 'Music'
  },
  {
    id: 9648,
    name: 'Mystery'
  },
  {
    id: 10749,
    name: 'Romance'
  },
  {
    id: 878,
    name: 'Science Fiction'
  },
  {
    id: 10770,
    name: 'TV Movie'
  },
  {
    id: 53,
    name: 'Thriller'
  },
  {
    id: 10752,
    name: 'War'
  },
  {
    id: 37,
    name: 'Western'
  }
]

let selectedGenre = []
// Genre section
const tagsEl = document.getElementById('tags')

function genreDisplay () {
  tagsEl.innerHTML = ''
  genres.forEach((genre) => {
    const t = document.createElement('div')
    t.classList.add('tag')

    t.id = genre.id
    t.innerText = genre.name

    t.addEventListener('click', () => {
      const displaySection = document.querySelector('.genre-related')
      displaySection.style.display = 'flex'
      if (selectedGenre.includes(genre.id)) {
        selectedGenre = selectedGenre.filter((id) => id !== genre.id) // Remove genre
      } else {
        selectedGenre.push(genre.id) // Add genre
      }

      const DISCOVER_URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}`
      getMovies(
        DISCOVER_URL + '&with_genres=' + encodeURI(selectedGenre.join(','))
      )
    })

    tagsEl.append(t)
  })
}

genreDisplay()

getMovies(API_GENRE_URL)

function getMovies (url) {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      return res.json()
    })
    .then((data) => {
      showMovies(data.results)
    })
    .catch((err) => console.error('Error fetching movies:', err.message))
}
// Favourite Movies function
function saveToLocalStorage (movie) {
  let watchlist = JSON.parse(localStorage.getItem('favourite')) || [] // Retrieve existing watchlist or create an empty array
  const movieExists = watchlist.some((item) => item.id === movie.id) // Check if the movie already exists

  if (!movieExists) {
    // Add movie to watchlist
    watchlist.push(movie)
    localStorage.setItem('favourite', JSON.stringify(watchlist)) // Save updated list
  } else {
    // Remove movie from watchlist
    watchlist = watchlist.filter((item) => item.id !== movie.id) // Create a new array without the removed movie
    localStorage.setItem('favourite', JSON.stringify(watchlist)) // Save updated list
  }
}

function redirectToDetailPage (movieToRedirect, movie) {
  const movieImage = movieToRedirect.querySelector('img') // Select the image element
  movieImage.addEventListener('click', () => {
    // Save movie details to localStorage
    localStorage.setItem('selectedMovie', JSON.stringify(movie))

    // Navigate to the second page
    window.location.href = '/preview.html'
  })
}

function showMovies (data) {
  const genreContainer = document.querySelector('.genre-related')

  genreContainer.innerHTML = ''
  data.forEach((movie) => {
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
      <img src="${IMG_PATH}${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
       <span>⭐ ${movie.vote_average.toFixed(
         1
       )} <button class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button></span>
  `
    const bookmarkButton = movieEl.querySelector('.bookmark-btn')
    bookmarkButton.addEventListener('click', () => {
      const icon = bookmarkButton.querySelector('i')
      icon.classList.toggle('fa-regular')
      icon.classList.toggle('fa-solid')
      icon.style.color = icon.classList.contains('fa-solid') ? 'green' : ''

      saveToLocalStorage(movie)
    })

    redirectToDetailPage(movieEl, movie)
    changeButtonColor(movieEl, movie)

    genreContainer.appendChild(movieEl)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleAnchor = document.getElementById('favourites-link') // anchor tag
  const favoritesContainer = document.getElementById('favorites-container')
  const favoritesList = document.getElementById('favorites-list')

  // Safeguard in case elements don't exist
  if (!toggleAnchor || !favoritesContainer || !favoritesList) {
    console.error('One or more required elements are missing in the DOM.')
    return
  }

  toggleAnchor.addEventListener('click', () => {
    favoritesContainer.classList.toggle('active') // Toggle container visibility
    favoritesList.innerHTML = '' // Clear existing content
    displayFavorites()
  })

  function displayFavorites () {
    const favMovies = JSON.parse(localStorage.getItem('favourite')) || []

    if (favMovies.length === 0) {
      favoritesList.innerHTML = '<p>No favorite movies added yet!</p>'
      return
    }

    // Loop through movies in local storage
    favMovies.forEach((movie) => {
      const movieFavCard = document.createElement('div')
      movieFavCard.classList.add('movie-card')

      movieFavCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
        movie.title
      }">
          <h3>${movie.title}</h3>
          <p>⭐ ${movie.vote_average.toFixed(1)}</p>
        `

      favoritesList.appendChild(movieFavCard)
    })
  }
})

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

// Fetch and populate hero banner
async function loadHeroBanner () {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
  )
  const data = await response.json()
  const movies = data.results.slice(0, 4)

  const slideshow = document.querySelector('.slideshow')

  movies.forEach((movie, index) => {
    const slide = document.createElement('div')
    slide.classList.add('slide')
    if (index === 0) slide.classList.add('active') // Set the first slide as active

    slide.innerHTML = `
      <img src="${IMG_PATH}${movie.backdrop_path}" alt="${movie.title}" onclick="window.location.href = 'src/preview.html'">
      <div class="hero-details">
        <h1>${movie.title}</h1>
        <p>${movie.overview}</p>
         <div id="playBtn">
            <button id="playone"><i class="fa-solid fa-circle-play"></i> Play Now</button>
            <button id="playthree"><i class="fa-regular fa-circle-play"></i> Watch Trailer</button>
            <button class="bookmark-btn" id="playtwo"><i class="fa-regular fa-bookmark"></i> Add Watchlist</button>
            <button class="bookmark-btn" id="playtwoshort"><i class="fa-regular fa-bookmark"></i></button>
          </div>
      </div>
    `

    changeButtonColor(slide, movie)
    redirectToDetailPage(slide, movie)

    slideshow.appendChild(slide)
  })

  setupHeroNavigation()
}

// Hero banner navigation
function setupHeroNavigation () {
  const slides = document.querySelectorAll('.slide')
  const prevBtn = document.querySelector('.navigation .prev')
  const nextBtn = document.querySelector('.navigation .next')

  let currentSlide = 0

  function showSlide (index) {
    slides[currentSlide].classList.remove('active')
    currentSlide = (index + slides.length + 1) % (slides.length - 1)
    slides[currentSlide].classList.add('active')
  }

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1))
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1))
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-btn')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const carouselId = button.getAttribute('data-carousel-id')
      const carousel = document.getElementById(carouselId)
      const scrollAmount = carousel.offsetWidth // Scroll by one carousel width

      if (button.classList.contains('prev')) {
        carousel.scrollLeft -= scrollAmount
      } else if (button.classList.contains('next')) {
        carousel.scrollLeft += scrollAmount
      }
    })
  })
})

document.addEventListener('DOMContentLoaded', async () => {
  const popularContainer = document.querySelector('.popular-items')

  // Fetch data for "Popular This Week"
  async function fetchPopularMovies () {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    const data = await response.json()
    return data.results.slice(0, 18) // Fetch the top 10 popular movies
  }

  // Populate the "Popular of the Week" section

  async function populatePopularMovies () {
    const movies = await fetchPopularMovies()
    popularContainer.innerHTML = '' // Clear any existing content

    movies.forEach((movie, index) => {
      const movieCard = document.createElement('div')
      movieCard.classList.add('movie-card')

      movieCard.innerHTML = `
      <div class="rank">${index + 1}</div>
      <img src="${IMG_PATH + movie.poster_path}" alt="${
        movie.title
      }" onclick="window.location.href = 'src/preview.html'">
      <div class="movie-details">
        <h3>${movie.title}</h3>
        <p>${movie.genre_ids.slice(0, 2).join(' • ')}</p>
        <div class="rating">
          <i class="fas fa-star"></i>| ${movie.vote_average.toFixed(1)}
          <button class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button>
        </div>
      </div>
    `

      changeButtonColor(movieCard, movie)

      redirectToDetailPage(movieCard, movie)

      popularContainer.appendChild(movieCard)
    })
  }

  // Scroll functionality for "Popular of the Week" section
  const prevBtn = document.querySelector('.prev-btn')
  const nextBtn = document.querySelector('.next-btn')

  prevBtn.addEventListener('click', () => {
    popularContainer.scrollLeft -= 300
  })

  nextBtn.addEventListener('click', () => {
    popularContainer.scrollLeft += 300
  })

  // Initialize the section
  populatePopularMovies()
})

// Fetch and populate a carousel

async function loadCarousel (sectionId, endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`)
    const data = await response.json()
    const movies = data.results

    if (!movies || !Array.isArray(movies)) {
      console.error('No movies found in the response')
      return
    }

    const carouselContainer = document.querySelector(
      `#${sectionId} .carousel-container`
    )
    if (!carouselContainer) {
      console.error(`Carousel container not found for section: ${sectionId}`)
      return
    }

    movies.forEach((movie) => {
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie')
      movieEl.innerHTML = `
          <div class="movie-image">
            <img src="${IMG_PATH}${movie.poster_path}" alt="${
        movie.title
      }" onclick="window.location.href = 'src/preview.html'">
            <div class="movie-overlay">
              <h3>${movie.title}</h3>
              <span>⭐ ${movie.vote_average.toFixed(1)}</span>
              <button class="bookmark-btn">
                <i class="fa-regular fa-bookmark"></i>
              </button>
            </div>
          </div>
        `

      changeButtonColor(movieEl, movie)

      redirectToDetailPage(movieEl, movie)

      carouselContainer.appendChild(movieEl)
    })

    setupCarouselNavigation(sectionId)
  } catch (error) {
    console.error('Error loading carousel:', error)
  }
}

// Fetch and populate a carousel
async function loadCarouselWide (sectionId, endpoint) {
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

    changeButtonColor(movieEl, movie)

    redirectToDetailPage(movieEl, movie)

    carouselContainer.appendChild(movieEl)
  })

  setupCarouselNavigation(sectionId)
}

// Carousel navigation
function setupCarouselNavigation (sectionId) {
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

const FAVORITE_ENDPOINT = '/movie/top_rated' // Example: Fetching top-rated movies

async function loadBottomBanner () {
  const response = await fetch(
    `${BASE_URL}${FAVORITE_ENDPOINT}?api_key=${API_KEY}`
  )
  const data = await response.json()
  const movies = data.results

  const slideshowContainer = document.querySelector('.slideshow-container')
  movies.slice(0, 10).forEach((movie) => {
    // Fetching the top 10 movies
    const slide = document.createElement('div')
    slide.classList.add('slide')
    slide.style.backgroundImage = `url(${IMG_PATH}${movie.backdrop_path})` // Use backdrop image
    slide.innerHTML = `
                        <div class="slide-caption" onclick="window.location.href = 'src/preview.html'">${movie.title}</div>
                           <div class="hero-bottom-details">
                           <div id="playbtndown">
                            <button id="playonedown"><i class="fa-solid fa-circle-play"></i> Play Now</button>                            
                            <button class="bookmark-btn" id="playtwodown"><i class="fa-regular fa-bookmark"></i> Add Watchlist</button>
                          </div>
                       </div>
    
                        `
    changeButtonColor(slide, movie)

    slideshowContainer.appendChild(slide)
  })

  autoSlide()
}

function autoSlide () {
  const slides = document.querySelectorAll('.slide')
  let index = 0

  setInterval(() => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${100 * index}%)`
    })
    index = (index + 1) % (slides.length - 1) // Loop back to the first slide
  }, 5000) // Change slide every 5 seconds
}

// Load the bottom banner on page load
loadBottomBanner()

const searchBtn = document.getElementById('search-btn')
const searchBar = document.getElementById('search-bar')

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('active')
})

const searchResults = document.getElementById('search-results')

// Handle search and fetch results
searchBar.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    const query = searchBar.value.trim().toLowerCase()
    if (query) {
      await fetchSearchResults(query)
      searchResults.style.display = 'block' // Show search results
      searchResults.style.overflowY = 'scroll'
    } else {
      searchResults.style.display = 'none' // Hide search results when no query is provided
    }
  }
})

// Fetch movie data from TMDB
async function fetchSearchResults (query) {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    )
    const data = await response.json()
    displaySearchResults(data.results)
  } catch (error) {
    console.error('Error fetching search results:', error)
  }
}

// Display results in the overlay
function displaySearchResults (results) {
  searchResults.innerHTML = '' // Clear previous results
  if (results.length === 0) {
    searchResults.innerHTML = '<p>No results found.</p>'
    return
  }

  results.forEach((movie) => {
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie-result')
    movieEl.innerHTML = `
      <img src="${
        movie.poster_path
          ? IMG_PATH + movie.poster_path
          : 'https://via.placeholder.com/100'
      }" 
           alt="${movie.title}" onclick="previewPage()">
      <div>
        <h3>${movie.title}</h3>
        <p>⭐ ${movie.vote_average.toFixed(1)} | Release Date: ${
      movie.release_date || 'N/A'
    }</p>
        <button class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
    `

    changeButtonColor(movieEl, movie)

    redirectToDetailPage(movieEl, movie)

    searchResults.appendChild(movieEl)
  })
}

// Close the overlay when clicking outside
document.addEventListener('click', (e) => {
  if (!searchResults.contains(e.target) && !searchBar.contains(e.target)) {
    searchResults.style.display = 'none'
  }
})

const bars = document.querySelector('.bars')
const sideNavbar = document.getElementById('side-navbar')
const overlay = document.createElement('div')
overlay.id = 'overlay'
document.body.appendChild(overlay)

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

function init () {
  loadHeroBanner()
  loadCarousel('just-released', '/movie/upcoming')
  loadCarouselWide('watchlist', '/movie/top_rated')
  loadCarouselWide('mostliked', '/movie/popular')
}

init()
