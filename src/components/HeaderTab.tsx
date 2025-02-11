import { Typography } from "@material-tailwind/react";

export function HeaderTab(props: { name: string; link: string }) {
  return (
    <Typography
      as="a"
      variant="small"
      color="white"
      href={props.link}
      className="p-1 font-medium uppercase text-nowrap  hover:text-red-600 hidden lg:flex"
    >
      {props.name}
    </Typography>
  );
}
