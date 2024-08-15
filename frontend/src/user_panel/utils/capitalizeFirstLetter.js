const capitalizeFirstLetter = (str, setMessage, setIsError, handleApiError) => {
    try {
      if (!str) {
        setMessage('String not provided');
        setIsError(true);
        return null;
      }
    
      return str.replace(/\b\w/g, (char) => char.toUpperCase());
    } catch (error) {
      // Handle any unexpected errors
      const errorMessage = handleApiError(error);
      setMessage(errorMessage);
      setIsError(true);
      return null;
    }
  };
  
  export default capitalizeFirstLetter;