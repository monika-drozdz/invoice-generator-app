import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Company, InvoiceItem, InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.scss'],
})
export class PreviewInvoiceComponent implements OnInit {
  invoiceItems$: Observable<InvoiceItem[]>;
  company$: Observable<Company> | undefined;
  displayedColumns: string[] = ['name', 'count', 'price'];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.company$ = this.invoiceService.getCompany();
    this.invoiceItems$ = this.invoiceService.invoiceItems$;
  }
}
