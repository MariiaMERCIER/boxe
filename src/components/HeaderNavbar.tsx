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
    <ul className="h-24 flex justify-between items-center pl-20 pr-20 ">
      <div className="flex gap-6">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap"
        >
          <a
            href="/"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Accueil
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap"
        >
          <a
            href="/#about"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Le club
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap"
        >
          <a
            href="/#price"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Nos formules
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap"
        >
          <a
            href="/#planning"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Planning
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap"
        >
          <a
            href="/champion"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Nos champions
          </a>
        </Typography>
      </div>
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={150}
          className="mt-1 flex flex-initial justify-center"
        />
      </Link>
      <div className="flex basis-3/12 justify-end items-center gap-6">
        <Typography
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium uppercase text-nowrap"
        >
          <a
            href="/#contact"
            className="flex items-center hover:text-red-500 transition-colors"
          >
            Contact
          </a>
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
                  color={user ? "green" : "red"}
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
