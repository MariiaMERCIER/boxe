import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export function Footer() {
  return (
    <div className="h-24 flex flex-col w-1200 my-0 mx-auto bg-black ">
      <div className="flex justify-between">
        <div className="flex gap-12">
          <Image
            src={logo}
            alt="logo"
            width={120}
            className="mt-1 flex flex-initial justify-center"
          />
          <div className="p-6">
            <Typography variant="h6" color="white">
              <b> ASCM MARLIOZ </b>
            </Typography>
            <Typography variant="paragraph" color="white">
              Boulevard de la Roche du roie Salle
              <br /> Sta-Bernadette
              <br /> Aix-les-Bains (73100)
            </Typography>
          </div>
        </div>

        <ul className="grid grid-cols-2 p-6">
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 flex font-medium text-nowrap justify-end"
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
            className="p-1  flex font-medium text-nowrap justify-end"
          >
            <a
              href="#about"
              className="flex items-center hover:text-red-500 transition-colors"
            >
              Le club
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 flex font-medium text-nowrap justify-end"
          >
            <a
              href="#price"
              className="flex items-center hover:text-red-500 transition-colors"
            >
              Nos formules
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 flex font-medium text-nowrap justify-end"
          >
            <a
              href="#planning"
              className="flex items-center hover:text-red-500 transition-colors"
            >
              Planning
            </a>
          </Typography>

          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 flex font-medium text-nowrap justify-end"
          >
            <a
              href="#contact"
              className="flex items-center hover:text-red-500 transition-colors"
            >
              Contact
            </a>
          </Typography>
        </ul>
      </div>

      <Typography variant="small" color="white" className="pb-2">
        © 2021 ASCM - Tous droits réservés
      </Typography>
    </div>
  );
}
