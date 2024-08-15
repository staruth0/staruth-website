import { useEffect, useState } from 'react';

const InactivityTimeout = ({ timeoutPeriod }) => {
  const [logoutTimer, setLogoutTimer] = useState(null);

  useEffect(() => {
    // Start the logout timer when the component mounts or when the user logs in
    startLogoutTimer();

    // Clear the timer when the component unmounts or when the user logs out
    return () => {
      clearTimeout(logoutTimer);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const resetLogoutTimer = () => {
    // Reset the timer whenever there is user activity
    clearTimeout(logoutTimer);
    startLogoutTimer();
  };

  const startLogoutTimer = () => {
    // Start a new timer for the specified timeout period
    const timer = setTimeout(logoutUser, timeoutPeriod);
    setLogoutTimer(timer);
  };

  const logoutUser = () => {
    // Perform logout actions, such as clearing tokens and redirecting to the login page
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login'; // Redirect to the login page
  };

  // Event listeners for user activity (e.g., mouse movement, key presses)
  useEffect(() => {
    const handleUserActivity = () => {
      resetLogoutTimer();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return null; // This component doesn't render anything
};

export default InactivityTimeout;
