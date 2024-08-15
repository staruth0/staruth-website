import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorySkeleton from '../../../commons/skeletons/ProductCategorySkeleton';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductCatalogue = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch('https://appleproductsbackend.vercel.app/v1/category/')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <section id="product-catalogue-about">
      <div className="container">
        <h2>Explore Our Product Catalogue</h2>
        <p>
          Discover a world of Apple products at iStore. From the latest iPhone
          models to powerful MacBooks, iPads, and Apple Watches, our product
          range covers all your technology needs.
        </p>

        {categories ? (
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={32}
            slidesPerView="auto"
            navigation
            scrollbar={{ draggable: true }}
            className="product-container"
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index} className="product-card">
                <div className="product-image">
                  <img
                    src={
                      'https://i5.walmartimages.com/seo/Used-Apple-MacBook-Pro-16-inch-Apple-M1-Pro-chip-with-10-core-CPU-and-16-core-GPU-16GB-RAM-1TB-SSD-Silver_21ee3404-b74f-4348-9bc6-0eed1d8021c6.37f01f5296c070418c602ecef04b3a81.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' ||
                      category.featuredImage
                    }
                    alt=""
                    width="230px"
                    height="256px"
                  />
                </div>
                <h3 className="name">{category.categoryName}</h3>
                <div className="btn-container">
                  <Link
                    to={`/${category.categoryName
                      .toLowerCase()
                      .replace(/\s/g, '')}`}
                    className="link"
                  >
                    <span>Learn More</span>
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ProductCategorySkeleton className={'overflow'} />
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;
