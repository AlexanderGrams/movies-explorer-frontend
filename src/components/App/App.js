import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import Main from "../Main/Main";
import "./app.sass"

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <Main loggedIn={loggedIn}/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
