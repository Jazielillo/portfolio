"use client";

import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientTemplate({
  imageUrl,
  alt,
}: {
  imageUrl: string;
  alt: string;
  technologie: string;
}) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <BackgroundGradient className="rounded-[22px] p-0 bg-background/50 backdrop-blur-sm overflow-hidden">
        <div className="relative w-full aspect-4/5">
          <Image
            src={imageUrl || `/jordans.webp`}
            alt={alt}
            fill
            className="object-cover rounded-[22px]"
            style={{ objectPosition: 'center 20%' }}
            unoptimized
          />
        </div>
      </BackgroundGradient>
    </div>
  );
}
