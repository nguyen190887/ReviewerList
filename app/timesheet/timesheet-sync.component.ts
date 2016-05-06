import {Component, OnInit} from 'angular2/core';
import {TimesheetLogin} from './timesheet-data';
import {TimesheetService} from './timesheet-service';

@Component({
    selector: 'timesheet-sync',
    templateUrl: 'app/timesheet/timesheet-sync.component.html'
})

export class TimesheetSyncComponent implements OnInit {
    model: TimesheetLogin;
    isProcessing = false;
    showWarning = true;
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
        this.resetAlert();
        this.isProcessing = true;
        this._timesheetService.sync(this.model)
            .subscribe(
            data => {
                if (data.result == 'OK') {
                    this.setAlert('Sync successfully! Let open your timesheet to see the magic :)');
                } else {
                    this.setAlert('Failed to sync :(', 'error');
                }
                this.isProcessing = false;
            },
            err => {
                this.setAlert('Error: ' + err, 'error');
                this.isProcessing = false;
            });
    }
    
    toggleWarning() {
        this.showWarning = !this.showWarning;
    }

    private resetAlert() {
        this.setAlert('', '');
    }

    private setAlert(msg: string, type?: string) {
        this.alert.message = msg;
        this.alert.type = type;
    }
}
