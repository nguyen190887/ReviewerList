import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Ticket} from './ticket';
import {API} from '../review-data';

@Injectable()
export class TicketService {
    http: Http;
    config: {};
    ticketApi = API.ticketApi;
    configApi = API.configApi;

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

    categorizeTickets(rawData: Object[], statusGroups: any[]) {
        let categoriedTickets: { [groupId: number]: Ticket[] } = {};
        for (var rawItem of rawData) {
            let ticket: Ticket = this.mapToTicket(rawItem);
            let foundGroup = statusGroups.find(s => s.statuses.indexOf(ticket.devStatus.toLowerCase()) >= 0);
            if (foundGroup) {
                this.pushTicketToGroup(categoriedTickets, foundGroup.groupId, ticket);
            }
        }
        console.log('categorized tickets: ' + JSON.stringify(categoriedTickets));
        return categoriedTickets;
    }

    getTicketConfig() {
        return this.http.get(this.configApi)
            .map(res => res.json())
            // .do(data => console.log(data))
            .catch(this.handleError);
    }

    getStatusGroups(statusGroups: any[], filteredDisplay: string) {
        let groups = [];
        statusGroups.forEach(s => {
            if (s.display === filteredDisplay) {
                groups.push({
                    id: s.groupId, 
                    name: s.groupName, 
                    show: s.showOnLoad || false });
            }
        })
        console.log('status group - ' + filteredDisplay + ': ' + JSON.stringify(groups));
        return groups;
    }

    private pushTicketToGroup(groups: { [groupId: number]: Ticket[] }, groupNumber: number, ticket: Ticket) {
        groups[groupNumber] = (groups[groupNumber] || []);
        groups[groupNumber].push(ticket);
    }

    private mapToTicket(rawObj: Object) {
        let ticket = new Ticket();
        ticket.id = rawObj['id'];
        ticket.ticketNo = rawObj['number'];
        ticket.assignee = rawObj['assigned_to_id'];
        ticket.summary = rawObj['summary'];
        ticket.status = rawObj['status'];
        ticket.workId = rawObj['custom_fields']['Work ID'];
        ticket.kilnId = rawObj['custom_fields']['Kiln ID'];
        ticket.devStatus = rawObj['custom_fields']['DEV Status'];
        ticket.reviewTeam = rawObj['custom_fields']['Review Team'];
        ticket.devTeam = rawObj['custom_fields']['DEV Team'];

        // ensure devStatus not empty
        if (ticket.devStatus != null && ticket.devStatus.trim() === '') {
            ticket.devStatus = 'None';
        }

        return ticket;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
