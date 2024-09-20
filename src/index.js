import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from './context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ChakraProvider>
      <GoogleOAuthProvider clientId='372209983605-b2tthqncphmrf4i20c6m01g38hl1mgba.apps.googleusercontent.com'>
       <AuthContextProvider>
          <App/>
       </AuthContextProvider>
      </GoogleOAuthProvider>
     </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

