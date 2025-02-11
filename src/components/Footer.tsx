"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

import Link from "next/link";
import { FooterTab } from "./FooterTab";
import { ContactFooter } from "./ContactFooter";
export function Footer() {
  return (
    <footer className="bg-black py-8 flex flex-col gap-y-4">
      <div className="flex  bg-black text-center md:justify-between w-1200 my-0 mx-auto">
        <div className="flex items-center gap-x-6 ">
          <Image
            src={logo}
            alt="logo"
            width={120}
            className="flex justify-center "
          />
          <div className="flex flex-col gap-y-2">
            <ContactFooter />
          </div>
        </div>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <FooterTab name="Accuiel" link="/" />
          </li>
          <li>
            <FooterTab name="Le club" link="/#about" />
          </li>
          <li>
            <FooterTab name="Nos formules" link="/#price" />
          </li>
          <li>
            <FooterTab name="Planning" link="/#planning" />
          </li>
          <li>
            <FooterTab name="Nos champions" link="/champion" />
          </li>
          <li>
            <FooterTab name="Contact" link="/#contact" />
          </li>
        </ul>
      </div>

      <Typography color="white" className="pb-2 w-1200 my-0 mx-auto text-xs">
        &copy; 2021 ASCM - Tous droits réservés
      </Typography>
    </footer>
  );
}
