import "./style.css";


document.querySelector("#app").innerHTML = `
      <div id="header">
          <div id="logo">
            <img src="./public/images/Logo.png" alt="logo" id="symbol">
            <img src="./public/images/SaintStream.png" alt="logo">
          </div>
           <div class="bars">
            <img src="./public/images/Logo.png" alt="logo" id="symbol">
            <i class="fa-solid fa-bars"></i>
            </div>
          <div id="menu">
            <a href="#" class="menu-item" type="active">Home</a>
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

      <!-- Search Results Overlay -->
        <div id="search-results"></div>

        
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
      <img src="./public/images/Disney1.png" alt="disney">
      <img src="./public/images/Netflix.png" alt="netflix">
      <img src="./public/images/hbomax.png" alt="hbomax">
      <img src="./public/images/pixar.png" alt="pixar">
      <img src="./public/images/marvel.png" alt="marvel">
      <img src="./public/images/starwars.webp" alt="starwars">
      <img src="./public/images/geographic.png" alt="geographic">
    <button class="nav-btn next" data-carousel="recent">&#8250;</button>
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
   <section id="mostLiked" class="carousel">
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

    <section class="genres">
        <div id = "one" class="genreBox">Fantasy</div>
        <div id = "two" class="genreBox">Adventure</div>
        <div id = "three" class="genreBox">Science Fiction</div>
        <div id = "four" class="genreBox">Action</div>
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

`;


const API_KEY = 'de8d95a8fd855c524e4704e6647ae343';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

// Fetch and populate hero banner
async function loadHeroBanner() {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
  const movies = data.results.slice(0, 4);

  const slideshow = document.querySelector('.slideshow');

  function saveToLocalStorage(movie) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []; // Retrieve existing watchlist or create empty array
    const movieExists = watchlist.some((item) => item.id === movie.id); // Check if the movie already exists
  
    if (!movieExists) {
      watchlist.push(movie); // Add movie to watchlist
      localStorage.setItem('watchlist', JSON.stringify(watchlist)); // Save updated list
    }
  }
  

  movies.forEach((movie, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    if (index === 0) slide.classList.add('active'); // Set the first slide as active

    slide.innerHTML = `
      <img src="${IMG_PATH}${movie.backdrop_path}" alt="${movie.title}">
      <div class="hero-details">
        <h1>${movie.title}</h1>
        <p>${movie.overview}</p>
         <div id="playBtn">
            <button id="playOne"><i class="fa-solid fa-circle-play"></i> Play Now</button>
            <button id="playThree"><i class="fa-regular fa-circle-play"></i> Watch Trailer</button>
            <button class="bookmark-btn" id="playTwo"><i class="fa-regular fa-bookmark"></i> Add Watchlist</button>
          </div>
      </div>
    `;

     // Add event listener to bookmark button
     const bookmarkButton = slide.querySelector('.bookmark-btn');
     bookmarkButton.addEventListener('click', () => {
       // Toggle bookmark icon color
       const icon = bookmarkButton.querySelector('i');
       icon.classList.toggle('fa-regular');
       icon.classList.toggle('fa-solid');
       icon.style.color = icon.classList.contains('fa-solid') ? 'green' : ''; // Green when solid
 
       // Save movie to localStorage
       saveToLocalStorage(movie);
     });

    slideshow.appendChild(slide);
  });

  setupHeroNavigation();
}


// Hero banner navigation
function setupHeroNavigation() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.navigation .prev');
  const nextBtn = document.querySelector('.navigation .next');

  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const carouselId = button.getAttribute("data-carousel");
      const carousel = document.getElementById(carouselId);
      const scrollAmount = carousel.offsetWidth; // Scroll by one carousel width

      if (button.classList.contains("prev")) {
        carousel.scrollLeft -= scrollAmount;
      } else if (button.classList.contains("next")) {
        carousel.scrollLeft += scrollAmount;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  const API_KEY = 'de8d95a8fd855c524e4704e6647ae343';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  const popularContainer = document.querySelector(".popular-items");

  // Fetch data for "Popular This Week"
  async function fetchPopularMovies() {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results.slice(0, 18); // Fetch the top 10 popular movies
  }

  // Populate the "Popular of the Week" section

  // Store watchlist in localStorage
function saveToLocalStorage(movie) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []; // Retrieve existing watchlist or create empty array
  const movieExists = watchlist.some((item) => item.id === movie.id); // Check if the movie already exists

  if (!movieExists) {
    watchlist.push(movie); // Add movie to watchlist
    localStorage.setItem('watchlist', JSON.stringify(watchlist)); // Save updated list
  }
}

async function populatePopularMovies() {
  const movies = await fetchPopularMovies();
  popularContainer.innerHTML = ""; // Clear any existing content

  movies.forEach((movie, index) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <div class="rank">${index + 1}</div>
      <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
      <div class="movie-details">
        <h3>${movie.title}</h3>
        <p>${movie.genre_ids.slice(0, 2).join(" • ")}</p>
        <div class="rating">
          <i class="fas fa-star"></i>| ${movie.vote_average.toFixed(1)}
          <button class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button>
        </div>
      </div>
    `;

    // Add event listener to bookmark button
    const bookmarkButton = movieCard.querySelector('.bookmark-btn');
    bookmarkButton.addEventListener('click', () => {
      // Toggle bookmark icon color
      const icon = bookmarkButton.querySelector('i');
      icon.classList.toggle('fa-regular');
      icon.classList.toggle('fa-solid');
      icon.style.color = icon.classList.contains('fa-solid') ? 'green' : ''; // Green when solid

      // Save movie to localStorage
      saveToLocalStorage(movie);
    });

    popularContainer.appendChild(movieCard);
  });
}


  // Scroll functionality for "Popular of the Week" section
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  prevBtn.addEventListener("click", () => {
    popularContainer.scrollLeft -= 300;
  });

  nextBtn.addEventListener("click", () => {
    popularContainer.scrollLeft += 300;
  });

  // Initialize the section
  populatePopularMovies();
});

// Fetch and populate a carousel
/* async function loadCarousel(sectionId, endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
  const data = await response.json();
  const movies = data.results;

  const carouselContainer = document.querySelector(`#${sectionId} .carousel-container`);

  movies.forEach((movie) => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img src="${IMG_PATH}${movie.poster_path}" alt="${movie.title}">
      <div class="pg">PG-13</div>
      <h3>${movie.title}</h3>
      <span>⭐ ${movie.vote_average.toFixed(1)} | Movie</span>
    `;
    carouselContainer.appendChild(movieEl);
  });

  setupCarouselNavigation(sectionId);
} */

  async function loadCarousel(sectionId, endpoint) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
      const data = await response.json();
      const movies = data.results;
  
      if (!movies || !Array.isArray(movies)) {
        console.error("No movies found in the response");
        return;
      }
  
      const carouselContainer = document.querySelector(`#${sectionId} .carousel-container`);
      if (!carouselContainer) {
        console.error(`Carousel container not found for section: ${sectionId}`);
        return;
      }
      
      function saveToLocalStorage(movie) {
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []; // Retrieve existing watchlist or create empty array
        const movieExists = watchlist.some((item) => item.id === movie.id); // Check if the movie already exists
      
        if (!movieExists) {
          watchlist.push(movie); // Add movie to watchlist
          localStorage.setItem('watchlist', JSON.stringify(watchlist)); // Save updated list
        }
      }

      movies.forEach((movie) => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
          <div class="movie-image">
            <img src="${IMG_PATH}${movie.poster_path}" alt="${movie.title}">
            <div class="movie-overlay">
              <h3>${movie.title}</h3>
              <span>⭐ ${movie.vote_average.toFixed(1)}</span>
              <button class="bookmark-btn">
                <i class="fa-regular fa-bookmark"></i>
              </button>
            </div>
          </div>
        `;
  
        const bookmarkButton = movieEl.querySelector('.bookmark-btn');
        bookmarkButton.addEventListener('click', () => {
          const icon = bookmarkButton.querySelector('i');
          icon.classList.toggle('fa-regular');
          icon.classList.toggle('fa-solid');
          icon.style.color = icon.classList.contains('fa-solid') ? 'green' : '';
  
          saveToLocalStorage(movie);
        });

  carouselContainer.appendChild(movieEl);
});
  
      setupCarouselNavigation(sectionId);
    } catch (error) {
      console.error("Error loading carousel:", error);
    }
  }
  
  // Fetch and populate a carousel
  async function loadCarouselWide(sectionId, endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    const data = await response.json();
    const movies = data.results;
  
    const carouselContainer = document.querySelector(`#${sectionId} .carousel-container`);
  
    function saveToLocalStorage(movie) {
      let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []; // Retrieve existing watchlist or create empty array
      const movieExists = watchlist.some((item) => item.id === movie.id); // Check if the movie already exists
    
      if (!movieExists) {
        watchlist.push(movie); // Add movie to watchlist
        localStorage.setItem('watchlist', JSON.stringify(watchlist)); // Save updated list
      }
    }
    

    movies.forEach((movie) => {
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie-wide');
      movieEl.innerHTML = `
        <div class="movie-img">
          <img src="${IMG_PATH}${movie.poster_path}" alt="${movie.title}">
          <div class="movie-overlay-wide">
            <h3>${movie.title}</h3>
            <span>⭐ ${movie.vote_average.toFixed(1)}  <button class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button></span>
          </div>
        </div>
      `;

      const bookmarkButton = movieEl.querySelector('.bookmark-btn');
      bookmarkButton.addEventListener('click', () => {
        const icon = bookmarkButton.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
        icon.style.color = icon.classList.contains('fa-solid') ? 'green' : '';

        saveToLocalStorage(movie);
      }); 

      carouselContainer.appendChild(movieEl);
    });
  
    setupCarouselNavigation(sectionId);
  }
  
// Carousel navigation
function setupCarouselNavigation(sectionId) {
  const carousel = document.querySelector(`#${sectionId} .carousel-container`);
  const prevBtn = document.querySelector(`#${sectionId} .carousel-button.prev`);
  const nextBtn = document.querySelector(`#${sectionId} .carousel-button.next`);

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

const FAVORITE_ENDPOINT = "/movie/top_rated"; // Example: Fetching top-rated movies


async function loadBottomBanner() {
  const response = await fetch(`${BASE_URL}${FAVORITE_ENDPOINT}?api_key=${API_KEY}`);
  const data = await response.json();
  const movies = data.results;


  function saveToLocalStorage(movie) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []; // Retrieve existing watchlist or create empty array
    const movieExists = watchlist.some((item) => item.id === movie.id); // Check if the movie already exists
  
    if (!movieExists) {
      watchlist.push(movie); // Add movie to watchlist
      localStorage.setItem('watchlist', JSON.stringify(watchlist)); // Save updated list
    }
  }

  const slideshowContainer = document.querySelector('.slideshow-container');
  movies.slice(0, 10).forEach((movie) => { // Fetching the top 10 movies
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.backgroundImage = `url(${IMG_PATH}${movie.backdrop_path})`; // Use backdrop image
    slide.innerHTML = `
                        <div class="slide-caption">${movie.title}</div>
                           <div class="hero-bottom-details">
                           <div id="playBtnDown">
                            <button id="playOneDown"><i class="fa-solid fa-circle-play"></i> Play Now</button>                            
                            <button class="bookmark-btn" id="playTwoDown"><i class="fa-regular fa-bookmark"></i> Add Watchlist</button>
                          </div>
                       </div>
    
                        `;
      const bookmarkButton = slide.querySelector('.bookmark-btn');
      bookmarkButton.addEventListener('click', () => {
        const icon = bookmarkButton.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
        icon.style.color = icon.classList.contains('fa-solid') ? 'green' : '';

        saveToLocalStorage(movie);
      }); 

    slideshowContainer.appendChild(slide);
  });

  autoSlide();
}

function autoSlide() {
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  setInterval(() => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${100 * index}%)`;
    });
    index = (index + 1) % (slides.length - 1); // Loop back to the first slide
  }, 5000); // Change slide every 5 seconds
}

// Load the bottom banner on page load
loadBottomBanner();

const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");

searchBtn.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});

const searchResults = document.getElementById("search-results");

// Handle search and fetch results
searchBar.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    const query = searchBar.value.trim().toLowerCase();
    if (query) {
      await fetchSearchResults(query);
      searchResults.style.display = "block"; // Show search results
      searchResults.style.overflowY = "scroll"
    }
    else {
      searchResults.style.display = "none"; // Hide search results when no query is provided
    }
  }
});

// Fetch movie data from TMDB
async function fetchSearchResults(query) {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    displaySearchResults(data.results);
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
}

// Display results in the overlay
function displaySearchResults(results) {
  searchResults.innerHTML = ""; // Clear previous results
  if (results.length === 0) {
    searchResults.innerHTML = "<p>No results found.</p>";
    return;
  }

  function saveToLocalStorage(movie) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || []; // Retrieve existing watchlist or create empty array
    const movieExists = watchlist.some((item) => item.id === movie.id); // Check if the movie already exists
  
    if (!movieExists) {
      watchlist.push(movie); // Add movie to watchlist
      localStorage.setItem('watchlist', JSON.stringify(watchlist)); // Save updated list
    }
  }
  

  results.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie-result");
    movieEl.innerHTML = `
      <img src="${movie.poster_path ? IMG_PATH + movie.poster_path : 'https://via.placeholder.com/100'}" 
           alt="${movie.title}">
      <div>
        <h3>${movie.title}</h3>
        <p>⭐ ${movie.vote_average.toFixed(1)} | Release Date: ${movie.release_date || "N/A"}</p>
        <button class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button>
      </div>
    `;

    const bookmarkButton = movieEl.querySelector('.bookmark-btn');
      bookmarkButton.addEventListener('click', () => {
        const icon = bookmarkButton.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
        icon.style.color = icon.classList.contains('fa-solid') ? 'green' : '';

        saveToLocalStorage(movie);
      }); 

    searchResults.appendChild(movieEl);
  });
}

// Close the overlay when clicking outside
document.addEventListener("click", (e) => {
  if (!searchResults.contains(e.target) && !searchBar.contains(e.target)) {
    searchResults.style.display = "none";
  }
});

function init() {
  loadHeroBanner();
  loadCarousel('just-released', '/movie/upcoming');
  loadCarouselWide('watchlist', '/movie/top_rated');
  loadCarouselWide('mostLiked', '/movie/popular');
 
}

init();
