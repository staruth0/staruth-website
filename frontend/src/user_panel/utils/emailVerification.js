// emailVerification.js

document.addEventListener("DOMContentLoaded", function () {
  const verificationContainer = document.querySelector(".verification-container");
  const verificationMessage = document.querySelector(".verification-message");
  const verificationButton = document.querySelector(".verification-button");

  // Extract the token from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  if (!token) {
    verificationMessage.textContent = "Invalid verification link. Please try again.";
  }
  console.log(token)
  verificationButton.addEventListener("click", () => {
    // Send verification request using fetch with method POST
    fetch(`https://appleproductsbackend.vercel.app/v1/auth/verify-email?token=${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: token }) // Assuming the backend expects a JSON object with a token property
    })
    .then(response => {
      // Handle response
      if (response.status === 200) {
        // Email verified successfully
        verificationMessage.textContent = "Email verified successfully!";
        setTimeout(() => {
          // Redirect the user to the desired page after email verification
          window.location.href = "https://user-panel-lac.vercel.app/"; // Example: Redirect to the home page
        }, 3000); // Redirect after 3 seconds
      } else {
        // Email verification failed
        verificationMessage.textContent = "Email verification failed. Please try again.";
      }
    })
    .catch(error => {
      // Handle error
      console.error("Error:", error);
      verificationMessage.textContent = "An error occurred. Please try again later.";
    });
  });
});
