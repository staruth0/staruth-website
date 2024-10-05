import {useEffect, useState} from 'react';
import ServicesHeroSection from './components/hero_section/hero';
import OurServicesSection from './components/our_services/services';
import './services.css';
import axios from 'axios'

const ServicesPage = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://staruthwebsite-api.vercel.app/services/getServices");
      setServices(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="service-page-container">
      {loading ? <p>Loading...</p> : (
        <>
          <ServicesHeroSection />
          <OurServicesSection services={services} />
        </>
      )}
    </div>
  );
}
export default ServicesPage