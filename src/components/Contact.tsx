"use client";
import React, { FormEvent } from "react";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Map } from "./Map";
import FormData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(FormData);

export function Contact() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ email, message, name, phone }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {}
    console.log("error");
  };

  return (
    <Card
      color="transparent"
      id="contact"
      className="flex flex-row w-full gap-20 flex-between"
    >
      <div className="flex flex-col w-1/2 gap-7">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <div>
              <Typography variant="h6" className="text-white">
                Votre nom
              </Typography>
              <Input
                color="white"
                value={name}
                size="lg"
                placeholder="Prénom NOM"
                crossOrigin=""
                onChange={(e) => setName(e.target.value)}
              />
              <Typography className="mt-2 text-xs font-normal text-blue-gray-500">
                Obligatoire
              </Typography>
            </div>
            <div>
              <Typography variant="h6" className="text-white">
                Votre email
              </Typography>
              <Input
                type="email"
                value={email}
                size="lg"
                placeholder="name@mail.com"
                crossOrigin=""
                color="white"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Typography className="mt-2 text-xs font-normal text-blue-gray-500">
                Obligatoire
              </Typography>
            </div>
            <div>
              <Typography variant="h6" className="text-white">
                Votre numéro de téléphone
              </Typography>
              <Input
                type="phone"
                size="lg"
                crossOrigin=""
                placeholder="+33654321098"
                color="white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <div>
                <Typography variant="h6" className="text-white">
                  Votre message
                </Typography>
                <Textarea
                  value={message}
                  color="white"
                  rows={6}
                  placeholder="Message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-start">
          <Button size="lg" disabled={!name || !email} type="submit">
            Envoyer
          </Button>
        </div>
      </div>

      <div className="w-1/2">
        <Map />
      </div>
    </Card>
  );
}
