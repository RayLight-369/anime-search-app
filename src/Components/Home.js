import "../Utilities/Css/Home.css"
import { useEffect, useState } from "react";
import AnimeList from "./AnimeList";
import Search from "./Search";

export default function Home() {
  
  const _KEY_ = "1d51cfaf";

  let [loading, setLoading] = useState(false);
  let [movies, setMovies] = useState([]);

// https://api.jikan.moe/v4/anime?q=${searchString}
  
  const handleSearchRequest = search => {
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=${_KEY_}`)
      .then(res => {
        setLoading(true);
        return res.json();
      })
      .then(response => {
        setMovies(response.Search);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
      
  }

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies])

  return (
    <>
      <Search handleSearchRequest={handleSearchRequest}/>
      <AnimeList list={ movies } />
    </>
  )

}