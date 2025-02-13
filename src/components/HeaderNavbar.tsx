"use client";
import React from "react";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

import { HeaderTab } from "./HeaderTab";
import { UserMenu } from "./UserMenu";

export function HeaderNavbar() {
  return (
    <ul className="h-24 flex justify-between items-center w-full max-w-1200 mx-auto md:px-8 px-4 ">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={120}
          className="mt-1 flex flex-initial justify-center"
        />
      </Link>

      <div className="flex  justify-end items-center gap-6">
        <HeaderTab name="Accueil" link="/" />
        <HeaderTab name="Le club" link="/#about" />
        <HeaderTab name="Nos formules" link="/#price" />
        <HeaderTab name="Planning" link="/#planning" />
        <HeaderTab name="Nos champions" link="/champion" />
        <HeaderTab name="Contact" link="/#contact" />
        <UserMenu />
      </div>
    </ul>
  );
}
