import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import Main from "../Main/Main";
import "./app.sass"
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <Main loggedIn={loggedIn}/>
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
