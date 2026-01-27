// context/AppContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SYSTEM_DATA, Student, SystemData } from '@/constants/data';

interface AppContextType {
  data: SystemData;
  activeStudent: Student;
  setActiveStudent: (student: Student) => void;
  toggleRule: (studentId: string, ruleId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(SYSTEM_DATA);
  const [activeStudent, setActiveStudent] = useState(SYSTEM_DATA.students[0]);

  const toggleRule = (studentId: string, ruleId: string) => {
    const updatedStudents = data.students.map(s => {
      if (s.id === studentId) {
        return {
          ...s,
          rules: s.rules.map(r => r.id === ruleId ? { ...r, active: !r.active } : r)
        };
      }
      return s;
    });
    
    setData({ ...data, students: updatedStudents });
    // Update current active student reference
    const current = updatedStudents.find(s => s.id === studentId);
    if (current) setActiveStudent(current);
  };

  return (
    <AppContext.Provider value={{ data, activeStudent, setActiveStudent, toggleRule }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};