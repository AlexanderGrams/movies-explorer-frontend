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
      <button className={isActiveBurger ? "nav__burger_active nav__burger" : "nav__burger"} onClick={openPopupBurger}>
        <span className="nav__burger-line"></span>
        <span className="nav__burger-line"></span>
        <span className="nav__burger-line"></span>
      </button>
    </>
  );
}

export default Navigation;
