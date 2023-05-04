import MainBlocks from "../MainBlocks/MainBlocks";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./savedMovies.sass"

function SavedMovies({loggedIn}) {
  return (
    <MainBlocks loggedIn={loggedIn}>
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList locationSavedPage={true}/>
      </main>
    </MainBlocks>
  );
}

export default SavedMovies;
