import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Admin } from '../../../../models/Admin';

@Component({
  selector: 'app-settings-report-form',
  templateUrl: './settings-report-form.component.html',
  styleUrls: ['./settings-report-form.component.scss'],
})
export class SettingsReportFormComponent {
  public showBasic: boolean = false;
  public cron: string[] = ['', '', '', '', ''];
  public basic: string[] = ['', '', '', '', ''];
  public numeros: number[] = [0, 0, 0, 0, 0, 0, 0];

  @Input()
  form: FormGroup;

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public OnRadioClick(input: boolean) {
    this.showBasic = input;
  }
  public ngOnInit(): void {
    this.getCron();
  }

  public static createForm(fb: FormBuilder, admin: Admin): FormGroup {
    return fb.group({
      username: admin.username,
      email: admin.email,
      repeatPeriod: admin.repeatPeriod,
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }

  public hideBar(): boolean {
    const radioBtn = document.getElementById('btnradio2') as HTMLInputElement;
    return radioBtn.checked;
  }

  public updateCron(index: number, event: any): void {
    this.cron[index] = event.target.value;
    var finalCron =
      this.cron[0] +
      ' ' +
      this.cron[1] +
      ' ' +
      this.cron[2] +
      ' ' +
      this.cron[3] +
      ' ' +
      this.cron[4];

    this.form.controls['repeatPeriod'].setValue(finalCron);
  }
  public getCron() {
    for (let index = 0; index <= 5; index++) {
      this.cron[index] = this.form.value.repeatPeriod.split(' ')[index];
    }
  }
  public updateBasic(numero: string): void {
    if (this.basic[4].includes(numero) && this.basic[4].length < 2) {
      this.basic[4] = this.basic[4].replace(numero, '');
    } else if (
      this.basic[4].includes(numero) &&
      this.basic[4].lastIndexOf(numero) == 0
    ) {
      this.basic[4] = this.basic[4].replace(numero + ',', '');
    } else if (this.basic[4].includes(numero)) {
      this.basic[4] = this.basic[4].replace(',' + numero, '');
    } else if (this.basic[4] != '') {
      this.basic[4] = this.basic[4] + ',' + numero;
    } else {
      this.basic[4] = numero;
    }
    console.log(this.basic);

    this.finalCronBasic();
  }
  public updateBasicTime(event: any) {
    var time = event.target.value.split(':');
    this.basic[1] = time[0];
    this.basic[0] = time[1];

    this.finalCronBasic();
  }

  public finalCronBasic(): void {
    var finalCron =
      this.basic[0] + ' ' + this.basic[1] + ' * ' + '* ' + this.basic[4];

    this.form.controls['repeatPeriod'].setValue(finalCron);
  }
}
