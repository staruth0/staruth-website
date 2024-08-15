// Function to parse and decode a JWT token
const parseToken = (token) => {
    try {
      // Split the token and decode the payload
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      // Log any errors that occur during token parsing
      console.error('Error parsing token:', error);
      // Return an empty object if parsing fails
      return {};
    }
  };

  export default parseToken;