import { User } from "@/types/types";
import React from "react";

interface EditProfileModalProps {
    userProfile: User | null;
    setIsEditModalOpen: (isOpen: boolean) => void;
    handleEditProfile: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EditProfileModal = ({ userProfile, setIsEditModalOpen, handleEditProfile }: EditProfileModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
        <h3 className="text-xl font-bold mb-4">Editar Perfil</h3>
        <form onSubmit={handleEditProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre Completo</label>
            <input
              type="text"
              defaultValue={userProfile?.name}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
            <input
              type="email"
              defaultValue={userProfile?.email}
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;