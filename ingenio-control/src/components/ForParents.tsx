import React from 'react';
import { ShieldAlert, Zap, Banknote, Bell, Snowflake, LayoutDashboard } from 'lucide-react';
import { Reveal } from './Reveal';

export default function ForParents() {
  return (
    <section id="for-parents" className="py-24 bg-[#F8FAFC] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <Reveal delay={0.1}>
          <div className="max-w-3xl mb-16">
            <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3c74bf] mb-4">
              Parental Oversight
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#111827] mb-6 tracking-tight">
              Peace of mind in your pocket.
            </h3>
            <p className="text-lg text-gray-500 font-semibold leading-relaxed">
              Stop worrying about how allowance is spent. Set the rules once, and let our 
              authorization engine handle the rest in real-time.
            </p>
          </div>
        </Reveal>

        {/* Feature Grid - Uniform 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          <Reveal delay={0.2}>
            <FeatureCard 
              icon={<ShieldAlert size={28} />}
              title="Control Spending"
              desc="Define exactly where the card works. Disable specific merchants or set daily limits for tuckshops and canteens."
            />
          </Reveal>

          <Reveal delay={0.3}>
            <FeatureCard 
              icon={<Snowflake size={28} />}
              title="Freeze Card"
              desc="Card lost or misplaced? Freeze it instantly from your app. Unfreeze it just as fast once it's found."
            />
          </Reveal>

          <Reveal delay={0.4}>
            <FeatureCard 
              icon={<Banknote size={28} />}
              title="Dual Currency"
              desc="Manage USD and ZiG balances independently. Set different rules for each currency on the same student ID."
            />
          </Reveal>

          <Reveal delay={0.5}>
            <FeatureCard 
              icon={<Bell size={28} />}
              title="Instant Alerts"
              desc="Get a push notification the second a transaction is attempted, whether it's approved or declined."
            />
          </Reveal>

          <Reveal delay={0.6}>
            <FeatureCard 
              icon={<Zap size={28} />}
              title="Time Windows"
              desc="Restrict spending to school hours only. Ensure funds aren't used during weekends or late at night."
            />
          </Reveal>

          <Reveal delay={0.7}>
            <FeatureCard 
              icon={<LayoutDashboard size={28} />}
              title="Full Visibility"
              desc="View categorized spending reports. Understand exactly where their money goes every month."
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col h-full bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#3c74bf]/20 hover:-translate-y-1 transition-all duration-300 group">
      {/* Icon Wrapper - Uniform sizing */}
      <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] text-[#3c74bf] flex items-center justify-center mb-8 group-hover:bg-[#3c74bf] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      {/* Content Area - Flex-grow ensures text alignment */}
      <div className="flex flex-col flex-grow">
        <h4 className="text-xl font-black text-[#111827] mb-4">
          {title}
        </h4>
        <p className="text-gray-500 font-semibold text-[15px] leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}