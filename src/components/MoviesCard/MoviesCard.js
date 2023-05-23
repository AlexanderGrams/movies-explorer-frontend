import { useState } from "react";
import "./moviesCard.sass"

function MoviesCard({ movie, isLike, locationSavedPage, onClickRemove}) {
  const buttonClassName = locationSavedPage ? "movies-card__like movies-card__delete" : (isLike ? "movies-card__like movies-card__like_type_active" : "movies-card__like" );

  const buttonEventHendler = (e) => {
    if(locationSavedPage){
      return onClickRemove(movie._id);
    }
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
      <img className="movies-card__image" src={imgUrl} alt={movie.nameRU} />
    </li>
  );
}

export default MoviesCard;
