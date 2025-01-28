import {
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
} from "@auth0/nextjs-auth0";

export const GET = handleAuth();

// export default handleAuth({
//   callback: async (request: any, response: any) => {
//     console.log("handleAuth");
//     try {
//       console.log("Callback :: ", response);
//       await handleCallback(request, response, {
//         redirectUri: "http://localhost:3000/admin",
//       });
//     } catch (error) {
//       console.log("Callback error :: ", error);
//       response.redirect("/auth/error");
//     }
//   },
//   login: async (request: any, response: any) => {
//     console.log("Logging in");
//     // Pass custom parameters to login
//     try {
//       await handleLogin(request, response, {
//         authorizationParams: {
//           audience: "http://localhost:3000",
//           scope: "openid profile email",
//           response_type: "code",
//           redirect_uri: "http://localhost:3000/api/auth/callback",
//           connection_scope: "openid profile email",
//         },
//         returnTo: "/admin",
//       });
//       console.log("Successfully logged in");
//     } catch (error) {
//       console.log("Error logging in:", error);
//     }
//   },
// });
