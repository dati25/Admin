import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComputerService } from '../../services/computer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Computer } from '../../models/Computer';
import { UserFormComponent } from '../../components/user-form/user-form.component';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
    switch = document.getElementById('switch');

    form: FormGroup;

    computer: Computer;

    public constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service: ComputerService
    ) {}

    public ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');

        this.service.findById(id).subscribe((computer) => {
            this.computer = computer;
            this.form = UserFormComponent.createForm(this.fb, computer);
        });
    }

    public saveComputer(values: any): void {
        Object.assign(this.computer, values);
        this.service
            .update(this.computer)
            .subscribe(() => this.router.navigate(['/users']));
    }
}
