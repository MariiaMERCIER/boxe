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
  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      mg.messages
        .create("sandbox-123.mailgun.org", {
          from: `Excited User <mailgun@${process.env.MAILGUN_DOMAIN}>`,
          to: ["mariia.mercier@outlook.fr"],
          subject: "Hello",
          text: "Testing some Mailgun awesomness!",
          html: "<h1>Testing some Mailgun awesomness!</h1>",
        })
        .then((msg) => console.log(msg))
        .catch((err) => console.error(err));
      setFormSuccess(true);
      setFormSuccessMessage("message");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Card
      color="transparent"
      className="flex flex-row w-full gap-20 flex-between min-h-592"
    >
      <div className="flex flex-col w-1/2 gap-7 ">
        {formSuccess ? (
          <div>{formSuccessMessage}</div>
        ) : (
          <form
            method="POST"
            className="w-full flex flex-col gap-7 "
            onSubmit={handleSubmit}
          >
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
            <div>
              <Button size="lg" disabled={!name || !email} type="submit">
                Envoyer
              </Button>
            </div>
          </form>
        )}
      </div>
      <div className="w-1/2">
        <Map />
      </div>
    </Card>
  );
}
