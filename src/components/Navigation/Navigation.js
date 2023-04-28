import { Link, NavLink } from "react-router-dom";
import { useState } from "react"
import "./navigation.sass";


function Navigation() {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  function openPopupBurger(){
    setIsActiveBurger(!isActiveBurger)
  }
  return (
    <>
      <nav className="nav">
        <div>
          <NavLink to="/movies" className={({isActive}) => `nav__tab ${isActive ? "nav__tab_type_action" : ""}`}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({isActive}) => `nav__tab ${isActive ? "nav__tab_type_action" : ""}`}>Сохранённые фильмы</NavLink>
        </div>
        <Link to={"/profile"} className="nav__profile-btn">Аккаунт</Link>
      </nav>
      <button className={isActiveBurger ? " nav__burger_active nav__burger" : "nav__burger"} onClick={openPopupBurger}>
        <span className="nav__burger-line"></span>
        <span className="nav__burger-line"></span>
        <span className="nav__burger-line"></span>
      </button>
    </>
  );
}

export default Navigation;
