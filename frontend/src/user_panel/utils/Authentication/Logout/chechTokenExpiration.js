import parseToken from "./DecodeTokenGetExpTime";
const checkTokenExpiration = (accessToken) => {
    // Decode the token to get the expiration time
    const decodedToken = parseToken(accessToken);
    // Convert expiration time to milliseconds
    const expirationTime = decodedToken.exp * 1000;
    // Get the current time
    const currentTime = Date.now();
    // Check if the token has expired
    return expirationTime < currentTime;
  };

  export default checkTokenExpiration;