import { Link } from "react-router-dom";
import "./LoginAndRegister.sass";
import logo from '../../images/logo.svg'

function LoginAndRegister({title, paragraph, children, link, linkText}) {

  return (
      <main className="login">
        <div className="login__wrap">
          <Link to={"/"} className="login__link-logo">
            <img className="login__logo" src={logo} alt="Логотип"/>
          </Link>
          <h2 className="login__title">{title}</h2>
          {children}
          <div className="login__question">
            <p className="login__question-text">
              {paragraph}
            </p>
            <Link to={link} className="login__link">{linkText}</Link>
          </div>
        </div>
      </main>
  );
}

export default LoginAndRegister;
