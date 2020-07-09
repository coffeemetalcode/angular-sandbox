import { Component, OnInit } from '@angular/core';

import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.scss']
})
export class TransactionsViewComponent implements OnInit {
  transactions: any;
  pending: any;
  posted: any;

  constructor(private _transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.transactions = this._transactionsService.getTransactions();
    console.log('all', this.transactions);

    this.pending = this._transactionsService.getPending(this.transactions);
    console.log('pending', this.pending);

    this.posted = this._transactionsService.getPosted(this.transactions);
    console.log('posted', this.posted);
  }
}
