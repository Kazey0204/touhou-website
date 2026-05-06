"use client"; 

import Link from 'next/link';
import { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Character', href: '/character' },
    { name: 'Game', href: '/game' },
    { name: 'Fumo', href: '/fumo' },
    { name: 'Creator', href: '/creator' },
  ];

  return (
    <nav className="bg-[#6B5E4E] text-[#D8CFBC] shadow-lg font-mono relative z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="h-8 w-16 overflow-hidden">
          <img 
            src="/touhou-avatar.png"
            alt="Touhou Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        <div className="hidden md:flex gap-8 lg:gap-12 text-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#5a4f41] border-t border-[#7a6a58]">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-xl hover:text-white"
                onClick={() => setIsOpen(false)} 
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}