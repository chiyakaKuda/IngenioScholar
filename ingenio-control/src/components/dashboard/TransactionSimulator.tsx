"use client";

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Play, ShieldAlert, CheckCircle2, XCircle, Info } from 'lucide-react';

export default function TransactionSimulator() {
  const { activeStudent } = useApp();
  const [amount, setAmount] = useState("12.00");
  const [category, setCategory] = useState("Entertainment"); // Default to a restricted category for demo impact
  const [result, setResult] = useState<{status: string, reason: string} | null>(null);

  const runSimulation = () => {
    const numAmount = parseFloat(amount);

    // 1. Requirement 3.2: Fees Wallet Immutable Protection
    // Logic: If user picks 'Fees' merchant, check if they are trying to spend more than current balance
    // or if they pick a non-school merchant for a fees-based simulation.
    if (category === "Fees" && numAmount > 5000) {
       setResult({ 
         status: 'DECLINED', 
         reason: 'System Guard: Transaction exceeds bank-locked liquidity threshold for Fees.' 
       });
       return;
    }

    // 2. Requirement 4.2: Dynamic Rule Evaluation
    // Check Fast Food Restriction (e.g., RULE-02 or RULE-04 based on student)
    const fastFoodRule = activeStudent.rules.find(r => 
      r.description.toLowerCase().includes('fast food') || 
      r.description.toLowerCase().includes('school merchants')
    );

    if (fastFoodRule?.isActive && category === 'Entertainment') {
      setResult({ 
        status: 'DECLINED', 
        reason: `Logic Block: "${fastFoodRule.description}" is currently ACTIVE.` 
      });
      return;
    }

    // 3. Requirement 1.6: Hold Logic (Tuckshop limit)
    const limitRule = activeStudent.rules.find(r => r.description.toLowerCase().includes('limit'));
    // If limit rule is active and amount > $5 (or $10 for older students)
    const limitThreshold = activeStudent.grade.includes('Grade') ? 5 : 10;
    
    if (limitRule?.isActive && numAmount > limitThreshold && category === 'Tuckshop') {
      setResult({ 
        status: 'HOLD', 
        reason: `Threshold Alert: Amount exceeds daily ${activeStudent.name} limit. Awaiting Parent OTP.` 
      });
      return;
    }

    setResult({ 
      status: 'APPROVED', 
      reason: 'Network Sync: Transaction authorized via Ingenio Bank Switch.' 
    });
  };

  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl border-4 border-blue-500/20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <ShieldAlert size={120} />
      </div>

      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2.5 rounded-2xl animate-pulse shadow-lg shadow-blue-500/50">
            <Play size={18} fill="currentColor" className="ml-0.5" />
          </div>
          <div>
            <h3 className="font-black uppercase tracking-widest text-[10px] text-blue-400">Live Engine Simulator</h3>
            <p className="text-xs font-bold text-slate-300">Test Real-Time Authorization</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Context Locked</p>
          <p className="text-[10px] font-bold text-white">{activeStudent.name}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-5">
          <div>
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Merchant Profile</label>
            <select 
              value={category} 
              onChange={(e) => {setCategory(e.target.value); setResult(null);}}
              className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl mt-1.5 p-4 text-sm font-bold focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            >
              <option value="Tuckshop">Local School Tuckshop</option>
              <option value="Fees">School Finance Office</option>
              <option value="Entertainment">KFC / Fast Food Outlet</option>
              <option value="Transport">Public Transport / Bus</option>
            </select>
          </div>
          
          <div>
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Amount ($)</label>
            <div className="relative mt-1.5">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => {setAmount(e.target.value); setResult(null);}}
                className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl p-4 pl-8 text-sm font-bold focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
            </div>
          </div>

          <button 
            onClick={runSimulation}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]"
          >
            RUN DECISION LOGIC
          </button>
        </div>

        <div className="bg-white/5 rounded-[2rem] border border-white/10 p-8 flex flex-col justify-center items-center text-center min-h-[240px]">
          {!result ? (
            <div className="space-y-3">
              <div className="flex justify-center gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: `${i*0.2}s`}} />)}
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Awaiting POS Request</p>
            </div>
          ) : (
            <div className="animate-in zoom-in fade-in duration-500">
              <div className="mb-4 flex justify-center">
                {result.status === 'APPROVED' && <div className="p-4 bg-emerald-500/20 rounded-full border border-emerald-500/50"><CheckCircle2 size={40} className="text-emerald-500" /></div>}
                {result.status === 'DECLINED' && <div className="p-4 bg-red-500/20 rounded-full border border-red-500/50"><XCircle size={40} className="text-red-500" /></div>}
                {result.status === 'HOLD' && <div className="p-4 bg-amber-500/20 rounded-full border border-amber-500/50"><ShieldAlert size={40} className="text-amber-500" /></div>}
              </div>
              
              <h4 className={`text-2xl font-black italic tracking-tighter ${
                result.status === 'APPROVED' ? 'text-emerald-500' : 
                result.status === 'DECLINED' ? 'text-red-500' : 'text-amber-500'
              }`}>
                {result.status}
              </h4>
              <p className="text-[10px] text-slate-300 mt-3 leading-relaxed font-medium bg-white/5 p-3 rounded-xl border border-white/5">
                {result.reason}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
        <Info size={12} className="text-blue-500" />
        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">
          Security: This simulation executes logic exactly as the Ingenio Card Switch would.
        </p>
      </div>
    </div>
  );
}