import LoginAndRegister from "../LoginAndRegister/LoginAndRegister";
import LoginAndRegisterForm from "../LoginAndRegisterForm/LoginAndRegisterForm";
import "./register.sass"
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Register({ onRegister, isRegisterResponse }) {
  const {values, resetForm, handleChange, errors, isValid} = useFormAndValidation();

  function handleSubmit(e, setButtonLoading) {
    e.preventDefault();
    onRegister(values, resetForm, setButtonLoading)
  }

  return (
    <LoginAndRegister title="Добро пожаловать!" paragraph="Уже зарегистрированы?" link="/signin" linkText="Войти">
      <LoginAndRegisterForm isValid={isValid} name={'register'} buttonText="Зарегистрироваться" handleSubmit={handleSubmit}>
        <div className="form">
          <label className="form__input-name" htmlFor="nameUserRegister">Имя</label>
          <input id="nameUserRegister" className={errors.nameUserRegister ? "form__input form__input_type_error" : "form__input"} name="nameUserRegister" type="text" minLength="2" required onChange={handleChange}/>
          <span className="form__text-error">{errors.nameUserRegister}</span>
        </div>
        <div className="form">
          <label className="form__input-name" htmlFor="emailUserRegister">E-mail</label>
          <input id="emailUserRegister" className={errors.emailUserRegister ? "form__input form__input_type_error" : "form__input"} name="emailUserRegister" type="email" minLength="2" required onChange={handleChange}/>
          <span className="form__text-error">{errors.emailUserRegister}</span>
        </div>
        <div className="form">
          <label className="form__input-name" htmlFor="passwordUserRegister">Пароль</label>
          <input id="passwordUserRegister" name="passwordUserRegister" type="password" className={errors.passwordUserRegister ? "form__input form__input_type_error" : "form__input"} minLength="2" required onChange={handleChange}/>
          <span className="form__text-error">{errors.passwordUserRegister}</span>
        </div>
        <p className="error">
          {isRegisterResponse}
        </p>
      </LoginAndRegisterForm>
    </LoginAndRegister>
  );
}

export default Register;
