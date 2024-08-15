// Function to refresh the access token using the refresh token
const refreshToken = async () => {
    // Retrieve the refresh token from localStorage
    const refreshToken = localStorage.getItem('refreshToken');
    // Return null if no refresh token is found
    if (!refreshToken) return null;
  
    try {
      // Send a request to the server to refresh the tokens
      const response = await axios.post('https://appleproductsbackend.vercel.app/v1/auth/refresh-token', { refreshToken });
      // Extract the new access token from the response
      const { access } = response.data.tokens;
      // Store the new access token in localStorage
      localStorage.setItem('accessToken', access.token);
      // Return the new access token
      return access.token;
    } catch (error) {
      // Log any errors that occur during token refresh
      console.error('Error refreshing token:', error);
      // Return null if token refresh fails
      return null;
    }
  };

  export default refreshToken;