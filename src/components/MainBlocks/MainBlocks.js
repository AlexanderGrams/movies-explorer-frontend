import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainBlocks({ loggedIn, children, locationProfile, isMainPages }) {
  return (
    <>
      <Header loggedIn={loggedIn} isMainPages={isMainPages}/>
        {children}
      {
        locationProfile
        ?
        <></>
        :
        <Footer />
      }
    </>
  );
}

export default MainBlocks;
