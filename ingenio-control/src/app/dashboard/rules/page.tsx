"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, Clock, Ban, Zap, Lock } from 'lucide-react';

export default function RulesPage() {
  const { activeStudent, toggleRule } = useApp();

  return (
    <div className="max-w-4xl space-y-8 pb-20">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Rules Engine</h2>
          <p className="text-slate-500 font-medium mt-1">
            Configure real-time authorization logic for <span className="text-blue-600 font-bold">{activeStudent.name}</span>
          </p>
        </div>
        <div className="hidden md:block bg-blue-50 text-blue-700 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-blue-100">
          Syncing with Bank Node: Active
        </div>
      </div>

      <div className="grid gap-5">
        {/* Dynamic Parent-Configurable Rules */}
        {activeStudent.rules.map((rule) => (
          <div 
            key={rule.id} 
            className={`p-6 rounded-[2.5rem] border transition-all duration-300 ${
              rule.isActive 
                ? 'bg-white border-blue-100 shadow-xl shadow-blue-900/5' 
                : 'bg-slate-50 border-slate-200 opacity-60'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className={`p-4 rounded-2xl transition-all ${
                  rule.isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-200 text-slate-500'
                }`}>
                  {rule.description.includes('Limit') ? <Clock size={24}/> : <Ban size={24}/>}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-black text-slate-900 text-lg leading-none">{rule.description}</h4>
                    {rule.isActive && <Zap size={12} className="text-amber-500 fill-amber-500" />}
                  </div>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    Rule State: <span className={`font-bold ${rule.isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                      {rule.value}
                    </span>
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => toggleRule(activeStudent.id, rule.id)}
                className={`w-16 h-9 rounded-full relative transition-all duration-500 ${
                  rule.isActive ? 'bg-blue-600 shadow-inner' : 'bg-slate-300'
                }`}
              >
                <div className={`absolute top-1.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                  rule.isActive ? 'left-8' : 'left-1.5'
                }`} />
              </button>
            </div>
          </div>
        ))}

        {/* 1.5 Immutable System Rules (Critical for Investor Trust) */}
        <div className="relative group overflow-hidden p-8 rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-slate-50/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-400">
                <ShieldCheck size={28}/>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-black text-slate-900 text-lg">Fees Protection Protocol</h4>
                  <span className="flex items-center gap-1 bg-slate-900 text-white text-[8px] px-2 py-1 rounded-lg font-black uppercase tracking-widest">
                    <Lock size={10} /> System Locked
                  </span>
                </div>
                <p className="text-sm text-slate-500 font-medium max-w-md italic">
                  "Funds in the 'Fees' wallet are mathematically locked to registered Educational Merchants only."
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enforcement Layer</p>
              <p className="text-xs font-bold text-slate-900">Bank-Level Immutable</p>
            </div>
          </div>
          
          {/* Decorative background element */}
          <ShieldCheck size={120} className="absolute -right-6 -bottom-6 text-slate-200/40 rotate-12 transition-transform group-hover:scale-110" />
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100 flex items-start gap-4">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <Zap size={16} />
        </div>
        <p className="text-xs text-blue-800 font-medium leading-relaxed">
          <strong>Note:</strong> Rule changes propagate to the Student Card instantly via the Ingenio Switch. No physical card update or bank visit is required.
        </p>
      </div>
    </div>
  );
}