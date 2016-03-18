import {Component} from 'angular2/core';
import {Ticket} from './ticket';

@Component({
    selector: 'ticket-detail',
    templateUrl: 'app/ticket-detail.component.html',
    inputs: ['ticketList', 'config']
})

export class TicketDetailComponent {
    ticketList: Ticket[];
    config: any;
    
    getTicketUrl(ticket: Ticket) {
        return (this.config.UrlFormat || '').replace('{0}', ticket.ticketNo);
    }
    
    getBacklogUrl(ticket: Ticket) {
        return (this.config.BacklogUrlFormat || '').replace('{0}', ticket.workId);
    }

    getDefectUrl(ticket: Ticket) {
        return (this.config.DefectUrlFormat || '').replace('{0}', ticket.workId.replace('Bug ', '').trim());
    }

    getCodeReviewUrl(ticket: Ticket) {
        return (this.config.CodeReviewUrlFormat || '').replace('{0}', ticket.kilnId);
    }

    isDefectTicket(ticket: Ticket) {
        return ticket.workId.trim().indexOf('Bug') === 0;
    }
}
