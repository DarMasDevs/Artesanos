"use client";
import Store from '@/components/store/Store';
import React from 'react';
import { data } from '../../../public/data';

const Page = () => {
  const products = data.products;


  return (
    <div className="p-10 md:px-4 mt-20">
      <Store categoryName="Todos los productos" products={products} />
    </div>
  );
};

export default Page;