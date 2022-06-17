import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../services/axios";

type TransactionType = {
  id: number;
  title: string;
  amount: number;
  category: string;
  createdAt: string;
  type: string;
};

// type TransactionInput = Omit<TransactionType, "id" | "createdAt">;
type TransactionInput = Pick<
  TransactionType,
  "title" | "amount" | "category" | "type"
>;

type TransactionsContextData = {
  transactions: TransactionType[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

type TransactionsProviderProps = {
  children: React.ReactNode;
};

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    api("http://localhost:3000/api/transactions").then((response) =>
      setTransactions(response.data.transactions)
    );
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions((previousTransactions) => [
      ...previousTransactions,
      transaction,
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
