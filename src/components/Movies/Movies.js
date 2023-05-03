import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies({loggedIn}) {
  return (
    <main>
      <Header loggedIn={loggedIn}/>
      <Footer />
    </main>
  );
}

export default Movies;
