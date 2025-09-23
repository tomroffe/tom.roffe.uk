import avatar from "@/public/tar.svg"
import Image from "next/image"

export default function TARLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <div className={className}>
      <Image src={avatar} alt="Logo" />
    </div>
  );
}
