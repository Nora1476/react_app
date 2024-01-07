import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import SelectedMovie from "../components/selectMovie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams(); //라우터(url)로 넘어오는 id값을 받음
  const getMovie = useCallback(async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  console.log(movie);

  return (
    <div>
      <h1>Movie Detail</h1>
      {loading ? (
        <h2>loading..</h2>
      ) : (
        <div>
          <SelectedMovie key={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.description_full} genres={movie.genres} />
        </div>
      )}
    </div>
  );
}

export default Detail;
