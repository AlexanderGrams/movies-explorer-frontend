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
        <label className="search-form__checkbox">
          <div className={`search-form__checkbox-switcher ${isActive && 'search-form__checkbox-switcher_active'}`}>
            <button onClick={handlerClick} className={`search-form__checkbox-button ${isActive && 'search-form__checkbox-button_active'}`} type="button" aria-label="поиск по короткометражкам"></button>
          </div>
          <p className="search-form__checkbox-name">Короткометражки</p>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
