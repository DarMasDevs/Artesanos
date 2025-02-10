import {
  BadgeDollarSignIcon,
  Home,
  NfcIcon,
  PackageSearchIcon,
  SignatureIcon,
  // User,
} from "lucide-react";
import { routes } from "../../config/routes";
import { data } from "../../../public/data";

const categories = Array.from(new Set(data.categories.map(category => category.name)));

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
      sublinks: categories.map(category => ({
        nombre: category,
        link: `/store/${category}`,
      })),
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