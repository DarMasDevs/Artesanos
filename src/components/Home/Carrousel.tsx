"use client";
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Products } from '@/types/types';
import { data } from '../../../public/data';
import Card from '../Card/Card';

type Props = {
    categoryName : string 
}

const Carrousel = ({categoryName} : Props) => {

   const [products, setProducts] = useState<Products[]>([])

 
   useEffect(() => {
    const getProductsbyCategory = async () => {
        const productsbyCategory = data.products.filter((product) => product.category === categoryName)
           setProducts(productsbyCategory)
      }
        getProductsbyCategory()
    }, [categoryName])


   const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};



  return (
    <div className="slider-container bg-cream">
            <div className="bg-amber p-5 text-2xl text-brown text-bold text-center border-4 m-2 border-brown">
                {categoryName}
            </div>
            <div className="text-center min-h-[209px] m-2">
                {products.length === 0 ? (
                    "Proximamente nuevos productos artesanales..."
                ) : (
                    <Slider {...settings}>
                        {products.map((product, index) => {
                            return <Card key={index} product={product} />;
                        })}
                    </Slider>
                )}
            </div>
        </div>
  )
}

export default Carrousel