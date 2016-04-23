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
    tickets: {};
    cachedData = [];
    config = <any>{};
    isLoading = false;
    gridGroups = [];
    collapsableGroups = [];
    allDevTeams = [];
    devTeam = '';

    constructor(private _ticketService: TicketService) { }

    ngOnInit() {
        this.isLoading = true;

        this.config = this._ticketService.getTicketConfig();
        if (this.config == null) { // if config is not ready yet, make pull it again
            this._ticketService.pullTicketConfig().subscribe(config => {
                this.config = config;
                this.bindTicketData(this.config);
            });
        } else {
            this.bindTicketData(this.config);
        }
    }

    toggleNotStartedTickets(group: any) {
        group.show = !group.show;
    }

    bindTicketData(config: any) {
        if (config && config.StatusGroups) {
            this.gridGroups = this._ticketService.getStatusGroups(config.StatusGroups, 'grid');
            this.collapsableGroups = this._ticketService.getStatusGroups(config.StatusGroups, 'collapsable');

            this._ticketService.getAllDevTeams().then(teams => {
                this.allDevTeams = teams;
            });

            this._ticketService.ajaxGetTickets(true).subscribe(tickets => this.onTicketLoaded(tickets));
        }
    }

    filterByTeam() {
        setTimeout(() => {
            this.isLoading = true;
            this.onTicketLoaded(this.cachedData, true);
        });
    }

    refreshTickets() {
        this.isLoading = true;
        this._ticketService.ajaxGetTickets(true).subscribe(tickets => this.onTicketLoaded(tickets));
    }
    
    getTicketGroupCount(groupId: number) {
        if (this.tickets && this.tickets[groupId]) {
            return this.tickets[groupId].length;
        }
        return 0;
    }

    private onTicketLoaded(tickets: Array<Object>, noCache:boolean = false) {
        if (!noCache) {
            this.cachedData = tickets;
        }
        this.tickets = this._ticketService.categorizeTickets(tickets, this.config.StatusGroups, this.devTeam);
        this.isLoading = false;
    }
}
