import { Products } from "@/types/types";
import Image from "next/image";
import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Search from "../store/Search";

type Props = {
  productByUser: Products[];
};

const MyProducts = ({ productByUser }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const [products, setProducts] = React.useState(productByUser);

  const handleStockChange = (id: string, stock: number) => {
    const updatedProducts = products.map((item) =>
      item._id === id ? { ...item, stock } : item,
    );
    setProducts(updatedProducts);
  };

  const removeProduct = (id: string) => {
    console.log("removeProduct", id);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <div className="mb-4 flex items-center">
        <Search searchProducts={searchTerm} setSearch={setSearchTerm} />
      </div>

      <div className="lg:col-span-2">
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="rounded-lg bg-white p-6 shadow transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex flex-col items-center space-x-4 md:flex-row">
                <Image
                  width={96}
                  height={96}
                  src={product.image[0]}
                  alt={product.title}
                  className="h-24 w-24 rounded-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-gray-900 text-lg font-medium">
                    {product.title}
                  </h3>
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center rounded-md border">
                      <button
                        onClick={() =>
                          handleStockChange(product._id, product.stock - 1)
                        }
                        className="text-gray-600 hover:text-gray-800 p-2"
                        disabled={product.stock <= 1}
                      >
                        <FiMinus />
                      </button>
                      <span className="px-4">{product.stock}</span>
                      <button
                        onClick={() =>
                          handleStockChange(product._id, product.stock + 1)
                        }
                        className="text-gray-600 hover:text-gray-800 p-2"
                      >
                        <FiPlus />
                      </button>
                    </div>
                    <button
                      onClick={() => removeProduct(product._id)}
                      className="text-2xl text-red hover:text-red/70"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-right md:mt-0 md:text-right">
                  <p className="text-gray-900 text-lg font-medium">
                    ${(product.price).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
