import Link from "next/link";
import Image from "next/image";
import wordmark from "@/public/images/wordmark.png";
import logo from "@/public/images/wordmark.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0">
      <Image src={wordmark} alt="DGKM Logo" width={180} height={64} className="sm:block hidden" />
      <Image src={logo} alt="Logo" width={180} height={64} className="block sm:hidden" />
    </Link>
  );
}