import React from 'react';
import { ShieldAlert, Zap, Banknote, Bell, Snowflake, LayoutDashboard } from 'lucide-react';

export default function ForParents() {
  return (
    <section id="for-parents" className="py-24 bg-[#F8FAFC] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Alignment matching Navbar/Hero */}
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

        {/* Feature Grid - Directly mirroring your "For Parents" Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1: Control Spending */}
          <FeatureCard 
            icon={<ShieldAlert size={28} />}
            title="Control Spending"
            desc="Define exactly where the card works. Disable specific merchants or set daily limits for tuckshops and canteens."
          />

          {/* Feature 2: Freeze Card */}
          <FeatureCard 
            icon={<Snowflake size={28} />}
            title="Freeze Card"
            desc="Card lost or misplaced? Freeze it instantly from your app. Unfreeze it just as fast once it's found."
          />

          {/* Feature 3: Dual Currency */}
          <FeatureCard 
            icon={<Banknote size={28} />}
            title="Dual Currency"
            desc="Manage USD and ZiG balances independently. Set different rules for each currency on the same student ID."
          />

          {/* Feature 4: Real-time Alerts */}
          <FeatureCard 
            icon={<Bell size={28} />}
            title="Instant Alerts"
            desc="Get a push notification the second a transaction is attempted, whether it's approved or declined."
          />

          {/* Feature 5: Spending Windows */}
          <FeatureCard 
            icon={<Zap size={28} />}
            title="Time Windows"
            desc="Restrict spending to school hours only. Ensure funds aren't used during weekends or late at night."
          />

          {/* Feature 6: Dashboard Analytics */}
          <FeatureCard 
            icon={<LayoutDashboard size={28} />}
            title="Full Visibility"
            desc="View categorized spending reports. Understand exactly where their money goes every month."
          />

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#3c74bf]/20 transition-all group">
      <div className="w-14 h-14 rounded-xl bg-[#F8FAFC] text-[#3c74bf] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-black text-[#111827] mb-3">{title}</h4>
      <p className="text-gray-500 font-semibold text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}