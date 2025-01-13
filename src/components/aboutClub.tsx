import { Carousel, Typography } from "@material-tailwind/react";
import Image from "next/image";
import image1 from "@/assets/images/chef.png";

export function AboutClub() {
  return (
    <div>
      <Image src={image1} alt="chef" width="300" height="150" />
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium uppercase"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum.
        Est ante in nibh mauris cursus mattis molestie. Etiam tempor orci eu
        lobortis elementum. Vitae nunc sed velit dignissim sodales. Id diam
        maecenas ultricies mi eget. Enim nec dui nunc mattis enim ut tellus
        elementum. Ac auctor augue mauris augue. At consectetur lorem donec
        massa sapien faucibus et. Praesent semper feugiat nibh sed pulvinar
        proin gravida hendrerit lectus. Et molestie ac feugiat sed lectus
        vestibulum mattis ullamcorper velit. Maecenas accumsan lacus vel
        facilisis volutpat est. Ullamcorper dignissim cras tincidunt lobortis.
        Vitae sapien pellentesque habitant morbi. Eget velit aliquet sagittis id
        consectetur purus. Neque aliquam vestibulum morbi blandit cursus risus.
        Massa vitae tortor condimentum lacinia quis vel eros donec. Sollicitudin
        tempor id eu nisl nunc mi ipsum. Integer feugiat scelerisque varius
        morbi enim nunc. Ut placerat orci nulla pellentesque dignissim enim.
        Pulvinar pellentesque habitant morbi tristique senectus et netus et
        malesuada. Illo dolore ut veniam dolorem mollitia itaque animi quidem
        commodi, repudiandae enim sapiente, et molestias maiores nemo esse,
        illum qui.
      </Typography>
    </div>
  );
}
