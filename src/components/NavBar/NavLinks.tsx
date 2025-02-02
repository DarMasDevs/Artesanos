import {
  BadgeDollarSignIcon,
  Home,
  NfcIcon,
  PackageSearchIcon,
  SignatureIcon,
  // User,
} from "lucide-react";

export const navlinks = [
    {
      nombre: "Inicio",
      icono: <Home />,
      link: "/",
    },
    {
      nombre: "Productos",
      icono: <PackageSearchIcon />,
      link: "/#products",
    },
    {
      nombre: "Sos Vendedor",
      icono: <BadgeDollarSignIcon />,
      link: "/SellerRegister",
    },
    {
      nombre: "Quienes somos",
      icono: <SignatureIcon />,
      link: "/us",
    },
    {
      nombre: "Contacto",
      icono: <NfcIcon />,
      link: "/contact",
    },
  ];