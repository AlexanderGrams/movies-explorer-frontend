import MainBlocks from "../MainBlocks/MainBlocks";
import "./profile.sass";
import { useState, useContext, useEffect } from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import imgLoading from "../../images/loading.gif";

function Profile({ loggedIn, signOut, onUpdateUser, isProfileResponse, setIsProfileResponse }) {
  const [isActiveEditProfile, setIsActiveEditProfile] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const currentUserData = useContext(CurrentUserContext);

  const {values, handleChange, resetForm, setValues, setIsValid, errors, isValid} = useFormAndValidation();

  useEffect(() => {
    if(Object.keys(currentUserData).length !== 0){
      setValues({...values, 'nameProfile': currentUserData.name, 'emailProfile': currentUserData.email});
      setIsValid(true);
    }
  }, [currentUserData]);

  function hendlerEditProfile(e) {
    e.preventDefault();
    if(!isActiveEditProfile) {
      setIsProfileResponse('');
      return setIsActiveEditProfile(!isActiveEditProfile)
    };
    setButtonLoading(true);
    onUpdateUser(values, resetForm, setButtonLoading, setIsActiveEditProfile)
  };

  return (
    <MainBlocks loggedIn={loggedIn} locationProfile={true} isMainPages={true}>
      <main className="profile">
        <div className="profile__wrap">
          <h2 className="profile__title">{`Привет, ${currentUserData.name}!`}</h2>
          <form className="profile__form">
            <fieldset className="profile__form-fieldset">
              <label className="profile__field">
                Имя
                <input className={isActiveEditProfile ? "profile__input profile__input_active" : "profile__input"} id="name-input" type="text" name="nameProfile"  minLength={2} value={values.nameProfile || ''} disabled={isActiveEditProfile ? false : true} onChange={handleChange}/>
              </label>
              {
                isActiveEditProfile
                ?
                <span className="form__text-error">{errors.nameProfile}</span>
                :
                <></>

              }
              <div className="profile__form-line"></div>
              <label className="profile__field">
                E-mail
                <input className={isActiveEditProfile ? "profile__input profile__input_active" : "profile__input"} id="email-input" type="email" name="emailProfile" required value={values.emailProfile || ''} disabled={isActiveEditProfile ? false : true} onChange={handleChange}/>
              </label>
              {
                isActiveEditProfile
                ?
                <span className="form__text-error">{errors.emailProfile}</span>
                :
                <></>

              }
            </fieldset>
            {isActiveEditProfile ?
              (
                buttonLoading
                ?
                <div className='loading-btn'>
                  <img className='loading-btn__img' src={imgLoading} alt='анимация загрузки' />
                </div>
                :
                <>
                  <span className="profile__input-error">{isProfileResponse}</span>
                  <button className={isValid ? "profile__button-saved" : "profile__button-saved_disabled"} onClick={hendlerEditProfile} disabled={isValid ? false : true}>Сохранить</button>
                </>
              )
              :
              <button className="profile__button" onClick={hendlerEditProfile}>Редактировать</button>
            }
          </form>
          <button onClick={signOut} className="profile__button-Out">Выйти из аккаунта</button>
        </div>
      </main>
    </MainBlocks>
  );
}

export default Profile;
