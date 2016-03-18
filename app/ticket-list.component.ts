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
    gridGroups = [];
    collapsableGroups = [];

    constructor(private _ticketService: TicketService) { }

    ngOnInit() {
        this.isLoading = true;

        this._ticketService.getTicketConfig().subscribe(config => {
            this.config = config;
            if (config && config.StatusGroups) {
                this.gridGroups = this._ticketService.getStatusGroups(config.StatusGroups, 'grid');
                this.collapsableGroups = this._ticketService.getStatusGroups(config.StatusGroups, 'collapsable');
            }
        });

        this._ticketService.ajaxGetTickets().subscribe(tickets => {
            this.tickets = this._ticketService.categorizeTickets(tickets, this.config.StatusGroups);
            this.isLoading = false;
        });

        console.log('on init');
    }

    toggleNotStartedTickets(group: any) {
        group.show = !group.show;
        console.log(group.name + ' - shownotstarted: ' + group.show);
    }
}
