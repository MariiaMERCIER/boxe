import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import fb from "@/assets/images/fb.png";
import instagram from "@/assets/images/instagram.png";

export function ContactFooter() {
  return (
    <div>
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
          />
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
  );
}
