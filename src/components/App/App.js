import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import Main from "../Main/Main";
import "./app.sass"
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { register, authorize, getContent } from "../../utils/auth";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

function App() {
  // Авторизация пользователя
  const [loggedIn, setLoggedIn] = useState(false);
  // Ответ ошибки при регистрации
  const [isRegisterResponse, setIsRegisterResponse] = useState('');
  // Ответ ошибки при логине
  const [isLoginResponse, setIsLoginResponse] = useState('');
  // Ответ редактирование информации
  const [isProfileResponse, setIsProfileResponse] = useState('');
  // Данные пользователя
  const [currentUser, setCurrentUser] = useState({});
  //данные фильмов
  // const [currentMovies, setCurrentMovies] = useState([]);

  const navigate = useNavigate();

  function onLogin(email, pasword, resetForm, setButtonLoading){
    return authorize(email, pasword)
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

  // Авторизация
  function handleLogin(values, resetForm, setButtonLoading) {
    // setLoadingBoolean(false);
    onLogin(values.emailUserLogin, values.passwordUserLogin, resetForm, setButtonLoading);
  }

  // Регистрация
  function handleRegister(values, resetForm, setButtonLoading){
    const { nameUserRegister, emailUserRegister, passwordUserRegister } = values
    register(nameUserRegister, emailUserRegister, passwordUserRegister)
      .then(()=>{
        setIsRegisterResponse("");
        return onLogin(values.emailUserRegister, values.passwordUserRegister, resetForm, setButtonLoading);
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


  useEffect(()=>{
    tokenCheck();
  }, [loggedIn]);

  function tokenCheck(){
    const jwt = localStorage.getItem('jwt');
    if(jwt){
      getContent(jwt)
        .then((res) => {
          setLoggedIn(true);
          navigate("/movies", {replace: true});
          setCurrentUser({
            userId: res._id,
            email: res.email,
            name: res.name,
          })
        })
        .catch((err) => {
          console.log(err);
          // setLoadingBoolean(true);
        })
    }else{
      // setLoadingBoolean(true);
    }
  }

  // Выход из учетной записи
  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('search');
    navigate('/signin');
    setLoggedIn(false);
    setCurrentUser({});
  }

  function handleUpdateUser(values, resetForm, setButtonLoading, setIsActiveEditProfile){
    const { nameProfile, emailProfile } = values;
    mainApi.giveInfoUser(emailProfile, nameProfile)
      .then(res => {
        setIsProfileResponse("")
        setCurrentUser({
          userId: res._id,
          email: res.email,
          name: res.name,
        });
        setIsActiveEditProfile(false);
      })
      .catch((err) => {
        console.log(err);
        if(err === "Ошибка: 409"){
          return setIsProfileResponse("Электронный адрес уже занят")
        }
        if(err === "Ошибка: 400"){
          return setIsProfileResponse("Переданы некорректные данные")
        }
        setIsProfileResponse("Что-то пошло не так! Попробуйте ещё раз.")
      })
      .finally(()=>{
        setButtonLoading(false);
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={
            <Main loggedIn={loggedIn}/>
          }/>
          <Route path="/signup" element={
            <Register onRegister={handleRegister} isRegisterResponse={isRegisterResponse} />
          }/>
          <Route path="/signin" element={
            <Login onLogin={handleLogin} isLoginResponse={isLoginResponse} />
          }/>
          <Route path="/movies" element={
            <ProtectedRouteElement component={Movies} loggedIn={loggedIn} />
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRouteElement component={SavedMovies} loggedIn={loggedIn} />
          }/>
          <Route path="/profile" element={
            <ProtectedRouteElement onUpdateUser={handleUpdateUser} component={Profile} loggedIn={loggedIn} signOut={signOut} isProfileResponse={isProfileResponse} setIsProfileResponse={setIsProfileResponse} />
          }/>
          <Route path="*" element={
            <NotFound />
          }/>
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
