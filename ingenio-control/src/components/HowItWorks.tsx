import React from 'react';
import { Smartphone, CreditCard, Landmark, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3c74bf] mb-4">
            The Ecosystem
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#111827] mb-6">
            How Ingenio Control Works
          </h3>
          <p className="text-lg text-gray-500 font-semibold leading-relaxed">
            We’ve built a bridge between traditional banking and modern parental oversight. 
            No new accounts, no hidden fees—just pure control.
          </p>
        </div>

        {/* Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-[2px] bg-gray-100 -z-10" />

          {/* Step 1: The Card */}
          <StepCard 
            number="01"
            icon={<CreditCard className="text-[#3c74bf]" size={32} />}
            title="Student ID Card"
            desc="The student receives a bank-issued ID card that functions as a standard debit card for USD and ZiG."
            bullets={["Bank-Grade Security", "Dual-Currency Chip"]}
          />

          {/* Step 2: The Logic */}
          <StepCard 
            number="02"
            icon={<Smartphone className="text-[#3c74bf]" size={32} />}
            title="Parental App"
            desc="Parents link the card to the Ingenio app to set spending limits, merchant rules, and time windows."
            bullets={["Real-time Rule Engine", "Instant Notifications"]}
          />

          {/* Step 3: The Bank */}
          <StepCard 
            number="03"
            icon={<Landmark className="text-[#3c74bf]" size={32} />}
            title="Bank Settlement"
            desc="Funds never leave the bank. Ingenio only authorizes the transaction based on your specific rules."
            bullets={["Non-Custodial", "Zero Movement of Funds"]}
          />

        </div>

        {/* Reassurance Footer */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="font-black text-[#111827]">Fully Compliant & Secure</p>
              <p className="text-sm text-gray-500 font-bold">Your money stays in the bank, we just provide the brain.</p>
            </div>
          </div>
          <button className="text-[#3c74bf] font-black text-sm uppercase tracking-widest hover:underline">
            Read Security Whitepaper →
          </button>
        </div>
      </div>
    </section>
  );
};

function StepCard({ number, icon, title, desc, bullets }: { 
  number: string, 
  icon: React.ReactNode, 
  title: string, 
  desc: string,
  bullets: string[]
}) {
  return (
    <div className="relative group">
      <div className="mb-8 flex items-center justify-between">
        <div className="w-16 h-16 rounded-2xl bg-[#3c74bf]/10 flex items-center justify-center group-hover:bg-[#3c74bf] group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <span className="text-4xl font-black text-gray-100 group-hover:text-[#3c74bf]/20 transition-colors">
          {number}
        </span>
      </div>
      
      <h4 className="text-2xl font-black text-[#111827] mb-4">{title}</h4>
      <p className="text-gray-500 font-semibold mb-6 leading-relaxed">
        {desc}
      </p>

      <ul className="space-y-3">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-700">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3c74bf]" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HowItWorks;