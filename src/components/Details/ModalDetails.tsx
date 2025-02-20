import { routes } from "@/config/routes";
import { Products } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Portal from "./Portal"; // Importa el componente Portal
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  product: Products;
  handleModal: () => void;
  handleaddtoCart: () => void;
  handleaddtoFavorites: () => void;
  isfavorite: boolean;
};

const ModalDetails = ({
  product,
  handleModal,
  handleaddtoCart,
  handleaddtoFavorites,
  isfavorite,
}: Props) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <AnimatePresence>
        <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }} 
        className="relative z-50 m-4 w-[90%] max-w-4xl rounded-lg bg-white p-6 shadow-lg">
          <button
            onClick={handleModal}
            className="text-gray-800 hover:text-red-500 absolute right-4 top-4"
          >
            <IoEyeSharp className="text-2xl" />
          </button>
            <div 
            className="flex flex-col md:flex-row">
              {/* Imagen a la izquierda en pantallas grandes */}
              <div className="mb-5 flex w-full items-center justify-center md:w-[40%]">
                <Image
                  src={product.image[0]}
                  alt={product.title}
                  width={400}
                  height={300}
                  priority={true}
                  className="h-[300px] w-[400px] object-contain"
                />
              </div>

              {/* Detalles del producto a la derecha */}
              <div className="w-full md:w-[60%] md:pl-6">
                <h1 className="text-xl text-black">{product.title}</h1>
                <div className="my-4 flex items-center">
                  <button
                    onClick={handleaddtoFavorites}
                    className="mx-2 flex items-center justify-center rounded-lg p-3 text-red transition duration-300 ease-in-out"
                  >
                    {isfavorite ? (
                      <BsHeartFill className="text-xl" />
                    ) : (
                      <BsHeart className="text-xl" />
                    )}
                  </button>

                  {/* Rating */}
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
                      <span className="text-gray-600 ml-2">
                        ({product.rating})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Descripción del producto */}
                <div className="my-4">
                  <h2 className="text-bggris text-sm">
                    Categoria: {product.category}
                  </h2>
                  <h2 className="text-bggris text-sm">
                    Disponibles: {product.stock} unidades
                  </h2>
                </div>

                {/* Cantidad y botón Agregar al carrito */}
                <div className="flex flex-col items-center gap-2 md:items-start">
                  <label className="mr-2">Cantidad: </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="mr-4 w-16 rounded border p-1"
                  />
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleaddtoCart}
                      className="bg-bgbotones flex items-center justify-center rounded-lg bg-amber px-10 py-2 text-base transition duration-700 ease-in-out"
                    >
                      <MdOutlineShoppingCart className="text-xl text-white" />
                    </button>
                    <Link
                      href={`${routes.product}/${product._id}-${product.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <button className="bg-bgbotones flex items-center justify-center rounded-lg bg-amber px-10 py-2 text-base text-white">
                        Ver detalles
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </motion.div>
          </AnimatePresence>
      </div>
    </Portal>
  );
};

export default ModalDetails;
