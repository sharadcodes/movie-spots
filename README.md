# Movie Spots
Find the shooting spots for your favourate movies

#### Deployed on Netlify
https://sharadcodes-movie-spots.netlify.app

#### Backend Code Repository for REST API
https://github.com/sharadcodes/movie-spots-backend

---

## Libraries used

* ReactJS
* react-router-dom

---

## LOCAL SETUP GUIDE

1. Either clone or download the repository, for cloning run
  ```bash
  git clone https://github.com/sharadcodes/movie-spots.git
  ```
2. Change directory to **movie-spots**
  ```bash
  cd movie-spots
  ```
3. Run 
  ```bash
  npm install
  ```
4. Export the environment variable **REACT_APP_MOVIE_SPOTS_API**
  ```bash
  export REACT_APP_MOVIE_SPOTS_API=http://localhost:5000
  
  # OR you can use the already deployed backend with 
  
  export REACT_APP_MOVIE_SPOTS_API=https://movie-spots.herokuapp.com
  ```
5. Start the app using `npm start`
