import Person from "schema-dts";

export default function jsonLDGenerator({
  type,
  title,
  image,
  description,
  date,
  url,
}: {
  type: string;
  title: string;
  image: string;
  description: string;
  date: string;
  url: string;
}) {
  if (type === "post") {
    return `<script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${url}"
          },
          "headline": "${title}",
          "description": "${description}",
          "image": "${image}",
          "author": {
            "@type": "Person",
            "name": "Aadil Mallick",
            "url": "https://aadilmallick.com/about"
          },
          "datePublished": "${date}"
        }
      </script>`;
  }
  return `<script type="application/ld+json">
        {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Aadil Mallick Blog",
        "url": "https://aadilmallickblog.tech/"
        }
      </script>`;
}
