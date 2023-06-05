import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Config } from '../../../../models/Config';
import { Source } from '../../../../models/Source';
import { Destination } from '../../../../models/Destination';
import { Group } from 'src/app/models/Group';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-configs-form',
  templateUrl: './configs-form.component.html',
  styleUrls: ['./configs-form.component.scss'],
})
export class ConfigsFormComponent implements OnInit {
  @ViewChild('usernameInput') usernameInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;
  @ViewChild('ipInput') ipInput: ElementRef;
  @ViewChild('portInput') portInput: ElementRef;
  @ViewChild('pathInput') pathInput: ElementRef;

  username: string = '';
  password: string = '';
  ip: string = '';
  port: string = '';
  path: string = '';

  usernames: string[] = [];
  passwords: string[] = [];
  ips: string[] = [];
  ports: string[] = [];
  paths: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    for (let i = 0; i < this.form.value.destinations.length; i++) {
      if (this.form.value.destinations[i].type) {
        this.username = this.form.value.destinations[i].path
          .split('/')[2]
          .split(':')[0];
        this.password = this.form.value.destinations[i].path
          .split('/')[2]
          .split(':')[1]
          .split('@')[0];
        this.ip = this.form.value.destinations[i].path
          .split('/')[2]
          .split(':')[1]
          .split('@')[1]
          .split(':')[0];
        this.port = this.form.value.destinations[i].path
          .split('/')[2]
          .split(':')[2];
        this.path = this.form.value.destinations[i].path
          .split('/')
          .slice(5)
          .join('/');

        this.usernames.push(this.username);
        this.passwords.push(this.password);
        this.ips.push(this.ip);
        this.ports.push(this.port);
        this.paths.push(this.path);
      } else {
        this.usernames.push('');
        this.passwords.push('');
        this.ips.push('');
        this.ports.push('');
        this.paths.push('');
      }
    }
  }

  public getValueFromInputField(inputField: ElementRef): string {
    return inputField.nativeElement.value;
  }

  public logInputValues(i: number): void {
    this.username = this.getValueFromInputField(this.usernameInput);
    this.password = this.getValueFromInputField(this.passwordInput);
    this.ip = this.getValueFromInputField(this.ipInput);
    this.port = this.getValueFromInputField(this.portInput);
    this.path = this.getValueFromInputField(this.pathInput);

    const formatted = `ftp://${this.username}:${this.password}@${this.ip}:${this.port}//${this.path}`;

    this.form.value.destinations[i].path = formatted;

    console.log(this.form.value.destinations[i].path);
  }

  get sources() {
    return this.form.get('sources') as FormArray;
  }

  get destinations() {
    return this.form.get('destinations') as FormArray;
  }

  get computers() {
    return this.form.get('computers') as FormArray;
  }

  get groups() {
    return this.form.get('groups') as FormArray;
  }

  @Input()
  form: FormGroup;

  @Input()
  allUsers: User[];

  @Input()
  allGroups: Group[];

  @Output()
  saved: EventEmitter<any> = new EventEmitter<any>();

  public static createForm(fb: FormBuilder, config: Config): FormGroup {
    const computersInput = config.tasks
      .map((task) => task.computer)
      .filter((computer) => computer !== undefined)
      .map((computer) => {
        return fb.group({
          idPc: computer.idPc,
          name: computer.name,
        });
      });

    const groupsInput = config.tasks
      .map((task) => task.group)
      .filter((group) => group !== undefined)
      .map((group) => {
        return fb.group({
          idGroup: group.id,
          name: group.name,
          pcGroups: group.pcGroups,
        });
      });

    return fb.group({
      id: config.id,
      name: config.name,
      type: config.type,
      repeatPeriod: config.repeatPeriod,
      expirationDate: new Date(config.expirationDate)
        .toISOString()
        .split('T')[0],
      compress: config.compress,
      retention: config.retention,
      packageSize: config.packageSize,
      createdBy: config.createdBy,
      status: config.status,
      sources: fb.array(
        config.sources.map((source: Source) =>
          fb.group({
            path: source.path,
          })
        )
      ),
      destinations: fb.array(
        config.destinations.map((destination: Destination) =>
          fb.group({
            type: destination.type,
            path: destination.path,
          })
        )
      ),
      computers: fb.array(computersInput),
      groups: fb.array(groupsInput),
    });
  }

  public save(): void {
    console.log(this.form.value);

    this.saved.emit(this.form.value);
  }

  public goBack(): void {
    window.history.back();
  }

  public addSource(): void {
    this.sources.push(this.addSourceControl());
  }

  public addSourceControl(): FormGroup {
    return new FormGroup({
      path: new FormControl(),
    });
  }

  public removeSource(index: number): void {
    this.sources.removeAt(index);
  }

  public addDest(): void {
    this.destinations.push(this.addDestControl());
  }

  public addDestControl(): FormGroup {
    return new FormGroup({
      type: new FormControl(false),
      path: new FormControl(),
    });
  }

  public addFtpDest(): void {
    this.destinations.push(this.addFtpDestControl());
    this.usernames.push('');
    this.passwords.push('');
    this.ips.push('');
    this.ports.push('');
    this.paths.push('');
  }

  public addFtpDestControl(): FormGroup {
    return new FormGroup({
      type: new FormControl(true),
      path: new FormControl(),
    });
  }

  public removeDest(index: number): void {
    this.destinations.removeAt(index);
    this.usernames.splice(index, 1);
    this.passwords.splice(index, 1);
    this.ips.splice(index, 1);
    this.ports.splice(index, 1);
    this.paths.splice(index, 1);
  }

  public removeUser(index: number): void {
    this.computers.removeAt(index);
  }

  public removeGroup(index: number): void {
    this.groups.removeAt(index);
  }

  public addUser(select: HTMLSelectElement): void {
    const addedUser = this.allUsers.find(
      (user) => user.id === parseInt(select.value)
    );
    const computers = this.form.get('computers') as FormArray;
    computers.push(
      this.fb.group({
        idPc: addedUser.id,
        name: addedUser.name,
      })
    );

    const userIndex = this.allUsers.findIndex(
      (user) => user.id === parseInt(select.value)
    );

    this.allUsers.splice(userIndex, 1);

    this.form.patchValue({ computers: computers.value });
  }

  public addGroup(select: HTMLSelectElement): void {
    console.log(this.allGroups);

    const addedGroup = this.allGroups.find(
      (group) => group.id === parseInt(select.value)
    );
    const groups = this.form.get('groups') as FormArray;
    groups.push(
      this.fb.group({
        idGroup: addedGroup.id,
        name: addedGroup.name,
        pcGroups: addedGroup.pcGroups,
      })
    );

    const groupIndex = this.allGroups.findIndex(
      (group) => group.id === parseInt(select.value)
    );

    this.allGroups.splice(groupIndex, 1);

    this.form.patchValue({ groups: groups.value });
  }
}
