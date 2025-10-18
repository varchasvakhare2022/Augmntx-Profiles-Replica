import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useState } from 'react';

const LogInGoogle = () => {
   const [userData, setUserData] = useState({})

   const sendGoogleData = async () => {
      try {
         const res = await axios.post('https://augmntx.com/api/google',
            userData,
            {
               headers: { "Content-Type": "application/json" }
            }
         )
         console.log(res)
      } catch (err) {
         console.log(err)
      }
   }

   const onSuccess = (credentialResponse) => {
      const decodedCredentialResponse = jwt_decode(
         credentialResponse.credential
      )
      setUserData(decodedCredentialResponse)
      console.log(userData);
      sendGoogleData()
   }

   const onError = () => {
      console.log('Login Failed');
   }

   return (
      <GoogleLogin
         theme='filled_blue'
         onSuccess={onSuccess}
         onError={onError}
      />
   );
};

export default LogInGoogle;
