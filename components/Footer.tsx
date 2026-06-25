'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">🏓 PaloHub</h3>
            <p className="text-gray-400">
              Your all-in-one pickleball court booking, tournament, and community management platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              <Link href="/court-booking" className="hover:text-secondary transition">Court Booking</Link><br />
              <Link href="/tournaments" className="hover:text-secondary transition">Tournaments</Link><br />
              <Link href="/leaderboard" className="hover:text-secondary transition">Leaderboard</Link><br />
              <Link href="/community" className="hover:text-secondary transition">Community</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <div className="space-y-2 text-gray-400">
              <Link href="/about" className="hover:text-secondary transition">About Us</Link><br />
              <Link href="/contact" className="hover:text-secondary transition">Contact</Link><br />
              <a href="#" className="hover:text-secondary transition">Privacy Policy</a><br />
              <a href="#" className="hover:text-secondary transition">Terms of Service</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 support@palohub.com</p>
              <p>📍 TBD</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-secondary hover:text-white transition">Facebook</a>
                <a href="#" className="text-secondary hover:text-white transition">Instagram</a>
                <a href="#" className="text-secondary hover:text-white transition">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PaloHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
