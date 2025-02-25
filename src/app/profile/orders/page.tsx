import OrdersSection from '@/components/Profile/OrdersSection';
import React from 'react'

const page = () => {

    const orders = [
        {
          _id: "1",
          number: "ORD-001",
          date: "2023-12-01",
          total: "€99.99",
          status: "Entregado",
        },
        {
          _id: "2",
          number: "ORD-002",
          date: "2023-12-05",
          total: "€149.99",
          status: "En Proceso",
        },
        {
          _id: "3",
          number: "ORD-003",
          date: "2023-12-10",
          total: "€79.99",
          status: "Pendiente",
        },
      ];


  return (
    <div>
        <OrdersSection orders={orders} />
    </div>
  )
}

export default page