import React, { createContext, useState, useContext, useEffect } from 'react';
import login from './Login/authService.js';
import autoLogout from './Logout/autoLogout.js';
import manualLogout from './Logout/manualLogout.js';
import handleApiError from '../handleApiError.js';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    // Initialize  states from localStorage on component mount
    useEffect(() => {
      if (Boolean(localStorage.getItem('isLoggedIn'))) {
        setIsLoggedIn(Boolean(localStorage.getItem('isLoggedIn')));
      }
      if (Boolean(localStorage.getItem('isError'))) {
        setIsLoggedIn(Boolean(localStorage.getItem('isError')));
      }
      if (Boolean(localStorage.getItem('message'))) {
        setIsLoggedIn(Boolean(localStorage.getItem('message')));
      }
        
    }, []);

    // Start auto-logout mechanism after successful login
    useEffect(() => {
        if (isLoggedIn) {
            autoLogout(setMessage,setIsLoggedIn,setIsError);
        }
    }, [isLoggedIn]);

    // Update localStorage when isLoggedIn state changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);
  useEffect(() => {
    localStorage.setItem('isError', isError);
  }, [isError]);

  useEffect(() => {
    localStorage.setItem('message', message);
  }, [message]);

    const handleLogin = async (email, password, redirectTo,setMessage,setIsError) => {
      try {
        
        await login({ email, password }, setMessage, handleApiError, setIsError, setIsLoggedIn);
        setIsLoggedIn(true);
        setIsError(false)
        window.location.href = redirectTo; // Redirect to the specified URL after successful login
      } catch (error) {
        setIsError(true);
        console.log('login error');
        console.log(handleApiError(error, setIsError));
      }
    };
    

    const handleLogout = async (setMessage,setIsError,redirectTo) => {
        try {
            await manualLogout(setMessage,setIsError);
            setIsLoggedIn(false);
            setIsError(false)
        } catch (error) {
          setIsError(true)
            console.error('logout error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn,isError, message, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
