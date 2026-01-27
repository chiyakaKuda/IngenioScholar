// app/dashboard/rules/page.tsx
"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, Clock, Ban, AlertCircle } from 'lucide-react';

export default function RulesPage() {
  const { activeStudent, toggleRule } = useApp();

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-3xl font-black text-slate-900">Rules Engine</h2>
        <p className="text-slate-500">Configure real-time authorization logic for {activeStudent.name}</p>
      </div>

      <div className="grid gap-4">
        {activeStudent.rules.map((rule) => (
          <div key={rule.id} className={`p-6 rounded-[2rem] border transition-all ${rule.active ? 'bg-white border-blue-100 shadow-md' : 'bg-slate-50 border-slate-200 opacity-60'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${rule.active ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                  {rule.title.includes('Limit') ? <Clock size={24}/> : <Ban size={24}/>}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{rule.title}</h4>
                  <p className="text-sm text-slate-500">Current Setting: <span className="font-bold text-blue-600">{rule.value}</span></p>
                </div>
              </div>
              
              <button 
                onClick={() => toggleRule(activeStudent.id, rule.id)}
                className={`w-14 h-8 rounded-full relative transition-colors ${rule.active ? 'bg-blue-600' : 'bg-slate-300'}`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${rule.active ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        ))}

        {/* Immutable Bank-Level Rule (Demo critical) */}
        <div className="p-6 rounded-[2rem] border border-dashed border-red-200 bg-red-50/30">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-red-100 text-red-600">
              <ShieldCheck size={24}/>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-slate-900">Fees Protection Protocol</h4>
                <span className="bg-red-600 text-white text-[8px] px-2 py-0.5 rounded-full font-black uppercase">System Locked</span>
              </div>
              <p className="text-sm text-slate-500">IF Merchant Category != SCHOOL_FEES, THEN block Fees Wallet access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}