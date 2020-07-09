import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  @Input() transactions: any;
  @Input() pending: any;
  @Input() posted: any;
  data: any;

  headers = ['Date', 'Merchant', 'Amount'];

  tempTxn = [
    {
      "id": "0008",
      "date": "07/04/2020",
      "status": "pending",
      "merchant": "Sammich Shop",
      "amount": 5.41
    },
  ];

  constructor() { }

  ngOnInit(): void {

    // console.log('table pending', this.pending);
    console.log(this.tempTxn);
  }

}
