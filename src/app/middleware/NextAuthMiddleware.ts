// middleware.js

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "../auth";

export async function middleware(request: NextRequest) {
  const session = await auth();

  // Lista de rutas protegidas
  const protectedPaths = ["/profile", "/dashboard"];
  const path = request.nextUrl.pathname;

  // Verifica si la ruta actual debe ser protegida
  const isProtectedPath = protectedPaths.some(
    (pp) => path === pp || path.startsWith(`${pp}/`),
  );

  if (isProtectedPath && !session) {
    // Redirecciona al login si no hay sesión y la ruta está protegida
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Lista de rutas donde se aplicará el middleware
  matcher: ["/profile/:path*", "/dashboard/:path*"],
};
