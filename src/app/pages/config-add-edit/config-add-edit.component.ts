import { Component } from '@angular/core';

@Component({
  selector: 'app-config-add-edit',
  templateUrl: './config-add-edit.component.html',
  styleUrls: ['./config-add-edit.component.scss']
})
export class ConfigAddEditComponent {
  selectedBackupType = 'Full';
  selectedPathType = 'Local';
  selectedPathType2 = 'FTP';
  showBasic = true;

  updateButton(text: string) {
    this.selectedBackupType = text;
  }

  updatePathType(text: string) {
    this.selectedPathType = text;
  }
  updatePathType2(text: string) {
    this.selectedPathType2 = text;
  }
  OnRadioClick(selectedValue: boolean){
    this.showBasic = selectedValue;
  }
}


