// Perform a DELETE request
const performFetchDelete = (url) => {
  return fetch(`https://appleproductsbackend.vercel.app/${url}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log('Response:', responseData);
      // Handle the response data here
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle any errors that occurred during the request
    });
};

export default performFetchDelete;
