"use client";

import useSWR, { Fetcher, mutate } from "swr";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { Button, Typography } from "@material-tailwind/react";
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

const deleteImage = async (publicId: string) => {
  try {
    // Envoi de la requête DELETE à l'API
    const response = await fetch("/api/delete-cloudinary-image", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_id: publicId }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Image supprimée avec succès");
      mutate("/api/get-images");
    } else {
      console.error(data.error || "Erreur lors de la suppression");
      alert(data.error || "Erreur lors de la suppression");
    }
  } catch (error) {
    console.error("Erreur de suppression:", error);
  }
};

export default function Champions() {
  const { data: images, isLoading } = useSWR("/api/get-images", fetcher);
  const { user, isLoading: loadingUser } = useUser();

  return (
    <div className="flex flex-col gap-5">
      <Typography variant="h3">{"Galerie d'images"}</Typography>

      {isLoading || loadingUser ? (
        <ImageSkeleton />
      ) : (
        <div className="flex flex-col gap- items-start gap-6">
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
                  <Button
                    size="md"
                    className="bg-white text-black hover:text-red-600"
                    onClick={() => open()}
                  >
                    Rajouter des photos
                  </Button>
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
                <figure className="relative h-300 w-280">
                  <CldImage
                    className=" rounded-xl object-cover object-center"
                    key={image.asset_id}
                    width="280"
                    height="300"
                    src={image.public_id}
                    alt="Description of my image"
                  />
                  <figcaption
                    v-if={user}
                    className="absolute top-2 right-2 rounded-full  bg-white/75 shadow-lg px-3 py-1"
                  >
                    <Typography
                      className=" hover:text-red-600 text-black cursor-pointer"
                      as="a"
                      variant="h5"
                      color="blue-gray"
                      onClick={() => deleteImage(image.public_id)}
                    >
                      x
                    </Typography>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
