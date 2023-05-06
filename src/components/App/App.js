import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import Main from "../Main/Main";
import "./app.sass"
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import LoginAndRegister from "../LoginAndRegister/LoginAndRegister";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <Main loggedIn={loggedIn}/>
        }/>
        <Route path="/signup" element={
          <LoginAndRegister title="Добро пожаловать!" paragraph="Уже зарегистрированы?" link="/signin" linkText="Войти"/>
        }/>
        <Route path="/movies" element={
          <Movies loggedIn={loggedIn}/>
        }/>
        <Route path="/saved-movies" element={
          <SavedMovies loggedIn={loggedIn}/>
        }/>
        <Route path="/profile" element={
          <Profile loggedIn={loggedIn}/>
        }/>
        <Route path="*" element={
          <NotFound />
        }/>
      </Routes>
    </div>
  );
}

export default App;
