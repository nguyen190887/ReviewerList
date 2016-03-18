import {Component, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {TicketDetailComponent} from './ticket-detail.component';
import {TicketService} from './ticket.service';
import {Ticket} from './ticket';

@Component({
    selector: 'ticket-list',
    templateUrl: 'app/ticket-list.component.html',
    styleUrls: ['app/ticket-list.component.css'],
    directives: [TicketDetailComponent]
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
}
