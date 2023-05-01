import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-cron',
  templateUrl: './input-cron.component.html',
  styleUrls: ['./input-cron.component.scss'],
})
export class InputCronComponent implements OnInit {
  showSimple: boolean;

  ngOnInit(): void {
    if (this.form.controls['repeatPeriod'].value.includes('*')) {
      this.showSimple = true;
    } else {
      this.showSimple = false;
    }

    const [minute, hour, , , dow] =
      this.form.controls['repeatPeriod'].value.split(' ');

    this.monday = dow.includes('1');
    this.tuesday = dow.includes('2');
    this.wednesday = dow.includes('3');
    this.thursday = dow.includes('4');
    this.friday = dow.includes('5');
    this.saturday = dow.includes('6');
    this.sunday = dow.includes('0');

    this.time = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;

    [this.cron1, this.cron2, this.cron3, this.cron4, this.cron5] =
      this.form.controls['repeatPeriod'].value.split(' ');
  }

  @Input()
  form: FormGroup;

  @Input()
  name: string;

  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  time: string;

  cron1: string;
  cron2: string;
  cron3: string;
  cron4: string;
  cron5: string;

  setCron(): void {
    if (this.showSimple) {
      let dow = '';
      if (this.sunday) dow += '0,';
      if (this.monday) dow += '1,';
      if (this.tuesday) dow += '2,';
      if (this.wednesday) dow += '3,';
      if (this.thursday) dow += '4,';
      if (this.friday) dow += '5,';
      if (this.saturday) dow += '6,';
      if (dow.length === 0) dow = '*';
      else dow = dow.slice(0, -1);

      const [hour, minute] = this.time.split(':');

      this.form.controls['repeatPeriod'].setValue(
        `${minute} ${hour} * * ${dow}`
      );
    } else {
      this.form.controls['repeatPeriod'].setValue(
        `${this.cron1} ${this.cron2} ${this.cron3} ${this.cron4} ${this.cron5}`
      );
    }
  }
}
