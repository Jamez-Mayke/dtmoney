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

interface TrasactionsProviderPros {
    children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TrasactionsProviderPros) {
    const [transactions, setTrasactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get(`transactions`)
        .then( response => setTrasactions(response.data.transactions));
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )

}
