import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AlertConfig {
  title?: string;
  header?: string;
  message?: string;
  closeBtn?: string;
  actionBtn?: string;
  cancelBtn?: boolean | undefined;
  okBtn?:boolean| undefined;
}

@Component({
  selector: 'app-confirm-model',
  templateUrl: './confirm-model.component.html',
  styleUrls: ['./confirm-model.component.scss']
})
export class ConfirmModelComponent {

  public title: string = 'Warning!';
  public header: string = 'Warning Details Here!';
  public message: string = 'Are you sure you want to cancel, click Yes to cancel?';
  public closeBtn: string = 'No';
  public actionBtn: string = 'Yes';
  public okBtn: boolean | undefined= true;
  public cancelBtn: boolean | undefined= true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AlertConfig
  ) { }

  ngOnInit(): void {
    this.addConfigs();
  }

  private addConfigs(): void {
    this.title = this.data.title || this.title;
    this.header = this.data.header || this.header;
    this.message = this.data.message || this.message;
    this.closeBtn = this.data.closeBtn || this.closeBtn;
    this.actionBtn = this.data.actionBtn || this.actionBtn;
    if ('okBtn' in this.data) {
      this.okBtn = this.data.okBtn;
    }
    if ('cancelBtn' in this.data) {
      this.cancelBtn = this.data.cancelBtn;
    }
  }

}
