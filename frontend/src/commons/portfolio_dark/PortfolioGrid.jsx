import PortfolioCard from './PortfolioCard';
import './portfolio.css';

const PortfolioGrid = ({ items }) => {
  return (
    <div className="portfolio-grid">
      {items.map((item, index) => (
        <PortfolioCard key={index} {...item} />
      ))}
    </div>
  );
};

export default PortfolioGrid;
