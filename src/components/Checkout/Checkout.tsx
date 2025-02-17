"use client";
import { getCartData } from "@/redux/features/cart";
import { RootState } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect,  useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { FaCreditCard } from "react-icons/fa";

const ShoppingCart = () => {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [isCreatedPreference, setIsCreatedPreference] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems,
  );

  //eslint-disable-next-line
  const user = useSelector((state: RootState) => state.userReducer.user);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_MP_PUBLIC_KEY as string;
    if (publicKey) {
      initMercadoPago(publicKey, {
        locale: 'es-PE',
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const idItems: string[] = [];

  cartItems.forEach((product) => {
    for (let i = 0; i < product.quantity; i++) {
      idItems.push(product._id);
    }
  });

  const handleCreatePreference = async (): Promise<string | null> => {
    const response = await fetch('/api/mercadoPago', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    });

    const data = await response.json();
    setIsCreatedPreference(true);
    return data.id;
  };

  const handleBuy = async () => {
    const id = await handleCreatePreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
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
              <button onClick={handleBuy} type="button" className="w-full flex items-center justify-center px-4 py-2 bg-green-400 text-white font-semibold rounded-md shadow-md hover:bg-green-700 mt-4" disabled={isCreatedPreference}>
          <FaCreditCard className="mr-2" />{isCreatedPreference ? 'Creando Preferencia...' : 'Pagar'}
          </button>
              {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}
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
