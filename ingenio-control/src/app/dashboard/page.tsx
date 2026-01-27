"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Activity, Wallet as WalletIcon, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import TransactionSimulator from '@/components/dashboard/TransactionSimulator';

export default function Dashboard() {
  const { activeStudent, data } = useApp();
  
  // Filter transactions for the current student
  const transactions = data.transactions
    .filter(t => t.studentId === activeStudent.id)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <div className="space-y-10 pb-12">
      {/* 1. HERO SECTION: THE SIMULATOR */}
      <section className="relative">
        <div className="absolute -top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] z-10 shadow-xl shadow-blue-500/20">
          Live Decision Engine
        </div>
        <TransactionSimulator />
      </section>

      {/* 2. WALLET ARCHITECTURE (Requirement 3.1) */}
      <section>
        <div className="flex justify-between items-end mb-6 px-2">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-2">
              <WalletIcon size={14} /> Orchestrated Wallets
            </h3>
            <p className="text-2xl font-black text-slate-900">Funds Segmentation</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100">
            <ShieldCheck size={12} /> BANK LEVEL ENCRYPTION ACTIVE
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeStudent.wallets.map((wallet) => (
            <div key={wallet.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              {/* Subtle background decoration */}
              <div className={`absolute -right-4 -bottom-4 opacity-5 transition-transform group-hover:scale-110 ${
                wallet.type === 'Fees' ? 'text-blue-600' : 'text-emerald-600'
              }`}>
                <WalletIcon size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{wallet.type} Wallet</p>
                  <ArrowUpRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-6">
                  ${wallet.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-tight">
                    <span className="text-slate-400">Monthly Limit</span>
                    <span className="text-slate-900">${wallet.limit}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${
                        wallet.type === 'Fees' ? 'bg-blue-600' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${(wallet.balance / wallet.limit) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DECISION FEED & LOGIC PREVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Active Control Logic (The "Why") */}
        <section className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black text-sm uppercase tracking-widest flex items-center gap-2">
              <Zap className="text-yellow-400" size={16} fill="currentColor" /> Logic Enforcement
            </h3>
            <span className="text-[10px] font-black text-slate-500 uppercase">Real-time</span>
          </div>
          
          <div className="space-y-3">
            {activeStudent.rules.map(rule => (
              <div key={rule.id} className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                rule.active 
                  ? 'bg-white/10 border-white/10' 
                  : 'bg-transparent border-white/5 opacity-40'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${rule.active ? 'bg-yellow-400 animate-pulse' : 'bg-slate-600'}`} />
                  <div>
                    <p className="font-bold text-sm">{rule.title}</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{rule.value}</p>
                  </div>
                </div>
                {rule.active && (
                  <span className="text-[8px] font-black bg-yellow-400 text-slate-900 px-2 py-0.5 rounded uppercase">Active</span>
                )}
              </div>
            ))}
            
            {/* System Locked Rule (For Demo) */}
            <div className="p-5 rounded-2xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <ShieldCheck size={16} className="text-blue-400" />
                <p className="font-bold text-sm">Fees Merchant Whitelist</p>
              </div>
              <span className="text-[8px] font-black bg-blue-500 text-white px-2 py-0.5 rounded uppercase">System</span>
            </div>
          </div>
        </section>

        {/* Real-time Activity (The "Results") */}
        <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="font-black text-sm uppercase tracking-widest mb-8 flex items-center gap-2 text-slate-900">
            <Activity size={16} /> Decision Audit Log
          </h3>
          <div className="space-y-1">
            {transactions.slice(0, 5).map((tx) => (
              <div key={tx.id} className="group flex justify-between items-center py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors px-2 rounded-xl">
                <div className="min-w-0 pr-4">
                  <p className="font-bold text-slate-900 truncate text-sm">{tx.merchant}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                      {tx.ruleApplied.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`font-black text-sm ${tx.amount < 0 ? 'text-slate-900' : 'text-blue-600'}`}>
                    {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                  </p>
                  <p className={`text-[9px] font-black uppercase tracking-widest mt-1 ${
                    tx.status === 'Approved' ? 'text-emerald-500' : 'text-red-500'
                  }`}>
                    {tx.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}