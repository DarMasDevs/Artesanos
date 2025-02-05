import ShoppingCart from '@/components/ShoppingCart/ShoppingCart'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 mx-auto mt-10">Su carrito de compras</h1>
      <ShoppingCart />
    </div>
  )
}

export default page