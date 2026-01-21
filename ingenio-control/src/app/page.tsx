import React from 'react';
import { Reveal } from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Lock, Zap, Smartphone } from 'lucide-react';
import HowItWorks from '@/components/HowItWorks';
import ForParents from '@/components/ForParents';
import ForSchools from '@/components/ForSchools';
import Security from '@/components/Security';
import Footer from '@/components/Footer';


export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      
    {/* Hero usually appears immediately, so we use a very short delay */}
    <Reveal delay={0.1}>
        <Hero />
      </Reveal>

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
      
      <Footer />
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 rounded-[2.5rem] border border-gray-100 bg-[#F8FAFC] transition-all hover:border-[#3c74bf]/30 hover:shadow-2xl">
      <div className="text-[#3c74bf] mb-6">{icon}</div>
      <h3 className="text-2xl font-black mb-3 text-[#111827] tracking-tight">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-semibold">{desc}</p>
    </div>
  );
}