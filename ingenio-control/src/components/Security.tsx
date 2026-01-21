import React from 'react';
import { ShieldCheck, Lock, EyeOff, FileText, CheckCircle, Landmark } from 'lucide-react';

export default function Security() {
  return (
    <section id="security" className="py-24 bg-[#F8FAFC] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Centered for emphasis on Trust */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3c74bf] mb-4">
            Security First
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#111827] mb-6 tracking-tight">
            Bank-grade security. <br />No compromises.
          </h3>
          <p className="text-lg text-gray-500 font-semibold leading-relaxed">
            Ingenio Fincontroller is built on a non-custodial architecture. We don't hold your 
            money; we simply provide the intelligent authorization layer that keeps it safe.
          </p>
        </div>

        {/* Security Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Non-Custodial */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#3c74bf]/10 text-[#3c74bf] flex items-center justify-center mb-8">
              <Landmark size={28} />
            </div>
            <h4 className="text-xl font-black text-[#111827] mb-4">Non-Custodial</h4>
            <p className="text-gray-500 font-semibold text-sm leading-relaxed">
              Your funds always remain in your regulated bank account. Ingenio never touches 
              your capital—we only authorize transactions based on your set rules.
            </p>
          </div>

          {/* End-to-End Encryption */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#3c74bf]/10 text-[#3c74bf] flex items-center justify-center mb-8">
              <Lock size={28} />
            </div>
            <h4 className="text-xl font-black text-[#111827] mb-4">256-bit Encryption</h4>
            <p className="text-gray-500 font-semibold text-sm leading-relaxed">
              All data transmitted between the student card, the bank, and your app is 
              encrypted using bank-standard AES-256 protocols.
            </p>
          </div>

          {/* Privacy Focused */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#3c74bf]/10 text-[#3c74bf] flex items-center justify-center mb-8">
              <EyeOff size={28} />
            </div>
            <h4 className="text-xl font-black text-[#111827] mb-4">Privacy by Design</h4>
            <p className="text-gray-500 font-semibold text-sm leading-relaxed">
              We only see what's necessary to authorize a spend. Your personal banking 
              details are never stored on our servers.
            </p>
          </div>
        </div>

        {/* Trust Indicators / Compliance Bar */}
        <div className="mt-16 bg-white border border-gray-100 rounded-[2.5rem] p-8">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#10B981]" size={20} />
              <span className="font-black text-sm text-[#111827] uppercase tracking-wider">PCI-DSS Compliant</span>
            </div>
            <div className="w-px h-8 bg-gray-100 hidden md:block" />
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#10B981]" size={20} />
              <span className="font-black text-sm text-[#111827] uppercase tracking-wider">GDPR & Data Protection</span>
            </div>
            <div className="w-px h-8 bg-gray-100 hidden md:block" />
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#10B981]" size={20} />
              <span className="font-black text-sm text-[#111827] uppercase tracking-wider">Real-time Audit Logs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}