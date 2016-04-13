import {Component, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {TicketDetailComponent} from './ticket-detail.component';
import {TicketService} from './ticket.service';
import {Ticket} from './ticket';

@Component({
    selector: 'ticket-list',
    templateUrl: 'app/tickets/ticket-list.component.html',
    styleUrls: ['app/tickets/ticket-list.component.css'],
    directives: [TicketDetailComponent]
})

export class TicketListComponent implements OnInit {
    tickets = {};
    config = <any>{};
    isLoading = false;
    gridGroups = [];
    collapsableGroups = [];

    constructor(private _ticketService: TicketService) { }

    ngOnInit() {
        this.isLoading = true;

        this.config = this._ticketService.getTicketConfig();
        if (this.config == null) { // if config is not ready yet, make pull it again
            this._ticketService.pullTicketConfig().subscribe(config => {
                this.config = config;
                this.bindTickets(this.config);
            });
        } else {
            this.bindTickets(this.config);
        }
    }

    toggleNotStartedTickets(group: any) {
        group.show = !group.show;
    }

    bindTickets(config: any) {
        if (config && config.StatusGroups) {
            this.gridGroups = this._ticketService.getStatusGroups(config.StatusGroups, 'grid');
            this.collapsableGroups = this._ticketService.getStatusGroups(config.StatusGroups, 'collapsable');

            this._ticketService.ajaxGetTickets().subscribe(tickets => {
                this.tickets = this._ticketService.categorizeTickets(tickets, this.config.StatusGroups);
                this.isLoading = false;
            });
        }
    }
}
