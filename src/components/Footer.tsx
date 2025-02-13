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
      <div className="flex  bg-black text-center justify-between lg:w-1200 w-full my-0 mx-auto pl-4 pr-4">
        <div className="flex items-center gap-x-6 ">
          <Image
            src={logo}
            alt="logo"
            width={120}
            className="flex justify-center "
          />
          <div className="flex-col gap-y-2 hidden lg:flex">
            <ContactFooter />
          </div>
        </div>

        <ul className="flex flex-wrap lg:items-center gap-y-2 gap-x-8 lg:flex-row flex-col items-end">
          <li>
            <FooterTab name="Accueil" link="/" />
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

      <Typography
        color="white"
        className="pb-2 w-1200 my-0 mx-auto text-xs pl-4 pr-4"
      >
        &copy; 2021 ASCM - Tous droits réservés
      </Typography>
    </footer>
  );
}
