import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export function HeaderNavbar() {
  return (
    <ul className="w-screen h-24 flex justify-between items-center pl-10 pr-10">
      <div className="flex basis-3/12 gap-6">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#home"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Accueil
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#club"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Le club
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#tarifs"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Nos formules
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#planning"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Planning
          </a>
        </Typography>
        {/* <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#planning"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Galerie
          </a>
        </Typography> */}
      </div>
      <Image
        src={logo}
        alt="logo"
        width={150}
        className="mt-1 flex flex-initial justify-center "
      />
      <div className="flex basis-3/12 justify-end">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#contact"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Contact
          </a>
        </Typography>
      </div>
    </ul>
  );
}
