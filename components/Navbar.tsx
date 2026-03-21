import Link from 'next/link';
import Button from '@/components/Button';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 decoration-none">
          <div className="relative w-8 h-8">
            <Image alt='logo' src={'/logo.svg'} width={100} height={100}/>
          </div>
          <span className="text-2xl text-[#1A1A1A]">SFCollab</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {/* <Link href="/" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">Home</Link> */}
          <Link href="/about" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">Platform</Link>
          <Link href="/how-it-works" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">How it works</Link>
          <Link href="/pricing" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">Features</Link>
          <Link href="/contact" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">Contact</Link>
        </div>

        {/* CTA Button */}
        <Button variant="dark" className="px-7 py-3 text-[15px] font-semibold">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
