import axios from 'axios';
import backendBaseURL from '../backendBaseURL';
const getUserIdFromToken = async (setMessage, setIsError, handleApiError) => {
  try {
    // Get access token from local storage
    const accessToken = localStorage.getItem('accessToken');
    // Get refresh token from local storage
    const refreshToken = localStorage.getItem('refreshToken');

    // Make sure access token is available
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    // Make API call to get user ID from access token
    const response = await backendBaseURL.post('/auth/token/userId', { token: refreshToken, tokenType: 'refresh' }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    // Handle response
    if (!response.data.userId) {
      throw new Error('Failed to get user ID');
    }

    // Return user ID
    return response.data.userId;
  } catch (error) {
    // Handle errors
    const errorMessage = handleApiError(error, setIsError);
    setMessage(errorMessage);
    console.error('Error fetching user ID:', error);
    return null;
  }
};

export default getUserIdFromToken;
