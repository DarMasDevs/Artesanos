import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { User } from "@/types/types";

interface ProfileSectionProps {
    userProfile: User | null;
    setIsEditModalOpen: (isOpen: boolean) => void;
}

const ProfileSection = ({ userProfile, setIsEditModalOpen }: ProfileSectionProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Perfil Personal</h2>
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <FiEdit2 className="h-4 w-4" />
          <span>Editar</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 dark:text-gray-300">Nombre Completo</label>
          <p className="font-medium">{userProfile?.name}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 dark:text-gray-300">Correo Electrónico</label>
          <p className="font-medium">{userProfile?.email}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 dark:text-gray-300">Teléfono</label>
          <p className="font-medium">{userProfile?.phone}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600 dark:text-gray-300">Dirección</label>
          <p className="font-medium">{userProfile?.address.city}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;