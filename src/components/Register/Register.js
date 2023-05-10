import LoginAndRegister from "../LoginAndRegister/LoginAndRegister";
import LoginAndRegisterForm from "../LoginAndRegisterForm/LoginAndRegisterForm";
import "./register.sass"

function Register() {
  return (
    <LoginAndRegister title="Добро пожаловать!" paragraph="Уже зарегистрированы?" link="/signin" linkText="Войти">
      <LoginAndRegisterForm>
        <div className="form">
          <label className="form__input-name" for="name">Имя</label>
          <input id="name" className="form__input" name="name" type="text" minLength="2" required />
          <span className="form__text-error"></span>
        </div>
        <div className="form">
          <label className="form__input-name" for="email">E-mail</label>
          <input id="email" className="form__input" name="email" type="email" minLength="2" required />
          <span className="form__text-error"></span>
        </div>
        <div className="form">
          <label className="form__input-name" for="password">Пароль</label>
          <input id="password" name="password" type="password" className="form__input form__input_type_error" minLength="2" required />
          <span className="form__text-error">Что-то пошло не так...</span>
        </div>
      </LoginAndRegisterForm>
    </LoginAndRegister>
  );
}

export default Register;
