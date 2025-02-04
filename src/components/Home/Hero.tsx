import { routes } from "@/config/routes";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-14 min-h-[80vh] bg-[url('../../public/images/banner/iabanner.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative h-screen">
        <div className="relative mx-auto flex min-h-[80vh] w-[100%] flex-col gap-10 bg-opacity-60 object-contain p-8 pt-6 text-center text-[12px] text-xl text-brown md:ml-5 md:h-screen md:w-[60%] md:gap-14  lg:w-[50%] lg:gap-10 lg:text-2xl lg:font-bold">
          <h1 className="mt-10 rounded-lg bg-cream bg-opacity-60 p-1 font-bold md:mt-5 md:p-3 lg:mt-[24%] lg:p-3">
            Portal de venta de artesanías
          </h1>
          <p className="rounded-lg bg-cream bg-opacity-60 p-1 font-bold md:p-3 lg:p-3">
            Espacio dedicado con Amor para vincular Artesanos, con amantes del
            arte y la belleza
          </p>
          <div className="flex flex-col gap-5 px-1 py-2 font-bold md:flex-row md:justify-between md:gap-5 lg:justify-between">
            <Link href={routes.store}>
              <button className="text-nowrap rounded-lg bg-cream bg-opacity-60 p-2 text-2xl hover:shadow-xl hover:shadow-amber xl:text-xl">
                Ver Productos
              </button>
            </Link>
            <Link href={routes.sellerRegister}>
              <button className="text-nowrap rounded-lg bg-cream bg-opacity-60 p-2 text-2xl hover:shadow-xl hover:shadow-amber xl:text-xl">
                ¿Sos Vendedor?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
