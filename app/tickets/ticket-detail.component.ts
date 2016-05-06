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
}
