import React, { createContext, useContext, useState } from 'react';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: Date;
}

interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  category: string;
}

interface ExpenseContextType {
  transactions: Transaction[];
  goals: Goal[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  addGoal: (goal: Omit<Goal, 'id'>) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
  getTotalIncome: () => number;
  getTotalExpenses: () => number;
  getBalance: () => number;
}

const ExpenseContext = createContext<ExpenseContextType | null>(null);

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'income',
      amount: 50,
      category: 'Pocket Money',
      description: 'Weekly allowance',
      date: new Date('2024-01-15')
    },
    {
      id: '2',
      type: 'expense',
      amount: 15,
      category: 'Food',
      description: 'Lunch with friends',
      date: new Date('2024-01-16')
    },
    {
      id: '3',
      type: 'expense',
      amount: 25,
      category: 'Entertainment',
      description: 'Movie tickets',
      date: new Date('2024-01-17')
    }
  ]);

  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'New Gaming Headset',
      targetAmount: 150,
      currentAmount: 75,
      deadline: new Date('2024-03-01'),
      category: 'Electronics'
    },
    {
      id: '2',
      title: 'Summer Trip',
      targetAmount: 500,
      currentAmount: 120,
      deadline: new Date('2024-06-15'),
      category: 'Travel'
    }
  ]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString()
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const addGoal = (goal: Omit<Goal, 'id'>) => {
    const newGoal: Goal = {
      ...goal,
      id: Date.now().toString()
    };
    setGoals([newGoal, ...goals]);
  };

  const updateGoal = (id: string, updates: Partial<Goal>) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, ...updates } : goal
    ));
  };

  const getTotalIncome = () => {
    return transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getTotalExpenses = () => {
    return transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getBalance = () => {
    return getTotalIncome() - getTotalExpenses();
  };

  return (
    <ExpenseContext.Provider value={{
      transactions,
      goals,
      addTransaction,
      addGoal,
      updateGoal,
      getTotalIncome,
      getTotalExpenses,
      getBalance
    }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) throw new Error('useExpenses must be used within ExpenseProvider');
  return context;
};