import checkTokenExpiration from './chechTokenExpiration'
import logout from "./manualLogout";

// Function to automatically log out the user when the access token expires
const autoLogout =  (setMessage, setIsLoggedIn,setIsError) => {
  // Retrieve the access token and refresh token from localStorage
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  // Return if no access token or refresh token is found
  if (!accessToken || !refreshToken){ 
    setMessage("Not login");
    setIsError(true)
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn from localStorage
    return;
  }

  // Check if the access token has expired
  if (checkTokenExpiration(accessToken)) {
    // Access token has expired
    // Show popup to propose re-login
    setMessage('Your session has expired. Please log in again.');
    logout(setMessage,setIsError);
    setIsLoggedIn(false);
    setIsError(true)
    localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn from localStorage
    return;
  }

  // Check if the refresh token has expired
  if (checkTokenExpiration(refreshToken)) {
    // Refresh token has expired
    // Log out the user
    logout(setMessage,setIsError);
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn from localStorage
    return;
  }

  // Function to handle user activity
  const handleActivity = () => {
    // Reset the inactivity timeout
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      // Show popup to propose re-login due to inactivity
      setMessage('You have been inactive for too long. Please log in again.');
      logout(setMessage,setIsError);
      setIsLoggedIn(false);
      setIsError(true)
      localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn from localStorage
    }, 5 * 60 * 1000); // 30 minutes in milliseconds
  };

  // Set up initial inactivity timeout
  let inactivityTimer = setTimeout(() => {
    // Show popup to propose re-login due to inactivity
    setMessage('You have been inactive for too long. Please log in again.');
    logout(setMessage,setIsError);
    setIsLoggedIn(false);
    setIsError(true)
    localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn from localStorage
  }, 5 * 60 * 1000); // 30 minutes in milliseconds

  // Listen for user activity events
  document.addEventListener('mousemove', handleActivity);
  document.addEventListener('keydown', handleActivity);
  document.addEventListener('mousedown', handleActivity);
  
};

export default autoLogout;