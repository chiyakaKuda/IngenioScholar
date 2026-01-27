export type TransactionStatus = 'Approved' | 'Declined' | 'Pending';
export type Category = 'Tuckshop' | 'Fees' | 'Transport' | 'Stationery' | 'Entertainment';

export interface Wallet {
  id: string;
  type: Category;
  balance: number;
  limit: number;
  color: string;
}

export interface Rule {
  id: string;
  title: string;
  value: string;
  active: boolean;
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  wallets: Wallet[];
  rules: Rule[];
}

export interface Parent {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
  phone: string;
}

export interface Transaction {
  id: string;
  studentId: string;
  merchant: string;
  amount: number;
  category: Category;
  status: TransactionStatus;
  timestamp: string;
  ruleApplied: string;
}

export interface SystemData {
  parent: Parent;
  students: Student[];
  transactions: Transaction[];
}

export const SYSTEM_DATA: SystemData = {
  parent: {
    id: "P-7721",
    name: "Mrs. Chiyaka",
    role: "Primary Guardian",
    email: "mrs.chiyaka@example.com",
    avatar: "MC",
    phone: "+263 772 000 000"
  },
  
  students: [
    {
      id: "AC-882",
      name: "Anesu Chiyaka",
      grade: "Grade 4",
      wallets: [
        { id: "W-A-01", type: "Fees", balance: 2400.00, limit: 5000, color: "blue" },
        { id: "W-A-02", type: "Tuckshop", balance: 45.50, limit: 100, color: "emerald" },
        { id: "W-A-03", type: "Transport", balance: 120.00, limit: 200, color: "amber" }
      ],
      rules: [
        { id: "R-1", title: "Daily Tuckshop Limit", value: "$5.00", active: true },
        { id: "R-2", title: "Fast Food Restriction", value: "Blocked", active: true }
      ]
    },
    {
      id: "KC-102",
      name: "Kudakwashe Chiyaka",
      grade: "Form 3",
      wallets: [
        { id: "W-K-01", type: "Fees", balance: 3200.00, limit: 5000, color: "blue" },
        { id: "W-K-02", type: "Tuckshop", balance: 102.75, limit: 150, color: "emerald" },
        { id: "W-K-03", type: "Transport", balance: 180.00, limit: 300, color: "amber" }
      ],
      rules: [
        { id: "R-3", title: "Weekend Spending", value: "Enabled", active: false },
        { id: "R-4", title: "Merchant Lockdown", value: "School Only", active: true }
      ]
    }
  ],

  transactions: [
    {
      id: "TX-9901",
      studentId: "KC-102",
      merchant: "School Cafeteria",
      amount: -4.50,
      category: "Tuckshop",
      status: "Approved",
      timestamp: "2026-01-27T10:15:00Z",
      ruleApplied: "Daily_Limit_Check"
    },
    {
      id: "TX-9902",
      studentId: "AC-882",
      merchant: "KFC Highlands",
      amount: -12.00,
      category: "Entertainment",
      status: "Declined",
      timestamp: "2026-01-27T12:30:00Z",
      ruleApplied: "Category_Block_FastFood"
    },
    {
      id: "TX-9903",
      studentId: "AC-882",
      merchant: "Hwange Bus Service",
      amount: -2.00,
      category: "Transport",
      status: "Approved",
      timestamp: "2026-01-26T08:00:00Z",
      ruleApplied: "Whitelist_Merchant"
    },
    {
      id: "TX-9904",
      studentId: "KC-102",
      merchant: "EcoCash Topup",
      amount: 500.00,
      category: "Fees",
      status: "Approved",
      timestamp: "2026-01-25T14:20:00Z",
      ruleApplied: "System_Credit"
    }
  ]
};