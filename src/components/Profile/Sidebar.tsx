import { User } from "@/types/types";
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

const Sidebar = ({ userProfile, activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen : setIsMobileMenuOpen }: SidebarProps) => {


  return (
    <div className={`md:w-64 bg-white dark:bg-gray-800 shadow-lg ${isMobileMenuOpen ? "fixed inset-0 z-50" : "hidden md:block"}`}>
      <div className="p-4">
        <div className="flex items-center justify-between md:justify-center mb-8">
          <div className="flex items-center space-x-3">
           <Image src={userProfile?.image || '/images/avatars/hombre.jpg'} alt="avatar" width={50} height={50} className="rounded-full" />
            <span className="font-semibold dark:text-white">Dashboard</span>
          </div>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
            {[
              { id: "profile", label: "Perfil", icon: FiUser },
              { id: "orders", label: "Órdenes de Compra", icon: FiShoppingBag },
              { id: "notifications", label: "Notificaciones", icon: FiBell },
              { id: "settings", label: "Configuración", icon: FiSettings }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${activeTab === item.id ? "bg-blue-500 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;