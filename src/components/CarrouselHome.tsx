"client side";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import image1 from "@/assets/images/boxe-home-img1.jpg";
import image2 from "@/assets/images/boxe-home-img2.jpg";
import image3 from "@/assets/images/boxe-home-img3.jpg";
import Image from "next/image";
import { ButtonAction } from "@/components/ButtonAction";

export function CarrouselHome() {
  return (
    <Carousel
      className="h-fit"
      navigation={() => <div className="display=none" />}
    >
      <div className="relative h-full w-full">
        <Image
          src={image1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Philippe Coelho vous accueille dans son club de boxe à
              Aix-les-bains.
            </Typography>
            <div className="flex justify-center gap-2">
              <ButtonAction name="Le club" color="white" link="/#about" />
              <ButtonAction
                name="Planning"
                variant="text"
                color="white"
                link="/#planning"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={image2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Que vous soyez débutant ou confirmé venez pratiquer la boxe
              Thaïlandaise dans une salle équipée et avec un entraineur
              qualifié.
            </Typography>
            <div className="flex gap-2">
              <ButtonAction name="Le club" color="white" link="#club" />
              <ButtonAction
                name="Planning"
                variant="text"
                color="white"
                link="/#planning"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={image3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Palmares du club
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Félicitations à nos champions qui ont brillé lors des dernières
              compétitions.
            </Typography>
            <div className="flex gap-2">
              <ButtonAction
                name="Le club"
                color="white"
                variant="text"
                link="/#about"
              />
              <ButtonAction
                name="Planning"
                variant="text"
                color="white"
                link="/#planning"
              />
              <ButtonAction
                name="Nos champions"
                color="white"
                link="/champion"
              />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
