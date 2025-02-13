import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { navlinks } from "./NavLinks";
import { routes } from "@/config/routes";
import { useSelector } from "react-redux";
import { RootState } from "@/types/types";
import Image from "next/image";

interface NavBarProps {
  open: boolean;
}

const NavBar = ({ open }: NavBarProps) => {
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems,
  );
  const user = useSelector((state: RootState) => state.userReducer.user);

  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    if (count !== cartItemsCount) {
      setCartItemsCount(count);
    }
  }, [cartItems, cartItemsCount]);

  const userLink = user ? routes.profile : routes.login;
  const userContent = user ? (
    <div className="flex">
      <div className="relative">
        <Image
          width={40}
          height={40}
          src={user.image || "https://via.placeholder.com/40"}
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </div>
  ) : (
    <button className="flex items-center gap-2 px-3 py-2 text-xs underline-offset-1 hover:text-light-brown hover:underline">
      Iniciar sesión
    </button>
  );

  return (
    <div className="flex items-center justify-between gap-5">
      <div className="hidden md:flex lg:flex">
        <div className="flex items-center space-x-3">
          {navlinks.map((link, index) => (
            <div key={index} className="group relative">
              <Link
                className="block text-nowrap rounded-md text-center text-brown hover:text-light-brown"
                href={link.link}
              >
                {link.nombre}
              </Link>
              {link.sublinks && (
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      className="text-gray-700 hover:bg-gray-100 block px-4 py-2"
                      href={sublink.link}
                    >
                      {sublink.nombre}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-5">
        <Link href={routes.cartDetail}>
          <div className="flex">
            <ShoppingBagIcon
              strokeWidth="1"
              className="cursor-pointer text-brown hover:text-light-brown"
            />
            <span className="pl-1 text-brown">{cartItemsCount}</span>
          </div>
        </Link>
      </div>
      <Link href={userLink}>{userContent}</Link>

      <div className="md:hidden">
        {open ? (
          <dialog className="m-0 flex flex-col items-start space-y-1 bg-cream bg-opacity-70 pb-3 pt-2 text-brown">
            {navlinks.map((link, index) => (
              <Link
                key={index}
                className="flex items-center gap-2 px-3 py-2 text-xs underline-offset-1 hover:text-light-brown hover:underline"
                href={link.link}
              >
                {link.icono}
                {link.nombre}
              </Link>
            ))}
          </dialog>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
