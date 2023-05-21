import MainBlocks from "../MainBlocks/MainBlocks";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./movies.sass"

function Movies({loggedIn, currentMovies}) {
  return (
    <MainBlocks loggedIn={loggedIn} isMainPages={true}>
      <main className="movies">
        <SearchForm />
        <MoviesCardList currentMovies={currentMovies} />
      </main>
    </MainBlocks>
  );
}

export default Movies;
