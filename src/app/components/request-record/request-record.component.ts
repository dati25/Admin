import { Component, OnInit, Input } from '@angular/core';
import { Request } from 'src/app/models/Request';
import { requestService } from 'src/app/services/request.service';

@Component({
    selector: 'app-request-record',
    templateUrl: './request-record.component.html',
    styleUrls: ['./request-record.component.scss'],
})
export class RequestRecordComponent implements OnInit {
    @Input()
    public requestData: Request[] = [];

    public constructor(private service: requestService) {}

    public ngOnInit(): void {}
}
