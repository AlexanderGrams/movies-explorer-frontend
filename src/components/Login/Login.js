import LoginAndRegister from "../LoginAndRegister/LoginAndRegister";
import LoginAndRegisterForm from "../LoginAndRegisterForm/LoginAndRegisterForm";
import "./login.sass"
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login({ onLogin, isLoginResponse }) {
  const {values, resetForm, handleChange, errors, isValid} = useFormAndValidation();

  function handleSubmit(e, setButtonLoading) {
    e.preventDefault();
    onLogin(values, resetForm, setButtonLoading);
  }

  return (
    <LoginAndRegister title="Рады видеть!" paragraph="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация">
      <LoginAndRegisterForm isValid={isValid} name={'login'} buttonText="Войти" handleSubmit={handleSubmit}>
        <div className="form">
          <label className="form__input-name" htmlFor="emailUserLogin">E-mail</label>
          <input id="emailUserLogin" className={errors.emailUserLogin ? "form__input form__input_type_error" : "form__input"} name="emailUserLogin" type="email" minLength="2" required onChange={handleChange} />
          <span className="form__text-error">{errors.emailUserLogin}</span>
        </div>
        <div className="form">
          <label className="form__input-name" htmlFor="passwordUserLogin">Пароль</label>
          <input id="passwordUserLogin" name="passwordUserLogin" type="password" className={errors.passwordUserLogin ? "form__input form__input_type_error" : "form__input"} minLength="2" required onChange={handleChange} />
          <span className="form__text-error">{errors.passwordUserLogin}</span>
        </div>
        <p className="error">
          {isLoginResponse}
        </p>
      </LoginAndRegisterForm>
    </LoginAndRegister>
  );
}

export default Login;
