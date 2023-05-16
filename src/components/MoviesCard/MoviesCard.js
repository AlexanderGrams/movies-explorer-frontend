import { useState } from "react";
import "./moviesCard.sass"

function MoviesCard({ title, time, img, alt, isLike, locationSavedPage}) {
  const buttonClassName = locationSavedPage ? "movies-card__like movies-card__delete" : (isLike ? "movies-card__like movies-card__like_type_active" : "movies-card__like" );

  const hours = Math.trunc(time / 60);
  const minutes = Math.trunc(time - hours * 60);

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{title}</h2>
        <p className="movies-card__subtitle">{hours}ч {minutes}м</p>
        <button className={buttonClassName}></button>
      </div>
      <img className="movies-card__image" src={img} alt={alt} />
    </li>
  );
}

export default MoviesCard;
