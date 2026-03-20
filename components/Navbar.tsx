import Link from 'next/link';
import Button from '@/components/Button';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 decoration-none">
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="20" cy="20" r="18" stroke="#6E00CC" strokeWidth="2.5" />
              <circle cx="20" cy="20" r="14" stroke="#6E00CC" strokeWidth="2.5" strokeOpacity="0.7" />
              <circle cx="20" cy="20" r="10" stroke="#6E00CC" strokeWidth="2.5" strokeOpacity="0.4" />
              <circle cx="20" cy="20" r="6" stroke="#6E00CC" strokeWidth="2.5" strokeOpacity="0.2" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-[#1A1A1A]">SFCollab</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">Home</Link>
          <Link href="/about" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">About</Link>
          <Link href="/pricing" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">Pricing</Link>
          <Link href="/project" className="text-[15px] font-medium text-gray-700 hover:text-black transition-colors">Project</Link>
          {/* <div className="flex items-center gap-1 cursor-pointer group">
            <span className="text-[15px] font-medium text-gray-700 group-hover:text-black transition-colors">All Pages</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-black transition-colors">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div> */}
        </div>

        {/* CTA Button */}
        <Button variant="dark" className="px-7 py-3 text-[15px] font-semibold">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
