export type TransactionStatus = 'Approved' | 'Declined' | 'Pending';
export type WalletCategory = 'Tuckshop' | 'Fees' | 'Transport' | 'Stationery' | 'Entertainment';

export interface Wallet {
  id: string;
  name: WalletCategory;
  balance: number;
  dailyLimit: number;
  color: string;
}

export interface Rule {
  id: string;
  description: string;
  value: string;
  isActive: boolean;
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
  merchantName: string;
  amount: number;
  walletUsed: WalletCategory;
  status: TransactionStatus;
  date: string;
  ruleApplied?: string;
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
      id: "STU-001",
      name: "Anesu Chiyaka",
      grade: "Grade 4",
      wallets: [
        { id: "W-001", name: "Fees", balance: 2400.00, dailyLimit: 5000, color: "blue" },
        { id: "W-002", name: "Tuckshop", balance: 45.50, dailyLimit: 5, color: "emerald" },
        { id: "W-003", name: "Transport", balance: 120.00, dailyLimit: 50, color: "amber" }
      ],
      rules: [
        { id: "RULE-01", description: "Daily Tuckshop Limit", value: "$5 per day", isActive: true },
        { id: "RULE-02", description: "Fast Food Restriction", value: "Blocked", isActive: true }
      ]
    },
    {
      id: "STU-002",
      name: "Kudakwashe Chiyaka",
      grade: "Form 3",
      wallets: [
        { id: "W-004", name: "Fees", balance: 3200.00, dailyLimit: 5000, color: "blue" },
        { id: "W-005", name: "Tuckshop", balance: 102.75, dailyLimit: 10, color: "emerald" },
        { id: "W-006", name: "Transport", balance: 180.00, dailyLimit: 50, color: "amber" }
      ],
      rules: [
        { id: "RULE-03", description: "Weekend Spending", value: "Disabled", isActive: false },
        { id: "RULE-04", description: "Only School Merchants Allowed", value: "Enabled", isActive: true }
      ]
    }
  ],
  transactions: [
    {
      id: "TX-001",
      studentId: "STU-002",
      merchantName: "School Cafeteria",
      amount: 4.50,
      walletUsed: "Tuckshop",
      status: "Approved",
      date: "27 Jan 2026, 10:15 AM",
      ruleApplied: "Daily Tuckshop Limit"
    },
    {
      id: "TX-002",
      studentId: "STU-001",
      merchantName: "KFC Highlands",
      amount: 12.00,
      walletUsed: "Entertainment",
      status: "Declined",
      date: "27 Jan 2026, 12:30 PM",
      ruleApplied: "Fast Food Restriction"
    }
  ]
};