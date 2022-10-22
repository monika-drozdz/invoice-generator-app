import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { PreviewInvoiceComponent } from './preview-invoice/preview-invoice.component';

const routes: Routes = [
  // { path: '', redirectTo: '/add', pathMatch: 'full' },
  { path: '', component: InvoiceFormComponent },
  { path: 'preview', component: PreviewInvoiceComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
