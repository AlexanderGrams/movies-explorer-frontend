import { Link } from "react-router-dom";
import MainBlocks from "../MainBlocks/MainBlocks";
import "./profile.sass"

function Profile({loggedIn}) {
  let name = 'Виталий'
  const email = 'cawa.cerber@gmail.com'
  let greeting = `Привет, ${name}!`

  return (
    <MainBlocks loggedIn={loggedIn} locationProfile={true}>
      <main className="profile">
        <div className="profile__wrap">
          <h2 className="profile__title">{greeting}</h2>
          <form className="profile__form">
            <fieldset className="profile__form-fieldset">
              <label class="profile__field">
                Имя
                <input class="profile__input" id="name-input" type="text" required value={name} disabled/>
              </label>
              <div className="profile__form-line"></div>
              <label class="profile__field">
                E-mail
                <input class="profile__input" id="email-input" type="email" required value={email} disabled/>
              </label>
            </fieldset>
            {/* <span class="profile__input-error">При обновлении профиля произошла ошибка.</span> */}
            <button className="profile__button">Редактировать</button>
          </form>
          <Link to={"/"} className="profile__link">Выйти из аккаунта</Link>
        </div>
      </main>
    </MainBlocks>
  );
}

export default Profile;
