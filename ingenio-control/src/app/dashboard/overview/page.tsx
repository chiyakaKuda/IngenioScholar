"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Snowflake, History, Settings, ShieldCheck, Wallet, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ChildOverview() {
  const { activeStudent, data } = useApp();
  const transactions = data.transactions.filter(t => t.studentId === activeStudent.id);

  return (
    <div className="space-y-10 max-w-5xl pb-20 px-4">
      {/* 1.3 Context Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">{activeStudent.name}</h2>
          <p className="text-slate-500 font-bold mt-1">St. George's College • {activeStudent.grade}</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-2xl font-black text-xs hover:bg-blue-100 transition-all">
            <Snowflake size={16} /> FREEZE CARD
          </button>
          <button className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 shadow-sm">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* 1.4 Wallet Summary Cards */}
      <section>
        <div className="flex items-center justify-between mb-6 px-2">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Wallet size={14} /> Wallet Health
          </h3>
          <Link href="/dashboard/wallets" className="text-xs font-black text-blue-600 uppercase">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeStudent.wallets.map(wallet => (
            <div key={wallet.id} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden">
               <div className={`absolute -right-4 -bottom-4 opacity-5 ${wallet.name === 'Fees' ? 'text-blue-600' : 'text-emerald-600'}`}>
                <ShieldCheck size={100} />
               </div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{wallet.name} Wallet</p>
               <h4 className="text-3xl font-black text-slate-900 mb-4">${wallet.balance.toFixed(2)}</h4>
               <div className="flex items-center justify-between">
                 <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase ${wallet.name === 'Fees' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                   {wallet.name === 'Fees' ? 'NO POS' : 'POS ENABLED'}
                 </span>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1.7 Today's Activity Summary */}
      <section className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <History size={16} /> Today's Decisions
          </h3>
          <Link href="/dashboard/history" className="text-xs font-black text-blue-600 uppercase">Audit Log</Link>
        </div>
        
        <div className="space-y-2">
          {transactions.slice(0, 3).map(tx => (
            <div key={tx.id} className="flex items-center justify-between py-4 group">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${tx.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                  {tx.status === 'Approved' ? <ShieldCheck size={20} /> : <Snowflake size={20} />}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{tx.merchantName}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase">{tx.walletUsed} • {tx.ruleApplied}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-slate-900">${Math.abs(tx.amount).toFixed(2)}</p>
                <p className={`text-[9px] font-black uppercase ${tx.status === 'Approved' ? 'text-emerald-500' : 'text-red-500'}`}>{tx.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}