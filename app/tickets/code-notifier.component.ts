import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Ticket} from './ticket';
import {TicketService} from './ticket.service';
import {CodeReviewLinkPipe} from '../common/pipes/code-review-link';

@Component({
    templateUrl: 'app/tickets/code-notifier.component.html',
    pipes: [CodeReviewLinkPipe]
})

export class CodeNotifierComponent implements OnInit {
    tickets = [];
    isLoading = true;
    
    constructor(
        private _router: Router,
        private _ticketService: TicketService) {

    }

    ngOnInit() {
        this.isLoading = true;
        
        this._ticketService.ajaxGetTickets(true).subscribe(tickets => {
            this.tickets = this._ticketService.filterPendingCodeReviewTickets(tickets);
            this.isLoading = false;
        });
    }
    
    getCodeComment(ticket: Ticket) {
        return this._ticketService.getCodeComment(ticket);
    }
    
    editComment(ticket: Ticket) {
        let link = ['CodeCommentEdit', {id: ticket.ticketNo }];
        this._router.navigate(link);
    }
}