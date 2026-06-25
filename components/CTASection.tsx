'use client';

import Link from 'next/link';
import { Zap, Users, Trophy, BarChart3 } from 'lucide-react';

export default function CTASection() {
  const features = [
    {
      icon: Trophy,
      title: 'AI-Powered Tournaments',
      description: 'Automated bracket generation and smart scheduling',
    },
    {
      icon: Users,
      title: 'Community Platform',
      description: 'Connect with players and join open play sessions',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track your performance and climb the leaderboard',
    },
    {
      icon: Zap,
      title: 'PaloPoints Rewards',
      description: 'Earn points through matches and tournaments',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of pickleball players on PaloHub. Book courts, compete in tournaments, and be part of the fastest-growing pickleball community.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/court-booking" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
              Book a Court Now
            </Link>
            <Link href="/open-play" className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
              Join Open Play
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition">
                <div className="mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
