// app/viewport.js
// See: https://nextjs.org/docs/app/api-reference/functions/generate-viewport

export default function viewport() {
  return {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
  };
}
