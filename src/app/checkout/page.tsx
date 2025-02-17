import Checkout from '@/components/Checkout/Checkout'
import React from 'react'

const Page = () => {

  console.log("pagina checkout")
  return (
    <div className='mt-20'>
        <h1 className='text-center text-4xl font-bold'>Checkout</h1>
        <Checkout />
    </div>
  )
}

export default Page