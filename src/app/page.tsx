"use client";

import { CarrouselHome } from "@/components/carrouselHome";
import { HeaderNavbar } from "@/components/headerNavbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeaderNavbar />
      <CarrouselHome />
    </main>
  );
}
