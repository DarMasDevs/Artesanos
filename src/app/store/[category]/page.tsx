"use client"
import Store from '@/components/store/Store'
import { useParams } from 'next/navigation'
import React from 'react'
import { data } from '../../../../public/data'

const Page = () => {

  const router = useParams()
  const category = router.category

  const products = data.products.filter((product) => product.category === category)

  return (
    <div className="p-10 md:px-4 mt-20">
      <Store  categoryName={category || '' } products={products} />
    </div>
  )
}

export default Page