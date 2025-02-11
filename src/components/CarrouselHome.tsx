"client side";
import { Carousel } from "@material-tailwind/react";
import image1 from "@/assets/images/boxe-home-img1.jpg";
import image2 from "@/assets/images/boxe-home-img2.jpg";
import image3 from "@/assets/images/boxe-home-img3.jpg";
import { CarrouselImage } from "./CarrouselImage";

export function CarrouselHome() {
  return (
    <Carousel navigation={() => <div className="display=none" />}>
      <CarrouselImage
        image={image1}
        alt="image 1"
        content="Philippe Coelho vous accueille dans son club de boxe à
              Aix-les-bains."
        position="start"
      />
      <CarrouselImage
        image={image2}
        alt="image 2"
        content="Que vous soyez débutant ou confirmé venez pratiquer la boxe
              Thaïlandaise dans une salle équipée et avec un entraineur
              qualifié."
        position="center"
      />
      <CarrouselImage
        image={image3}
        alt="image 3"
        content="Félicitations à nos champions qui ont brillé lors des dernières
              compétitions."
        champion
        position="end"
      />
    </Carousel>
  );
}
