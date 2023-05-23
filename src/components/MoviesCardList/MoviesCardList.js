import MoviesCard from "../MoviesCard/MoviesCard";
import "./moviescardlist.sass"

function MoviesCardList({ locationSavedPage, currentMovies, onClickRemove, loadMore, hasMore }) {
  return (
    <section className="card-list">
      <div className="card-list__wrap">
        <ul className="card-list__movies">
          {
            (currentMovies.length > 0)
            ?
            currentMovies.map(movie => {
              return (
                <MoviesCard movie={movie} isLike={false} locationSavedPage={locationSavedPage} key={movie.id || movie.movieId} onClickRemove={onClickRemove} />
              )
            })
            :
            <p className="card-list__text">
              {
                locationSavedPage
                ?
                "Фильмы не найдены"
                :
                "Введите фильм в поиск"
              }
            </p>
          }
        </ul>
        {
          ((!locationSavedPage) && hasMore)
          ?
          <button className="card-list__button" onClick={loadMore}>Ещё</button>
          :
          <></>
        }
      </div>
    </section>
  );
}

export default MoviesCardList;
