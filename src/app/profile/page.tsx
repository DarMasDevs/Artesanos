"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/types";
import ProfileSection from "@/components/Profile/ProfileSection";
import EditProfileModal from "@/components/Profile/EditProfileModal";
import { getlogindata } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";

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
    }, 1000);
    return () => clearTimeout(timeout);
  }, [router, userProfile]);

  


  const handleEditProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditModalOpen(false);
  };

 

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
