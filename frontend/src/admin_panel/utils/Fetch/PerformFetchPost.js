const performFetchPost = (url, data) => {
  return fetch(`https://appleproductsbackend.vercel.app/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log('Response:', responseData);
      // Handle the response data here
      alert(`New Category Added: ${data.categoryName}`);
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle any errors that occurred during the request
    });
};

export default performFetchPost;
