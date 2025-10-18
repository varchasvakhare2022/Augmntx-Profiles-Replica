import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './context/AuthProvider.jsx'

const client_id = "73527423636-bl17s5c1scbn27aeshlas7saf5kvmpop.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <GoogleOAuthProvider clientId={client_id}>
               <App />
            </GoogleOAuthProvider>
         </AuthProvider>
      </BrowserRouter>
   </React.StrictMode>
)
