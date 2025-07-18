"use client";

import { useEffect } from "react";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init({duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
   <motion.div
     initial={{ opacity:0 }}
     animate={{ opacity:1 }}
     transition={{ duration:0.5 }}
     className="min-h-screen bg-black">
    <div>
      <button className="absolute rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-gray-800 font-climate transition-colors hover:bg-rose-800 bottom-0 right-0 translate-x-[-50%]">Mint ⇀</button>
      <figure className="relative h-screen max-w-lg">
        <Image 
          src="/images/hero.png" 
          alt="Digikami"
          width={1000}
          height={1000}
          className="absolute bottom-0 flex h-auto max-w-full inline-block mx-3 pb-0 px-8"
        />
      </figure>
    </div>
   </motion.div>
  );
}