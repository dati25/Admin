import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../../services/computer.service';
import { Computer } from '../../models/Computer';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
    public requests: Computer[];

    public constructor(private service: ComputerService) {}

    public ngOnInit(): void {
        this.refresh();
    }

    public editComputer(computer: Computer): void {
        computer.status = 'f';
        this.service.update(computer).subscribe(() => this.refresh());
    }

    public deleteComputer(computer: Computer): void {
        this.service.delete(computer).subscribe(() => this.refresh());
    }

    private refresh(): void {
        this.service.findAll().subscribe((result) => (this.requests = result));
    }
}
