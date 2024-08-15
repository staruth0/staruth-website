const getUserNamePart = (fullName, part, setMessage, setIsError, handleApiError) => {
  try {
    if (!fullName) {
      setMessage('Name not provided');
      setIsError(true);
      return null;
    }
  
    const parts = fullName.split(' ');
  
    if (part === 'first') {
      return parts[0];
    } else if (part === 'last') {
      return parts[parts.length - 1];
    } else if (part === 'middle') {
      return parts.slice(1, -1).join(' ');
    } else {
      setMessage('Invalid name part specified');
      setIsError(true);
      return null;
    }
  } catch (error) {
    // Handle any unexpected errors
    const errorMessage = handleApiError(error);
    setMessage(errorMessage);
    setIsError(true);
    return null;
  }
};

export default getUserNamePart;