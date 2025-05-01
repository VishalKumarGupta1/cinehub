import { useState, useEffect } from "react";
import { getFavorites } from "../localStorageUtils";
import MovieCard from "../components/MovieCard";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [updateui, setupdateui] = useState(false);


  useEffect(() => {
    setFavorites(getFavorites());
  }, [updateui]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p className={styles.emptyMessage}>No favorites yet.</p>
      ) : (
        <div className={styles.moviesGrid}>
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie}  setupdateui={setupdateui}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;


