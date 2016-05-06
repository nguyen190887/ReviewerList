import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {TimesheetSyncEntry} from './timesheet-data';
import {API} from '../review-data';
import {TicketService} from '../tickets/ticket.service';

@Injectable()
export class TimesheetService {
    constructor(
        private _http: Http,
        private _ticketService: TicketService) {

    }

    sync(model: TimesheetSyncEntry) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.put(API.timesheetApi, JSON.stringify(model), { headers: headers })
            .map(res => res.json())
            .catch(this.handleError);
    }

    getWorkflow() {
        let p = new Promise((resolve, reject) => {
            var cachedConfig = this._ticketService.getTicketConfig();
            if (cachedConfig) {
                resolve(cachedConfig.TimesheetWorkflow);
            } else {
                this._ticketService.pullTicketConfig().subscribe(config => {
                    resolve(config.TimesheetWorkflow);
                });
            }
        });
        return p;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
