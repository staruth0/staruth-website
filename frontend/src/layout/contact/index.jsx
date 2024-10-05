import { useState } from 'react';
import { ButtonPrimary } from '../../commons/Button';
import './contact.css';
import SuccessCard from '../../commons/successformcard/SuccessCard';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false)
  
  function setIsSuccessFalse() {
    setIsSuccess(false);

         setName("");
         setEmail("");
         setMessage("");
  }

   const onSubmit = async (event) => {
     event.preventDefault();
     const formData = new FormData(event.target);

     formData.append("access_key", "a98c48cb-cab5-434d-8015-7c1fd7cc737b");

     const object = Object.fromEntries(formData);
     const json = JSON.stringify(object);

     const res = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: json,
     }).then((res) => res.json());

     if (res.success) {
       console.log("Success", res);
       setIsSuccess(true);    

       setTimeout(() => {
         setIsSuccess(false);

       }, 4500)
       
        setName("");
        setEmail("");
        setMessage("");
     }


   };

  return (
    <>
      { isSuccess && <SuccessCard setIsSuccessFalse={setIsSuccessFalse}/>}
      <div className="container contact-form-section">
        <h1>Let's get to work</h1>
        <div className="contact-form-container">
          <p>Tell us about your project. We will be glad to work with you.</p>

          <form action="post" onSubmit={onSubmit}>
            <div className="contact-form-input">
              <label htmlFor="name">Tell us your name</label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact-form-input">
              <label htmlFor="email">You email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="contact-form-input">
              <label htmlFor="message">How can we help you?</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your request"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <ButtonPrimary title="Submit request" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
