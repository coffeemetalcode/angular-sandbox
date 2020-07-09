import { Injectable } from '@angular/core';

import { MOCK_TRANSACTIONS } from '../shared/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private _transactions: any = MOCK_TRANSACTIONS;
  private _pending: any = [];
  private _posted: any = [];

  constructor() { }

  getTransactions() {
    return this._transactions;
  }

  getPending(transactions: any) {
    for (let transaction in transactions) {
      if (transactions[transaction].status === 'pending') {
        this._pending.push(transactions[transaction]);
      }
    }
    return this._pending;
  }

  getPosted(transactions: any) {
    for (let transaction in transactions) {
      if (transactions[transaction].status === 'posted') {
        this._posted.push(transactions[transaction]);
      }
    }
    return this._posted;
  }
}
