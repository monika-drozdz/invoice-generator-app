import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  form = this.fb.group({
    invoiceItems: this.fb.array([]),
  });

  isFormArrayValid: boolean;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

  invoiceItems = this.form.get('invoiceItems') as FormArray;

  ngOnInit(): void {
    this.addNewItem();
  }

  addNewItem() {
    const newItemForm = this.fb.group({
      nameControl: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      priceControl: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(100),
      ]),
      countControl: new FormControl(1, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(1000000),
      ]),
    });
    this.invoiceItems.push(newItemForm);
  }

  deleteItem(index: number) {
    this.invoiceItems.removeAt(index);
  }

  onSubmit() {
    const validItems = this.invoiceItems.controls.filter(
      (item) => item.status === 'VALID'
    );
    validItems.length > 0
      ? (this.isFormArrayValid = true)
      : (this.isFormArrayValid = false);
    if (!this.isFormArrayValid) {
      this.dialog.open(PopupDialogComponent);
    } else {
      const invoiceItems = validItems.map((item) => item.value);
      const sum = invoiceItems
        .map((item) => item.countControl * item.priceControl)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
      invoiceItems.push({ total: sum });
      this.invoiceService.submitInvoiceItems(invoiceItems);
      this.router.navigate(['/preview']);
    }
  }
}
