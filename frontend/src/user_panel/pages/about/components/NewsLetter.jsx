import React from 'react';

const NewsLetter = () => {
  return (
    <section id="news-letter">
      <div className="container">
        <h3>Subscribe To Receive News and Updates From iSTORE</h3>
        <form action="">
          <input name="email" placeholder="Enter your email" type="text" />
          <button type="submit" className="btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
