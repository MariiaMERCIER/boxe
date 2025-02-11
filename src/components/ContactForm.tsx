import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { Map } from "./Map";
import { FormEvent, useState } from "react";

export function ContactForm() {
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
  };
  return (
    <form
      method="POST"
      className="w-full flex flex-col gap-7 "
      onSubmit={handleSubmit}
    >
      <div className="mb-1 flex flex-col gap-6">
        <div>
          <Input
            label="Votre nom"
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
          <Input
            label="Votre email"
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
          <Input
            label=" Votre numéro de téléphone"
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
            <Textarea
              label="Votre message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
            />
            <Typography className="mt-2 text-xs font-normal text-blue-gray-500">
              Obligatoire
            </Typography>
          </div>
        </div>
        <div className="w-full h-300 lg:w-1/2 boderd-solid border-2 flex lg:hidden">
          <Map />
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
  );
}
