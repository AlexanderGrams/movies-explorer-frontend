import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainBlocks({ loggedIn, children }) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
        {children}
      <Footer />
    </>
  );
}

export default MainBlocks;
