import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"
import './header.sass'
import NavTabMain from "../NavTabMain/NavTabMain";
import Navigation from "../Navigation/Navigation";

function Header({loggedIn}) {

  return (
    <header className="header">
      <div className="header__wrap">
        <Link to={"/"} className="header__link">
          <img className="header__logo" src={logo} alt="Логотип"/>
        </Link>
        { loggedIn ? <Navigation /> : <NavTabMain /> }
      </div>
    </header>
  );
}

export default Header;
