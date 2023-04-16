import { Component } from '@angular/core';
import { requestService } from 'src/app/services/request.service';
import { Request } from 'src/app/models/Request';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent {
    public requestData: Request[] = [];

    public constructor(private service: requestService) {}

    public ngOnInit(): void {
        this.service
            .findAll()
            .subscribe((result) => (this.requestData = result));
    }
}
