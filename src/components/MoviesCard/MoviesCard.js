import "./moviesCard.sass"

function MoviesCard({ title, time, img, alt, ilLike, locationSavedPage}) {
  const buttonClassName = locationSavedPage ? "movies-card__like movies-card__delete" : (ilLike ? "movies-card__like movies-card__like_type_active" : "movies-card__like" );

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{title}</h2>
        <p className="movies-card__subtitle">{time}</p>
        <div className={buttonClassName}></div>
      </div>
      <img className="movies-card__image" src={img} alt={alt} />
    </li>
  );
}

export default MoviesCard;
