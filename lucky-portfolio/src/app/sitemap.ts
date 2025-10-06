import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lucky.dev"; // update on deploy
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/#projects`, lastModified: new Date() },
    { url: `${baseUrl}/#about`, lastModified: new Date() },
    { url: `${baseUrl}/#experience`, lastModified: new Date() },
    { url: `${baseUrl}/#academics`, lastModified: new Date() },
    { url: `${baseUrl}/#tech`, lastModified: new Date() },
    { url: `${baseUrl}/#contact`, lastModified: new Date() },
  ];
}
