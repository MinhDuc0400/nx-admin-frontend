import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Row } from 'ng2-smart-table/lib/lib/data-set/row';
import { OrderService } from './order.service';

@Component({
  selector: 'ngx-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  settings = {
    actions: false,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
      startAt: {
        title: 'Start Date',
        type: 'string',
        editable: true,
      },
      endAt: {
        title: 'End Date',
        type: 'string',
        editable: true,
      },
      'user.fullName': {
        title: 'Customer Name',
        valuePrepareFunction: (cell, row) => {
          return row.user.fullName;
        },
      },
      'user.mobile': {
        title: 'Customer Phone Number',
        valuePrepareFunction: (cell, row) => {
          return row.user.mobile;
        },
      },
      'deal.name': {
        title: 'Deal Name',
        valuePrepareFunction: (cell, row) => {
          return row.deal.name;
        },
      },
      'deal.month': {
        title: 'Deal Month',
        valuePrepareFunction: (cell, row) => {
          return row.deal.month;
        },
      },
      'deal.price': {
        title: 'Deal Price',
        valuePrepareFunction: (cell, row) => {
          return row.deal.price;
        },
      },
      'deal.discount': {
        title: 'Deal Discount',
        valuePrepareFunction: (cell, row) => {
          return row.deal.discount + '%';
        },
      },
      'payment.type': {
        title: 'Payment Type',
        valuePrepareFunction: (cell, row) => {
          return row.payment.type;
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private orderService: OrderService
  ) {
    this.orderService.findAll().subscribe(data => {
      if (data && data.body) {
        this.source.load(data.body);
      }
    });
  }

  ngOnInit(): void {
  }

}
