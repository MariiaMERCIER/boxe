"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import fb from "@/assets/images/fb.png";
import instagram from "@/assets/images/instagram.png";
import Link from "next/link";
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
            <Typography
              variant="small"
              color="white"
              className="flex flex-col justify-start  items-start "
            >
              <span className="font-bold">ASCM MARLIOZ</span>

              <span>Boulevard de la Roche du roie Salle</span>
              <span> Sta-Bernadette</span>

              <span> Aix-les-Bains (73100)</span>
            </Typography>
            <div className="flex gap-x-2">
              <Link href="https://www.facebook.com/team.marlioz">
                <Image
                  src={fb}
                  alt="facebook"
                  width={20}
                  className="flex justify-center "
                ></Image>
              </Link>
              <Link href="https://www.instagram.com/ascm_muaythai_gym_/">
                <Image
                  src={instagram}
                  alt="instagram"
                  width={20}
                  className="flex justify-center "
                ></Image>
              </Link>
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              variant="small"
              color="white"
              href="#home"
              className="p-1 flex font-medium text-nowrap justify-end  hover:text-red-600"
            >
              Accueil
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              variant="small"
              color="white"
              href="#about"
              className="p-1  flex font-medium text-nowrap justify-end  hover:text-red-600"
            >
              Le club
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              variant="small"
              href="#price"
              color="white"
              className="p-1 flex font-medium text-nowrap justify-end  hover:text-red-600"
            >
              Nos formules
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              variant="small"
              color="white"
              href="#planning"
              className="p-1 flex font-medium text-nowrap justify-end  hover:text-red-600"
            >
              Planning
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              variant="small"
              href="/champion"
              color="white"
              className="p-1 flex font-medium text-nowrap justify-end hover:text-red-600"
            >
              Nos champions
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              variant="small"
              href="#contact"
              color="white"
              className="p-1 flex font-medium text-nowrap justify-end hover:text-red-600"
            >
              Contact
            </Typography>
          </li>
        </ul>
      </div>

      <Typography color="white" className="pb-2 w-1200 my-0 mx-auto text-xs">
        &copy; 2021 ASCM - Tous droits réservés
      </Typography>
    </footer>
  );
}
