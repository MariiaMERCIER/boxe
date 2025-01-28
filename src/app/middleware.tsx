// import { getSession } from "@auth0/nextjs-auth0";
// import { NextResponse } from "next/server";

// export async function middleware(req: Request) {
//   console.log("middleware");
//   // Vérifie si l'utilisateur est connecté en utilisant getSession
//   const session = await getSession(req);

//   if (!session || !session.user) {
//     console.log("no session");
//     // Si pas d'utilisateur connecté, redirige vers la page de login
//     return NextResponse.redirect(new URL("/api/auth/login", req.url));
//   }

//   // Si l'utilisateur est authentifié, continue la requête
//   return NextResponse.next();
// }

// // Configurer les pages à protéger avec ce middleware
// export const config = {
//   matcher: ["/admin"], // Appliquer cette règle à ces pages
// };
