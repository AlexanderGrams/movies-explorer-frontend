import { useEffect, useState } from "react";
import MainBlocks from "../MainBlocks/MainBlocks";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./savedMovies.sass";
import { mainApi } from "../../utils/MainApi";

function SavedMovies({loggedIn}) {
  const [sourceMovies, setSourceMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedSearch, setSavedSearch] = useState({ film: '', shorts: false });
  const [isLoading, setIsLoading] = useState(false);
  const [apiHasError, setApiHasError] = useState(false);

  const filterMovies = (search, films) => {
    setSavedSearch(search);
    setFilteredMovies(films.filter((movie) => {
      const isValidName = movie.nameRU.toLowerCase().includes(search.film.toLowerCase());
      return search.shorts ? (isValidName && movie.duration <= 40) : isValidName;
    }))
  }

  useEffect(() => {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then((serverMovies) => {
        setSourceMovies(serverMovies);
        filterMovies(savedSearch, serverMovies);
      })
      .catch((err) => {
        console.log(err);
        setApiHasError(true);
      })
      .finally(()=>{
        setIsLoading(false);
      });
  }, [])

  const onClickRemove = (movie) => mainApi.deletMovie(movie)
    .then((deletedMovie) => {
      const updateMovies = sourceMovies.filter((film) => film._id !== deletedMovie.deletedMovie._id)
      setSourceMovies(updateMovies);
      filterMovies(savedSearch, updateMovies);
    })
    .catch((err) => {
      console.log(err);
      setApiHasError(true);
    })

  return (
    <MainBlocks loggedIn={loggedIn} isMainPages={true}>
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList locationSavedPage={true} currentMovies={filteredMovies} onClickRemove={onClickRemove} />
      </main>
    </MainBlocks>
  );
}

export default SavedMovies;
