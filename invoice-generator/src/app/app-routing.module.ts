import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceFormComponent } from './modules/invoice/components/invoice-form/invoice-form.component';
import { PreviewInvoiceComponent } from './modules/invoice/components/preview-invoice/preview-invoice.component';

const routes: Routes = [
  { path: '', component: InvoiceFormComponent },
  { path: 'preview', component: PreviewInvoiceComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
