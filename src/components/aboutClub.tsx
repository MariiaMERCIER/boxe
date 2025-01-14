import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import image1 from "@/assets/images/chef.png";
import { ButtonAction } from "@/components/ButtonAction";

export function AboutClub() {
  return (
    <div className="flex flex-col my-0 mx-auto gap-6 w-1200" id="club">
      <Typography variant="h3" className="uppercase text-black">
        Le club
        <i>
          <b className="text-red-600">
            {"   "}ASCM - Votre Passion, Notre Engagement !
          </b>
        </i>
      </Typography>
      <div className="flex flex-row gap-16">
        <Image src={image1} alt="chef" width="500" height="500" />
        <div className="flex flex-col items-start justify-between aligngap-6">
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-medium leading-6 text-black "
          >
            Le <b className="text-red-600">ASCM</b> est bien plus qu’un simple
            club de boxe : c’est une véritable communauté dynamique. Un lieu
            d’entraînement où la discipline, la persévérance et le dépassement
            de soi sont au cœur de chaque séance. Que vous soyez débutant,
            confirmé ou compétiteur, nous vous accueillons avec enthousiasme
            dans un environnement bienveillant et stimulant, où chacun peut se
            surpasser à son rythme.
            <br />
            Le club met à votre disposition des équipements modernes et de
            qualité, afin de vous permettre de vous entraîner dans les
            meilleures conditions possibles : rings de boxe, sacs de frappe,
            gants, protections, ainsi que des espaces dédiés à la musculation et
            à la préparation physique.
            <br />
            Que vous soyez en quête de remise en forme, de compétition ou
            simplement de plaisir sportif,
            <b className="text-red-600">
              le ASCM est l’endroit idéal pour vous
            </b>
            . Rejoignez notre communauté et découvrez les bienfaits physiques et
            mentaux de la boxe. Nous sommes impatients de vous accueillir, de
            vous accompagner dans votre progression, et de partager chaque étape
            de votre parcours.
            <br />
            <b className="text-red-600">Votre défi commence ici !</b>
          </Typography>
          <ButtonAction name="Nous contacter" link="#contact" />
        </div>
      </div>
    </div>
  );
}
