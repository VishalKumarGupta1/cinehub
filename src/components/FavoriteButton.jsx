import { useEffect, useState } from "react";
import { addFavorite, removeFavorite, isFavorite } from "../localStorageUtils";
import styles from "./FavoriteButton.module.css";

// This button adds/removes a movie from favorites
const FavoriteButton = ({ movie ,setupdateui }) => {
  // State to track if this movie is a favorite or not
  const [favorite, setFavorite] = useState(false);

  // When the component loads or movie ID changes,
  // check if this movie is already in favorites
  useEffect(() => {
    setFavorite(isFavorite(movie.imdbID));
  }, [movie.imdbID]);

  // Toggle function: add or remove from favorites
  const toggleFavorite = () => {
    
    if (favorite) {
      removeFavorite(movie.imdbID); // remove if already favorite
    } else {
      addFavorite(movie); // add if not favorite
    }
    setFavorite(!favorite); // update the UI
    setupdateui((prev)=> !prev);
  };

  // Show different text on button based on favorite status
  return (
    <button
      onClick={toggleFavorite}
      className={`${styles.button} ${favorite ? styles.remove : ""}`}
    >
      {favorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
