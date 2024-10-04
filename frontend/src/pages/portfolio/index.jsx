import Card from '../../commons/Porfolio_card';
import portfolioImage1 from '../../assets/images/applewatch.jpg';

const PortfolioPage = () => {
  // Example portfolios
  const portfolios = [
    { id: 1, imageURL: portfolioImage1 },
    { id: 2, imageURL: portfolioImage1 },
    { id: 3, imageURL: portfolioImage1 },
    { id: 4, imageURL: portfolioImage1 },
  ];

  return (
    <div className="container">
      {portfolios.map(portfolio => (
        <Card key={portfolio.id} imageURL={portfolio.imageURL} portfolioId={portfolio.id} />
      ))}
    </div>
  );
};

export default PortfolioPage;
