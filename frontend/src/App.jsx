 import { useEffect, useState } from "react";
import { fetchCoffees, createCoffee } from "./utils/apis";
import { useNavigate } from "react-router-dom";
import "./App.css";
import reactImg from "./assets/react.svg";

 
 // App.js

import { useAuth } from "react-oidc-context";
import Home from "./Home";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "6nget8s6bjaisr26vf5shmk2fl";
    const logoutUri = "http://localhost:5173/";
    const cognitoDomain = "https://us-east-1zphzmx0rk.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        

        <button onClick={() => auth.removeUser()}>Sign out</button>

        <Home/>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;