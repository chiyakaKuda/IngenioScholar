"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { SYSTEM_DATA, Student, SystemData } from '@/constants/data';

interface AppContextType {
  data: SystemData;
  activeStudent: Student;
  setActiveStudent: (student: Student) => void;
  toggleRule: (studentId: string, ruleId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SystemData>(SYSTEM_DATA);
  
  // Initialize with the first student from the system data
  const [activeStudent, setActiveStudent] = useState<Student>(SYSTEM_DATA.students[0]);

  // Sync activeStudent whenever the global data changes 
  // (This ensures rule toggles reflect in the activeStudent state immediately)
  useEffect(() => {
    const current = data.students.find(s => s.id === activeStudent.id);
    if (current) {
      setActiveStudent(current);
    }
  }, [data, activeStudent.id]);

  const toggleRule = (studentId: string, ruleId: string) => {
    setData(prevData => {
      const updatedStudents = prevData.students.map(student => {
        if (student.id === studentId) {
          return {
            ...student,
            rules: student.rules.map(rule => 
              // Updated to use 'isActive' to match your new interface
              rule.id === ruleId ? { ...rule, isActive: !rule.isActive } : rule
            )
          };
        }
        return student;
      });

      return {
        ...prevData,
        students: updatedStudents
      };
    });
  };

  return (
    <AppContext.Provider value={{ 
      data, 
      activeStudent, 
      setActiveStudent, 
      toggleRule 
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};