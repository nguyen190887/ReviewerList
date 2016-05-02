import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Ticket} from './ticket';
import {TicketService} from './ticket.service';

@Component({
    templateUrl: 'app/tickets/code-comment-edit.component.html'
})

export class CodeCommentEditComponent implements OnInit {
    model: Ticket;

    constructor(
        private _ticketService: TicketService,
        private _routeParams: RouteParams,
        private _router: Router) {

    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._ticketService.getTicketById(id)
            .then(ticket => {
                this.model = ticket;
                console.log(this.model);
            });
    }

    goBack() {
        this._router.parent.navigate(['CodeNotifier']);
    }
}