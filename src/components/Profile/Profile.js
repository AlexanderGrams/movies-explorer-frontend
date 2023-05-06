import { Link } from "react-router-dom";
import MainBlocks from "../MainBlocks/MainBlocks";
import "./profile.sass"
import { useState } from "react";

function Profile({loggedIn}) {
  const [isActiveEditProfile, setIsActiveEditProfile] = useState(false);

  function hendlerEditProfile() {
    setIsActiveEditProfile(!isActiveEditProfile)
  }

  let name = 'Виталий';
  const email = 'cawa.cerber@gmail.com';
  let greeting = `Привет, ${name}!`;

  return (
    <MainBlocks loggedIn={loggedIn} locationProfile={true} isMainPages={true}>
      <main className="profile">
        <div className="profile__wrap">
          <h2 className="profile__title">{greeting}</h2>
          <form className="profile__form">
            <fieldset className="profile__form-fieldset">
              <label class="profile__field">
                Имя
                <input class={isActiveEditProfile ? "profile__input profile__input_active" : "profile__input"} id="name-input" type="text" required value={name} disabled={isActiveEditProfile ? false : true}/>
              </label>
              <div className="profile__form-line"></div>
              <label class="profile__field">
                E-mail
                <input class={isActiveEditProfile ? "profile__input profile__input_active" : "profile__input"} id="email-input" type="email" required value={email} disabled={isActiveEditProfile ? false : true}/>
              </label>
            </fieldset>
            {/* <span class="profile__input-error">При обновлении профиля произошла ошибка.</span> */}
            {
              isActiveEditProfile
              ?
              <button className="profile__button-saved" onClick={hendlerEditProfile}>Сохранить</button>
              :
              <button className="profile__button" onClick={hendlerEditProfile}>Редактировать</button>
            }
          </form>
          <Link to={"/"} className="profile__link">Выйти из аккаунта</Link>
        </div>
      </main>
    </MainBlocks>
  );
}

export default Profile;
