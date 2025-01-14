import { Button } from "@material-tailwind/react";
import { variant } from "@material-tailwind/react/types/components/button";
import { color } from "@material-tailwind/react/types/components/button";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export function ButtonAction(props: {
  name: string;
  color?: color;
  variant?: variant;
  link: Url;
}) {
  return (
    <Link href={props.link}>
      <Button size="lg" color={props.color} variant={props.variant}>
        {props.name}
      </Button>
    </Link>
  );
}
