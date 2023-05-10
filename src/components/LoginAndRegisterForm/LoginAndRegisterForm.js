import { useState} from 'react';
import "./loginAndRegisterForm.sass";
import imgLoading from "../../images/loading.gif";

function LoginAndRegisterForm({name, children, buttonText, handleSubmit}) {

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
        <input className="LoginAndRegisterForm__button" type="submit" value={buttonText} />
      }
    </form>
  );
}

export default LoginAndRegisterForm;
