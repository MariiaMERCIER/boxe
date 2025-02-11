import { Typography } from "@material-tailwind/react";

export function FooterTab(props: { name: string; link: string }) {
  return (
    <Typography
      as="a"
      variant="small"
      color="white"
      href={props.link}
      className="p-1  flex font-medium text-nowrap justify-end  hover:text-red-600"
    >
      {props.name}
    </Typography>
  );
}
