import Header from "../Header/Header";
import Promo from "../Promo/Promo";

function Main({loggedIn}) {
  return (
    <main className="main">
      <Header loggedIn={loggedIn} />
      <Promo />
    </main>
  );
}

export default Main;
