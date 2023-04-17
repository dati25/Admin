import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../../services/computer.service';
import { Computer } from '../../models/Computer';
import { Router } from '@angular/router';
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    public computers: Computer[];

    public constructor(
        private service: ComputerService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        this.refresh();
    }

    public editComputer(computer: Computer): void {
        this.router.navigate(['/user/edit', computer.id]);
    }

    public deleteComputer(computer: Computer): void {
        this.service.delete(computer).subscribe(() => {
            this.refresh();
        });
    }

    private refresh(): void {
        this.service.findAll().subscribe((result) => (this.computers = result));
    }
}
