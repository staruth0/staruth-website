// Perform a GET request
const performFetchGet = (url) => {
  return fetch(`https://appleproductsbackend.vercel.app/${url}`)
    .then((response) => response.json())
    .then((responseData) => {
      // Handle the response data here
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle any errors that occurred during the request
    });
};

export default performFetchGet;
