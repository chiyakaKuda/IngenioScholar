"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Wallet as WalletIcon, Plus, ArrowUpRight, TrendingUp, ShieldCheck, Lock } from 'lucide-react';
import Link from 'next/link';

export default function WalletsPage() {
  const { activeStudent } = useApp();

  return (
    <div className="space-y-8 pb-10">
      {/* 1.4 Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Wallet Control</h2>
          <p className="text-slate-500 font-medium">Logical fund segmentation for {activeStudent.name}</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
          <Plus size={18} /> Create Sub-Wallet
        </button>
      </div>

      {/* Wallet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeStudent.wallets.map((wallet) => (
          <div key={wallet.id} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all relative overflow-hidden">
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className={`p-4 rounded-2xl ${
                wallet.name === 'Fees' ? 'bg-blue-600 text-white' : 
                wallet.name === 'Tuckshop' ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'
              }`}>
                <WalletIcon size={24} />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Status</span>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg font-black text-[10px]">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  ACTIVE
                </div>
              </div>
            </div>

            <div className="mb-8 relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">{wallet.name} Allocation</p>
                {wallet.name === 'Fees' && (
                  <span className="flex items-center gap-1 bg-red-50 text-red-600 text-[8px] font-black px-2 py-0.5 rounded uppercase">
                    <Lock size={8} /> NO POS
                  </span>
                )}
              </div>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                ${wallet.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </h3>
            </div>

            {/* Usage Progress */}
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-end">
                <div className="text-[10px] font-black text-slate-400 uppercase">Daily Spending Limit</div>
                <div className="text-xs font-bold text-slate-900">
                  ${wallet.balance.toFixed(0)} <span className="text-slate-300 mx-1">/</span> ${wallet.dailyLimit}
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${
                    wallet.name === 'Fees' ? 'bg-blue-600' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${Math.min((wallet.balance / wallet.dailyLimit) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* Footer Metadata */}
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between text-slate-400 relative z-10">
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-blue-500" />
                <span className="text-[9px] font-black uppercase tracking-tight">Bank Integrated Ledger</span>
              </div>
              <Link href={`/dashboard/wallets/${wallet.id}`} className="p-2 hover:bg-slate-50 rounded-xl transition-colors">
                <ArrowUpRight size={20} className="group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>

            {/* Subtle background icon for "Investor feel" */}
            <ShieldCheck size={120} className="absolute -right-8 -bottom-8 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* 1.4 Logic Explainer */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 bg-white/10 rounded-3xl">
          <ShieldCheck size={32} className="text-blue-400" />
        </div>
        <div>
          <h4 className="font-bold text-lg">Logical Fund Segmentation</h4>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Ingenio uses virtual sub-ledgers to separate school fees from daily spending. 
            This ensures that even if a student's card is compromised, primary educational funds remain mathematically unreachable.
          </p>
        </div>
      </div>
    </div>
  );
}