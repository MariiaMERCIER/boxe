"use client";

import { AboutClub } from "@/components/AboutClub";
import { CarrouselHome } from "@/components/CarrouselHome";
import { Formules } from "@/components/Formules";
import { HeaderNavbar } from "@/components/HeaderNavbar";
import { Planning } from "@/components/Planning";
import { Typography } from "@material-tailwind/react";
export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col h-screen">
        <HeaderNavbar />
        <CarrouselHome />
      </div>
      <div className="p-16 h-2/3  bg-white w-screen">
        <AboutClub />
      </div>

      <div className="p-16 flex flex-col gap-6">
        <Typography variant="h3" className="uppercase">
          Nos formules
        </Typography>
        <Formules />
      </div>
      <div className="p-16 px h-2/3 w-screen bg-white">
        <div className="w-1200">
          <Typography variant="h3" className="uppercase text-black">
            Planning
          </Typography>
        </div>
        <div className="w-2/3 my-0 mx-auto ">
          <Planning />
        </div>
      </div>
    </main>
  );
}
