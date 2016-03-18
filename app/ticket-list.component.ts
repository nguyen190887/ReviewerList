import {Component, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {TicketService} from './ticket.service';
import {Ticket} from './ticket';

@Component({
    selector: 'ticket-list',
    templateUrl: 'app/ticket-list.component.html',
    styleUrls: ['app/ticket-list.component.css']
})

export class TicketListComponent implements OnInit {
    tickets = {};
    config = <any>{};
    isLoading = false;

    constructor(private _ticketService: TicketService) { }

    ngOnInit() {
        this.isLoading = true;
        
        this._ticketService.getTicketConfig().subscribe(config => {
            this.config = config;
        });
        
        this._ticketService.ajaxGetTickets().subscribe(tickets => {
            this.tickets = this._ticketService.categorizeTickets(tickets);
            this.isLoading = false;
        });
                
        console.log('on init');
    }

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
