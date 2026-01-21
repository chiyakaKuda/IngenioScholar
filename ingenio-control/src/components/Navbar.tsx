import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LEFT: Logo + Trust Signal */}
        <a href="#" className="flex flex-col hover:opacity-90 transition-opacity">
          <div className="text-2xl font-black tracking-tighter text-[#111827] leading-none">
            INGENIO<span className="text-[#3c74bf]">FINCONTROLLER</span>
          </div>
          <span className="text-[10px] font-extrabold text-[#3c74bf] uppercase tracking-[0.15em] mt-1">
            Parent-Controlled Student Spending
          </span>
        </a>

        {/* CENTER: Main Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink label="How It Works" href="#how-it-works" hasDropdown />
          <NavLink label="For Parents" href="#for-parents" hasDropdown />
          <NavLink label="For Schools" href="#for-schools" />
          <NavLink label="Security & Trust" href="#security" />
          <NavLink label="About" href="#about" />
        </div>

        {/* RIGHT SIDE: Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-sm font-extrabold text-gray-500 hover:text-[#3c74bf] transition-colors">
            Partner With Us
          </button>
          <button className="bg-[#3c74bf] text-white px-8 py-3 rounded-full font-black text-sm hover:bg-[#2e5b99] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ label, href, hasDropdown = false }: { label: string; href: string; hasDropdown?: boolean }) {
  return (
    <div className="group relative cursor-pointer py-2">
      {/* Changed from button to anchor tag for actual navigation */}
      <a 
        href={href} 
        className="flex items-center gap-1 text-[15px] font-extrabold text-gray-600 group-hover:text-[#3c74bf] transition-colors"
      >
        {label}
        {hasDropdown && <ChevronDown size={14} className="mt-0.5 opacity-50 group-hover:text-[#3c74bf] group-hover:opacity-100 transition-all" />}
      </a>

      {/* Hover Dropdown Indicator Bar */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3c74bf] transition-all group-hover:w-full rounded-full" />
      
      {/* Dropdown Content */}
      {hasDropdown && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-0 translate-y-2 z-[60]">
          <div className="space-y-3">
            {label === "How It Works" && (
              <>
                <DropdownItem href="#how-it-works" title="Student ID Card" desc="Linked to authorized bank accounts" />
                <DropdownItem href="#how-it-works" title="Parent Control App" desc="Set limits & track USD/ZiG" />
                <DropdownItem href="#how-it-works" title="Bank Partnership" desc="Funds stay in your bank account" />
              </>
            )}
            {label === "For Parents" && (
              <>
                <DropdownItem href="#for-parents" title="Control Spending" desc="Define where and when they spend" />
                <DropdownItem href="#for-parents" title="Freeze Card" desc="One-tap security from your phone" />
                <DropdownItem href="#for-parents" title="Dual Currency" desc="Separate rules for USD and ZiG" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownItem({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a href={href} className="block p-3 rounded-xl hover:bg-gray-50 transition-colors">
      <div className="text-sm font-black text-[#111827]">{title}</div>
      <div className="text-[11px] font-semibold text-gray-400 leading-tight">{desc}</div>
    </a>
  );
}