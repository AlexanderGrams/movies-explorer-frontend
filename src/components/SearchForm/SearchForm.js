import { useState } from "react";
import "./searchForm.sass"

function SearchForm({setSavedSearch, savedSearch}) {
  const [isActive, setIsActive] = useState(false)

  function handlerClick() {
    if(isActive) {
      setIsActive(false)
      setSavedSearch({ film: savedSearch.film, shorts: false })
    } else {
      setIsActive(true)
      setSavedSearch({ film: savedSearch.film, shorts: true })
    }
  }

  return (
    <section className="search-form" aria-label="поиск фильмов">
      <div className="search-form__wrap">
        <form className="search-form__container">
          <input className="search-form__input" placeholder="Фильм" type="text" required></input>
          <button className="search-form__button" type="submit" aria-label="Кнопка найти">Найти</button>
        </form>
        <div className="search-form__control">
          <div onClick={handlerClick} className={isActive ? "search-form__checkbox search-form__checkbox_active" : "search-form__checkbox"}>
            <div className={isActive ? "search-form__checkbox-circle search-form__checkbox-circle_active" : "search-form__checkbox-circle"}></div>
          </div>
          <p className="search-form__checkbox-name">Короткометражки</p>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
