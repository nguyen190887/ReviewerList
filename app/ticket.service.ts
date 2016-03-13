import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class TicketService {
    http: Http;
    ticketApi = 'http://localhost:7044/api/tickets';

    constructor(http: Http) {
        this.http = http;
    }

    ajaxGetTickets() {
        return this.http.get(this.ticketApi).map(res => res.json());
    }
    getAllTickets() {

    }
}
