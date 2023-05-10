import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react"
import Main from "../Main/Main";
import "./app.sass"
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { register } from "../../utils/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isregisterResponse, setIsregisterResponse] = useState('');
  // const [message, setMessage] = useState({
  //   status: false,
  //   text: "",
  // })

  const navigate = useNavigate();




  function handleRegister(values, resetForm, setButtonLoading){
    const { nameUser, emailUser, passwordUser } = values
    register(nameUser, emailUser, passwordUser)
      .then(()=>{
        setIsregisterResponse("");
        navigate('/signin', {replace: true});
      })
      .catch((err) => {
        console.log(err)
        if(err === "Ошибка: 409"){
          return setIsregisterResponse("Пользователь с такой почтой уже зарегистрирован");
        }
        return setIsregisterResponse("Что-то пошло не так! Попробуйте ещё раз.");
      })
      .finally(()=>{
        resetForm();
        setButtonLoading(false);
      })
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <Main loggedIn={loggedIn}/>
        }/>
        <Route path="/signup" element={
          <Register onRegister={handleRegister}/>
        }/>
        <Route path="/signin" element={
          <Login />
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
