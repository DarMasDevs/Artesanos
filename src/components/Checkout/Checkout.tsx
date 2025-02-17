"use client";
import { getCartData } from "@/redux/features/cart";
import { RootState } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems,
  );

  //eslint-disable-next-line
  const user = useSelector((state: RootState) => state.userReducer.user);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const idItems: string[] = [];

  cartItems.forEach((product) => {
    for (let i = 0; i < product.quantity; i++) {
      idItems.push(product._id);
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {cartItems.length === 0 ? (
          <div className="py-12 text-center">
            <FiShoppingCart className="text-gray-400 mx-auto h-12 w-12" />
            <p className="text-gray-500 mt-4 text-lg">Your cart is empty</p>
            <button className="mt-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((product) => (
                  <div
                    key={product._id}
                    className="rounded-lg bg-white p-6 shadow transition-all duration-200 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center space-x-4 md:flex-row">
                      <Image
                        width={96}
                        height={96}
                        src={product.image}
                        alt={product.title}
                        className="h-24 w-24 rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-gray-900 text-lg font-medium">
                          {product.title}
                        </h3>
                        <p className="text-gray-500">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-4 text-right md:mt-0 md:text-right">
                        <p className="text-gray-900 text-lg font-medium">
                          ${(product.price * product.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-fit rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-medium">
                Orden de compra
              </h2>
              <div className="space-y-4">
                <button className="w-full rounded-md bg-indigo-600 py-3 text-white hover:bg-indigo-700 mb-2 hover:scale-110 transition-all duration-200">
                 Proceder al pago
                </button>
                <Link href="/checkout">
                <button className="border-black text-black hover:bg-black-50 w-full rounded-md border py-3 hover:scale-110 transition-all duration-200">
                 Continuar comprando
                </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
