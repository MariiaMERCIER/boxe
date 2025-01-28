"use client";

import useSWR, { Fetcher } from "swr";

import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { Typography } from "@material-tailwind/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

type Data = {
  resources: {
    url: string;
    public_id: string;
    asset_id: string;
    created_at: string;
    secure_url: string;
  }[];
  rate_limit_allowed: number;
  rate_limit_remaining: number;
  rate_limit_reset_at: string;
};
const fetcher: Fetcher<Data> = async (url: string) => {
  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error("Erreur lors de la récupération des images");
  }
  const data = await response.json();

  return data;
};

export default function Champions() {
  const { data: images, error, isLoading } = useSWR("/api/getImages", fetcher);
  const { user, isLoading: loadingUser } = useUser();
  console.log("user", user);
  if (isLoading ?? loadingUser) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  return (
    <div>
      <Typography variant="h3">{"Galerie d'images"}</Typography>
      {user ? (
        <Link href="/admin">Rajouter les photos</Link>
      ) : (
        <div>
          <Typography variant="small">
            <i>
              Pour pouvoir rajouter/supprimer des photos il faudrait vous
              connecter en tant que Administrateur du site.
            </i>
          </Typography>
          <a href="/api/auth/login">
            <button>Se connecter</button>
          </a>
        </div>
      )}

      {isLoading ? (
        <Typography variant="small">Chargement...</Typography>
      ) : (
        <div>
          {images?.resources.map((image) => {
            return (
              <CldImage
                key={image.asset_id}
                width="960"
                height="600"
                src={image.public_id}
                alt="Description of my image"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
