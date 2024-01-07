import { useState, useEffect } from "react";
import Movie from "../components/movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //json형태로 영화 정보가져옴
  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=7.0&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoading(false); //jsoin 데이터 불러오는 작업이 끝나면 loading 값 변경
  };
  //한번만 로딩
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((item) => (
            //movie 정보 담은 컴포넌트 파일(파라미터로 정보 넘김)
            <Movie key={item.id} id={item.id} coverImg={item.medium_cover_image} title={item.title} summary={item.summary} genres={item.genres} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
