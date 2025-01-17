import React from "react";

export const LazyImage = ({
  src,
  height,
  width,
  alt,
  aspectRatio,
}: {
  src: string;
  height: number;
  width: number;
  alt: string;
  aspectRatio?: boolean;
}) => {
  return (
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
  );
};

export const LazyImageWithCaption = ({
  src,
  height,
  width,
  alt,
  aspectRatio,
  caption,
}: {
  src: string;
  height: number;
  width: number;
  alt: string;
  aspectRatio?: boolean;
  caption: string;
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
