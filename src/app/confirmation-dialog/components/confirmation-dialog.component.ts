import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { ConfirmationDialogResult } from '../enums/confirmation-dialog-result';
import { ConfirmationDialogConfig } from '../models/confirmation-dialog-config';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogConfig,private mdDialogRef: MatDialogRef<ConfirmationDialogComponent>){}

  ngOnInit(): void {}

  cancel() : void {
    this.close(ConfirmationDialogResult.CANCEL);
  }
  
  confirm() : void {
    this.close(ConfirmationDialogResult.CONFIRM);
  }

  other() : void {
    this.close(ConfirmationDialogResult.OTHER);
  }

  close(value: ConfirmationDialogResult) : void {
    this.mdDialogRef.close(value);
  }

}
