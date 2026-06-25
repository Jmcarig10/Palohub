'use client';

import { Clock, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CourtAvailability() {
  const courts = [
    { id: 1, name: 'Court 1 - Indoor', available: 3, time: '2:00 PM - 4:00 PM', price: '₱500' },
    { id: 2, name: 'Court 2 - Outdoor', available: 1, time: '3:00 PM - 5:00 PM', price: '₱450' },
    { id: 3, name: 'Court 3 - Indoor', available: 2, time: '4:00 PM - 6:00 PM', price: '₱500' },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 text-center">Court Availability Preview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {courts.map((court) => (
            <div key={court.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold">{court.name}</h3>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {court.available} Slots
                </div>
              </div>
              
              <div className="space-y-3 mb-6 text-gray-600">
                <p className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  {court.time}
                </p>
                <p className="flex items-center gap-2">
                  <Users size={18} className="text-primary" />
                  {court.available} Available
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary" />
                  {court.price} per hour
                </p>
              </div>
              
              <Link href="/court-booking" className="btn-primary w-full text-center">
                Book Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/court-booking" className="btn-secondary">
            View All Courts
          </Link>
        </div>
      </div>
    </section>
  );
}
