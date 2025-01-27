import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

const LoginPage = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/admin");
    } else {
      window.location.href = "/api/auth/login";
    }
  }, [user, router]);

  return <div>Chargement...</div>;
};

export default LoginPage;
