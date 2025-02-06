import type { Metadata } from "next";
import "./globals.css";
import { HeaderNavbar } from "@/components/HeaderNavbar";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "My website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="flex h-full flex-col flex-1">
      <head>
        <meta name="description" content="Start with boxe club ASCM" />
        <title>ASCM ton club de boxe!</title>
      </head>
      <UserProvider>
        <body className="flex flex-1 flex-col">
          <div className="sticky top-0 w-full bg-black overflow-hidden z-10 border-b border-gray-600 border-solid ">
            <HeaderNavbar />
          </div>
          <div className="flex flex-1">{children}</div>
          <div className="w-full  border-t border-gray-600 border-solid mt-auto ">
            <Footer />
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
