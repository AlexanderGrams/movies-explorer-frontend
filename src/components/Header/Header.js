import { Link } from "react-router-dom";
import { useState } from "react"
import logo from "../../images/logo.svg"
import './header.sass'
import NavTabPromo from "../NavTabPromo/NavTabPromo";
import NavTab from "../NavTab/NavTab";

function Header({loggedIn}) {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  return (
    <header className="header">
      <div className="header__wrap">
        <Link to={"/"} className="header__link">
          <img className="header__logo" src={logo} alt="Логотип"/>
        </Link>
        { loggedIn ? <NavTab isActiveBurger={isActiveBurger} setIsActiveBurger={setIsActiveBurger}/> : <NavTabPromo /> }
      </div>
      <div className={isActiveBurger ? "header__lining header__lining_type_active" : "header__lining"}></div>
    </header>
  );
}

export default Header;
