import PropTypes from "prop-types";
import styles from "./selectMovie.module.css";

function SelectedMovie({ coverImg, title, year, summary, genres, rating, runtime }) {
  return (
    <div className={styles.detail}>
      <div className={styles.d_top}>
        <div className={styles.left}>
          <h2>{title}</h2>
          <ul className={styles.info}>
            <li>개봉일 : {year}</li>
            <li>영화평점 : {rating}</li>
            <li>영화시간 : {runtime}</li>
            <li>
              영화구분 :&nbsp;
              {genres == null ? ( //장르 배열이 존재하는지 확인
                ""
              ) : (
                <div>
                  {genres.map((g, i) => (
                    <span key={i}>{g}&nbsp;/</span>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <img src={coverImg} alt="img" className={styles.poster} />
        </div>
      </div>
      <div className={styles.d_btm}>
        <h3>줄거리</h3>
        <p>{summary === "" ? "(no summary)" : summary}</p>
      </div>
    </div>
  );
}

SelectedMovie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectedMovie;
