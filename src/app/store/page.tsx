'use client'

import Store from '@/components/store/Store'
import { useParams, useSearchParams } from 'next/navigation'
import { Suspense, useState, useEffect } from 'react'
import { data } from '../../../public/data'

const StorePageContent = () => {
  const router = useParams()
  const category = router.category
  const [isClient, setIsClient] = useState(false)
  const searchParams = useSearchParams()
  const queryParam = searchParams.get("q");

  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const allproducts = data.products

  const products = queryParam ? allproducts.filter((product) => product.title.toLowerCase().includes(queryParam.toLowerCase())) : allproducts

  if (!isClient) return null 


  return (
    <div className="p-10 md:px-4 mt-20" suppressHydrationWarning>
      <Store categoryName={category || 'Todos los productos'} products={products} queryParam={queryParam} />
    </div>
  )
}

const Page = () => {
  return (
    <Suspense fallback={<div className='w-full h-full flex justify-center items-center'>Loading...</div>}>
      <StorePageContent />
    </Suspense>
  )
}

export default Page