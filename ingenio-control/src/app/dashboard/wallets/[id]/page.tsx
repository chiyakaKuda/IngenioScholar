"use client";

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Clock, ShieldCheck, Zap, ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function WalletDetailPage() {
  const { activeStudent } = useApp();
  const wallet = activeStudent.wallets[1]; // Focused on Tuckshop for demo
  const [limit, setLimit] = useState(wallet.dailyLimit);

  return (
    <div className="max-w-4xl space-y-8 pb-20">
      <Link href="/dashboard/wallets" className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-slate-900 transition-colors">
        <ArrowLeft size={16} /> Back to Wallets
      </Link>

      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-slate-900">{wallet.name} Wallet</h2>
          <p className="text-slate-500 font-medium">Configure specific permissions for this fund segment.</p>
        </div>
        <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-emerald-100">
          POS ENABLED
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Limit Configuration */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
          <h3 className="font-black text-sm uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Zap size={16} className="text-blue-600" /> Spending Limits
          </h3>
          <div>
            <label className="block text-xs font-black text-slate-900 uppercase mb-2">Daily Spending Limit ($)</label>
            <input 
              type="range" min="0" max="50" step="1" 
              value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between mt-4">
              <span className="text-2xl font-black text-slate-900">${limit}.00</span>
              <span className="text-xs font-bold text-slate-400">Max Recommended: $10</span>
            </div>
          </div>
        </div>

        {/* Time Restrictions */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
          <h3 className="font-black text-sm uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Clock size={16} className="text-amber-500" /> Access Times
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-slate-700">School Break (10:00 - 11:00)</span>
              <div className="w-10 h-5 bg-blue-600 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"/></div>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-slate-700">Lunch Hour (13:00 - 14:00)</span>
              <div className="w-10 h-5 bg-blue-600 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"/></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-2xl text-blue-400"><ShieldCheck size={24}/></div>
          <div>
            <p className="text-sm font-bold">Rule Preview</p>
            <p className="text-xs text-slate-400">"This wallet can be used at tuckshop only during break times. Max ${limit}/day."</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 transition-all">
          <Save size={18} /> SAVE RULES
        </button>
      </div>
    </div>
  );
}