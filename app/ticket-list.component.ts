import {Component, OnInit} from 'angular2/core';
// import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {NgClass} from 'angular2/common'; 
import {TicketService} from './ticket.service';

@Component({
    selector: 'ticket-list',
    templateUrl: 'app/ticket-list.component.html'
})

export class TicketListComponent implements OnInit {
    tickets = [];
    
    constructor(private _ticketService: TicketService) {}

    ngOnInit() {
        this._ticketService.ajaxGetTickets().subscribe(tickets => this.tickets = tickets);
    }
}
