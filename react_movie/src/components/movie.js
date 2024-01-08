import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  const content = () => {
    if (summary === "") return "no summary";
    else if (summary.length > 350) return summary.slice(0, 350) + "...";
    else return summary;
  };

  return (
    <div className={styles.movie}>
      <img src={coverImg} alt="img" className={styles.movie_img} />
      <div>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie_year}>{year}</h3>
        <p>{content()}</p>
        {genres == null ? ( //장르 배열이 존재하는지 확인
          ""
        ) : (
          <ul className={styles.movie_genres}>
            {genres.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
