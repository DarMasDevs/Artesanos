"use client"
import { getCartData, removeItem, updateQuantity } from "@/redux/features/cart";
import { RootState } from "@/types/types";
import Image from "next/image";
import React, { useEffect } from "react";
import { FiTrash2, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const idItems: string[] = [];

  cartItems.forEach((product) => {
    for (let i = 0; i < product.quantity; i++) {
      idItems.push(product._id);
    }
  });

  const handleUpdateCart = async () => {
    const shoppingcart = [];
    cartItems.forEach((product) => {
      for (let i = 0; i < product.quantity; i++) {
        shoppingcart.push(product._id);
      }
    });
    try {
        const shoppingCart = idItems;
        console.log("shoppingCart", shoppingCart);
    } catch (error) {
      console.error("Error general al actualizar el carrito:", error);
    }
  };



  const removeProduct = (id: string) => {
    dispatch(removeItem(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2);
  };


  const handleQuantityChange = async (itemId : string, newQuantity: number) => {
    const item = cartItems.find((item) => item._id === itemId);

    if (!item) return
    if (!isNaN(newQuantity) && newQuantity > 0 && newQuantity <= item.stock) {
      dispatch(updateQuantity({ itemId, newQuantity }));
    }

    await handleUpdateCart();
  };


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <FiShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-lg text-gray-500">Your cart is empty</p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((product) => (
                  <div key={product._id} className="bg-white rounded-lg shadow p-6 transition-all duration-200 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row items-center space-x-4">
                    <Image
                      width={96}
                      height={96}
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                      <p className="text-gray-500">${product.price.toFixed(2)}</p>
                      <div className="mt-2 flex items-center space-x-4">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => handleQuantityChange(product._id, product.quantity - 1)}
                            className="p-2 text-gray-600 hover:text-gray-800"
                            disabled={product.quantity <= 1}
                          >
                            <FiMinus />
                          </button>
                          <span className="px-4">{product.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(product._id, product.quantity + 1)}
                            className="p-2 text-gray-600 hover:text-gray-800"
                            disabled={product.quantity >= product.stock}
                          >
                            <FiPlus />
                          </button>
                        </div>
                        <button
                          onClick={() => removeProduct(product._id)}
                          className="text-red hover:text-red/70 text-2xl"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0 md:text-right">
                      <p className="text-lg font-medium text-gray-900">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 h-fit">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Orden de compra</h2>
              <div className="space-y-4">
                <div className="border-t pt-4 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
                <button className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                  Proceed to Checkout
                </button>
                <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;