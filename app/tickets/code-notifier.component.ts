import {Component, OnInit} from 'angular2/core';
import {TicketService} from './ticket.service';
import {CodeReviewLinkPipe} from '../common/pipes/code-review-link';

@Component({
    templateUrl: 'app/tickets/code-notifier.component.html',
    pipes: [CodeReviewLinkPipe]
})

export class CodeNotifierComponent implements OnInit {
    tickets = [];
    isLoading = true;
    
    constructor(private _ticketService: TicketService) {

    }

    ngOnInit() {
        this.isLoading = true;
        
        this._ticketService.ajaxGetTickets(true).subscribe(tickets => {
            this.tickets = this._ticketService.filterPendingCodeReviewTickets(tickets);
            this.isLoading = false;
        });
    }
}