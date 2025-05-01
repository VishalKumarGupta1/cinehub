import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie,setupdateui }) => (
  <div className={styles.card}>
    <img className={styles.poster} src={movie.Poster} alt={movie.Title} />
    <h3 className={styles.title}>{movie.Title}</h3>
    <p className={styles.year}>{movie.Year}</p>
    <Link to={`/movie/${movie.imdbID}`} className={styles.link}>
      More Info
    </Link>
    <FavoriteButton movie={movie} setupdateui={setupdateui} />
  </div>
);

export default MovieCard;
