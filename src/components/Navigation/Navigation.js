import { Link, NavLink } from "react-router-dom";
import "./navigation.sass";


function Navigation({isActiveBurger, setIsActiveBurger}) {
  function openPopupBurger(){
    setIsActiveBurger(!isActiveBurger)
  }

  return (
    <>
      <nav className={isActiveBurger ? "nav nav_type_active" : "nav"}>
        <div className="nav__wrap">
          <NavLink to="/" className={({isActive}) => `nav__tab nav__tab_type_home ${isActive ? "nav__tab_type_action" : ""}`}>Главная</NavLink>
          <NavLink to="/movies" className={({isActive}) => `nav__tab ${isActive ? "nav__tab_type_action" : ""}`}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({isActive}) => `nav__tab ${isActive ? "nav__tab_type_action" : ""}`}>Сохранённые фильмы</NavLink>
        </div>
        <Link to={"/profile"} className="nav__profile-btn">Аккаунт</Link>
      </nav>
      <button className={isActiveBurger ? "nav-burger_active nav-burger" : "nav-burger"} onClick={openPopupBurger}>
        <span className="nav-burger__line"></span>
        <span className="nav-burger__line"></span>
        <span className="nav-burger__line"></span>
      </button>
    </>
  );
}

export default Navigation;
