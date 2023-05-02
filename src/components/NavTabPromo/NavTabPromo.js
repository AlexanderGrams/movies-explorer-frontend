import { Link } from "react-router-dom";
import "./navTabPromo.sass";

function NavTabPromo() {
  return (
    <nav>
      <Link to={"/signup"} className="navLink">Регистрация</Link>
      <Link to={"/signin"} className="navLink navLink_type_accent">Войти</Link>
    </nav>
  );
}

export default NavTabPromo;
