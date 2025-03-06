import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { data } from "../../public/data";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Credenciales recibidas:", credentials);

        if (!credentials?.email || !credentials?.password) {
          console.log("Credenciales incompletas");
          return null;
        }

        const user = data.users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password,
        );

        if (!user) {
          console.log("Usuario no encontrado");
          return null;
        }

        console.log("Usuario autenticado:", user);
        return {
          _id: user._id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
          image: user.image,
          phone: user.phone,
          address: user.address,
          favorites: user.favorites,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        // Incluye toda la información del usuario en la sesión
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image;
        session.user.phone = token.phone;
        session.user.address = token.address;
        session.user.favorites = token.favorites;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // Incluye toda la información del usuario en el token
        token.id = user._id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.image = user.image;
        token.phone = user.phone;
        token.address = user.address;
        token.favorites = user.favorites;
      }
      return token;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "secret",
});