"use client";
import Store from '@/components/store/Store';
import React from 'react';
import { data } from '../../../public/data';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const products = data.products;
  const param = useSearchParams();
  const queryParam = param.get("q");

  return (
    <div className="p-10 md:px-4 mt-20">
      <Store categoryName="Todos los productos" products={products} queryParam={queryParam} />
    </div>
  );
};

export default Page;