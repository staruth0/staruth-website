import './contact.css'


const Contact = () => {
  return (
    <div   className="container contact-form">
           <h1>Let’s get to work. 
           Tell us about your project
           </h1>

           <form action="" className="form">
            <div>
                <label htmlFor="name">Tell Us your Name</label>
                <input type="text" placeholder="Name" />
            </div>

            <div>
                <label htmlFor="email">Your Email</label>
                <input type="text" placeholder="Email" />
            </div>

            <div>
                <label htmlFor="name">Tell Us your Name</label>
                <textarea name="request" id="">How can we help you</textarea>
            </div>
           </form>
    </div>
  );
};

export default Contact;
