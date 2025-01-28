import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from "next";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface RequestBody {
  paramsToSign: Record<string, string>;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  if (!process.env.CLOUDINARY_API_SECRET) {
    return res.status(500).json({ error: "API secret not set" });
  }

  const body: RequestBody = req.body;

  if (!body || !body.paramsToSign) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const signature = cloudinary.utils.api_sign_request(
    body.paramsToSign,
    process.env.CLOUDINARY_API_SECRET || "secret-api"
  );
  return res.status(200).json({ signature });
}
