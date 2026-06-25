'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CourtAvailability from '@/components/CourtAvailability';
import UpcomingEvents from '@/components/UpcomingEvents';
import FeaturedLeaderboard from '@/components/FeaturedLeaderboard';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CourtAvailability />
      <UpcomingEvents />
      <FeaturedLeaderboard />
      <CTASection />
      <Footer />
    </>
  );
}
