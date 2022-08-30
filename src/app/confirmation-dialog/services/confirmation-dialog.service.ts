import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog' 
import { Observable, take, map } from 'rxjs';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog.component';
import { ConfirmationDialogResult } from '../enums/confirmation-dialog-result';
import { ConfirmationDialogConfig } from '../models/confirmation-dialog-config';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  config: MatDialogConfig = new MatDialogConfig();

  constructor(private dialog: MatDialog) { }

  private dialogRef!: MatDialogRef<ConfirmationDialogComponent>;

  public open(confirmationConfig: ConfirmationDialogConfig, dialogConfig?: MatDialogConfig) {
    if(dialogConfig) this.config = dialogConfig;
    this.config.data = confirmationConfig;
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, this.config);  
  }
  public afterClose(): Observable<ConfirmationDialogResult> {
      return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }));
  }
}
