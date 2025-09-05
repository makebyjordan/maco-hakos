export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type TransactionType = 'income' | 'expense';

export type Transaction = {
  id: string;
  type: TransactionType;
  title: string;
  description?: string;
  amount: number;
  date: Date;
};
