import { User } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FiUser, FiShoppingBag, FiBell, FiSettings, FiX } from "react-icons/fi";

interface SidebarProps {
  userProfile: User | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Sidebar = ({
  userProfile,
  activeTab,
  setActiveTab,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SidebarProps) => {
  return (
    <>
      {/* Menú lateral */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 768) && ( // Mostrar en móviles o en pantallas grandes
          <motion.div
            initial={{ x: "-100%" }} // Inicia fuera de la pantalla
            animate={{ x: 0 }} // Se desliza hacia la posición normal
            exit={{ x: "-100%" }} // Se desliza fuera de la pantalla al cerrar
            transition={{ duration: 0.3, type: "tween" }} // Duración y tipo de animación
            className="fixed inset-0 z-50 bg-white dark:bg-gray-800 shadow-lg md:w-64 md:relative"
          >
            <div className="p-4">
              {/* Encabezado del menú */}
              <div className="flex items-center justify-between md:justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <Image
                    src={userProfile?.image || "/images/avatars/hombre.jpg"}
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <span className="font-semibold dark:text-white">Dashboard</span>
                </div>
                {/* Botón para cerrar el menú en móviles */}
                <button
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              {/* Navegación */}
              <nav>
                <ul className="space-y-2">
                  {[
                    { id: "profile", label: "Perfil", icon: FiUser },
                    { id: "orders", label: "Órdenes de Compra", icon: FiShoppingBag },
                    { id: "notifications", label: "Notificaciones", icon: FiBell },
                    { id: "settings", label: "Configuración", icon: FiSettings },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                          activeTab === item.id
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;