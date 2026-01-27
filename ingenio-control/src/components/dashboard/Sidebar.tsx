// components/dashboard/Sidebar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Wallet, ShieldCheck, 
  History, Settings, LogOut, Zap, ChevronDown, UserCircle, X 
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (o: boolean) => void }) {
  const pathname = usePathname();
  const { data, activeStudent, setActiveStudent } = useApp();
  const [showSwitcher, setShowSwitcher] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
    { icon: Wallet, label: 'Wallets', href: '/dashboard/wallets' },
    { icon: Zap, label: 'Rules Engine', href: '/dashboard/rules' },
    { icon: History, label: 'Activity Log', href: '/dashboard/history' },
  ];

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden" onClick={() => setIsOpen(false)} />}
      <aside className={`fixed lg:sticky top-0 left-0 z-[70] w-72 h-screen bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white"><ShieldCheck size={20} /></div>
              <span className="font-black text-xl tracking-tighter">INGENIO</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 text-slate-400"><X size={20} /></button>
          </div>

          {/* Student Switcher - Drives the Demo */}
          <div className="relative mb-8">
            <button onClick={() => setShowSwitcher(!showSwitcher)} className="w-full flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">{activeStudent.name[0]}</div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Student</p>
                  <p className="text-sm font-bold text-slate-900">{activeStudent.name.split(' ')[0]}</p>
                </div>
              </div>
              <ChevronDown size={14} className={showSwitcher ? 'rotate-180' : ''} />
            </button>

            {showSwitcher && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 shadow-xl rounded-2xl p-2 z-50">
                {data.students.map((s) => (
                  <button key={s.id} onClick={() => { setActiveStudent(s); setShowSwitcher(false); }} className="w-full text-left p-3 hover:bg-slate-50 rounded-xl flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{s.name}</span>
                    <span className="text-[10px] text-slate-400">{s.grade}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${pathname === item.href ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' : 'text-slate-400 hover:text-slate-900'}`}>
                <item.icon size={18} /> {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-50">
          <div className="flex items-center gap-3 px-2 mb-6">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600"><UserCircle size={24} /></div>
            <div>
              <p className="text-sm font-bold text-slate-900">{data.parent.name}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{data.parent.role}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}