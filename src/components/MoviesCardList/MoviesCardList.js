import MoviesCard from "../MoviesCard/MoviesCard";
import "./moviescardlist.sass"

function MoviesCardList({ locationSavedPage, currentMovies, onClickRemove }) {
  return (
    <section className="card-list">
      <div className="card-list__wrap">
        <ul className="card-list__movies">
          {
            currentMovies.map(movie => {
              return (
                <MoviesCard movie={movie} isLike={false} locationSavedPage={locationSavedPage} key={movie.id || movie.movieId} onClickRemove={onClickRemove} />
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
