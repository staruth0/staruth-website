import React ,{useRef, useEffect}from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,A11y } from 'swiper/modules';
import SlideContent from "./SlideContent";

const HeroComponent = ({setHeight, blurBackground}) => {

  const data=[
    {
      _id: 1,
      image: [require('../../../assets/images/landing.png')],
      category: "Watch",
      model: "SERIES 9",
      caption: "The next level adventure"
    },
    {
      _id: 2,
      image: [require('../../../assets/images/landing-1.png')],
      category: "Vision",
      model: "PRO",
      caption: "Welcome to spacial computing"
    },
    {
      _id: 3,
      image: [require('../../../assets/images/landing-2(0).png'), require('../../../assets/images/landing-2(1).png'), require('../../../assets/images/landing-2(2).png'), require('../../../assets/images/landing-2(3).png'), require('../../../assets/images/landing-2(4).png')],
      category: "Airpods",
      model: "MAX",
      caption: "Sound beyond just what you hear",
      varients: [require('../../../assets/images/finish-pink-202011.png'), require('../../../assets/images/finish-skyblue-202011.png'), require('../../../assets/images/finish-spacegray-202011.png'), require('../../../assets/images/finish-green-202011.png'), require('../../../assets/images/finish-silver-202011.png')]
    }
  ]

  const heroRef = useRef(null);

  useEffect(() => {
    const heroHeight = heroRef.current.getBoundingClientRect().height;
    setHeight(heroHeight);
    console.log(heroHeight);
  }, [setHeight]);

	return <div ref={heroRef} className={blurBackground?"blur-background main-hero-container":"main-hero-container"}>
        <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
     { data.map((HeroSlide)=>
        (<SwiperSlide><SlideContent key={HeroSlide._id} data={HeroSlide}/></SwiperSlide>)
     )}
    </Swiper>
    </div>;
};

export default HeroComponent;
