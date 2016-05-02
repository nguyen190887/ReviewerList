import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ReviewerListComponent} from './reviewers/reviewer-list.component';
import {ContactListComponent} from './reviewers/contact-list.component';
import {ContactDetailComponent} from './reviewers/contact-detail.component';
import {ReviewService} from './reviewers/review.service';
import {TicketListComponent} from './tickets/ticket-list.component';
import {TicketService} from './tickets/ticket.service';
import {CodeNotifierComponent} from './tickets/code-notifier.component';
import {CodeCommentEditComponent} from './tickets/code-comment-edit.component';
import {ReleaseNotesComponent} from './release-notes.component';

@Component({
    selector: 'reviewer-list-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['ReviewerList']">Reviewer List</a>
            <a [routerLink]="['ContactList']">Contact List</a>
            <a [routerLink]="['Tickets']">Ticket List</a>
            <a [routerLink]="['CodeNotifier']">Code Review Notice</a>
            <a [routerLink]="['ReleaseNotes']">Release Notes</a>
        </nav>
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        ReviewService,
        TicketService
    ]
})

@RouteConfig([
    {
        path: '/reviewer-list',
        name: 'ReviewerList',
        component: ReviewerListComponent,
        useAsDefault: true
    },
    {
        path: '/contact-list',
        name: 'ContactList',
        component: ContactListComponent
    },
    {
        path: '/contact-detail/:id',
        name: 'ContactDetail',
        component: ContactDetailComponent
    },
    {
        path: '/tickets',
        name: 'Tickets',
        component: TicketListComponent
    },
    {
        path: '/code-notifier',
        name: 'CodeNotifier',
        component: CodeNotifierComponent
    },
    {
        path: '/code-notifier/edit-comment/:id',
        name: 'CodeCommentEdit',
        component: CodeCommentEditComponent
    },
    {   
        path: '/release-notes',
        name: 'ReleaseNotes',
        component: ReleaseNotesComponent
    }
])

export class AppComponent {
    title = 'Reviewer List App';
    
    // Cache ticket config
    constructor(private _ticketService: TicketService) {
        console.log('-- app.component: get ticket config');
        _ticketService.pullTicketConfig();
    }
}