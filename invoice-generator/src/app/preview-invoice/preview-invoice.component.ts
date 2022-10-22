import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { InvoiceItem, InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.scss'],
})
export class PreviewInvoiceComponent implements OnInit, OnDestroy {
  invoiceSubscrition = new Subscription();
  items = [];
  total: number;
  invoiceItems$: Observable<InvoiceItem[]>;
  displayedColumns: string[] = ['name', 'count', 'price'];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceItems$ = this.invoiceService.invoiceItems$;
    this.invoiceSubscrition = this.invoiceService.invoiceItems$.subscribe(
      (res) => {
        this.items = res;
      }
    );
  }

  ngOnDestroy() {
    this.invoiceSubscrition.unsubscribe();
  }
}
