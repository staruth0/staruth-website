const handleApiError = (error,setIsError) => {
    console.error(error);
    if (error.response && error.response.data && error.response.data.message) {
        setIsError(true);
        return error.response.data.message
    } else if (error.message) {
        setIsError(true);
        return error.message
    } else {
        setIsError(true);
        return 'An error occurred';
        
    }
    
};

export default handleApiError