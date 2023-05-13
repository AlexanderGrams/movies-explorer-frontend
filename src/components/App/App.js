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
import { register, authorize } from "../../utils/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegisterResponse, setIsRegisterResponse] = useState('');
  const [isLoginResponse, setIsLoginResponse] = useState('');
  // const [message, setMessage] = useState({
  //   status: false,
  //   text: "",
  // })

  const navigate = useNavigate();


  function handleLogin(values, resetForm, setButtonLoading) {
    // setLoadingBoolean(false);

    const {emailUser, password} = values
    authorize(emailUser, password)
      .then((res)=>{
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        setIsLoginResponse("");
        navigate('/movies', {replace: true});
      })
      .catch((err) => {
        console.log(err)
        if(err === "Ошибка: 401"){
          return setIsLoginResponse("Неправильные почта или пароль");
        }
        return setIsLoginResponse("Что-то пошло не так! Попробуйте ещё раз.");
      })
      .finally(()=>{
        resetForm()
        setButtonLoading(false)
      })
  }

  function handleRegister(values, resetForm, setButtonLoading){
    const { nameUser, emailUser, passwordUser } = values
    register(nameUser, emailUser, passwordUser)
      .then(()=>{
        setIsRegisterResponse("");
        navigate('/signin', {replace: true});
      })
      .catch((err) => {
        console.log(err)
        if(err === "Ошибка: 409"){
          return setIsRegisterResponse("Пользователь с такой почтой уже зарегистрирован");
        }
        return setIsRegisterResponse("Что-то пошло не так! Попробуйте ещё раз.");
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
          <Register onRegister={handleRegister} isRegisterResponse={isRegisterResponse}/>
        }/>
        <Route path="/signin" element={
          <Login onLogin={handleLogin} isLoginResponse={isLoginResponse} />
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
