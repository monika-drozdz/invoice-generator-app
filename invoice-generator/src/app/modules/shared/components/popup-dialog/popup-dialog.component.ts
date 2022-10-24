import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
