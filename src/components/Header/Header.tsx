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
      <div className="z-50 fixed top-0 mx-auto flex w-full items-center justify-around bg-amber px-4 py-2 lg:max-w-full">
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
          <h1 className="cursor-pointer text-3xl text-dark-aqua">
            <span className="text-4xl font-bold text-brown">AR</span>tesano
          </h1>
        </Link>
        <div>
          <NavBar open={open} />
        </div>
      </div>
    </>
  );
}
