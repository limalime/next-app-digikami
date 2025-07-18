import Image from "next/image";
import Link from "next/link";

export default function StakePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">

      <figure className="relative max-w-lg">
        <Image
          src="/images/waiting-digi.png"
          alt="Waiting Digi"
          className="flex pr-2 h-auto max-w-full inline-block mx-3"
          width={1000}
          height={1000}
        />
      </figure>

      <p className="mt-8 font-['Climate_Crisis'] animate-wiggle text-xl text-gray-900">
        Coming Soon...
      </p>
      <div className="py-12 animate-marquee whitespace-nowrap">
    <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>
    <span className="text-4xl mx-4">Marquee Item 5</span>
  </div>
      <p className="text-sm mt-2 text-gray-900/50">
        Work in Progress, this page doesn’t exist yet. We’re building something awesome!
      </p>

      <Link
        href="/"
        className="mt-8 text-sm text-gray-100 underline hover:text-gray-500"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
