"use client";

import { AboutClub } from "@/components/AboutClub";
import { CarrouselHome } from "@/components/CarrouselHome";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Formules } from "@/components/Formules";
import { Planning } from "@/components/Planning";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Typography } from "@material-tailwind/react";

import "mapbox-gl/dist/mapbox-gl.css";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      id="home"
    >
      <div className="flex flex-col h-screen">
        <CarrouselHome />
      </div>
      <div
        className=" p-16 h-2/3 bg-white w-screen flex flex-col gap-6"
        id="about"
      >
        <div className="w-1200 my-0 mx-auto">
          <Typography variant="h3" className="uppercase text-black">
            Le club
            <i>
              <b className="text-red-600">
                {"   "}ASCM - Votre Passion, Notre Engagement !
              </b>
            </i>
          </Typography>
        </div>
        <AboutClub />
      </div>

      <div className="p-16 flex flex-col gap-6 " id="price">
        <Typography variant="h3" className="uppercase">
          Nos formules
        </Typography>
        <Formules />
      </div>
      <div
        className="p-16 px h-2/3 w-screen bg-white flex flex-col gap-6"
        id="planning"
      >
        <div className="w-1200 my-0 mx-auto">
          <Typography variant="h3" className="uppercase text-black">
            Planning
          </Typography>
        </div>
        <div className="w-1200 my-0 mx-auto ">
          <Planning />
        </div>
      </div>
      <div
        className="w-1200 my-0 mx-auto min-h-1/2 py-16 flex flex-col gap-6"
        id="contact"
      >
        <Typography variant="h3" className="uppercase white">
          Nous contacter
        </Typography>
        <Contact />
      </div>
      <div className="w-full  border-t border-gray-600 border-solid">
        <Footer />
      </div>
    </main>
  );
}
