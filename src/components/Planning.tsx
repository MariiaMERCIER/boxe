import image from "@/assets/images/planning.jpg";
import Image from "next/image";

export function Planning() {
  return (
    <div id="planning">
      <Image src={image} className="w-screen h-full" alt="planning" />
    </div>
  );
}
