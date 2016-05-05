import {Component, OnInit} from 'angular2/core';
import {TimesheetLogin} from './timesheet-data';
import {TimesheetService} from './timesheet-service';

@Component({
    selector: 'timesheet-sync',
    templateUrl: 'app/timesheet/timesheet-sync.component.html'
})

export class TimesheetSyncComponent implements OnInit {
    model: TimesheetLogin;
    alert = {
        message: '',
        type: ''
    };

    constructor(private _timesheetService: TimesheetService) {
        this.model = new TimesheetLogin();
    }

    ngOnInit() {
    }

    sync() {
        this._timesheetService.sync(this.model)
            .subscribe(
                data => {
                    if (data.result == 'OK') {
                        this.setAlert('Sync successfully!');
                    } else {
                        this.setAlert('Failed to sync :(', 'error');
                    }
                },
                err => {
                    this.setAlert('Error: ' + err, 'error');
                });
    }

    private setAlert(msg: string, type?: string) {
        this.alert.message = msg;
        this.alert.type = type;
    }
}
