 
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ItemDetails from "./ItemDetails";



import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_zpHZMX0rk",
  client_id: "6nget8s6bjaisr26vf5shmk2fl",
  redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "email openid phone",
};


createRoot(document.getElementById('root')).render(
    <AuthProvider {...cognitoAuthConfig}> 
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  </Router>
  </AuthProvider>
)