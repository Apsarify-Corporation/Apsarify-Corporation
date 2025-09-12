import { Manrope, Outfit, Poppins, Syne,Audiowide } from 'next/font/google';
import Link from 'next/link';

const manrope = Manrope({ subsets: ['latin'], weight: ['200','300','400','500','600','700','800'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'], style: ['normal', 'italic'] });
const syne = Syne({ subsets: ['latin'], weight: ['400','500','600','700','800'] });
const audiowide = Audiowide({ subsets: ['latin'], weight: ['400'] });

const Navbar = () => {
  return (
    <div className='flex px-15 py-5 items-center align-middle gap-10'>
      <div>
        <h1 className={'font-[400] ' + audiowide.className}><Link href= "/"> Apsarify</Link></h1>
      </div>
      <div className={'flex-grow ' + poppins.className}>
        <ul className='flex justify-center align-middle gap-10 font-[500]'>
          <li className='w-25 text-center'><Link href="/about" className='duration-1000 font-thin font-sm hover:font-light w-3'>About</Link></li>
          <li className='w-25 text-center'><Link href="/services" className='duration-1000 font-thin font-sm hover:font-light w-3'>Services</Link></li>
          <li className='w-25 text-center'><Link href="/products" className='duration-1000 font-thin font-sm hover:font-light w-3'>products</Link></li>
          <li className='w-25 text-center'><Link href="/contact" className='duration-1000 font-thin font-sm hover:font-light w-3'>contact us</Link></li>
        </ul>
      </div>
      <div><button className='font-sm border-1 border-white px-3 py-1 rounded-2xl'>Work With Us</button></div>
    </div>
  )
}

export default Navbar
