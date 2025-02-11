# MovieDB Project

Welcome to the MovieDB Project! This is a simple web application that fetches movie data using the [TMDb API](https://www.themoviedb.org/), 
allowing users to explore popular, top-rated, or upcoming movies. The project also features a visually appealing design,
which was inspired by a mockup from Figma.

## Features
- **Search for Movies**: Users can search for movies by title or genre.
- **Movie Details**: View detailed information about each movie, including release date, rating, plot, and poster.
- **Movie Categories**: Browse through categories like Popular, Top Rated, and Upcoming.
- **Responsive Design**: The page layout adjusts beautifully across different devices, ensuring a smooth user experience.

## Technologies Used
- **TMDb API**: A third-party API to fetch movie data (https://www.themoviedb.org/documentation/api).
- **HTML**: For the structure of the website.
- **CSS**: For styling and responsive design.
- **JavaScript**: For fetching data from the API and handling dynamic content.
- **Figma**: A design tool used to create the user interface layout.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/moviedb.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd moviedb
   ```

3. **Open the project in your browser**:
   - You can simply open the `index.html` file in your browser to see the project in action.

4. **API Key**: 
   - To use the TMDb API, you will need an API key.
   - You can get your key by creating an account on [TMDb](https://www.themoviedb.org/account/signup) and then visiting the API section of your account settings.

5. **Update the API Key**:
   - Inside the project folder, open the JavaScript file where the API call is made (e.g., `app.js`).
   - Replace `YOUR_API_KEY` with your actual API key from TMDb.

## Project Structure

```
moviedb/
├── src/
        
        ├── main.js        # JavaScript file for API interactions
        ├── detail.js      # JavaScript file for Secondary page
        ├── style.css      # Main CSS file for layout and design
        ├── movie.css      # Second CSS file for layout and design of secondary page
├── index.html          # Main HTML file
├── preview.html        # Secondary HTML file for movie display
├── assets/             # Folder containing images, logos, etc.
└── README.md           # Project documentation
```

## How It Works
1. **Fetching Movie Data**: The application makes requests to the TMDb API using JavaScript's `fetch()` method to get movie data (e.g., popular movies, top-rated movies).
2. **Displaying Data**: The fetched data is then dynamically displayed on the webpage. Movie posters, titles, and details such as the release date and rating are shown in a user-friendly grid layout.
3. **Responsive Layout**: The CSS makes use of media queries to ensure the design looks good on devices of different screen sizes.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request with your improvements. All contributions are welcome!

### Steps to contribute:
1. Fork this repository.
2. Create a new branch for your changes (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request for review.

Enjoy exploring movies with MovieDB! 🎬
