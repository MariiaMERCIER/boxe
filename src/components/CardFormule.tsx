import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";

export function CardFormule(props: {
  name: string;
  content: string;
  price: string;
  image: StaticImageData;
  alt: string;
}) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image src={props.image} alt={props.alt} />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 flex justify-between"
        >
          {props.name}
          <Typography variant="lead" color="red">
            {props.price}
          </Typography>
        </Typography>
        <Typography variant="paragraph">{props.content}</Typography>
      </CardBody>
    </Card>
  );
}
