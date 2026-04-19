import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next Command AI Consulting",
    short_name: "NCAI",
    description:
      "Next Command AI Consulting, LLC is a veteran-owned consulting firm specializing in AI strategy, cybersecurity, and technology modernization for government agencies and prime contractors.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0907",
    theme_color: "#0a0907",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
