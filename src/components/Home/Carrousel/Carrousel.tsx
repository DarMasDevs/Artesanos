"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Products } from "@/types/types";
import { data } from "../../../../public/data";
import Card from "../../Card/Card";
import { settings } from "./settings";
import Link from "next/link";

type Props = {
  categoryName: string;
};

const Carrousel = ({ categoryName }: Props) => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const getProductsbyCategory = async () => {
      const productsbyCategory = data.products.filter(
        (product) => product.category === categoryName,
      );
      setProducts(productsbyCategory);
    };
    getProductsbyCategory();
  }, [categoryName]);

  return (
    <div className="slider-container bg-cream">
      <div className="flex justify-between items-center border-b-2 border-b-brown px-8 m-4 w-[95%] mx-auto">
        <div className="text-3xl font-bold text-brown px-2 text-center font-serif">
          {categoryName.toUpperCase()}
        </div>
        <div>
          <Link href={`/store/${categoryName}`}>
            <p className="font-bold text-md bg-secondary text-brown px-4 py-2 rounded transition ease-in-out hover:bg-amber font-serif">Ver mas</p>
          </Link>
        </div>
      </div>
      <div className="m-2 min-h-[209px] text-center px-2">
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
  );
};

export default Carrousel;
