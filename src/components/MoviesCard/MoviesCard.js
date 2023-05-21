import { useState } from "react";
import "./moviesCard.sass"

function MoviesCard({ title, time, img, alt, isLike, locationSavedPage}) {
  const buttonClassName = locationSavedPage ? "movies-card__like movies-card__delete" : (isLike ? "movies-card__like movies-card__like_type_active" : "movies-card__like" );

  const imgUrl = `https://api.nomoreparties.co${img}`;

  function editerTtime() {
    const hours = Math.trunc(time / 60);
    const minutes = Math.trunc(time - hours * 60);

    if(minutes === 0) return `${hours}ч`
    if(hours === 0) return `${minutes}м`
    return `${hours}ч ${minutes}м`
   }

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{title}</h2>
        <p className="movies-card__subtitle">{editerTtime()}</p>
        <button className={buttonClassName}></button>
      </div>
      <img className="movies-card__image" src={imgUrl} alt={alt} />
    </li>
  );
}

export default MoviesCard;
