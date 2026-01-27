// app/dashboard/page.tsx
"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Activity, ShieldAlert, CreditCard } from 'lucide-react';

export default function Dashboard() {
  const { activeStudent, data } = useApp();
  const transactions = data.transactions.filter(t => t.studentId === activeStudent.id);

  return (
    <div className="space-y-8">
      {/* 3.1 Wallet Architecture Section */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900">Wallet Controls</h2>
            <p className="text-slate-500 text-sm">Logical segmentation for {activeStudent.name}</p>
          </div>
          <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            Bank Synced
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeStudent.wallets.map((wallet) => (
            <div key={wallet.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-5 transition-transform group-hover:scale-110 ${wallet.type === 'Fees' ? 'bg-blue-600' : 'bg-emerald-600'}`} />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{wallet.type} Wallet</p>
              <h3 className="text-3xl font-black text-slate-900">${wallet.balance.toFixed(2)}</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Daily Limit: ${wallet.limit}</span>
                <div className={`h-1.5 w-12 rounded-full ${wallet.type === 'Fees' ? 'bg-blue-600' : 'bg-emerald-600'}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rules Engine Preview */}
        <section className="bg-slate-900 text-white p-8 rounded-[2.5rem]">
          <h3 className="font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <Zap className="text-yellow-400" size={16} /> Active Control Logic
          </h3>
          <div className="space-y-4">
            {activeStudent.rules.map(rule => (
              <div key={rule.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                <div>
                  <p className="font-bold text-sm">{rule.title}</p>
                  <p className="text-xs text-slate-400">{rule.value}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${rule.active ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Real-time Activity */}
        <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100">
          <h3 className="font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2 text-slate-900">
            <Activity size={16} /> Decision Feed
          </h3>
          <div className="space-y-4">
            {transactions.slice(0, 4).map((tx) => (
              <div key={tx.id} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                <div className="min-w-0">
                  <p className="font-bold text-slate-900 truncate">{tx.merchant}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    {tx.ruleApplied.replace(/_/g, ' ')}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`font-black ${tx.status === 'Declined' ? 'text-red-500' : 'text-slate-900'}`}>
                    {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                  </p>
                  <p className={`text-[9px] font-black uppercase ${tx.status === 'Approved' ? 'text-emerald-500' : 'text-red-500'}`}>
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

function Zap({ className, size }: { className?: string, size: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
}