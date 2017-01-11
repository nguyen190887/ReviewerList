import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {API} from '../review-data';
import 'rxjs/Rx';

@Injectable()
export class ElmahService {
    http: Http;
    cachedConfig: any;
    elmahApi = API.elmahApi;

    constructor(http: Http) {
        this.http = http;
    }

    parse(raw: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let data = '{raw: \'' + raw + '\'}';
        return this.http.post(this.elmahApi + '/parse', data, { headers: headers })
            // .map(res => this.convertTime(res.json()))
            .map(res => res.json())
            .catch(this.handleError);
    }

    private convertTime(errorData: any) {
        if (errorData && errorData.errors.length) {
            for (let i = 0; i < errorData.errors.length; i++) {
                errorData.errors[i].Time = Date.parse(errorData.errors[i].Time);
            }
        }
        return errorData;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
