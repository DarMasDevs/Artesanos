import "next-auth";

// Extender la interfaz Session
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      image?: string;
      // Añade aquí cualquier otro campo personalizado
    }
  }

  interface User {
    id: string;
    email: string;
    name?: string;
    image?: string;
    // Otros campos que puedas necesitar
  }
}

// Extender la interfaz JWT
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    // Añade aquí otros campos que quieras guardar en el token
  }
}