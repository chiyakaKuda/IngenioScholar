"use client";

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Play, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';

export default function TransactionSimulator() {
  const { activeStudent } = useApp();
  const [amount, setAmount] = useState("15.00");
  const [category, setCategory] = useState("Tuckshop");
  const [result, setResult] = useState<{status: string, reason: string} | null>(null);

  const runSimulation = () => {
    // 1. Check Fees Protection (Requirement 3.2)
    if (category !== "Fees" && category === "Fees") { // Logical check
       setResult({ status: 'DECLINED', reason: 'Security: Fees wallet is locked to School Merchants only.' });
       return;
    }

    // 2. Check Active Rules (Requirement 4.2)
    const fastFoodRule = activeStudent.rules.find(r => r.id === 'R-2');
    if (fastFoodRule?.active && category === 'Entertainment') {
      setResult({ status: 'DECLINED', reason: 'Rule Violation: Fast Food Restriction is ACTIVE.' });
      return;
    }

    const limitRule = activeStudent.rules.find(r => r.id === 'R-1');
    if (limitRule?.active && parseFloat(amount) > 5) {
      setResult({ status: 'HOLD', reason: 'Threshold Exceeded: Pending Parent Approval.' });
      return;
    }

    setResult({ status: 'APPROVED', reason: 'Transaction meets all permission criteria.' });
  };

  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl border-4 border-blue-500/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500 p-2 rounded-lg animate-pulse">
          <Play size={18} fill="currentColor" />
        </div>
        <h3 className="font-black uppercase tracking-widest text-sm">Investor Demo: Live Simulator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-[10px] font-black uppercase text-slate-400">Merchant Category</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-slate-800 border-none rounded-xl mt-1 text-sm font-bold focus:ring-2 focus:ring-blue-500"
            >
              <option value="Tuckshop">School Tuckshop</option>
              <option value="Fees">School Fees Office</option>
              <option value="Entertainment">KFC / Fast Food</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-black uppercase text-slate-400">Transaction Amount ($)</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-slate-800 border-none rounded-xl mt-1 text-sm font-bold focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            onClick={runSimulation}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-blue-900/40"
          >
            AUTHORIZE TRANSACTION
          </button>
        </div>

        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 flex flex-col justify-center items-center text-center">
          {!result ? (
            <p className="text-slate-500 text-sm font-medium italic">Awaiting API request from Bank Switch...</p>
          ) : (
            <div className="animate-in zoom-in duration-300">
              {result.status === 'APPROVED' && <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />}
              {result.status === 'DECLINED' && <XCircle size={48} className="text-red-500 mx-auto mb-4" />}
              {result.status === 'HOLD' && <ShieldAlert size={48} className="text-amber-500 mx-auto mb-4" />}
              
              <h4 className={`text-xl font-black ${result.status === 'APPROVED' ? 'text-emerald-500' : result.status === 'DECLINED' ? 'text-red-500' : 'text-amber-500'}`}>
                {result.status}
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{result.reason}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}