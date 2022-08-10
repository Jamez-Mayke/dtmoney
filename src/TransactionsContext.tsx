import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';


interface Transaction {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TrasactionsProviderPros {
    children: ReactNode
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: TrasactionsProviderPros) {
    const [transactions, setTrasactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get(`transactions`)
        .then( response => setTrasactions(response.data.transactions));
    }, []);

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

}
