import React, { useState } from 'react';

const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const toggleDisplay = (i) => {
    setSelected(i === selected ? null : i);
  };

  const Faqs = [
    {
      question: 'How can I contact customer support?',
      answer:
        'You can contact our customer support team through email, phone, or live chat. Visit our Contact Us page for more information.',
    },
    {
      question: 'What are your customer support hours?',
      answer:
        'Our customer support team is available from Monday to Friday, 9:00 AM to 5:00 PM (EST).',
    },
    {
      question:
        'How long does it take to get a response from customer support?',
      answer:
        'We strive to respond to all customer inquiries within 24 hours. However, during busy periods, it may take slightly longer.',
    },
    {
      question: 'Can I return or exchange a product?',
      answer:
        'Yes, you can return or exchange a product within 30 days of purchase. Please refer to our Returns and Exchanges policy for more information.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer international shipping to select countries. Please check our Shipping page for more details on eligible countries and shipping rates.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept major credit cards, PayPal, and Apple Pay as payment methods for online purchases.',
    },
  ];

  return (
    <div className="faqs-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs-container">
        {Faqs.map((Faq, index) => (
          <div
            className="faqs"
            key={index}
            onClick={() => {
              toggleDisplay(index);
            }}
          >
            <div className={`question ${index === selected ? ' active' : ''}`}>
              <h3>{Faq.question}</h3>
              <i className="bx bx-chevron-down"></i>
            </div>
            <p className={`answer ${index === selected ? ' active' : ''}`}>
              {Faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
