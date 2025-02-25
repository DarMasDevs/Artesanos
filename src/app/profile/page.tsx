"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/types";
import ProfileSection from "@/components/Profile/ProfileSection";
import EditProfileModal from "@/components/Profile/EditProfileModal";
import { getlogindata } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";
import { data } from "../../../public/data";

const UserDashboard = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const router = useRouter();
  const userProfile = useSelector(
    (state: RootState) => state.userReducer?.user,
  );
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getlogindata());
  }, [dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!userProfile) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router, userProfile]);

  const orders = [
    {
      _id: "1",
      number: "ORD-001",
      date: "2023-12-01",
      total: "€99.99",
      status: "Entregado",
    },
    {
      _id: "2",
      number: "ORD-002",
      date: "2023-12-05",
      total: "€149.99",
      status: "En Proceso",
    },
    {
      _id: "3",
      number: "ORD-003",
      date: "2023-12-10",
      total: "€79.99",
      status: "Pendiente",
    },
  ];

  const notifications = [
    {
      _id: "1",
      message: "Tu pedido ha sido entregado",
      date: "2023-12-10",
      isRead: false,
    },
    {
      _id: "2",
      message: "Nuevo producto disponible",
      date: "2023-12-09",
      isRead: true,
    },
    {
      _id: "3",
      message: "Actualización de perfil exitosa",
      date: "2023-12-08",
      isRead: true,
    },
  ];

  const handleEditProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditModalOpen(false);
  };

  const productByUser = data.products.filter(
    (product) => product.userId === userProfile?._id,
  );
  console.log("productByUser", productByUser);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Cargando...
      </div>
    );
  }
  return (
    <div className={``}>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-4">
          <ProfileSection
            userProfile={userProfile}
            setIsEditModalOpen={setIsEditModalOpen}
          />
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
