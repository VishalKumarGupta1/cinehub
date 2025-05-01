import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/omdbService";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };

    fetchData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{movie.Title}</h2>
      <img className={styles.poster} src={movie.Poster} alt={movie.Title} />
      <div className={styles.details}>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Ratings:</strong>{" "}
          {movie.Ratings.map((r) => `${r.Source}: ${r.Value}`).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
