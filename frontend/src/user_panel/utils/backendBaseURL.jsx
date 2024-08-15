import axios from 'axios';

// Create an instance of Axios with a base URL
const backendBaseURL = axios.create({
  baseURL: 'https://appleproductsbackend.vercel.app/v1', //base url for backend
});

export default backendBaseURL;