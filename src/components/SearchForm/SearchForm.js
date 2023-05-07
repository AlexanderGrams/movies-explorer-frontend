import { useState } from "react";
import "./searchForm.sass"

function SearchForm() {
  const [isActive, setIsActive] = useState(false)


  function handlerClick() {
    if(isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  return (
    <section className="search-form">
      <div className="search-form__wrap">
        <form className="search-form__container">
          <input className="search-form__input" placeholder="Фильм" type="text" required></input>
          <button className="search-form__button" type="submit" aria-label="Кнопка найти">Найти</button>
        </form>
        <label className="search-form__control">
          <div onClick={handlerClick} className={isActive ? "search-form__checkbox search-form__checkbox_active" : "search-form__checkbox"} type="button" aria-label="поиск по короткометражкам">
            <div className={isActive ? "search-form__checkbox-circle search-form__checkbox-circle_active" : "search-form__checkbox-circle"}></div>
          </div>
          <p className="search-form__checkbox-name">Короткометражки</p>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
