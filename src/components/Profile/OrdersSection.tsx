import React from "react";
import { format } from "date-fns";
import { Order } from "@/types/types";

interface OrdersSectionProps {
    orders: Order[];
}

const OrdersSection = ({ orders }: OrdersSectionProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Órdenes de Compra</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-6 py-3 text-left">Número de Orden</th>
                <th className="px-6 py-3 text-left">Fecha</th>
                <th className="px-6 py-3 text-left">Total</th>
                <th className="px-6 py-3 text-left">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="px-6 py-4">{order.number}</td>
                  <td className="px-6 py-4">{format(new Date(order.date), "dd/MM/yyyy")}</td>
                  <td className="px-6 py-4">{order.total}</td>
                  <td className="px-6 py-4">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersSection;