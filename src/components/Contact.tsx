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
import { ContactForm } from "@/app/api/contact/route";

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({
          email: "",
          message: "",
          name: "",
          phone: "",
        });
        setResponseMessage(
          "Votre message a bien été envoyé. Merci de nous avoir contacté."
        );
      } else {
        setResponseMessage(data.error || "Une erreur est survenue");
      }
    } catch (error) {
      setResponseMessage("Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      color="transparent"
      className="flex flex-row w-full gap-20 flex-between min-h-592"
    >
      <div className="flex flex-col w-1/2 gap-7 ">
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
                value={formData.name}
                size="lg"
                placeholder="Prénom NOM"
                name="name"
                crossOrigin=""
                onChange={handleInputChange}
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
                value={formData.email}
                size="lg"
                placeholder="name@mail.com"
                name="email"
                crossOrigin=""
                color="white"
                onChange={handleInputChange}
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
                name="phone"
                color="white"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <div>
                <Typography variant="h6" className="text-white">
                  Votre message
                </Typography>
                <Textarea
                  value={formData.message}
                  name="message"
                  color="white"
                  rows={6}
                  placeholder="Message"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div>
            <Button
              size="lg"
              disabled={!formData.email || !formData.message}
              type="submit"
            >
              Envoyer
            </Button>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <Map />
      </div>
    </Card>
  );
}
