import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Scrollbar, A11y } from "swiper/modules";
import ProductCardComponent from "./ProductCard";

const PopularComponent = ({blurBackground}) => {
	const data = [
		{
			_id: 1,
			name: "iPhone 15 Pro",
			price: "$999",
			image: require("../../../assets/images/product_images/iphone 15.png"),
		},
		{
			_id: 2,
			name: "Ultra Watch 2",
			price: "$399",
			image: require("../../../assets/images/product_images/watch.png"),
		},
		{
			_id: 3,
			name: "AirPods Max",
			price: "$499",
			image: require("../../../assets/images/product_images/airpods.png"),
		},
		{
			_id: 4,
			name: "iMac",
			price: "$599",
			image: require("../../../assets/images/product_images/iMac.png"),
		},

		{
			_id: 5,
			name: "Homepod Mini",
			price: "$399",
			image: require("../../../assets/images/product_images/homepod.png"),
		},

		{
			_id: 6,
			name: "MacBook Pro",
			price: "$1,399",
			image: require("../../../assets/images/product_images/MacBookPro.png"),
		},
	];

	const [productsPerView, setProductsPerView] = useState(0);
	const [gapBetweenProducts, setGapBetweenProducts] = useState(70)
	const [maxSizeofProduct, setMaxSizeofProduct] = useState(236);

	const HandleResize = ()=>{
		const mediaQuery = window.matchMedia('(max-width: 500px)');

		if(mediaQuery.matches){
			setGapBetweenProducts(30);
			setMaxSizeofProduct(150)
		}

		var productNumber = Math.floor(
			(0.9 * window.innerWidth -
				(Math.floor((0.9 * window.innerWidth) / maxSizeofProduct + 0.3) - 1) * gapBetweenProducts) /
				maxSizeofProduct +
				0.3
		);
		setProductsPerView(productNumber);
	}

	window.addEventListener("resize", () => {
		HandleResize();
	});

	useEffect(()=>{
		const mediaQuery = window.matchMedia('(max-width: 500px)');

		if(mediaQuery.matches){
			setGapBetweenProducts(30);
			setMaxSizeofProduct(150)
		}

		var productNumber = Math.floor(
			(0.9 * window.innerWidth -
				(Math.floor((0.9 * window.innerWidth) / maxSizeofProduct + 0.3) - 1) * gapBetweenProducts) /
				maxSizeofProduct +
				0.3
		);
		setProductsPerView(productNumber);
	},[gapBetweenProducts,maxSizeofProduct])

	return (
		<div className={blurBackground?"blur-background main-popular-container":"main-popular-container"}>
			<h1 className="popular-heading">Popular on iStore</h1>
			<div className="popular-products-container">
				<Swiper
					modules={[Navigation, Scrollbar, A11y, FreeMode]}
					spaceBetween={gapBetweenProducts}
					slidesPerView={productsPerView}
					navigation={true}
					freeMode={true}
					scrollbar={{ draggable: true }}>
					{data.map((product) => (
						<SwiperSlide>
							<ProductCardComponent key={product._id} data={product} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default PopularComponent;
