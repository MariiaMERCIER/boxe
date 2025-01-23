// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const {
//     NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//     NEXT_PUBLIC_CLOUDINARY_API_KEY,
//     CLOUDINARY_API_SECRET,
//   } = process.env;

//   const url = `https://${NEXT_PUBLIC_CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`;

//   //   const auth = Buffer.from(
//   //     `${NEXT_PUBLIC_CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`
//   //   ).toString("base64");

//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       //   headers: {
//       //     Authorization: `Basic ${auth}`,
//       //   },
//     });

//     if (response.status !== 200) {
//       return res
//         .status(response.status)
//         .json({ error: "Erreur lors de la récupération des images" });
//     }

//     const data = await response.json();

//     return Response.json({ data });
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({ error: "Erreur serveur" });
//   }
// }

// app/api/getImages/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`;

  try {
    const response = await fetch(cloudinaryUrl, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
        ).toString("base64")}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        "Erreur lors de la récupération des images depuis Cloudinary"
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
