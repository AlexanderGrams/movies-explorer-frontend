import MainBlocks from "../MainBlocks/MainBlocks";

function Movies({loggedIn}) {
  return (
    <MainBlocks loggedIn={loggedIn}>
      <main className="movies">
      </main>
    </MainBlocks>
  );
}

export default Movies;
