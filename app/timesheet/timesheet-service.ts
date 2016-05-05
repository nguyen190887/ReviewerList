import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
// import {DatePipe} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {TimesheetLogin} from './timesheet-data';
// import 'rxjs/Rx';
// import {Ticket} from './ticket';
import {API} from '../review-data';

@Injectable()
export class TimesheetService {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    sync(model: TimesheetLogin) {
        return this.http.post(API.timesheetApi, JSON.stringify(model))
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
