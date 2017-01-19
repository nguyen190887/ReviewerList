import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {API} from '../review-data';
import 'rxjs/Rx';

@Injectable()
export class TextDiffService {
    http: Http;
    cachedConfig: any;
    textDiffApi = API.textDiffApi;

    constructor(http: Http) {
        this.http = http;
    }

    process(textRaw: string, ignoredParams: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let data = '{rawText: \'' + textRaw + '\', ignoredParams: \' + ignoredParams +\'}';
        return this.http.post(this.textDiffApi, data, { headers: headers })
            // .map(res => this.convertTime(res.json()))
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
