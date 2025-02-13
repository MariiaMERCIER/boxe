import { Typography } from "@material-tailwind/react";
import { CldImage } from "next-cloudinary";
import { mutate } from "swr";

async function deleteImage(id: string) {
  try {
    const response = await fetch("/api/delete-cloudinary-image", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_id: id }),
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
}

export function ChampionGalery(props: {
  image: {
    public_id: string;
    asset_id: string;
    created_at: string;
    secure_url: string;
  };
  user: boolean;
}) {
  return (
    <div key={props.image.asset_id} className="w-280 h-300 flex ">
      {props.user ? (
        <figure className="relative flex w-280 h-300 justify-start ">
          <CldImage
            width="280"
            height="300"
            className="rounded-xl object-cover object-center"
            src={props.image.public_id}
            alt="Description of my image"
          />

          <figcaption className="absolute top-2 right-2 rounded-full  bg-white/75 shadow-lg px-3 py-1">
            <Typography
              className=" hover:text-red-600 text-black cursor-pointer"
              as="a"
              variant="h5"
              color="blue-gray"
              onClick={() => deleteImage(props.image.public_id)}
            >
              x
            </Typography>
          </figcaption>
        </figure>
      ) : (
        <CldImage
          className=" rounded-xl object-cover object-center"
          width="280"
          height="300"
          src={props.image.public_id}
          alt="Description of my image"
        />
      )}
    </div>
  );
}
