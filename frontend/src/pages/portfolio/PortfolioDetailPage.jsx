import { useParams } from 'react-router-dom';
import './portfolio.css'

const PortfolioDetailPage = () => {
  const { id } = useParams(); // Get portfolio ID from URL

  // You can fetch or retrieve the portfolio data using the `id`
  const portfolioData = {
    1: {
      title: 'Apple Niche Store',
      description: 'A fully functional e-commerce platform designed specifically for Apple products, offering seamless user experience and multiple payment options. Built with React, Node.js, and integrated with a custom CMS for easy product management.',
      image: '/path-to-image.jpg',
    },
    2: {
      title: 'E-Commerce Website for Fashion Brand',
      description: 'An online fashion retail store providing customers with an easy-to-navigate interface, secure payment gateway, and advanced product filtering options. The platform features a custom-built shopping cart, order tracking system, and dynamic product pages built using Next.js and MongoDB.',
      image: '/path-to-another-image.jpg',
    },
    3: {
      title: 'House Management Application',
      description: 'A project management ERP for construction companies to manage projects, resources, and timelines. The app allows project managers to track the progress of construction, allocate resources, and communicate with contractors. Built using Django, React, and PostgreSQL.',
      image: '/path-to-another-image.jpg',
    },
    4: {
      title: 'Language Translator App',
      description: 'A mobile application that translates text, voice, and images between multiple languages in real-time. Developed using React Native, this app includes voice recognition, OCR (Optical Character Recognition) for text in images, and support for over 50 languages.',
      image: '/path-to-another-image.jpg',
    },
    5: {
      title: 'Personal Finance Tracker',
      description: 'A web application designed to help users manage their finances by tracking income, expenses, and setting up budget plans. The app provides insightful analytics and reports, enabling users to make informed financial decisions. Built using React, Redux, and Firebase.',
      image: '/path-to-another-image.jpg',
    },
    6: {
      title: 'Restaurant Booking System',
      description: 'An online restaurant reservation platform allowing users to search, book, and manage their dining experiences. The system features real-time table availability, custom restaurant profiles, and automated booking confirmation. Built with Node.js, Express, and integrated with Stripe for payments.',
      image: '/path-to-another-image.jpg',
    },
    7: {
      title: 'Fitness Tracker App',
      description: 'A mobile fitness tracker app that monitors and records user workouts, health metrics, and sleep patterns. The app provides real-time feedback and personalized workout suggestions based on user progress. Developed using React Native and integrated with wearables for data synchronization.',
      image: '/path-to-another-image.jpg',
    },
  };
  

  const portfolio = portfolioData[id]; // Fetch data based on id

  if (!portfolio) {
    return <div>Portfolio not found!</div>;
  }

  return (
    <div className="portfolio-detail">
      <h1>{portfolio.title}</h1>
      <p>{portfolio.description}</p>
      <img src={portfolio.image} alt={portfolio.title} />
    </div>
  );
};

export default PortfolioDetailPage;
