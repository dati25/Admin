import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Group } from '../../../../models/Group';
import { Computer } from '../../../../models/Computer';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-groups-form',
  templateUrl: './groups-form.component.html',
  styleUrls: ['./groups-form.component.scss'],
})
export class GroupsFormComponent {
  constructor(private fb: FormBuilder) {}

  get pcGroups() {
    return this.form.get('pcGroups') as FormArray;
  }

  @Input()
  form: FormGroup;

  @Input()
  users: User[];

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, group: Group): FormGroup {
    return fb.group({
      name: group.name,
      pcGroups: fb.array(
        group.pcGroups.map((pcGroup: Computer) =>
          fb.group({
            idPc: pcGroup.idPc,
            name: pcGroup.name,
          })
        )
      ),
    });
  }

  public save(): void {
    this.saved.emit(this.form.value);
  }

  public goBack(): void {
    window.history.back();
  }

  public addUser(select: HTMLSelectElement): void {
    const addedUser = this.users.find(
      (user) => user.id === parseInt(select.value)
    );
    const pcGroups = this.form.get('pcGroups') as FormArray;
    pcGroups.push(
      this.fb.group({
        idPc: addedUser.id,
        name: addedUser.name,
      })
    );

    const userIndex = this.users.findIndex(
      (user) => user.id === parseInt(select.value)
    );

    this.users.splice(userIndex, 1);

    this.form.patchValue({ pcGroups: pcGroups.value });
  }

  public removeUser(computer: Computer): void {
    const pcGroups = this.form.get('pcGroups') as FormArray;
    const index = pcGroups.controls.findIndex(
      (control) => control.get('idPc').value === computer.idPc
    );
    pcGroups.removeAt(index);
    this.form.patchValue({ pcGroups: pcGroups.value });
  }
}
