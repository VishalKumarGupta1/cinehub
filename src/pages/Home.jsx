import { useState } from "react";
import { motion } from "framer-motion";
import { searchMovies } from "../services/omdbService";
import MovieCard from "../components/MovieCard";
import styles from './Home.module.css';

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchMovies(query);
    setResults(data.Search || []);
  };

  return (
    <div>
      <motion.form
        onSubmit={handleSearch}
        className={styles.searchForm}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </motion.form>

      <div className={styles.movieResultsContainer}>
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
