"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { AlertCircle, Check, X, Info } from 'lucide-react';

export default function PendingApprovalsPage() {
  const { activeStudent } = useApp();

  return (
    <div className="max-w-4xl space-y-8 pb-20">
      <div>
        <h2 className="text-3xl font-black text-slate-900">Pending Approvals</h2>
        <p className="text-slate-500 font-medium">Real-time authorization requests from {activeStudent.name}'s card.</p>
      </div>

      <div className="bg-amber-50 border border-amber-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-amber-500 shadow-sm border border-amber-100">
            <AlertCircle size={32} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-black text-slate-900 text-lg">In-Game Purchase Attempt</h4>
              <span className="bg-amber-200 text-amber-800 text-[8px] font-black px-2 py-0.5 rounded uppercase">High Amount</span>
            </div>
            <p className="text-sm text-slate-600">Merchant: <strong>PlayStation Network</strong> • Amount: <strong>$45.00</strong></p>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Info size={12}/> Reason: Daily Entertainment limit is $0.</p>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-2xl font-black text-sm hover:bg-slate-50">
            <X size={18} className="inline mr-2 text-red-500" /> DECLINE
          </button>
          <button className="flex-1 md:flex-none bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-blue-600">
            <Check size={18} className="inline mr-2 text-emerald-400" /> APPROVE
          </button>
        </div>
      </div>
    </div>
  );
}