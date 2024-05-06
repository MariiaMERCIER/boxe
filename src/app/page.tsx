"use client";

import { CarrouselHome } from "@/components/carrouselHome";
import { Formules } from "@/components/formules";
import { HeaderNavbar } from "@/components/headerNavbar";
import { Typography } from "@material-tailwind/react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeaderNavbar />
      <CarrouselHome />
      <div className="p-16 flex flex-col gap-6">
        <Typography variant="h3" className="uppercase">
          Nos formules
        </Typography>
        <Formules />
      </div>
    </main>
  );
}
