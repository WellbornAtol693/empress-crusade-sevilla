import Image from 'next/image'
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className=' pb-6 sm:pb-8 lg:pb-12 bg-pink-300'>
      <Hero />
    </div>
  );
}
