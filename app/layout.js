// app/layout.js  (server component)
import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default: "APSARIFY — ELEVATE YOUR VISION, IGNITE TOMORROW'S INNOVATION.",
    template: "%s | APSARIFY",
  },
  description:
    "APSARIFY — Elevate your vision. We craft Web, Cloud, AI & UI/UX solutions that ignite tomorrow's innovation.",
  keywords: [
    "Apsarify",
    "Apsarify Corporation",
    "web development",
    "full-stack",
    "Next.js",
    "React",
    "Node.js",
    "Django",
    "tech",
  ],
  authors: [{ name: "Abhinandan Subedi", url: "https://apsarify.tech" }],
  creator: "Abhinandan Subedi",

  // Open Graph (used by Facebook, LinkedIn, etc.)
  openGraph: {
    title: "APSARIFY — ELEVATE YOUR VISION, IGNITE TOMORROW'S INNOVATION.",
    description:
      "Elevate your vision with APSARIFY. We build scalable Web, Cloud, AI & UI/UX solutions.",
    url: "https://apsarify.tech/",
    siteName: "APSARIFY",
    images: [
      {
        url: "https://apsarify.tech/images/ABOUT.png",
        width: 1200,
        height: 630,
        alt: "Apsarify — Building the Future",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // // Twitter card
  // twitter: {
  //   card: "summary_large_image",
  //   title: "APSARIFY — ELEVATE YOUR VISION, IGNITE TOMORROW'S INNOVATION.",
  //   description:
  //     "Elevate your vision with APSARIFY. We build scalable Web, Cloud, AI & UI/UX solutions.",
  //   images: ["https://apsarify.tech/og-image.png"], // <-- same OG image recommended
  //   creator: "@YourTwitterHandle", // <-- replace with your Twitter handle or remove
  // },

  // Favicons / site icons
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  // sitemap / canonical alternative URLs
  alternates: {
    canonical: "https://apsarify.tech/",
  },

  // robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // optional manifest
  manifest: "/site.webmanifest",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "APSARIFY",
              url: "https://apsarify.tech/",
              logo: "https://apsarify.tech/favicon.png",
              sameAs: [
                "https://www.facebook.com/your-profile",
                "https://www.instagram.com/your-profile",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "",
                  contactType: "customer support",
                  areaServed: "NP",
                },
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${manrope.className} bg-black text-white overflow-x-hidden`}
      >
        <Navbar />
        <main id="maincontent">{children}</main>
      </body>
    </html>
  );
}
