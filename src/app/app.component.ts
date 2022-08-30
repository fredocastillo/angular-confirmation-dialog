import { Component } from '@angular/core';
import { ConfirmationDialogResult } from './confirmation-dialog/enums/confirmation-dialog-result';
import { ConfirmationDialogConfig } from './confirmation-dialog/models/confirmation-dialog-config';
import { ConfirmationDialogService } from './confirmation-dialog/services/confirmation-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ConfirmationDialog';

  constructor(private confirmService: ConfirmationDialogService){}


  openModal(): void {
    this.confirmService.open({ 
      title: "Delete STE Machine", 
      message: "Are you sure you want to delete STE Machine?", 
      confirmBtn: { text: 'Ok', color: 'warn'},
      cancelBtn: { text: 'Cancel'},
    });
    
    this.confirmService.afterClose().subscribe(data => {
      console.log(data);
      if(data == ConfirmationDialogResult.CONFIRM){
        console.log('Confirm', data);
      } else if(data == ConfirmationDialogResult.CANCEL){
        console.log('Cancel', data);
      } else if(data == ConfirmationDialogResult.OTHER){
        console.log('Other', data);
      }
    })

  }

  openModal2(): void {
    this.confirmService.open({ 
      title: "Exit", 
      message: "This shows color attribute buttons", 
      confirmBtn: { text: 'Continue', color: 'warn'},
      otherBtn: { text: 'Save & Continue', color: 'primary'},
      cancelBtn: { text: 'Cancel'},
    });

    this.confirmService.afterClose().subscribe(data => {
      console.log(data);
      if(data == ConfirmationDialogResult.CONFIRM){
        console.log('Confirm', data);
      } else if(data == ConfirmationDialogResult.CANCEL){
        console.log('Cancel', data);
      } else if(data == ConfirmationDialogResult.OTHER){
        console.log('Other', data);
      }
    })
  }

  openModal3(): void {
    this.confirmService.open({ 
      title: "Error", 
      message: "This shows buttons align", 
      align: 'center',
      confirmBtn: { text: 'Ok'},
    });

    this.confirmService.afterClose().subscribe(data => {
      console.log(data);
      if(data == ConfirmationDialogResult.CONFIRM){
        console.log('Confirm', data);
      } else if(data == ConfirmationDialogResult.CANCEL){
        console.log('Cancel', data);
      } else if(data == ConfirmationDialogResult.OTHER){
        console.log('Other', data);
      }
    })
  }

  openModal4(): void {
    this.confirmService.open({ 
      title: "Confirmation 4", 
      message: "This shows button classes.", 
      confirmBtn: { text: 'Yes', class: 'bg-red'},
      cancelBtn: { text: 'No'},
    });
    
    this.confirmService.afterClose().subscribe(data => {
      console.log(data);
      if(data == ConfirmationDialogResult.CONFIRM){
        console.log('Confirm', data);
      } else if(data == ConfirmationDialogResult.CANCEL){
        console.log('Cancel', data);
      } else if(data == ConfirmationDialogResult.OTHER){
        console.log('Other', data);
      }
    })

  }


}
