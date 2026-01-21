"use client";

import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onAuthClick: () => void;
}

export default function Navbar({ onAuthClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMobileGetStarted = () => {
    toggleMobileMenu();
    onAuthClick();
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LEFT: Logo */}
        <a href="#" className="flex flex-col hover:opacity-90 transition-opacity">
          <div className="text-2xl font-black tracking-tighter text-[#111827] leading-none">
            INGENIO<span className="text-[#3c74bf]">FINCONTROLLER</span>
          </div>
          <span className="text-[10px] font-extrabold text-[#3c74bf] uppercase tracking-[0.15em] mt-1">
            Parent-Controlled Student Spending
          </span>
        </a>

        {/* CENTER: Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink label="How It Works" href="#how-it-works" hasDropdown />
          <NavLink label="For Parents" href="#for-parents" hasDropdown />
          <NavLink label="For Schools" href="#for-schools" />
          <NavLink label="Security & Trust" href="#security" />
          <NavLink label="About" href="#about" />
        </div>

        {/* RIGHT SIDE: Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-extrabold text-gray-500 hover:text-[#3c74bf] transition-colors">
            Partner With Us
          </button>
          
          {/* DESKTOP ONLY: Get Started button */}
          <button 
            onClick={onAuthClick}
            className="hidden lg:block bg-[#3c74bf] text-white px-8 py-3 rounded-full font-black text-sm hover:bg-[#2e5b99] transition-all shadow-md active:scale-95"
          >
            Get Started
          </button>
          
          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU: Slide Down */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 space-y-8">
          <div className="flex flex-col gap-6">
            <MobileNavLink label="How It Works" href="#how-it-works" onClick={toggleMobileMenu} />
            <MobileNavLink label="For Parents" href="#for-parents" onClick={toggleMobileMenu} />
            <MobileNavLink label="For Schools" href="#for-schools" onClick={toggleMobileMenu} />
            <MobileNavLink label="Security & Trust" href="#security" onClick={toggleMobileMenu} />
            <MobileNavLink label="About" href="#about" onClick={toggleMobileMenu} />
          </div>

          <div className="pt-8 border-t border-gray-100 space-y-4">
            <button 
              onClick={handleMobileGetStarted}
              className="w-full bg-[#3c74bf] text-white p-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] transition-transform"
            >
              Get Started <ArrowRight size={22} />
            </button>
            
            <button className="w-full text-center py-2 font-bold text-gray-400 text-sm">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ... (Keep NavLink, MobileNavLink, and DropdownItem exactly as they were)
function NavLink({ label, href, hasDropdown = false }: { label: string; href: string; hasDropdown?: boolean }) {
  return (
    <div className="group relative cursor-pointer py-2">
      <a 
        href={href} 
        className="flex items-center gap-1 text-[15px] font-extrabold text-gray-600 group-hover:text-[#3c74bf] transition-colors"
      >
        {label}
        {hasDropdown && <ChevronDown size={14} className="mt-0.5 opacity-50 group-hover:text-[#3c74bf] group-hover:opacity-100 transition-all" />}
      </a>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3c74bf] transition-all group-hover:w-full rounded-full" />
      
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

function MobileNavLink({ label, href, onClick }: { label: string; href: string; onClick: () => void }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="block text-2xl font-black text-[#111827] active:text-[#3c74bf] transition-colors"
    >
      {label}
    </a>
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