import "./searchForm.sass"

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__wrap">
        <form className="search-form__container">
          <input className="search-form__input" placeholder="Фильм" type="text" required></input>
          <button className="search-form__button" type="submit" aria-label="Кнопка найти">Найти</button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
