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
      <div className="flex justify-between items-center">
        <div className="text-bold m-8 border-4 border-brown bg-amber p-5 text-center text-2xl text-brown">
          {categoryName}
        </div>
        <div>
          <Link href={`/store/${categoryName}`}>
            <p className="text-center text-2xl text-brown">Ver todos</p>
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
