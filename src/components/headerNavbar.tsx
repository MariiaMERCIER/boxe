import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export function HeaderNavbar() {
  return (
    <ul className="w-screen h-24 flex justify-between items-center pl-10 pr-10">
      <div className="flex basis-3/12">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Accueil
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Le club
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Planning
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Tarifs
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </Typography>
      </div>
      <Image
        src={logo}
        alt="logo"
        width={150}
        className="mt-1 flex flex-initial justify-center "
      />
      <div className="flex basis-3/12 justify-end">icons</div>
    </ul>
  );
}

// export function NavbarSimple() {
//   const [openNav, setOpenNav] = React.useState(false);

//   const handleWindowResize = () =>
//     window.innerWidth >= 960 && setOpenNav(false);

//   React.useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   }, []);

//   return (
//     <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <HeaderNavbar />
//         </div>
//         {/* <IconButton
//           variant="text"
//           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//           ripple={false}
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton> */}
//       </div>
//       <Collapse open={openNav}>
//         <HeaderNavbar />
//       </Collapse>
//     </Navbar>
//   );
// }
