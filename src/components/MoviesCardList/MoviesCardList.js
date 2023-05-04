import MoviesCard from "../MoviesCard/MoviesCard";
import "./moviescardlist.sass"
import images from "../../images/movies-card__image.jpg"

function MoviesCardList() {
  return (
    <section className="card-list">
      <div className="card-list__wrap">
        <ul className="card-list__movies">
          <MoviesCard title='33 слова о дизайне' time='1ч 42м' img={images} alt='какое-то описание' ilLike={true}/>
          <MoviesCard title='33 слова о дизайне' time='1ч 42м' img={images} alt='какое-то описание' ilLike={false}/>
        </ul>
        <button className="card-list__button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
