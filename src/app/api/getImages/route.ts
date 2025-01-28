import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "cloud-name",
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "api-key",
  api_secret: process.env.CLOUDINARY_API_SECRET || "api-secret",
});

export async function GET() {
  try {
    const cloudinaryUrl = await cloudinary.api.resources({
      type: "upload",
      prefix: "boxe/",
      max_results: 10,
    });

    return NextResponse.json(cloudinaryUrl);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
