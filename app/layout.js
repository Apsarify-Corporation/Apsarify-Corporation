// app/layout.js  (server component)
import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default:
      "APSARIFY — Elevate Your Vision | Web, Cloud, AI & UI/UX Engineering",
    template: "%s | APSARIFY.tech",
  },
  description:
    "APSARIFY is a Nepal-based technology partner delivering high-performance Web Apps, Cloud architecture, AI integration, Mobile & UI/UX solutions that scale globally.",
  keywords: [
    "Apsarify",
    "Apsarify.tech",
    "Apsarify Corporation",
    "software company Nepal",
    "Nepal tech company",
    "web development Nepal",
    "custom software development",
    "cloud migration",
    "DevOps automation",
    "AI integration",
    "RAG applications",
    "UI UX design",
    "Next.js development",
    "React engineering",
    "Node.js backend",
    "SaaS development",
    "microservices",
    "APIs",
    "headless commerce",
    "digital transformation",
  ],
  authors: [{ name: "Apsarify Team", url: "https://apsarify.tech" }],
  creator: "Apsarify Team",

  // Open Graph (used by Facebook, LinkedIn, etc.)
  openGraph: {
    title:
      "APSARIFY.tech — Elevate Your Vision | Web, Cloud, AI & AI Solutions",
    description:
      "APSARIFY.tech builds scalable Web, Cloud, AI, Mobile & UI/UX platforms that accelerate digital transformation.",
    url: "https://apsarify.tech/",
    siteName: "APSARIFY.tech",
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

  twitter: {
    card: "summary_large_image",
    title: "APSARIFY.tech — Elevate Your Vision",
    description:
      "Web, Cloud, AI, Mobile & UI/UX engineering partner from Nepal delivering global-ready platforms.",
    images: ["https://apsarify.tech/images/ABOUT.png"],
    creator: "@apsarify", // update if official handle differs
  },

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
              "@graph": [
                {
                  "@type": "Organization",
                  name: "APSARIFY.tech",
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
                },
                {
                  "@type": "WebSite",
                  name: "APSARIFY.tech",
                  url: "https://apsarify.tech/",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://apsarify.tech/?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://apsarify.tech/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Services",
                      item: "https://apsarify.tech/services",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Products",
                      item: "https://apsarify.tech/products",
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      name: "Portfolio",
                      item: "https://apsarify.tech/portfolio",
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      name: "Contact",
                      item: "https://apsarify.tech/contact",
                    },
                  ],
                },
                {
                  "@type": "ItemList",
                  name: "Core Products",
                  itemListElement: [
                    {
                      "@type": "Product",
                      name: "Apsarify Commerce",
                      url: "https://apsarify.tech/products",
                    },
                    {
                      "@type": "Product",
                      name: "Apsarify CMS",
                      url: "https://apsarify.tech/products",
                    },
                    {
                      "@type": "Product",
                      name: "Apsarify AI Studio",
                      url: "https://apsarify.tech/products",
                    },
                    {
                      "@type": "Product",
                      name: "Apsarify Cloud Edge",
                      url: "https://apsarify.tech/products",
                    },
                  ],
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
