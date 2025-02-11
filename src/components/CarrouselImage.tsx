import Image, { StaticImageData } from "next/image";
import { ButtonAction } from "./ButtonAction";
import { Typography } from "@material-tailwind/react";
export function CarrouselImage(props: {
  image: StaticImageData;
  content: string;
  champion?: boolean;
  alt: string;
  position: string;
}) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={props.image}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <div
        className={`absolute  inset-0 grid  h-full w-full items-${props.position} bg-black/75`}
      >
        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 object-cover">
          <Typography variant="lead" color="white" className="mb-12 opacity-80">
            {props.content}
          </Typography>
          <div className="flex gap-2 ">
            <ButtonAction name="Le club" color="white" link="#club" />
            <ButtonAction
              name="Planning"
              variant="text"
              color="white"
              link="/#planning"
            />
            <ButtonAction
              v-if={props.champion ? true : false}
              name="Nos champions"
              color="white"
              link="/champion"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
