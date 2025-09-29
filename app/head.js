// app/head.js
export default function Head() {
  return (
    <>
      <title>Apsarify — Building the Future of Technology</title>
      <meta
        name="description"
        content="Apsarify Corporation — full-stack web & software solutions. Web, Cloud, AI & UI/UX."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://apsarify.tech/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Apsarify — Building the Future of Technology"
      />
      <meta
        property="og:description"
        content="Apsarify builds scalable web apps and cloud solutions. Contact us for product development & design."
      />
      <meta property="og:image" content="/images/ABOUT.png" />
      <meta property="og:image:alt" content="Apsarify — Building the Future" />
      <meta property="og:url" content="https://apsarify.tech/" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@YourTwitterHandle" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.png" />

      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
