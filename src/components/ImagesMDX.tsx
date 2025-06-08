import React from "react";
import { cn } from "../utils/cn";
import { CacheStrategist } from "../utils/CacheStorage";

const cacher = new CacheStrategist("blog-img-src-cache");

export const useImageSrcCache = (src: string) => {
  const [loading, setLoading] = React.useState(false);
  const [blobUrl, setBlobUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function cacheSrc() {
      setLoading(true);
      const req = new Request(src);
      const cachedResponse = await cacher.cacheFirst(req);
      console.log("cached response", cachedResponse);
      const blob = await cachedResponse.blob();
      setBlobUrl(URL.createObjectURL(blob));
      setLoading(false);
    }

    cacheSrc();
  }, [src]);

  return {
    loading,
    blobUrl,
  };
};

export const CachedLazyImage = ({
  src,
  height,
  width,
  alt,
  aspectRatio,
}: {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  aspectRatio?: boolean;
}) => {
  const { blobUrl, loading } = useImageSrcCache(src);
  console.log("blobUrl", blobUrl);
  if (loading) {
    console.log("loading");
    return <p>loading...</p>;
  }
  return (
    <img
      src={blobUrl}
      height={height}
      width={width}
      className="w-full object-contain"
      loading="lazy"
      alt={alt}
      style={
        aspectRatio
          ? {
              aspectRatio: 16 / 9,
              objectFit: "cover",
            }
          : {}
      }
    />
  );
};

export const LazyImage = ({
  src,
  height,
  width,
  alt,
  aspectRatio,
  imageContainerStyles,
}: {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  aspectRatio?: boolean;
  imageContainerStyles?: string;
}) => {
  return (
    <div className={cn("mx-auto", imageContainerStyles || "")}>
      <img
        src={src}
        height={height}
        width={width}
        className="w-full"
        loading="lazy"
        alt={alt}
        style={
          aspectRatio
            ? {
                aspectRatio: 16 / 9,
                objectFit: "cover",
              }
            : {}
        }
      />
    </div>
  );
};

export const LazyImageGrid = ({
  images,
  gridContainerStyles,
  imageContainerStyles,
}: {
  images: {
    src: string;
    height?: number;
    width?: number;
    alt?: string;
    aspectRatio?: boolean;
    caption?: string;
  }[];
  gridContainerStyles?: string;
  imageContainerStyles?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid gap-2 my-8 justify-items-center justify-center",
        gridContainerStyles || ""
      )}
    >
      {images.map((image, index) => (
        <div key={index} className={cn("relative", imageContainerStyles)}>
          {/* <CachedLazyImage
            src={image.src}
            height={image.height}
            width={image.width}
            alt={image.alt || image.caption}
          /> */}
          <img
            src={image.src}
            height={image.height}
            width={image.width}
            className={"w-full object-contain"}
            loading="lazy"
            alt={image.alt || image.caption || ""}
            style={
              image.aspectRatio
                ? {
                    aspectRatio: 16 / 9,
                    objectFit: "cover",
                  }
                : {}
            }
          />
          <span className="absolute w-full bg-black/50 text-white font-semibold text-xs text-center p-1 top-0 left-0">
            {image.caption}
          </span>
        </div>
      ))}
    </div>
  );
};

export const LazyImageWithCaption = ({
  src,
  height,
  width,
  alt,
  aspectRatio,
  caption,
  imageContainerStyles,
}: {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  aspectRatio?: boolean;
  caption: string;
  imageContainerStyles?: string;
}) => {
  return (
    <div>
      <img
        src={src}
        height={height}
        width={width}
        loading="lazy"
        alt={alt}
        style={
          aspectRatio
            ? {
                aspectRatio: 16 / 9,
                objectFit: "cover",
              }
            : {}
        }
      />
      <span
        style={{
          display: "block",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "gray",
          padding: "0.5rem",
          maxWidth: "50ch",
          margin: "auto",
          position: "relative",
          top: "-2rem",
        }}
      >
        {caption}
      </span>
    </div>
  );
};
