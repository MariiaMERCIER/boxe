"use client";
import React from "react";
import {
  Avatar,
  Badge,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import User from "@/assets/images/user.png";
import { useUser } from "@auth0/nextjs-auth0/client";

export function HeaderNavbar() {
  const { user, isLoading } = useUser();
  return (
    <ul className="h-24 flex justify-between items-center  w-1200 my-0 mx-auto">
      <div className="flex gap-6">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={120}
            className="mt-1 flex flex-initial justify-center"
          />
        </Link>
      </div>

      <div className="flex  justify-end items-center gap-6">
        <Typography
          as="a"
          variant="small"
          color="white"
          href="/"
          className="p-1 font-medium uppercase text-nowrap  hover:text-red-600 "
        >
          Accueil
        </Typography>
        <Typography
          as="a"
          href="/#about"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap hover:text-red-600"
        >
          Le club
        </Typography>
        <Typography
          as="a"
          href="/#price"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap hover:text-red-600 "
        >
          Nos formules
        </Typography>
        <Typography
          as="a"
          variant="small"
          color="white"
          href="/#planning"
          className="p-1 font-medium uppercase text-nowrap hover:text-red-600"
        >
          Planning
        </Typography>
        <Typography
          as="a"
          href="/champion"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap  hover:text-red-600"
        >
          Nos champions
        </Typography>
        <Typography
          as="a"
          href="/#contact"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap hover:text-red-600"
        >
          Contact
        </Typography>
        <Menu>
          <MenuHandler>
            <div>
              <Tooltip
                placement="top"
                content={user ? "Admin" : "Pas connecté"}
              >
                <Badge
                  placement="bottom-end"
                  overlap="circular"
                  color={isLoading ? "gray" : user ? "green" : "red"}
                  withBorder
                >
                  <Image
                    src={User}
                    alt="user"
                    width={30}
                    className="mt-1 flex flex-initial justify-center cursor-pointer"
                  />
                </Badge>
              </Tooltip>
            </div>
          </MenuHandler>
          <MenuList>
            {user ? (
              <MenuItem>
                <a href="/api/auth/logout">Se déconnecter</a>
              </MenuItem>
            ) : (
              <MenuItem>
                <a href="/api/auth/login">Se connecter</a>
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </div>
    </ul>
  );
}
