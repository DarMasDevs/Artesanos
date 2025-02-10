import { Products } from '@/types/types'
import React from 'react'
import Card from '../Card/Card'

type Props = {
    products: Products[]
}

const Cards = ({ products }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product, index) => {
            return <Card key={index} product={product} />
        })}
    </div>
  )
}

export default Cards