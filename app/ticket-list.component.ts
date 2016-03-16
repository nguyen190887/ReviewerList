import {Component, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {TicketService} from './ticket.service';

@Component({
    selector: 'ticket-list',
    templateUrl: 'app/ticket-list.component.html',
    styleUrls: ['app/ticket-list.component.css']
})

export class TicketListComponent implements OnInit {
    tickets = {};
    config = <any>{};

    constructor(private _ticketService: TicketService) { }

    ngOnInit() {
        this._ticketService.ajaxGetTickets().subscribe(tickets => {
            this.tickets = this._ticketService.categorizeTickets(tickets);
        });

        this._ticketService.getTicketConfig().subscribe(config => {
            this.config = config;
        });
        console.log('on init');
    }

    getTicketUrl(id: number) {
        return (this.config.UrlFormat || '').replace('{0}', id);
    }
}
