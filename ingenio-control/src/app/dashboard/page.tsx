"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { 
  CreditCard, 
  ShieldCheck, 
  TrendingUp, 
  AlertCircle, 
  ArrowUpRight,
  Snowflake,
  Lock
} from 'lucide-react';
import TransactionSimulator from '@/components/dashboard/TransactionSimulator';

export default function DashboardPage() {
  const { activeStudent } = useApp();

  // Calculate total balance across all wallets
  const totalBalance = activeStudent.wallets.reduce((acc, w) => acc + w.balance, 0);

  return (
    <div className="space-y-8 pb-10">
      {/* 1.2 Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">System Overview</h2>
          <p className="text-slate-500 font-medium">Real-time control for {activeStudent.name}'s card.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl text-slate-600 font-black text-xs hover:bg-slate-50 transition-all shadow-sm">
            <Snowflake size={16} className="text-blue-500" /> FREEZE CARD
          </button>
        </div>
      </div>

      {/* Main Grid: Card Visual and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Requirement 1.3: Visual Card State */}
        <div className="lg:col-span-1">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 aspect-[1.586/1] rounded-[2rem] p-8 text-white flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="flex justify-between items-start">
                <ShieldCheck size={32} className="text-blue-400" />
                <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border border-blue-500/30">
                  INGENIO SMART
                </div>
              </div>
              
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Card Holder</p>
                <p className="text-xl font-black tracking-tight">{activeStudent.name.toUpperCase()}</p>
                <div className="flex gap-4 mt-4">
                   <div className="h-6 w-8 bg-slate-800 rounded-md border border-slate-700" />
                   <p className="font-mono text-slate-400">•••• •••• 4492</p>
                </div>
              </div>

              {/* Decorative circuit pattern */}
              <div className="absolute top-0 right-0 opacity-10">
                 <Lock size={180} className="-mr-10 -mt-10 rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Liquidity</p>
              <h3 className="text-4xl font-black text-slate-900">${totalBalance.toLocaleString()}</h3>
            </div>
            <div className="mt-4 flex items-center gap-2 text-emerald-500 font-bold text-xs bg-emerald-50 w-fit px-3 py-1 rounded-full">
              <TrendingUp size={14} /> +2.4% vs last month
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Active Rules</p>
              <h3 className="text-4xl font-black text-slate-900">{activeStudent.rules.filter(r => r.isActive).length}</h3>
            </div>
            <p className="text-xs font-bold text-slate-400 mt-4 italic">Security Level: High</p>
          </div>
        </div>
      </div>

      {/* Simulator Section */}
      <div className="grid grid-cols-1 gap-8">
        <TransactionSimulator />
      </div>

      {/* Quick Activity Preview */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <h3 className="font-black text-slate-900">Recent Interceptions</h3>
          <button className="text-xs font-black text-blue-600 uppercase flex items-center gap-1 hover:gap-2 transition-all">
            Full Audit <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="px-8 pb-4">
          <div className="flex items-center gap-4 py-4 text-slate-400 italic text-sm">
            <AlertCircle size={16} />
            No unauthorized attempts detected in the last 24 hours.
          </div>
        </div>
      </div>
    </div>
  );
}