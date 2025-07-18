import Link from 'next/link';
import Image from 'next/image';

export default function HeroPage() {
  return (
    <section>
    <div className="">
      <div className="pb-8">
        <Image src="/images/hero.png"
          width={100}
          height={100}/>
      </div>
    </div>
    </section>
    
  );
}