import { Manrope,Poppins } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["200","300","400","500","600","700","800"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700","800","900"], style: ["normal", "italic"] });
export default function Home() {
  return (
    <div className="bg-1 h-[90vh] w-full bg-no-repeat bg-cover flex flex-col py-13 font-bold overflow-hidden relative">
      <video  autoPlay loop muted className="opacity-30 absolute">
        <source src="/overlays/overlay.mp4" type="video/mp4" />
        Your browser does not support.
    </video>
      <h2 className={"z-1 text-4xl font-normal mx-auto bg-gradient-to-r px-3 from-white to-[#fafafa30] bg-clip-text text-transparent text-center" + " " + manrope.className}>{"ELEVATE YOUR VISION,IGNITE"}<br/>{"TOMORROW'S INNOVATION."}</h2>
      <p className="z-1 font-light text-md text-center my-5">Crafting Digital Excellence for a Future <br />  Beyond Imagination.</p>
    </div>
  );
}
