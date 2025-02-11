"use client";
import React from "react";
import { Card } from "@material-tailwind/react";
import { Map } from "./Map";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <Card
      color="transparent"
      className="flex flex-col lg:flex-row w-full gap-20 flex-between min-h-592"
    >
      <div className="flex flex-col w-full lg:w-1/2 gap-7 ">
        <ContactForm />
      </div>

      <div className="w-full h-full  lg:w-1/2 boderd-solid border-2 hidden lg:flex">
        <Map />
      </div>
    </Card>
  );
}
