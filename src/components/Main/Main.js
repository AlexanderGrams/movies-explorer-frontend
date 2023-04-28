import Header from "../Header/Header";

function Main({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn}></Header>
    </>
  );
}

export default Main;
