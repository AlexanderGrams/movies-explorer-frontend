import MoviesCard from "../MoviesCard/MoviesCard";
import "./moviescardlist.sass"

function MoviesCardList({ locationSavedPage, currentMovies }) {
  return (
    <section className="card-list">
      <div className="card-list__wrap">
        <ul className="card-list__movies">
          {
            currentMovies.map(card => {
              return (
                <MoviesCard title={card.nameRU} time={card.duration} img={card.image.url} alt={card.nameRU} isLike={false} locationSavedPage={locationSavedPage} key={card.id}/>
              )
            })
          }
        </ul>
        {
          locationSavedPage
          ?
          <></>
          :
          <button className="card-list__button">Ещё</button>
        }
      </div>
    </section>
  );
}

export default MoviesCardList;
