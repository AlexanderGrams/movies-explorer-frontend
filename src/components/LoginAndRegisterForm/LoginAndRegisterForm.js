import { useState} from 'react';
import "./loginAndRegisterForm.sass";
import imgLoading from "../../images/loading.gif";

function LoginAndRegisterForm({isValid, name, children, buttonText, handleSubmit}) {

  const [buttonLoading, setButtonLoading] = useState(false);

  function handlerOnSubmit(e){
    handleSubmit(e, setButtonLoading)
    setButtonLoading(true)
  }

  return (
    <form className="LoginAndRegisterForm" name={name} noValidate onSubmit={handlerOnSubmit} >
      {children}
      {buttonLoading ?
        <div className='loading-btn loading-btn_location_login'>
          <img className='loading-btn__img' src={imgLoading} alt='анимация загрузки' />
        </div>
        :
        <input className={isValid ? "LoginAndRegisterForm__button" : "LoginAndRegisterForm__button_disabled"} type="submit" value={buttonText} disabled={isValid ? false : true} />
      }
    </form>
  );
}

export default LoginAndRegisterForm;
