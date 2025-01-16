import { Card, Input, Textarea, Typography } from "@material-tailwind/react";
import { ButtonAction } from "./ButtonAction";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { Map } from "./Map";
export function Contact() {
  return (
    <Card
      color="transparent"
      id="contact"
      className="flex flex-row w-full gap-20 flex-between"
    >
      <div className="flex flex-col w-1/2 gap-7">
        <form className="w-4/5">
          <div className="mb-1 flex flex-col gap-6">
            <div>
              <Typography variant="h6" className="text-white">
                Votre nom
              </Typography>
              <Input
                color="white"
                size="lg"
                placeholder="Prénom NOM"
                crossOrigin=""
              />
            </div>
            <div>
              <Typography variant="h6" className="text-white">
                Votre email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                crossOrigin=""
                color="white"
              />
            </div>
            <div>
              <Typography variant="h6" className="text-white">
                Votre numéro de téléphone
              </Typography>
              <Input
                type="tel"
                size="lg"
                crossOrigin=""
                placeholder="+33654321098"
                color="white"
              />
            </div>
            <div>
              <div>
                <Typography variant="h6" className="text-white">
                  Votre message
                </Typography>
                <Textarea
                  color="white"
                  rows={6}
                  placeholder="Message"
                  name="message"
                />
              </div>
            </div>
          </div>
        </form>
        <ButtonAction name="Enoyer" link="#home" />
      </div>

      <div className="w-1/2">
        <Map />
      </div>
    </Card>
  );
}
