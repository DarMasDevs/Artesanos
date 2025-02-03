import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[url('../../public/images/banner/banner.jpg')] min-h-[80vh] bg-no-repeat bg-cover bg-center mt-14">
    <div className="relative h-screen">
        <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col pt-6 p-8 lg:gap-10 text-center text-brown lg:font-bold text-xl gap-10 md:gap-14 md:ml-5 lg:text-2xl lg:w-[50%] md:w-[60%] w-[100%] text-[12px] min-h-[80vh] md:h-screen object-contain bg-opacity-60 bg-cream/30 md:bg-cream/40 lg:bg-cream/50">
        <h1 className="bg-cream bg-opacity-60 rounded-lg lg:p-3 md:p-3 p-1 font-bold md:mt-5 lg:mt-[24%]">
          Portal de venta de artesanías
        </h1>
        <p className="bg-cream font-bold bg-opacity-60 rounded-lg lg:p-3 md:p-3 p-1">
          Espacio dedicado con Amor para vincular Artesanos, con amantes del
          arte y la belleza
        </p>
        <div className="flex lg:flex-row lg:justify-between md:flex-row md:justify-between md:gap-5 gap-5 font-bold">
          <Link href={"/#products"}>
            <button className="bg-cream bg-opacity-60 rounded-lg p-2 text-nowrap text-xl xl:text-xl hover:shadow-xl hover:shadow-amber">
              Ver Productos
            </button>
          </Link>
          <Link href={"/SellerRegister"}>
            <button className="bg-cream bg-opacity-60 rounded-lg p-2 text-nowrap xl:text-xl hover:shadow-xl hover:shadow-amber">
              ¿Sos Vendedor?
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero