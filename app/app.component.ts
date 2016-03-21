import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ReviewerListComponent} from './reviewer-list.component';
import {ContactListComponent} from './contact-list.component';
import {ContactDetailComponent} from './contact-detail.component';
import {TicketListComponent} from './ticket-list.component';
import {ReleaseNotesComponent} from './release-notes.component';
import {ReviewService} from './review.service';
import {TicketService} from './ticket.service';

@Component({
    selector: 'reviewer-list-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['ReviewerList']">Reviewer List</a>
            <a [routerLink]="['ContactList']">Contact List</a>
            <a [routerLink]="['Tickets']">Ticket List</a>
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
        path: '/release-notes',
        name: 'ReleaseNotes',
        component: ReleaseNotesComponent
    }
])

export class AppComponent {
    title = 'Reviewer List App';
}