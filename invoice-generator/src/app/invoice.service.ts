import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoiceItemsSource = new ReplaySubject<InvoiceItem[]>();
  invoiceItems$ = this.invoiceItemsSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  getCompany() {
    return this.httpClient.get<Company>('http://localhost:3000/company');
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

export interface Company {
  name: string;
  address: string;
  phones: string[];
}
