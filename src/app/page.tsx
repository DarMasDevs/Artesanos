import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('../../public/images/banner/banner.jpg')] h-[200px] md:h-[400px] lg:h-[600px] bg-norepeat bg-cover mt-10">
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
          ></div>
          <div className="relative flex flex-col pt-6 lg:p-6 lg:gap-10 text-center text-brown lg:font-bold md:text-xl gap-4 md:gap-14 md:ml-5 lg:text-2xl lg:w-[50%] md:w-[50%] w-[50%] text-[12px] h-screen object-contain bg-opacity-60 bg-cream">
            <h1 className="bg-cream bg-opacity-60 rounded-lg lg:p-3 md:p-3 p-1 font-bold md:mt-5 lg:mt-[24%]">
              Portal de venta de artesanías
            </h1>
            <p className="bg-cream font-bold bg-opacity-60 rounded-lg lg:p-3 md:p-3 p-1">
              Espacio dedicado con Amor para vincular Artesanos, con amantes del
              arte y la belleza
            </p>
            <div className="flex lg:flex-row lg:justify-between md:flex-row md:justify-between md:gap-5 gap-5 font-bold">
              <Link href={"/#products"}>
                <button className="bg-cream bg-opacity-60 rounded-lg p-2 text-nowrap xl:text-xl hover:shadow-xl hover:shadow-amber">
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
    </div>
  );
}
