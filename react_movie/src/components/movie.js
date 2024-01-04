import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="img" />
      <h2>{title}</h2>
      <p>{summary === "" ? "(no summary)" : summary}</p>
      {genres == null ? ( //장르 배열이 존재하는지 확인
        ""
      ) : (
        <ul>
          {genres.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>
      )}
      <hr />
    </div>
  );
}

Movie.prototype = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
