import React, { useState } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Impact from './components/Impact';
import Mission from './components/Mission';
import NewsLetter from './components/NewsLetter';
import Partners from './components/Partners';
import ProductCatalogue from './components/ProductCatalogue';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Workplace from './components/Workplace';
import RootLayout from '../../layout/RootLayout';

const Cart = () => {
  const [blurBackground, setBlurBackground] = useState(false);
  return (
    <>
      <div className="jim">
        {/* hero */}
        <Header />

        {/* mission and vision */}
        <Mission />

        {/* product catalogue */}
        <ProductCatalogue />

        {/* workplace */}
        <Workplace />

        {/* our team */}
        <Team />

        {/* impact */}
        <Impact />

        {/* testimonials */}
        <Testimonials />

        {/* partners */}
        <Partners />

        {/* newsletter */}
        <NewsLetter />

        {/* contact form */}
        <Contact />
      </div>
      {/* rootLayout*/}
      <RootLayout heroHeight={0} setBlurBackground={setBlurBackground} />
    </>
  );
};

export default Cart;
