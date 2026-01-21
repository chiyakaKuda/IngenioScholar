import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] pt-24 pb-12 px-6 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex flex-col">
              <div className="text-2xl font-black tracking-tighter text-white leading-none">
                INGENIO<span className="text-[#3c74bf]">FINCONTROLLER</span>
              </div>
              <span className="text-[10px] font-extrabold text-[#3c74bf] uppercase tracking-[0.15em] mt-2">
                Parent-Controlled Student Spending
              </span>
            </div>
            <p className="text-gray-400 font-semibold text-sm leading-relaxed max-w-sm">
              The intelligent authorization layer for student finance. Bridging the gap 
              between banks, parents, and schools for a safer, cashless tomorrow.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h5 className="text-white font-black mb-6 uppercase text-xs tracking-[0.2em]">Platform</h5>
            <ul className="space-y-4">
              <li><a href="#how-it-works" className="text-gray-400 font-bold text-sm hover:text-[#3c74bf] transition-all">How it works</a></li>
              <li><a href="#for-parents" className="text-gray-400 font-bold text-sm hover:text-[#3c74bf] transition-all">For Parents</a></li>
              <li><a href="#for-schools" className="text-gray-400 font-bold text-sm hover:text-[#3c74bf] transition-all">For Schools</a></li>
              <li><a href="#security" className="text-gray-400 font-bold text-sm hover:text-[#3c74bf] transition-all">Security & Trust</a></li>
            </ul>
          </div>

          {/* Partnership Links */}
          <div>
            <h5 className="text-white font-black mb-6 uppercase text-xs tracking-[0.2em]">Contact</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 font-bold text-sm hover:text-[#3c74bf] transition-all">Partner With Us</a></li>
              <li><a href="#" className="text-gray-400 font-bold text-sm hover:text-[#3c74bf] transition-all">Developer Portal</a></li>
              <li><a href="#" className="text-[#3c74bf] font-black text-sm hover:underline">Support Center</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-gray-500 text-xs font-bold">
              © 2026 Ingenio Fincontroller. All rights reserved.
            </p>
            <p className="text-[#3c74bf] text-[10px] font-black uppercase tracking-widest">
              Under development by Ingenio Systems
            </p>
          </div>
          
          <div className="flex gap-8 text-gray-500 text-xs font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}