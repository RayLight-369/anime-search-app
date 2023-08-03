import "../Utilities/Css/Home.css"
import { useState } from "react";
import AnimeList from "./AnimeList";
import Search from "./Search";

export default function Home() {
  
  const _KEY_ = "1d51cfaf";

  let [loading, setLoading] = useState(false);
  let [movies, setMovies] = useState([]);
  let [error, setError] = useState(null);

// https://api.jikan.moe/v4/anime?q=${searchString}
  
  const handleSearchRequest = search => {

    setError(null);
    setLoading(true);

    fetch(`https://www.omdbapi.com/?s=${search}&apikey=${_KEY_}`)
      .then(res => res.json())
      .then(response => {
        if (response.Response === "True") {
          setMovies(response.Search);
        } else {
          setError(response.Error);
        }
      })
      .catch(console.log)
      .finally(() => setLoading(false));
      
  }

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies])

  return (
    <>
      <h1 id="main" title="Movie-Dict">Movie-Dict</h1>
      <Search handleSearchRequest={handleSearchRequest}/>
      { loading && !error ? (
        <span>Loading . . .</span>
      ) : error  ? (
          <p className="error">{ error }</p>
        ) : (
        <AnimeList list={ movies } />
      )}
    </>
  )

}