import { ButtonPrimary } from "../../commons/Button";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container contact-form-section">
      <h1>Let's get to work</h1>
      <div className="contact-form-container">
        <div className="contact-form-caption">
          <p>Tell us about your project. We will be glad to work with you.</p>
        </div>

        <form>
          <div className="contact-form-input">
            <label htmlFor="name">Tell us your name</label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>

          <div className="contact-form-input">
            <label htmlFor="email">Your email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div className="contact-form-input">
            <label htmlFor="message">How can we help you?</label>
            <textarea
              id="message"
              placeholder="Your request"
            />
          </div>

          <ButtonPrimary title="Submit request" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
