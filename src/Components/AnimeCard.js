import "../Utilities/Css/AnimeCard.css";

export default function AnimeCard({ item }) {

  let { Poster, Type, Title, Year } = item;

  return (
    <div className="anime-card">
      <img src={ Poster } alt={ Title }></img>
        <div className="text-info">
          <h2 className="title">{ Title }</h2>
          <p className="type">Type : <span>{ Type }</span></p>
          <p className="year">Year : <span>{ Year }</span></p>
        </div>
    </div>
  )
}