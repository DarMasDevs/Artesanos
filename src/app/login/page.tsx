"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import LoginForm from "@/components/Login/LoginForm";
import RegisterForm from "@/components/Login/RegisterForm";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const passwordValidation = {
    minLength: formData.password.length >= 8,
    hasUpper: /[A-Z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case "email":
        newErrors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Formato de correo inválido"
          : "";
        break;
      case "password":
        newErrors.password =
          value.length < 8
            ? "La contraseña debe tener al menos 8 caracteres"
            : "";
        break;
      case "confirmPassword":
        newErrors.confirmPassword =
          value !== formData.password ? "Las contraseñas no coinciden" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  return (
    <div className="bg-gray-100 mt-10 flex min-h-screen items-center justify-center md:p-20">
      <AnimatePresence>
        <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-lg md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col justify-center bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white md:w-1/2"
          >
            <h2 className="mb-6 text-4xl font-bold">
              {isLogin ? "¡Bienvenido de nuevo!" : "Únete a nosotros!"}
            </h2>
            <p className="mb-8 text-lg">
              {isLogin
                ? "Inicie sesión para acceder a su cuenta"
                : "Cree su cuenta"}
            </p>
            <Image
              width={400}
              height={400}
              src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3"
              alt="Authentication"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full p-12 md:w-1/2"
          >
            {isLogin ? (
              <LoginForm
                formData={formData}
                handleInputChange={handleInputChange}
              />
            ) : (
              <RegisterForm
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                passwordValidation={passwordValidation}
              />
            )}

            <div className="mt-6 flex flex-col space-y-4">
              <button
                type="button"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 flex w-full items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <FcGoogle className="mr-2 h-5 w-5" />
                Continue con Google
              </button>
            </div>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                {isLogin
                  ? "¿No tiene cuenta? Regístrese"
                  : "¿Ya tiene una cuenta? Iniciar sesión"}
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Page;
