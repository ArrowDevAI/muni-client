import LeaderboardView from "../leaderboard-view/leaderboardView";
import LoginView from "../login-view/loginView";
import ProfileView from "../profile-view/profileView";
import "./main-view.scss"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"


const MainView = ()=> {
  const storedUser = JSON.parse(localStorage.getItem("user")); 
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const onUpdateUser = (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
  } //This may change when cookies are implemented


  return (
    <BrowserRouter>
    <Row className="justify-content-md-center">
      <Routes>
        <Route
            path = "/"
            element = {
              <>
              {!user ? (<Navigate to="/login" replace />) : <LeaderboardView/>}
              </>
            }
        />
        <Route
          path = '/login'
          element = {
            <>
               {user ? (<Navigate to = "/" />) : (<Col md={5}> <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} /> </Col>)}
            </>
          }
        />
            <Route
          path = "/profile"
          element = {
            <>
              {!user ? (<Navigate to="/login" replace />) :
                  (<Col md={7}><ProfileView token={token} user={user} onUpdateUser = {onUpdateUser}/> </Col>)}
            </>
          }

         />
      </Routes>

    </Row>
    </BrowserRouter>
  );
}

export default MainView;
