"use client"; // Marque cette page comme client-side rendering

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";

const AdminPage = (props: { signatureEndpoint: string }) => {
  const [result, setResult] = useState<CloudinaryUploadWidgetInfo>();
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (user) {
      router.push("/admin");
    } else {
      router.push("/");
    }
  }, [user, isLoading, router]);

  if (isLoading) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Page d'Administration</h1>{" "}
      {isLoading ? (
        "Chargement ..."
      ) : (
        <CldUploadWidget signatureEndpoint={props.signatureEndpoint}>
          {({ open }) => {
            return <button onClick={() => open()}>Upload an Image</button>;
          }}
        </CldUploadWidget>
      )}
    </div>
  );
};

export default AdminPage;
