'use client';

import Link from 'next/link';
import { Calendar, Users, Trophy } from 'lucide-react';

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      name: 'Summer Championship',
      date: 'July 15, 2024',
      players: '32 Players',
      icon: Trophy,
    },
    {
      id: 2,
      name: 'Weekend Open Play',
      date: 'July 20-21, 2024',
      players: 'Unlimited',
      icon: Users,
    },
    {
      id: 3,
      name: 'Monthly Masters',
      date: 'August 1, 2024',
      players: '16 Players',
      icon: Trophy,
    },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events & Tournaments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <div key={event.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{event.name}</h3>
                </div>
                <div className="space-y-3 text-gray-600 mb-6">
                  <p className="flex items-center gap-2">
                    <Calendar size={18} /> {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users size={18} /> {event.players}
                  </p>
                </div>
                <Link href="/tournaments" className="btn-primary w-full text-center">
                  Register Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
