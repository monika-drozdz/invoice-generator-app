import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupDialogComponent } from '../../../shared/components/popup-dialog/popup-dialog.component';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  isFormArrayValid: boolean;
  form: FormGroup;
  invoiceItems: FormArray;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      invoiceItems: this.fb.array([]),
    });
    this.invoiceItems = this.form.get('invoiceItems') as FormArray;
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
    if (this.isAnyValidItemInFormArray(validItems)) {
      const invoiceItems = validItems.map((item) => item.value);
      const sum = invoiceItems
        .map((item) => item.countControl * item.priceControl)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
      invoiceItems.push({ total: sum });
      this.invoiceService.submitInvoiceItems(invoiceItems);
      this.router.navigate(['/preview']);
    } else {
      this.dialog.open(PopupDialogComponent);
    }
  }

  isAnyValidItemInFormArray(validItems: Array<any>) {
    return validItems.length > 0 ? true : false;
  }
}
