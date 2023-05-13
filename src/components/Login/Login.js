import LoginAndRegister from "../LoginAndRegister/LoginAndRegister";
import LoginAndRegisterForm from "../LoginAndRegisterForm/LoginAndRegisterForm";
import "./login.sass"

function Login({ onLogin, isLoginResponse }) {

  function handleSubmit(e, setButtonLoading) {
    e.preventDefault();
    // onLogin(values, resetForm, setButtonLoading);
  }

  return (
    <LoginAndRegister title="Рады видеть!" paragraph="Ещё не зарегистрированы?" link="/signup" linkText="Регистрация">
      <LoginAndRegisterForm name={'login'} buttonText="Войти" onSubmit={handleSubmit}>
        <div className="form">
          <label className="form__input-name" htmlFor="email">E-mail</label>
          <input id="email" className="form__input" name="email" type="email" minLength="2" required />
          <span className="form__text-error"></span>
        </div>
        <div className="form">
          <label className="form__input-name" htmlFor="password">Пароль</label>
          <input id="password" name="password" type="password" className="form__input form__input_type_error" minLength="2" required />
          <span className="form__text-error">Что-то пошло не так...</span>
        </div>
        <p className="error">
          {isLoginResponse}
        </p>
      </LoginAndRegisterForm>
    </LoginAndRegister>
  );
}

export default Login;
