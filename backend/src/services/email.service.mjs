import nodemailer from 'nodemailer';
import config from '../config/config.mjs';
import logger from '../config/logger.mjs';

let transport;

transport = nodemailer.createTransport(config.email.smtp);  
transport.verify()
  .then(() => {
    logger.info('Connected to email server');
  })
  .catch((error) => {
    if (error.code === 'EAUTH' && error.responseCode === 535) {
      logger.warn('Authentication error: Incorrect email address or password. Please double-check your email server credentials.');
    } else if (error.code === 'EAUTH' && error.responseCode === 534) {
      logger.warn('Authentication error: Incorrect email address. Please double-check your email server credentials.');
    } else if (error.code === 'EAUTH' && error.responseCode === 535) {
      logger.warn('Authentication error: Incorrect password. Please double-check your email server credentials.');
    } else {
      logger.warn('Connection error: Unable to connect to email server. Make sure you have configured the SMTP options in .env.');
    }
  });


/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text) => {
  const msg = { from: config.email.from, to, subject, html:text };
  await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  try {
    const subject = 'Reset password';
    // const resetPasswordUrl = `https://appleproductsbackend.vercel.app/v1/auth/reset-password?token=${token}`;
    const resetPasswordUrl = `http://localhost:3001/verify-reset/reset-password/new-password?token=${token}&&email=${to}`;
    const text = `Dear user,

    To reset your password, click on this link: 
    
    <a href="${resetPasswordUrl}">${resetPasswordUrl}</a>
    
    If you did not request any password resets, then ignore this email.
    
    Happy exploring!
  
  Best regards,
  Staruth.Tech
    
    `;
  await sendEmail(to, subject, text);
  logger.info('email send succesfully');
  } catch (error) {
    logger.error('an error occured while sending the reset password email:',error)
  }
 
};
// sendResetPasswordEmail('kouetehuawei@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWQ1MDZmZTVhOWUxNTEzZTRlMTViNGMiLCJpYXQiOjE3MDg0NTk3NzQsImV4cCI6MTcwODQ2MTU3NCwidHlwZSI6ImFjY2VzcyJ9.WooZPGZM_PxD0PFbxozfjRZOE03xZ1RqfZNbV_onadg')
/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
  const subject = 'Email Verification';
  const verificationEmailUrl = `http://localhost:3001/verify-reset/verify?token=${token}`;
  const text = `Dear user,
To verify your email, click on this button: 
    <button type="submit">
    ${verificationEmailUrl}
    </button>


If you did not create an account, then ignore this email.

Happy exploring!
  
  Best regards,
  Staruth.Tech
`;
  await sendEmail(to, subject, text);
};

/**
 * Send captivating confirmation email
 * @param {string} to - The recipient's email address.
 * @param {string} token - The confirmation token generated for the user.
 * @returns {Promise} - A Promise that resolves when the email is sent successfully.
 */
const sendEmailVerificationConfirmationEmail = async (to, token) => {
    // Subject of the email
    const subject = 'Email Address Verification Success';
    // Email body text
    const text = `Hello there!
  
  Thank you for joining our community. We're thrilled to have you on board! 
  
  By verifying your email address, you have gain access to exclusive features and updates. If you didn't create an account with us, you can safely ignore this email.
  
  Happy exploring!
  
  Best regards,
  Staruth.Tech`;
  
    // Send the email using the provided email service
    await sendEmail(to, subject, text);
  };
  

// sendVerificationEmail('kouetehuawei@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWQ1MDZmZTVhOWUxNTEzZTRlMTViNGMiLCJpYXQiOjE3MDg0NTk3NzQsImV4cCI6MTcwODQ2MTU3NCwidHlwZSI6ImFjY2VzcyJ9.WooZPGZM_PxD0PFbxozfjRZOE03xZ1RqfZNbV_onadg')
export {
  transport,
  sendEmailVerificationConfirmationEmail,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
};
