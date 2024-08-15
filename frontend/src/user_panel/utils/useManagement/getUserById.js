import backendBaseURL from "../backendBaseURL";
import getUserIdFromToken from "./getIdFromToken";

const fetchUserData = async (setMessage, setIsError, handleApiError) => {
  try {
    const userId = await getUserIdFromToken(setMessage, setIsError, handleApiError);

    if (userId) {
      const response = await backendBaseURL.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      return response.data; // This should contain user data
    } else {
      // Handle the case where getUserIdFromToken returns null
      return null;
    }
  } catch (error) {
    // Handle errors from getUserIdFromToken or axios.get
    const errorMessage = handleApiError(error, setIsError);
    setMessage(errorMessage);
    console.error('Error fetching user data:', error);
    return null;
  }
};

export default fetchUserData;
