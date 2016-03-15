import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Ticket} from './ticket';

@Injectable()
export class TicketService {
    http: Http;
    ticketApi = 'http://localhost:7044/api/tickets';
    // devStatusGroup: {[name: string] : number};

    constructor(http: Http) {
        this.http = http;
    }

    ajaxGetTickets() {
        return this.http.get(this.ticketApi)
            .map(res => res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    getAllTickets() {

    }

    categorizeTickets(rawData: Object[]) {
        let categoriedTickets: { [groupId: number]: Ticket[] } = {};
        for (var rawItem of rawData) {
            let ticket: Ticket = this.mapToTicket(rawItem);
            if (ticket.devStatus === 'DEV In-progress' || ticket.devStatus === 'DEV In-progress' || ticket.devStatus === 'QA Passed') {
                this.pushTicketToGroup(categoriedTickets, 1, ticket);
            } else if (ticket.devStatus === 'Code Submitted' || ticket.devStatus === 'UAT Submitted') {
                this.pushTicketToGroup(categoriedTickets, 2, ticket);
            } else if (ticket.devStatus === 'Code Approved' || ticket.devStatus === 'UAT Approved') {
                this.pushTicketToGroup(categoriedTickets, 3, ticket);
            } else if (ticket.devStatus === 'Code Merged') {
                this.pushTicketToGroup(categoriedTickets, 4, ticket);
            }
        }
        return categoriedTickets;
    }

    private pushTicketToGroup(groups: { [groupId: number]: Ticket[] }, groupNumber: number, ticket: Ticket) {
        groups[groupNumber] = (groups[groupNumber] || []);
        groups[groupNumber].push(ticket);
    }

    private mapToTicket(rawObj: Object) {
        let ticket = new Ticket();
        ticket.id = rawObj['id'];
        ticket.assignee = rawObj['assigned_to_id'];
        ticket.summary = rawObj['summary'];
        ticket.status = rawObj['status'];
        ticket.workId = rawObj['custom_fields']['Work ID'];
        ticket.kilnId = rawObj['custom_fields']['Kiln ID'];
        ticket.devStatus = rawObj['custom_fields']['DEV Status'];
        return ticket;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
