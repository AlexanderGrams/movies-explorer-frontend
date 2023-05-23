import { useEffect, useState } from "react";
import MainBlocks from "../MainBlocks/MainBlocks";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./savedMovies.sass";
import { mainApi } from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function SavedMovies({loggedIn}) {
  const [sourceMovies, setSourceMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedSearch, setSavedSearch] = useState({ film: '', shorts: false });
  const [isLoading, setIsLoading] = useState(false);

  const filterMovies = (search, films) => {
    setSavedSearch(search);
    setFilteredMovies(films.filter((movie) => {
      const isValidName = movie.nameRU.toLowerCase().includes(search.film.toLowerCase());
      return search.shorts ? (isValidName && movie.duration <= 40) : isValidName;
    }))
  }

  useEffect(() => {
    filterMovies(savedSearch, sourceMovies)
  }, [savedSearch]);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then((serverMovies) => {
        setSourceMovies(serverMovies);
        filterMovies(savedSearch, serverMovies);
      })
      .catch((err) => {
        console.log(err);
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
    })

  return (
    <MainBlocks loggedIn={loggedIn} isMainPages={true}>
      <main className="saved-movies">
        <SearchForm setSavedSearch={setSavedSearch} savedSearch={savedSearch} />
        {
          isLoading
          ?
          <Preloader />
          :
          <MoviesCardList locationSavedPage={true} currentMovies={filteredMovies} onClickUpdate={onClickRemove} />
        }
      </main>
    </MainBlocks>
  );
}

export default SavedMovies;
