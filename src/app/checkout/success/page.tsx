import PaymentSuccess from "@/components/Checkout/Succes";
import { Suspense } from "react";

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <PaymentSuccess />
    </Suspense>
  );
}