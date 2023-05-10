import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import MainBlocks from "../MainBlocks/MainBlocks";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main({loggedIn}) {
  return (
    <MainBlocks loggedIn={loggedIn} isMainPages={false}>
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
    </MainBlocks>
  );
}

export default Main;
