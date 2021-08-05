export interface Product {
    id: string,
    title: string,
    customTitle?: string,
    type: 'debit' | 'credit' | 'saving' | 'loan' | 'external',
    amount?: number,
    currency?: 'RUB' | 'USD' | 'EUR' | 'GBP',
}

export interface IAccountOperation {
    title: string;
    date: number;
    amount: number;
    currency: string;
    id: number;
}
