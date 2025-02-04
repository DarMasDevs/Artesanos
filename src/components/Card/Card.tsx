import { Products } from "@/types/types";
import { HammerIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { data } from "../../../public/data";
import Link from "next/link";
import { routes } from "@/config/routes";

interface Props {
  product: Products;
}

const Card = ({ product }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    console.log("Added to cart:", product.title);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const user = data.users.find((user) => user._id === product.userId);
  const artisanName = user ? user.name : "Desconocido";
  const ArtisanLocation = user
    ? user.address.state + ", " + user.address.city
    : "Desconocido";


  

  return (
    <>
   <Link href={`${routes.product}/${product._id}-${product.title.toLowerCase().replace(/\s+/g, '-')}`}>
    <div
      className="mx-auto w-[290px] overflow-hidden rounded-lg bg-stone-50 shadow-md transition-all duration-300 hover:shadow-xl"
      style={{
        transform: isHovered ? "scale(1.02)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative overflow-hidden">
        <Image
          width={400}
          height={400}
          src={product.image[0]}
          alt={product.title}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute right-4 top-4 z-10">
          <button
            onClick={handleFavoriteToggle}
            className="rounded-full bg-white/80 p-2 backdrop-blur-sm transition-colors duration-300 hover:bg-white"
            aria-label="Add to favorites"
          >
            {isFavorite ? (
              <BsHeartFill className="text-xl text-red" />
            ) : (
              <BsHeart className="text-xl text-red" />
            )}
          </button>
        </div>
        {product.material && (
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1 rounded-full bg-amber/20 px-3 py-1 backdrop-blur-sm">
              <HammerIcon strokeWidth={2} className="text-amber/90" />
              <span className="text-xs font-medium text-amber/75">
                {product.material}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-col items-start">
          <p className="mb-1 text-sm text-gray">{artisanName}</p>
          <p className="text-md mb-2 font-serif font-medium">{product.title}</p>
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="flex w-full items-start gap-2 justify-between mb-2">
            <span className="text-md text-gray-900 font-medium">
              ${product.price}
            </span>
            <span className="text-gray-500 text-sm">{ArtisanLocation}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-amber-600 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-amber hover:text-white"
          >
            <ShoppingCart />
            <span>Agregar al carrito</span>
          </button>
        </div>
      </div>
    </div>
    </Link>
    </>
  );
};

export default Card;
