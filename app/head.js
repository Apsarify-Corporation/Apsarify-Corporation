// app/head.js
export default function Head() {
  return (
    <>
      <title>Apsarify — Building the Future of Technology</title>
      <meta name="description" content="Apsarify Corporation — full-stack web & software solutions. Web, Cloud, AI & UI/UX." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://apsarify.vercel.app/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Apsarify — Building the Future of Technology" />
      <meta property="og:description" content="Apsarify builds scalable web apps and cloud solutions. Contact us for product development & design." />
      <meta property="og:image" content="https://apsarify.vercel.app/og-image.png" />
      <meta property="og:image:alt" content="Apsarify — Building the Future" />
      <meta property="og:url" content="https://apsarify.vercel.app/" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@YourTwitterHandle" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
