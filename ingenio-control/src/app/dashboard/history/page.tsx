"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Search, Filter, Download, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function ActivityLogPage() {
  const { activeStudent, data } = useApp();
  
  // Filter transactions for the current student
  const transactions = data.transactions.filter(t => t.studentId === activeStudent.id);

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Activity Log</h2>
          <p className="text-slate-500 font-medium">Immutable decision history for {activeStudent.name}.</p>
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm transition-all">
            <Download size={20} />
          </button>
          <button className="flex items-center gap-2 bg-white border border-slate-100 px-4 py-2 rounded-xl text-slate-600 font-bold text-sm shadow-sm hover:bg-slate-50">
            <Filter size={18} /> Filter
          </button>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-50 bg-slate-50/30">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by merchant or rule..."
              className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction Details</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Decision Logic</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-8 py-6">
                    <p className="font-bold text-slate-900">{tx.merchantName}</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{tx.date}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Approved' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                      <p className="text-xs font-bold text-slate-600">
                        {tx.ruleApplied ? tx.ruleApplied.replace(/_/g, ' ') : 'System Default'}
                      </p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className={`font-black ${tx.status === 'Declined' ? 'text-slate-400' : 'text-slate-900'}`}>
                      {tx.status === 'Approved' ? '-' : ''}${Math.abs(tx.amount).toFixed(2)}
                    </p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{tx.walletUsed} Wallet</p>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                      tx.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 
                      tx.status === 'Declined' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {tx.status === 'Approved' && <CheckCircle2 size={12} />}
                      {tx.status === 'Declined' && <XCircle size={12} />}
                      {tx.status === 'Pending' && <AlertCircle size={12} />}
                      {tx.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {transactions.length === 0 && (
            <div className="p-20 text-center">
              <p className="text-slate-400 font-bold italic">No transactions recorded for this period.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}