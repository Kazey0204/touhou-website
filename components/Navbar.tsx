"use client";

import Link from 'next/link';
import { useState, useRef } from 'react';
import { 
  MenuOutlined, 
  CloseOutlined, 
  SoundOutlined, 
  MutedOutlined 
} from '@ant-design/icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Character', href: '/character' },
    { name: 'Game', href: '/game' },
    { name: 'Fumo', href: '/fumo' },
    { name: 'Creator', href: '/creator' },
  ];

  // Hàm xử lý bật/tắt nhạc
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Wait"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <nav className="bg-[#6B5E4E] text-[#D8CFBC] shadow-lg font-mono relative z-50">
      <audio ref={audioRef} src="/audio/A small piece-Foxtail grass.mp3" loop preload="none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* LOGO & MUSIC TOGGLE (Mobile) */}
        <div className="flex items-center gap-4">
          <div className="h-8 w-16 overflow-hidden flex-shrink-0">
            <img 
              src="/touhou-avatar.png"
              alt="Touhou Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Nút nhạc trên Mobile */}
          <button
            onClick={toggleMusic}
            className={`flex md:hidden items-center justify-center w-10 h-10 rounded-xl transition-all border
              ${isPlaying ? 'bg-[#D8CFBC] text-[#6B5E4E] border-[#D8CFBC]' : 'bg-[#D8CFBC]/10 text-[#D8CFBC] border-[#D8CFBC]/30'}`}
          >
            {isPlaying ? <SoundOutlined /> : <MutedOutlined />}
          </button>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* NÚT NHẠC DESKTOP (Style Widget bo tròn giống ảnh mẫu) */}
          <button
            onClick={toggleMusic}
            title={isPlaying ? "Mute" : "Play Music"}
            className={`
              flex items-center justify-center
              w-12 h-10 rounded-2xl transition-all duration-300
              hover:scale-110 active:scale-95 shadow-sm
              ${isPlaying 
                ? 'bg-[#D8CFBC] text-[#6B5E4E] border-transparent shadow-inner' 
                : 'bg-[#D8CFBC]/10 text-[#D8CFBC] border border-[#D8CFBC]/30'}
            `}
          >
            {isPlaying ? (
              <SoundOutlined style={{ fontSize: '18px' }} className="animate-pulse" />
            ) : (
              <MutedOutlined style={{ fontSize: '18px' }} />
            )}
          </button>
        </div>

        {/* NÚT HAMBURGER (Mobile) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
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