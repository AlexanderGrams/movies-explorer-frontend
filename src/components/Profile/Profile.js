import MainBlocks from "../MainBlocks/MainBlocks";
import "./profile.sass"
import { useState, useContext } from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js"

function Profile({ loggedIn, signOut }) {
  const [isActiveEditProfile, setIsActiveEditProfile] = useState(false);

  const currentUserData = useContext(CurrentUserContext);

  function hendlerEditProfile() {
    setIsActiveEditProfile(!isActiveEditProfile)
  }

  return (
    <MainBlocks loggedIn={loggedIn} locationProfile={true} isMainPages={true}>
      <main className="profile">
        <div className="profile__wrap">
          <h2 className="profile__title">{`Привет, ${currentUserData.name}!`}</h2>
          <form className="profile__form">
            <fieldset className="profile__form-fieldset">
              <label className="profile__field">
                Имя
                <input className={isActiveEditProfile ? "profile__input profile__input_active" : "profile__input"} id="name-input" type="text" required value={currentUserData.name} disabled={isActiveEditProfile ? false : true}/>
              </label>
              <div className="profile__form-line"></div>
              <label className="profile__field">
                E-mail
                <input className={isActiveEditProfile ? "profile__input profile__input_active" : "profile__input"} id="email-input" type="email" required value={currentUserData.email} disabled={isActiveEditProfile ? false : true}/>
              </label>
            </fieldset>
            {/* <span className="profile__input-error">При обновлении профиля произошла ошибка.</span> */}
            {
              isActiveEditProfile
              ?
              <button className="profile__button-saved" onClick={hendlerEditProfile}>Сохранить</button>
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
