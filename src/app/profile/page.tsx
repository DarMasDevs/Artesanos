"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "@/components/Profile/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/types";
import ProfileSection from "@/components/Profile/ProfileSection";
import OrdersSection from "@/components/Profile/OrdersSection";
import NotificationsSection from "@/components/Profile/NotificationsSection";
import SettingsSection from "@/components/Profile/SettingsSection";
import EditProfileModal from "@/components/Profile/EditProfileModal";
import { getlogindata } from "@/redux/features/userSlice";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const userProfile = useSelector((state: RootState) => state.userReducer?.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getlogindata()); 
  }, [dispatch]);

  const orders = [
    { _id: "1", number: "ORD-001", date: "2023-12-01", total: "€99.99", status: "Entregado" },
    { _id: "2", number: "ORD-002", date: "2023-12-05", total: "€149.99", status: "En Proceso" },
    { _id: "3", number: "ORD-003", date: "2023-12-10", total: "€79.99", status: "Pendiente" }
  ];

  const notifications = [
    { _id: "1", message: "Tu pedido ha sido entregado", date: "2023-12-10", isRead: false },
    { _id: "2", message: "Nuevo producto disponible", date: "2023-12-09", isRead: true },
    { _id: "3", message: "Actualización de perfil exitosa", date: "2023-12-08", isRead: true }
  ];

  const handleEditProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditModalOpen(false);
  };

  return (
    <div className={`min-h-screen mt-20  "bg-gray-50"}`}>
      <div className="flex flex-col md:flex-row">
        <Sidebar
          userProfile={userProfile}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <div className="flex-1 p-4">
          <div className="mb-4 flex justify-between items-center">
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <FiMenu className="h-6 w-6" />
            </button>
          </div>

          {activeTab === "profile" && <ProfileSection userProfile={userProfile} setIsEditModalOpen={setIsEditModalOpen} />}
          {activeTab === "orders" && <OrdersSection orders={orders} />}
          {activeTab === "notifications" && <NotificationsSection notifications={notifications} />}
          {activeTab === "settings" && <SettingsSection />}
        </div>
      </div>

      {isEditModalOpen && (
        <EditProfileModal
          userProfile={userProfile}
          setIsEditModalOpen={setIsEditModalOpen}
          handleEditProfile={handleEditProfile}
        />
      )}
    </div>
  );
};

export default UserDashboard;