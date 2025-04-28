// page.tsx
'use client'

import Store from '@/components/store/Store'
import { useParams } from 'next/navigation'
import { Suspense } from 'react'
import React from 'react'
import { data } from '../../../public/data'

const StorePageContent = () => {
  const router = useParams()
  const category = router.category

  const products = data.products.filter((product) => product.category === category)

  return (
    <div className="p-10 md:px-4 mt-20">
      <Store categoryName={category || 'Todos los productos'} products={products} />
    </div>
  )
}

const Page = () => {
  return (
    <Suspense fallback={<div>Cargando productos...</div>}>
      <StorePageContent />
    </Suspense>
  )
}

export default Page
