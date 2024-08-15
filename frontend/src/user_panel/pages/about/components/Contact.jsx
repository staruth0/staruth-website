const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="even-columns">
          <div className="text">
            <h2>Contact Us</h2>
            <form action="">
              <div>
                <label htmlFor="" className="required">
                  Name:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name here"
                />
              </div>
              <div>
                <label htmlFor="email" className="required">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email here"
                />
              </div>
              <div>
                <label htmlFor="" className="required">
                  Phone Number:
                </label>
                <input
                  id="number"
                  name="number"
                  type="text"
                  placeholder="Enter phone number here"
                />
              </div>
              <div>
                <label htmlFor="message" className="required">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Enter message here"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>

          <div className="img">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48650.34300167503!2d-74.68174703417225!3d40.350188591012525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sprinceton%20university%20location!5e0!3m2!1sfr!2scm!4v1707557222963!5m2!1sfr!2scm"
              width="600"
              height="450"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
