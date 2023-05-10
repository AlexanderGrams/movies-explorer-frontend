import LoginAndRegister from "../LoginAndRegister/LoginAndRegister";
import LoginAndRegisterForm from "../LoginAndRegisterForm/LoginAndRegisterForm";
import "./register.sass"
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Register({ onRegister }) {
  const {values, resetForm, handleChange, errors, isValid} = useFormAndValidation();

  function handleSubmit(e, setButtonLoading) {
    e.preventDefault();
    onRegister(values, resetForm, setButtonLoading)
  }

  return (
    <LoginAndRegister title="Добро пожаловать!" paragraph="Уже зарегистрированы?" link="/signin" linkText="Войти">
      <LoginAndRegisterForm isValid={isValid} name={'register'} buttonText="Зарегистрироваться" handleSubmit={handleSubmit}>
        <div className="form">
          <label className="form__input-name" for="nameUser">Имя</label>
          <input id="nameUser" className={errors.nameUser ? "form__input form__input_type_error" : "form__input"} name="nameUser" type="text" minLength="2" required onChange={handleChange}/>
          <span className="form__text-error">{errors.nameUser}</span>
        </div>
        <div className="form">
          <label className="form__input-name" for="emailUser">E-mail</label>
          <input id="emailUser" className={errors.emailUser ? "form__input form__input_type_error" : "form__input"} name="emailUser" type="email" minLength="2" required onChange={handleChange}/>
          <span className="form__text-error">{errors.emailUser}</span>
        </div>
        <div className="form">
          <label className="form__input-name" for="passwordUser">Пароль</label>
          <input id="passwordUser" name="passwordUser" type="password" className={errors.passwordUser ? "form__input form__input_type_error" : "form__input"} minLength="2" required onChange={handleChange}/>
          <span className="form__text-error">{errors.passwordUser}</span>
        </div>
      </LoginAndRegisterForm>
    </LoginAndRegister>
  );
}

export default Register;
