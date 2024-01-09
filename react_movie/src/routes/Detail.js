import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import SelectedMovie from "../components/selectMovie";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams(); //라우터(url)로 넘어오는 id값을 받음
  const getMovie = useCallback(async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    setMovie(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  // console.log(movie);

  return (
    <div className={styles.container}>
      {loading ? (
        <h2>loading..</h2>
      ) : (
        <div>
          <h1 className={styles.title}>Movie Detail</h1>
          <SelectedMovie
            key={movie.id}
            coverImg={movie.large_cover_image}
            title={movie.title}
            year={movie.date_uploaded}
            summary={movie.description_full}
            genres={movie.genres}
            rating={movie.rating}
            runtime={movie.runtime}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
