"use client";

import useSWR, { Fetcher } from "swr";

import Image from "next/image";
import { CldImage } from "next-cloudinary";

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

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;
  console.log(images);
  return (
    <div>
      <h2>Galerie d'images</h2>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          {images?.resources.map((image) => {
            return (
              <CldImage
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
