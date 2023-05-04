import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainBlocks({ loggedIn, children, locationProfile }) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
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
