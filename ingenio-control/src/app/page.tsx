"use client";

import React, { useState } from 'react'; // Added missing useState import
import { Reveal } from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ForParents from '@/components/ForParents';
import ForSchools from '@/components/ForSchools';
import Security from '@/components/Security';
import Footer from '@/components/Footer';
import About from '@/components/About';
import AuthFlow from '@/components/auth/AuthFlow';

export default function LandingPage() {
  // State to control the visibility of the Phone/OTP login modal
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Helper to open the modal
  const openAuth = () => setIsAuthOpen(true);
  // Helper to close the modal
  const closeAuth = () => setIsAuthOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC] relative">
      
      {/* Navbar with Auth Trigger */}
      <Navbar onAuthClick={openAuth} />
      
      {/* Hero usually appears immediately. 
        Note: We pass onAuthClick to Hero so its main CTA button works too.
      */}
      <Reveal delay={0.1}>
        <Hero onAuthClick={openAuth} />
      </Reveal>

      {/* Scroll-triggered sections. 
        Note: Sub-components (like HowItWorks) already have internal Reveal 
        logic for their cards, so wrapping the whole component here 
        provides the base entry animation.
      */}
      <Reveal>
        <HowItWorks />
      </Reveal>

      <Reveal>
        <ForParents />
      </Reveal>

      <Reveal>
        <ForSchools />
      </Reveal>

      <Reveal>
        <Security />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Footer />

      {/* AUTHENTICATION MODAL OVERLAY */}
      {isAuthOpen && (
        <AuthFlow onClose={closeAuth} />
      )}
    </main>
  );
}

/**
 * Reusable Feature Component 
 * (Useful for any additional ad-hoc sections you want to build)
 */
function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 rounded-[2.5rem] border border-gray-100 bg-[#F8FAFC] transition-all hover:border-[#3c74bf]/30 hover:shadow-2xl group">
      <div className="text-[#3c74bf] mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-3 text-[#111827] tracking-tight">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed font-semibold">
        {desc}
      </p>
    </div>
  );
}