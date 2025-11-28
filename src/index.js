import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';


const CLIENT_ID = "1076848237254-lkjvusnj4i26kghh1k5rrelj725i87t7.apps.googleusercontent.com"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
        
       
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

