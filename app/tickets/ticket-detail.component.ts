import {Component} from 'angular2/core';
import {Ticket} from './ticket';
import {TicketLinkPipe} from '../common/pipes/ticket-link';

@Component({
    selector: 'ticket-detail',
    templateUrl: 'app/tickets/ticket-detail.component.html',
    inputs: ['ticketList', 'config'],
    pipes: [TicketLinkPipe]
})

export class TicketDetailComponent {
    ticketList: Ticket[];
    config: any;

    isDefectTicket(ticket: Ticket) {
        return ticket.workId.trim().indexOf('Bug') === 0;
    }

    getDevStatusCss(ticket: Ticket) {
        const uatSubmitted = 'uat-submitted';
        const qaInProgress = 'qa-in-progress';

        // treat qa & uat as special case
        let status = this.getCssClass(ticket.status);
        if (status.endsWith(uatSubmitted)) {
            status = uatSubmitted;
        } else if (status.endsWith(qaInProgress)) {
            status = qaInProgress;
        } else {
            status = ticket.devStatus
        }
        return status;
    }

    getCssClass(value: String) {
        return value.toLowerCase().replace(/ /g, '-');
    }
}
