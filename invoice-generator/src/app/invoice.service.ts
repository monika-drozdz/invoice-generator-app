import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private companySource = new ReplaySubject<any>();
  company$ = this.companySource.asObservable();

  private invoiceItemsSource = new ReplaySubject<InvoiceItem[]>();
  invoiceItems$ = this.invoiceItemsSource.asObservable();

  constructor(private http: HttpClient) {}

  getCompanyInfo() {
    // TODO this.http.get
  }

  submitInvoiceItems(items: InvoiceItem[]) {
    this.invoiceItemsSource.next(items);
  }
}

export interface InvoiceItem {
  name: string;
  count: number;
  price: number;
}
