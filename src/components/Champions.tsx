"use client";

import useSWR from "swr";

import { CldUploadWidget } from "next-cloudinary";
import { Button, Typography } from "@material-tailwind/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { ImageSkeleton } from "./ImageSkeleton";
import { ChampionGalery } from "./ChampionGalery";
import { fetcher } from "@/lib/fetcher";

type Image = {
  public_id: string;
  asset_id: string;
  created_at: string;
  secure_url: string;
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
        <div className="flex flex-col items-start gap-6">
          {user ? (
            <CldUploadWidget
              signatureEndpoint={"/api/sign-cloudinary-params"}
              uploadPreset="next_boxe_app"
              onQueuesEnd={(result, { widget }) => {
                widget.close();
              }}
              options={{
                tags: ["boxe"],
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
            <div className="flex flex-col gap-2 lg:flex-row ">
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
            {images?.resources.map((image: Image) => {
              return (
                <div key={image.asset_id} className="w-280 h-300 flex ">
                  <ChampionGalery image={image} user={user ? true : false} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
