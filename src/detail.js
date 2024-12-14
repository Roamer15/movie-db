import "./movie.css";

document.querySelector("#detail") = `

 <section id="hero-banner" class="hero-banner">
    <!-- Movie details will be dynamically loaded here -->
  </section>
`;

 // Load movie data from localStorage
 const movie = JSON.parse(localStorage.getItem('selectedMovie'));

 if (movie) {
   // Update the hero banner
   const heroBanner = document.getElementById('hero-banner');
   heroBanner.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`;
   heroBanner.style.height = '100vh';
   heroBanner.style.backgroundSize = 'cover';
   heroBanner.style.backgroundPosition = 'center';
   heroBanner.style.color = 'white';
   heroBanner.style.display = 'flex';
   heroBanner.style.justifyContent = 'center';
   heroBanner.style.alignItems = 'center';
   heroBanner.innerHTML = `
     <div style="background-color: rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 10px;">
       <h1>${movie.title}</h1>
       <p>${movie.overview}</p>
       <span>⭐ ${movie.vote_average.toFixed(1)}</span>
     </div>
   `;
 } else {
   document.body.innerHTML = '<h1>Movie not found!</h1>';
 }