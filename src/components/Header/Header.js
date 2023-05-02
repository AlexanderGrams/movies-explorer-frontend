import { Link } from "react-router-dom";
import { useState } from "react"
import logo from "../../images/logo.svg"
import './header.sass'
import NavTab from "../NavTab/NavTab";
import Navigation from "../Navigation/Navigation";

function Header({loggedIn}) {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  return (
    <header className={loggedIn ? "header header_type_loggedIn" : "header"}>
      <div className="header__wrap">
        <Link to={"/"} className="header__link">
          <img className="header__logo" src={logo} alt="Логотип"/>
        </Link>
        { loggedIn ? <Navigation isActiveBurger={isActiveBurger} setIsActiveBurger={setIsActiveBurger}/> : <NavTab /> }
      </div>
      <div className={isActiveBurger ? "header__lining header__lining_type_active" : "header__lining"}></div>
    </header>
  );
}

export default Header;
