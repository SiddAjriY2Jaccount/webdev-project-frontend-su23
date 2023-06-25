import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
import ProfilePage from "pages/Profile.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"
import HomePage from "pages/HomePage";
import SearchPage from "pages/SearchPage";
import BreweryPage from "components/cards/BreweryPage";
import NotFoundPage from "pages/NotFoundPage";

export default function App() {
  const [userContext, setUserContext] = useContext(UserContext);

  const verifyUser = useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(async response => {
      if (response.ok) {
        const data = await response.json()
        setUserContext(oldValues => {
          return { ...oldValues, token: data.token }
        })
      } else {
        setUserContext(oldValues => {
          return { ...oldValues, token: null }
        })
      }
      
      setTimeout(verifyUser, 5 * 60 * 1000)
    })
  }, [setUserContext])

  useEffect(() => {
    verifyUser()
  }, [verifyUser])

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:uid" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/brewery/:bid" element={<BreweryPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}