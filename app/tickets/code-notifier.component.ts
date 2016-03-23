import {Component, OnInit} from 'angular2/core';
import {TicketService} from './ticket.service';

@Component({
    templateUrl: 'app/tickets/code-notifier.component.html'
})

export class CodeNotifierComponent implements OnInit {
    tickets = [];
    isLoading = true;
    
    constructor(private _ticketService: TicketService) {

    }

    ngOnInit() {
        this.isLoading = true;
        
        this._ticketService.ajaxGetTickets().subscribe(tickets => {
            this.tickets = this._ticketService.filterPendingCodeReviewTickets(tickets);
            this.isLoading = false;
        });
    }
}