import "../Utilities/Css/AnimeList.css";
import AnimeCard from "./AnimeCard";

export default function AnimeList({ list }) {
  return (
    <div id="anime-card-container">
      { list.map((card, i) => (
        <AnimeCard item={card} key={i}/>
      ))}
      {/* <AnimeCard item={ { Poster: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", Title: "Naruto : Shippuden", Year: 2017, Type: "series" } } />
      <AnimeCard item={ { Poster: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", Title: "Naruto : Shippuden", Year: 2017, Type: "series" } } />
      <AnimeCard item={{Poster: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", Title: "Naruto : Shippuden", Year: 2017, Type: "series"}} />
      <AnimeCard item={{Poster: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", Title: "Naruto : Shippuden", Year: 2017, Type: "series"}} />
      <AnimeCard item={{Poster: "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg", Title: "Naruto : Shippuden", Year: 2017, Type: "series"}} /> */}
    </div>
  )
}