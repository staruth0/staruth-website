import axios from 'axios';

// Function to log out the user by clearing tokens from localStorage and redirecting to the login page
const logout = async (setMessage,setIsError) => {
  try {
    // Get refreshToken from localStorage
    const refreshToken = localStorage.getItem('refreshToken');
    
    // Make a request to the backend to logout using the refreshToken
    await axios.post('https://appleproductsbackend.vercel.app/v1/auth/logout', { refreshToken });
    
    // Remove tokens from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setMessage('Logout successfully')
    setIsError(false)
    // Redirect to the login page
  } catch (error) {
    setMessage('unable to logout, please try again')
    setIsError(true)
    console.error('Logout failed:', error);

  }
};

export default logout;
