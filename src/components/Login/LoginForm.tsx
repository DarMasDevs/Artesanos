import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

interface LoginFormProps {
  formData: {
    email: string;
    password: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm = ({ formData, handleInputChange }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({ email: "", password: "" });
  
    console.log("Intentando iniciar sesión con:", formData.email);
  
    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl: "/profile",
      });
  
      console.log("Resultado de inicio de sesión:", result);
  
      if (result?.error) {
        setErrors({ ...errors, email: "Email o contraseña incorrectos" });
        toast.error("Credenciales inválidas");
      } else {
        toast.success("Inicio de sesión exitoso");
        router.push('/profile');
        router.refresh();
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setErrors({ ...errors, email: "Ocurrió un error al iniciar sesión" });
      toast.error("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: "+100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit} 
      className="space-y-6"
    >
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
      </div>

      <div className="flex flex-col space-y-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
        >
          {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>
      </div>
    </motion.form>
  );
};

export default LoginForm;