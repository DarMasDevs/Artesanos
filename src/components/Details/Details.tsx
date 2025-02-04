"use client";
import { Products } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaBox,
  FaChevronLeft,
  FaChevronRight,
  FaMinus,
  FaPlus,
  FaRegStar,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { FaStairs } from "react-icons/fa6";

type Props = {
  product: Products;
};

const Details = ({ product }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.image.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.image.length - 1 ? 0 : prev + 1,
    );
  };

  const handleQuantityChange = (type: string) => {
    if (type === "increment" && quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="container md:mt-14 mx-auto px-4 py-8 z-50000">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="group relative">
            <Image
              width={500}
              height={500}
              src={product.image[currentImageIndex]}
              alt={`Product view ${currentImageIndex + 1}`}
              className="h-[500px] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2"
            >
              <FaChevronLeft className="text-gray-800" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2"
            >
              <FaChevronRight className="text-gray-800" />
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto">
            {Array.isArray(product.image)
              ? product.image.map((imgSrc, index) => (
                  <Image
                    key={index}
                    src={imgSrc}
                    width={96}
                    height={96}
                    alt={`Thumbnail ${index + 1}`}
                    className={`h-24 w-24 cursor-pointer rounded object-cover ${index === currentImageIndex ? "ring-brown-600 ring-2" : ""}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))
              : null}
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <h1 className="text-gray-800 text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center space-x-4">
            <span className="text-brown-600 text-2xl font-bold">
              ${product.price}
            </span>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) =>
                index < Math.floor(product.rating) ? (
                  <FaStar key={index} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={index} className="text-yellow-400" />
                ),
              )}
              <span className="text-gray-600 ml-2">({product.rating})</span>
            </div>
          </div>

          <div
            className={`inline-flex items-center space-x-2 rounded-full px-4 py-2 ${product.stock > 5 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
          >
            <FaBox />
            <span>{product.stock > 5 ? "In Stock" : "Low Stock"}</span>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-gray-600 mb-2 flex items-center space-x-2">
              <span className="font-semibold">Category:</span>
              <span>{product.category}</span>
            </div>
            <div className="text-gray-600 flex items-center space-x-2">
              <span className="font-semibold">Material:</span>
              <span>{product.material}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-lg border">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="hover:bg-gray-100 p-2"
                disabled={quantity <= 1}
              >
                <FaMinus className="text-gray-600" />
              </button>
              <span className="w-12 px-4 py-2 text-center">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="hover:bg-gray-100 p-2"
                disabled={quantity >= product.stock}
              >
                <FaPlus className="text-gray-600" />
              </button>
            </div>

            <button
              className={`flex items-center space-x-2 rounded-lg px-6 py-3 bg-amber text-white ${product.stock === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-brown-600 hover:bg-brown-700 transform transition hover:scale-105"}`}
              disabled={product.stock === 0}
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
