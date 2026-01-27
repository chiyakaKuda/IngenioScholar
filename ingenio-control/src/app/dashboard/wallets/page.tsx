"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Wallet as WalletIcon, Plus, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function WalletsPage() {
  const { activeStudent } = useApp();

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900">Wallets</h2>
          <p className="text-slate-500">Logical fund segmentation for {activeStudent.name}</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all">
          <Plus size={18} /> Add Budget Wallet
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeStudent.wallets.map((wallet) => (
          <div key={wallet.id} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm group hover:border-blue-200 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl ${wallet.type === 'Fees' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                <WalletIcon size={24} />
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Status</span>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">ACTIVE</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter mb-1">{wallet.type} Allocation</p>
              <h3 className="text-4xl font-black text-slate-900">${wallet.balance.toFixed(2)}</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="text-[10px] font-black text-slate-400 uppercase">Usage vs Limit</div>
                <div className="text-xs font-bold text-slate-900">${wallet.balance} / ${wallet.limit}</div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${wallet.type === 'Fees' ? 'bg-blue-600' : 'bg-emerald-500'}`}
                  style={{ width: `${(wallet.balance / wallet.limit) * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between text-slate-400">
              <div className="flex items-center gap-2">
                <TrendingUp size={14} />
                <span className="text-[10px] font-bold uppercase">Linked to Bank Account ...4492</span>
              </div>
              <ArrowUpRight size={18} className="group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}