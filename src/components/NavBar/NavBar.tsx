import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Settings, ShoppingBagIcon, User } from "lucide-react";
import { navlinks } from "./NavLinks";
import { routes } from "@/config/routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/types";
import Image from "next/image";
import { getlogindata, logoutUser } from "@/redux/features/userSlice";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

interface NavBarProps {
  open: boolean;
}

const NavBar = ({ open }: NavBarProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems,
  );
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(()=>{
    dispatch(getlogindata());
  }, [dispatch]);
  
  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    if (count !== cartItemsCount) {
      setCartItemsCount(count);
    }
  }, [cartItems, cartItemsCount]);

  const logout = () => {
    dispatch(logoutUser());
    router.push(routes.login);
    toast.success("Sesión cerrada");
    setIsProfileMenuOpen(false);
  };

  
  const handleLogout = () => {
    const LogoutConfirmation = () => (
      <div className="bg-dark-brown p-4 text-white">
        <p>¿Estás seguro de que quieres cerrar sesión?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => {
              toast.dismiss()
              logout();
            }}
            className="bg-red-500 hover:bg-red-600 rounded-md px-4 py-2 "
          >
            Sí
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 "
          >
            No
          </button>
        </div>
      </div>
    );

    toast.info(<LogoutConfirmation />, {
      position: "top-center",
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      closeButton: false,
      toastId: "logout-confirmation",
      theme: "dark",
    });
  };

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
        {user ? (
          <div className="relative" ref={profileMenuRef}>
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center"
            >
              <Image
                width={40}
                height={40}
                src={user.image}
                alt="User avatar"
                className="h-10 w-10 rounded-full border-2 border-brown"
              />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 top-12 z-50 w-48 rounded-md bg-white shadow-lg">
                <Link
                  href={routes.profile}
                  onClick={() => setIsProfileMenuOpen(false)}
                  className="text-gray-700 hover:bg-gray-100 block px-4 py-2"
                >
                  <div className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Perfil
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:bg-gray-100 w-full px-4 py-2 text-left"
                >
                  <div className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Cerrar sesión
                  </div>
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href={routes.login}>
            <button className="flex items-center gap-2 px-3 py-2 text-xs underline-offset-1 hover:text-light-brown hover:underline">
              Iniciar sesión
            </button>
          </Link>
        )}
      </div>

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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default NavBar;
