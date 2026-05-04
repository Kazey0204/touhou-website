import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#6B5E4E] px-10 py-4 text-white shadow-lg">

  <div className="h-8 w-16 overflow-hidden">
    <img 
      src="/touhou-avatar.png"
      alt="Touhou Logo"
      className="w-full h-full object-contain"
    />
  </div>
      
      <div className="flex gap-12 font-mono text-xl">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <Link href="/character" className="hover:text-gray-300 transition-colors">Character</Link>
        <Link href="/game" className="hover:text-gray-300 transition-colors">Game</Link>
        <Link href="/fumo" className="hover:text-gray-300 transition-colors">Fumo</Link>
        <Link href="/creator" className="hover:text-gray-300 transition-colors">Creator</Link>
      </div>
    </nav>
  );
}