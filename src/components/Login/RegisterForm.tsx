import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";

interface RegisterFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  passwordValidation: {
    minLength: boolean;
    hasUpper: boolean;
    hasNumber: boolean;
  };
}

const RegisterForm = ({ formData, handleInputChange,  errors, passwordValidation }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex gap-4">
        <div>
          <label className="text-gray-700 block text-sm font-medium">Nombre</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="text-gray-700 block text-sm font-medium">Apellido</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border-gray-300 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="text-gray-700 block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`mt-1 block w-full border px-3 py-2 ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
          required
        />
        {errors.email && (
          <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="text-gray-700 block text-sm font-medium">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`mt-1 block w-full border px-3 py-2 ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className="text-gray-500 h-5 w-5" />
            ) : (
              <AiOutlineEye className="text-gray-500 h-5 w-5" />
            )}
          </button>
        </div>

        {formData.password && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center space-x-2">
              {passwordValidation.minLength ? (
                <BsFillCheckCircleFill className="text-green-500" />
              ) : (
                <BsXCircleFill className="text-red-500" />
              )}
              <span className="text-sm">Minimo 8 caracteres</span>
            </div>
            <div className="flex items-center space-x-2">
              {passwordValidation.hasUpper ? (
                <BsFillCheckCircleFill className="text-green-500" />
              ) : (
                <BsXCircleFill className="text-red-500" />
              )}
              <span className="text-sm">Una letra mayúscula</span>
            </div>
            <div className="flex items-center space-x-2">
              {passwordValidation.hasNumber ? (
                <BsFillCheckCircleFill className="text-green-500" />
              ) : (
                <BsXCircleFill className="text-red-500" />
              )}
              <span className="text-sm">Un número</span>
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="text-gray-700 block text-sm font-medium">Confirmar contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className={`mt-1 block w-full border px-3 py-2 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500`}
          required
        />
        {errors.confirmPassword && (
          <p className="text-red-600 mt-1 text-sm">
            {errors.confirmPassword}
          </p>
        )}
      </div>

      <div className="flex flex-col space-y-4">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            Registrarse
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;