'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-primary text-white py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to PaloHub 🏓
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            The Ultimate Pickleball Court Booking, Tournament, and Community Management Platform
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/court-booking" className="btn-secondary flex items-center justify-center gap-2">
              Book a Court <ArrowRight size={20} />
            </Link>
            <Link href="/tournaments" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition flex items-center justify-center gap-2">
              Join Tournament <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
