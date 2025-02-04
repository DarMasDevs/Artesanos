import {
  BadgeDollarSignIcon,
  Home,
  NfcIcon,
  PackageSearchIcon,
  SignatureIcon,
  // User,
} from "lucide-react";
import { routes } from "../../config/routes";


export const navlinks = [
    {
      nombre: "Inicio",
      icono: <Home />,
      link: routes.home,
    },
    {
      nombre: "Productos",
      icono: <PackageSearchIcon />,
      link: routes.store,
      sublinks: [
        { nombre: "Categoría 1", link: "/category1" },
        { nombre: "Categoría 2", link: "/category2" },
        { nombre: "Categoría 3", link: "/category3" },
      ],
    },
    {
      nombre: "Sos Vendedor",
      icono: <BadgeDollarSignIcon />,
      link: routes.sellerRegister,
    },
    {
      nombre: "Quienes somos",
      icono: <SignatureIcon />,
      link: routes.aboutUs,
    },
    {
      nombre: "Contacto",
      icono: <NfcIcon />,
      link: routes.contact,
    },
  ];