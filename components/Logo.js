import Image from "next/image";

export default function Logo({ className = "", ...props }) {
  return (
    <Image
      src="/images/ABOUT.png" // Replace with your logo file if available
      alt="Apsarify Logo"
      width={40}
      height={40}
      className={className}
      priority
      {...props}
    />
  );
}
