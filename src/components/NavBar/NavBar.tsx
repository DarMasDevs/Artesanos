import React from 'react';
import Link from 'next/link';
import { ShoppingBagIcon } from 'lucide-react';
import { navlinks } from './NavLinks';
import { routes } from '@/config/routes';

interface NavBarProps {
  open: boolean;
}

const NavBar = ({ open }: NavBarProps) => {

    const cartItemsCount = 0;
  return (
    <div className='flex items-center justify-between gap-5'>
      <div className="hidden md:flex lg:flex">
        <div className="flex items-center space-x-3">
          {navlinks.map((link, index) => (
            <div key={index} className="relative group">
              <Link
                className="text-center text-nowrap hover:text-light-brown block  rounded-md text-brown"
                href={link.link}
              >
                {link.nombre}
              </Link>
              {link.sublinks && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {link.sublinks.map((sublink, subIndex) => (
                    <Link
                      key={subIndex}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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
        <Link href={routes.login}>
          <p className="hover:underline underline-offset-1">Ingresá</p>
        </Link>
        <Link href={routes.cartDetail}>
          <div className="flex">
            <ShoppingBagIcon
              strokeWidth="1"
              className="cursor-pointer text-brown hover:text-light-brown"
            />
            <span className="text-brown pl-1">{cartItemsCount}</span>
          </div>
        </Link>
      </div>

      <div className="md:hidden">
        {open ? (
          <dialog className="flex flex-col items-start pt-2 pb-3 space-y-1 bg-cream bg-opacity-70 text-brown m-0">
            {navlinks.map((link, index) => (
              <Link
                key={index}
                className="flex items-center gap-2 px-3 py-2 text-xs hover:text-light-brown hover:underline underline-offset-1"
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