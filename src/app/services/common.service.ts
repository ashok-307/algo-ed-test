import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private matDialog: MatDialog,
  ) { }
  public modal!: MatDialogRef<any>;
  public resultSubmitted = false;

  public openModal<T>(template: T | any, data: MatDialogConfig, callback: (value: any) => void) {
    this.modal = this.matDialog.open(template, {position: {top: 'top'}, ...data});
    document.body.classList.add('alert-model');
    this.modal.afterClosed().subscribe((result: any) => {
      document.body.classList.remove('alert-model');
      callback(result);
    });
  }

  public isResultSubmitted(result: boolean) {
    this.resultSubmitted = result;
  }
}
