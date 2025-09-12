import { Manrope, Outfit, Poppins, Syne } from 'next/font/google';
import "./globals.css";
// Components
import Navbar from "../components/Navbar";

const manrope = Manrope({ subsets: ['latin'], weight: ['200','300','400','500','600','700','800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'], style: ['normal', 'italic'] });
const syne = Syne({ subsets: ['latin'], weight: ['400','500','600','700','800'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-black text-white " + manrope.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
