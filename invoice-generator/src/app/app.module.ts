import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { PreviewInvoiceComponent } from './preview-invoice/preview-invoice.component';
import { AppRoutingModule } from './app-routing.module';
import { InvoiceService } from './invoice.service';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    InvoiceFormComponent,
    PopupDialogComponent,
    PreviewInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    AppRoutingModule,
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
