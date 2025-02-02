"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";

// import { useAppSelector } from "@/redux/hooks";
// import { useSession } from "next-auth/react";
// import { getlogindata } from "@/redux/features/userSlice";
// import { useDispatch } from "react-redux";

export default function Header() {
  const [open, setOpen] = useState(false);
  

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center w-full fixed top-0 z-50 justify-around mx-auto lg:max-w-full bg-amber">
        <div className="flex md:hidden">
          {open === true ? (
            <X
              strokeWidth="1"
              className="cursor-pointer text-brown text-opacity-80"
              onClick={handleMenu}
            />
          ) : (
            <Menu
              strokeWidth="1"
              className="cursor-pointer text-brown"
              onClick={handleMenu}
            />
          )}
        </div>

        <Link href={"/"}>
          <h1 className="text-3xl text-dark-aqua cursor-pointer">
            <span className="font-bold text-brown text-4xl">AR</span>tesano
          </h1>
        </Link>
        <div>
          <NavBar open={open}  />
        </div>
      </div>
    </>
  );
}