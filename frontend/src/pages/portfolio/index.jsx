import Card from "../../commons/Porfolio_card";
import portfolioImage1 from '../../assets/images/applewatch.jpg'
import Contact from "../../layout/contact";

const PortfolioPage = () => {
  return (
    <div className="container">
      <Card imageURL={portfolioImage1}/>
      <Card imageURL={portfolioImage1}/>
      <Card imageURL={portfolioImage1}/>
      <Card imageURL={portfolioImage1}/>
    </div>
  );
};

export default PortfolioPage;
