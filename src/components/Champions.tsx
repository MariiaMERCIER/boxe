"use client";

import useSWR, { Fetcher } from "swr";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { Typography } from "@material-tailwind/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { ImageSkeleton } from "./ImageSkeleton";

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
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des images", error);
  }
};

export default function Champions() {
  const { data: images, error, isLoading } = useSWR("/api/getImages", fetcher);
  const { user, isLoading: loadingUser } = useUser();

  return (
    <div className="flex flex-col gap-5">
      <Typography variant="h3">{"Galerie d'images"}</Typography>

      {isLoading || loadingUser ? (
        <ImageSkeleton />
      ) : (
        <div className="flex flex-col gap-6">
          {user ? (
            <CldUploadWidget
              signatureEndpoint={"/api/sign-cloudinary-params"}
              uploadPreset="next_boxe_app"
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
            >
              {({ open }) => {
                return (
                  <button onClick={() => open()}>Rajouter des photos</button>
                );
              }}
            </CldUploadWidget>
          ) : (
            <div className="flex  gap-2">
              <Typography variant="small">
                <i>
                  Pour pouvoir rajouter/supprimer des photos il faudrait vous
                  connecter en tant que Administrateur du site.
                </i>
              </Typography>
              <Link
                href="/api/auth/login"
                className="text-sm hover:text-red-600"
              >
                Se connecter
              </Link>
            </div>
          )}

          <div className="flex flex-wrap gap-6">
            {images?.resources.map((image) => {
              return (
                <CldImage
                  key={image.asset_id}
                  width="280"
                  height="300"
                  src={image.public_id}
                  alt="Description of my image"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
