"use client";

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Bell, ShieldAlert, Zap, Snowflake } from 'lucide-react';

export default function AlertsCenterPage() {
  const { activeStudent } = useApp();

  const alerts = [
    { id: 1, type: 'violation', title: 'Rule Violation Attempt', detail: 'Attempted $15.00 at KFC Highlands.', time: '12:30 PM', icon: ShieldAlert, color: 'text-red-500' },
    { id: 2, type: 'balance', title: 'Low Balance Warning', detail: 'Tuckshop wallet is below $5.00.', time: '10:15 AM', icon: Zap, color: 'text-amber-500' },
    { id: 3, type: 'security', title: 'Card Status Changed', detail: 'Card was unfrozen by Primary Guardian.', time: 'Yesterday', icon: Snowflake, color: 'text-blue-500' }
  ];

  return (
    <div className="max-w-4xl space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black text-slate-900">Alerts Center</h2>
        <button className="text-xs font-black text-blue-600 uppercase">Mark All as Read</button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-start gap-5 shadow-sm hover:border-blue-100 transition-all">
            <div className={`p-4 rounded-2xl bg-slate-50 ${alert.color}`}>
              <alert.icon size={24} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-black text-slate-900 tracking-tight">{alert.title}</h4>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{alert.time}</span>
              </div>
              <p className="text-sm text-slate-500 mt-1 font-medium">{alert.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}