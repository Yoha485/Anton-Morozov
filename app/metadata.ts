import type { Metadata } from "next";
import type { Content } from "./content";

const site = "https://anton-morozov.dev";

export function buildMetadata(c: Content): Metadata {
  return {
    metadataBase: new URL(site),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: c.path,
      languages: {
        pl: "/",
        en: "/en/",
        "x-default": "/",
      },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: `${site}${c.path}`,
      siteName: c.meta.title,
      locale: c.meta.ogLocale,
      alternateLocale: c.lang === "pl" ? ["en_US"] : ["pl_PL"],
      type: "website",
    },
  };
}
