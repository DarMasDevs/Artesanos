import { Products, RootState } from "@/types/types";
import { HammerIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { data } from "../../../public/data";
import Link from "next/link";
import { routes } from "@/config/routes";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addItem } from "@/redux/features/cart";
import { motion } from "framer-motion";

interface Props {
  product: Products;
}

const Card = ({ product }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [productHover, setProductHover] = useState<string | null>(null);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const user = data.users.find((user) => user._id === product.userId);
  const artisanName = user ? user.name : "Desconocido";
  const ArtisanLocation = user
    ? user.address.state + ", " + user.address.city
    : "Desconocido";

  // Agregar al carrito
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems,
  );

  const handleAddToCart = () => {
    const productData = {
      _id: product._id,
      title: product.title,
      price: product.price,
      quantity: 1,
      subtotal: product.price * 1,
      image: product.image[0],
      material: product.material,
      stock: product.stock,
    };

    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem && existingItem.quantity + 1 > existingItem.stock) {
      toast.success(
        "No hay suficiente stock disponible para agregar más unidades de este producto al carrito.",
      );
    } else {
      console.log("productData ", productData);
      dispatch(addItem(productData));
      toast.success(`${product.title} agregado al carrito.`);
    }
  };

  return (
    <div
      className="mx-1 overflow-hidden rounded-lg bg-stone-50 shadow-md transition-all duration-300 hover:shadow-xl"
      style={{
        transform: isHovered ? "scale(1.02)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative overflow-hidden">
        <Link
          href={`${routes.product}/${product._id}-${product.title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <div
            onMouseEnter={() => setProductHover(product._id)}
            onMouseLeave={() => setProductHover(null)}
            className="relative h-64 w-full cursor-pointer"
          >
            <Image
              width={400}
              height={400}
              src={product.image[0]}
              alt={product.title}
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {productHover === product._id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/50"
              >
                <div className="absolute right-4 top-4 z-10">
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Evita que el enlace se active
                      e.stopPropagation(); // Evita la propagación del evento
                      handleFavoriteToggle();
                    }}
                    className="rounded-full p-2 backdrop-blur-sm transition-colors duration-300 "
                    aria-label="Add to favorites"
                  >
                    {isFavorite ? (
                      <BsHeartFill className="text-xl text-red" />
                    ) : (
                      <BsHeart className="text-xl text-red" />
                    )}
                  </button>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 right-4 z-10 flex"
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Evita que el enlace se active
                      e.stopPropagation(); // Evita la propagación del evento
                      handleAddToCart();
                    }}
                    className="bg-amber-600 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-amber hover:text-white"
                  >
                    <ShoppingCart className="text-xl text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Evita que el enlace se active
                      e.stopPropagation(); // Evita la propagación del evento
                    }}
                    className="bg-amber-600 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-amber hover:text-white"
                  >
                    <IoEyeSharp className="text-xl text-white" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </Link>

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

      <Link
        href={`${routes.product}/${product._id}-${product.title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className="p-6">
          <div className="mb-4 flex flex-col items-start">
            <p className="mb-1 text-sm text-gray">{artisanName}</p>
            <p className="text-md mb-2 font-serif font-medium">
              {product.title}
            </p>
          </div>

          <div className="flex flex-col items-center justify-between">
            <div className="mb-2 flex w-full items-start justify-between gap-2">
              <span className="text-md text-gray-900 font-medium">
                ${product.price}
              </span>
              <span className="text-gray-500 text-sm">{ArtisanLocation}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;