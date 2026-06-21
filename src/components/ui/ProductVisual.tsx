import Image from "next/image";
import { cn } from "@/lib/cn";

type ProductVisualProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function isVideoAsset(src: string) {
  return src.toLowerCase().endsWith(".mp4");
}

export function ProductVisual({
  src,
  alt,
  sizes,
  className,
  priority,
}: ProductVisualProps) {
  const mediaClassName = cn("object-cover", className);

  if (isVideoAsset(src)) {
    return (
      <video
        src={src}
        aria-label={alt}
        className={cn("size-full", mediaClassName)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={mediaClassName}
    />
  );
}
