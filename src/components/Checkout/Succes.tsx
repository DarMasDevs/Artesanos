"use client"; 

import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaDownload, FaShare } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/types";
import jsPDF from "jspdf";
import { getlogindata } from "@/redux/features/userSlice";

const PaymentSuccess = () => {

    const dispatch = useDispatch();

  const cartDetails = useSelector(
    (state: RootState) => state.cartReducer.cartItems,
  );
  const user = useSelector((state: RootState) => state.userReducer.user);
  const searchParams = useSearchParams();


  const collectionId = searchParams.get("collection_id");
  const collectionStatus = searchParams.get("collection_status");
  const paymentId = searchParams.get("payment_id");
  const status = searchParams.get("status");
  const paymentType = searchParams.get("payment_type");
  const merchantOrderId = searchParams.get("merchant_order_id");
  const preferenceId = searchParams.get("preference_id");

 
  const [transactionDate, setTransactionDate] = useState<string>("Cargando...");

  
  const transactionDetails = {
    amount: cartDetails
      .reduce((acc, item) => acc + item.subtotal, 0)
      .toFixed(2),
    date: transactionDate,
    status: status || "N/A",
    collectionId: collectionId || "N/A",
    collectionStatus: collectionStatus || "N/A",
    preferenceId: preferenceId || "N/A",
    merchantOrderId: merchantOrderId || "N/A",
    transactionId: paymentId || "N/A",
    recipient: user?.name || "N/A",
    paymentMethod: paymentType || "N/A",
  };


  useEffect(() => {
    setTransactionDate(new Date().toLocaleString());
    document.title = "Payment Successful | Thank You";
  }, []);
  
  useEffect(() => {
   dispatch(getlogindata());
  }, [dispatch]);

  const handleDownload = () => {
    const doc = new jsPDF();

   
    doc.setFontSize(18);
    doc.text("Comprobante de Pago", 10, 20);

   
    doc.setFontSize(12);
    doc.text(`Monto: $${transactionDetails.amount}`, 10, 40);
    doc.text(`Fecha: ${transactionDetails.date}`, 10, 50);
    doc.text(`ID de Transacción: ${transactionDetails.transactionId}`, 10, 60);
    doc.text(`Comprador: ${transactionDetails.recipient}`, 10, 70);
    doc.text(`Método de Pago: ${transactionDetails.paymentMethod}`, 10, 80);
    doc.text(`Estado: ${transactionDetails.status}`, 10, 90);

   
    doc.save(`comprobante_${transactionDetails.transactionId}.pdf`);
  };

  const handleShare = () => {
    console.log("Sharing transaction details...");
  };

  return (
    <div className="bg-gray-50 flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block"
          >
            <FaCheckCircle className="mb-6 text-6xl text-green-500" />
          </motion.div>

          <h1 className="text-gray-800 mb-2 text-2xl font-bold">
            Pago exitoso
          </h1>
          <p className="text-gray-600 mb-8">
            Gracias por su compra. Su pago ha sido exitoso.
          </p>

          <div className="mb-8 space-y-4">
            <div className="border-gray-100 flex justify-between border-b py-2">
              <span className="text-gray-600">Monto</span>
              <span className="text-gray-800 font-semibold">
                {transactionDetails.amount}
              </span>
            </div>
            <div className="border-gray-100 flex justify-between border-b py-2">
              <span className="text-gray-600">Fecha</span>
              <span className="text-gray-800 font-semibold">
                {transactionDetails.date}
              </span>
            </div>
            <div className="border-gray-100 flex justify-between border-b py-2">
              <span className="text-gray-600">Transacción</span>
              <span className="text-gray-800 font-semibold">
                {transactionDetails.transactionId}
              </span>
            </div>
            <div className="border-gray-100 flex justify-between border-b py-2">
              <span className="text-gray-600">Cliente</span>
              <span className="text-gray-800 font-semibold">
                {transactionDetails.recipient}
              </span>
            </div>
            <div className="border-gray-100 flex justify-between border-b py-2">
              <span className="text-gray-600">Método de pago</span>
              <span className="text-gray-800 font-semibold">
                {transactionDetails.paymentMethod}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Link href="/">
              <button className="text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300 w-full rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2">
                Volver a la página principal
              </button>
            </Link>

            <div className="flex space-x-2">
              <button
                onClick={handleDownload}
                className="flex flex-1 items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <FaDownload className="mr-2" />
                Descargar recibo
              </button>

              <button
                onClick={handleShare}
                className="text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-300 rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                aria-label="Share transaction details"
              >
                <FaShare />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
