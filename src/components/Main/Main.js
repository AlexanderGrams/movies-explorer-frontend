import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";

function Main({loggedIn}) {
  return (
    <main className="main">
      <Header loggedIn={loggedIn} />
      <Promo />
      <AboutProject />
    </main>
  );
}

export default Main;
