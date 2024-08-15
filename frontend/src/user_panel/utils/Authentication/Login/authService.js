import axios from 'axios';
const login = (formData, setMessage, handleApiError, setIsError, setIsLoggedIn) => {
  return new Promise((resolve, reject) => {
   
    axios.post('https://appleproductsbackend.vercel.app/v1/auth/login', formData)
      .then(response => {
        const { tokens, user } = response.data;

        // Check if the user's email is verified
        if (!user.isEmailVerified) {
          const errorMessage = 'Email is not verified. Please verify your email before logging in. You will receive a verification email shortly.';
          setMessage(errorMessage);
          setIsError(true)
          // Send verification email to the user
          axios.post('https://appleproductsbackend.vercel.app/v1/auth/send-verification-email', {}, {
            headers: {
              'Authorization': `Bearer ${tokens.access.token}`
            }
          }).catch(error => {
            setMessage(handleApiError(error, setIsError))
            console.error('Error sending verification email:', error);
          });

          reject('Email is not verified');
          setMessage('Email is not verified');
          setIsError(true)
          return;
        }

        // Store tokens in localStorage
        localStorage.setItem('accessToken', tokens.access.token);
        localStorage.setItem('refreshToken', tokens.refresh.token);

        resolve('Login successful');
        setMessage('Login successfully');
        setIsLoggedIn(true);
        setIsError(false)
      })
      .catch(error => {
        setMessage(handleApiError(error, setIsError));
        reject('Login failed');
        console.error(error);
      });
  });
};

export default login;
