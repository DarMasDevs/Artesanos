import { Products } from "@/types/types";
import {  HammerIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { data } from "../../../public/data";

interface Props {
    product: Products;
}

const Card = ({product}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);


  const handleAddToCart = () => {
    console.log("Added to cart:", product.title);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const user = data.users.find(user => user._id === product.userId);
  const artisanName = user ? user.name : "Desconocido";
  const ArtisanLocation = user ? user.address.state + ", " + user.address.city : "Desconocido";

  return (
    <div
      className="w-[290px]  mx-auto bg-stone-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      style={{
        transform: isHovered ? "scale(1.02)" : "scale(1)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <Image
        width={400}
        height={400}
          src={product.image[0]}
          alt={product.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleFavoriteToggle}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300"
            aria-label="Add to favorites"
          >
           {isFavorite ?   <BsHeartFill className="text-xl text-red" />  : <BsHeart className="text-xl text-red" />}
          </button>
        </div>
        {product.material && (
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1 bg-amber/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <HammerIcon strokeWidth={2} className="text-amber/90" />
              <span className="text-xs font-medium text-amber/75">{product.material}</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4 items-start">
        <p className="text-sm text-gray mb-1">{artisanName}</p>
          <p className="font-serif text-md font-medium text-gray mb-2">
            {product.title}
          </p>
        </div>

        <div className="flex flex-col items-center justify-between">
        <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-900">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">{ArtisanLocation}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber  px-4 py-2 rounded-full transition-colors duration-300 text-sm font-medium "
          >
            <ShoppingCart />
            <span>Agregar al carrito</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;