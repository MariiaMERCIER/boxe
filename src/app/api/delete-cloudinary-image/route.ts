import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const { public_id } = body;
  try {
    const signature = await cloudinary.uploader.destroy(public_id);
    return NextResponse.json(signature);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
