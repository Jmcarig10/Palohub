'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            🏓 PaloHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-secondary transition">Home</Link>
            <Link href="/court-booking" className="hover:text-secondary transition">Court Booking</Link>
            <Link href="/open-play" className="hover:text-secondary transition">Open Play</Link>
            <Link href="/tournaments" className="hover:text-secondary transition">Tournaments</Link>
            <Link href="/leaderboard" className="hover:text-secondary transition">Leaderboard</Link>
            <Link href="/community" className="hover:text-secondary transition">Community</Link>
            <Link href="/dashboards" className="hover:text-secondary transition">Dashboards</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/court-booking" className="bg-secondary text-primary px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            <Link href="/" className="hover:text-secondary transition">Home</Link>
            <Link href="/court-booking" className="hover:text-secondary transition">Court Booking</Link>
            <Link href="/open-play" className="hover:text-secondary transition">Open Play</Link>
            <Link href="/tournaments" className="hover:text-secondary transition">Tournaments</Link>
            <Link href="/leaderboard" className="hover:text-secondary transition">Leaderboard</Link>
            <Link href="/community" className="hover:text-secondary transition">Community</Link>
            <Link href="/dashboards" className="hover:text-secondary transition">Dashboards</Link>
            <Link href="/court-booking" className="bg-secondary text-primary px-6 py-2 rounded-lg font-bold text-center">
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
