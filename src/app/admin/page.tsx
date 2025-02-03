"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { CldUploadWidget } from "next-cloudinary";

const AdminPage = () => {
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

  return (
    <div>
      <h1>Page d'Administration</h1>{" "}
      {isLoading ? (
        "Chargement ..."
      ) : (
        <CldUploadWidget
          signatureEndpoint={"/api/sign-cloudinary-params"}
          uploadPreset="next_boxe_app"
          onQueuesEnd={(result, { widget }) => {
            widget.close();
          }}
        >
          {({ open }) => {
            return <button onClick={() => open()}>Upload an Image</button>;
          }}
        </CldUploadWidget>
      )}
    </div>
  );
};

export default AdminPage;
