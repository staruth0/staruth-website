import parseToken from "../Logout/DecodeTokenGetExpTime";
const isLoggedIn = () => {
    // Check if access token exists in local storage
    const accessToken = localStorage.getItem('accessToken');
  
    if (!accessToken) {
      return false; // Access token doesn't exist, user is not logged in
    }
  
    // Decode the access token to extract the expiration time
    const decodedToken = parseToken(accessToken);
  
    // Check if the token is expired
    const currentTime = Date.now() / 1000; // Convert current time to seconds
    if (decodedToken.exp < currentTime) {
      return false; // Token is expired, user is not logged in
    }
  
    return true; // Access token exists and is not expired, user is logged in
  };

  export default isLoggedIn