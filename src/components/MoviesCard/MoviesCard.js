import "./moviesCard.sass"

function MoviesCard({ movie, isLike, locationSavedPage, onClickUpdate}) {
  const buttonClassName = locationSavedPage ? "movies-card__like movies-card__delete" : (isLike ? "movies-card__like movies-card__like_type_active" : "movies-card__like" );

  const buttonEventHendler = (e) => {
    return onClickUpdate(movie);
  }

  const imgUrl = locationSavedPage ? movie.image : `https://api.nomoreparties.co${movie.image.url}`;

  function editerTtime() {
    const hours = Math.trunc(movie.duration / 60);
    const minutes = Math.trunc(movie.duration - hours * 60);

    if(minutes === 0) return `${hours}ч`
    if(hours === 0) return `${minutes}м`
    return `${hours}ч ${minutes}м`
   }

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <p className="movies-card__subtitle">{editerTtime()}</p>
        <button className={buttonClassName} onClick={buttonEventHendler}></button>
      </div>
      <a href={movie.trailerLink} className="movies-card__link" target="_blank">
        <img className="movies-card__image" src={imgUrl} alt={movie.nameRU} />
      </a>
    </li>
  );
}

export default MoviesCard;
