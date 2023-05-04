import MainBlocks from "../MainBlocks/MainBlocks";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./savedMovies.sass"

function SavedMovies({loggedIn}) {
  return (
    <MainBlocks loggedIn={loggedIn}>
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </main>
    </MainBlocks>
  );
}

export default SavedMovies;
