import MainBlocks from "../MainBlocks/MainBlocks";
import SearchForm from "../SearchForm/SearchForm";
import "./movies.sass"

function Movies({loggedIn}) {
  return (
    <MainBlocks loggedIn={loggedIn}>
      <main className="movies">
        <SearchForm />
      </main>
    </MainBlocks>
  );
}

export default Movies;
