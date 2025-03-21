"use client";
import React from "react";
import Image from "next/image";
import PlaceholderImg from "../../../public/placeholder.svg";

export const OptimizeImg = ({
  lowResSrc = PlaceholderImg,
  highResSrc,
  alt,
  className,
  draggabe = false,
}: {
  lowResSrc?: string;
  highResSrc: string;
  alt?: string;
  className: string;
  draggabe?: boolean;
}) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  return (
    <div>
      <Image
        width={300}
        height={200}
        draggable={draggabe}
        loading="lazy"
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-50 blur-sm"
        }`}
        src={
          error
            ? (lowResSrc as string)
            : loaded
            ? highResSrc
            : lowResSrc || highResSrc
        }
        alt={alt as string}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};
