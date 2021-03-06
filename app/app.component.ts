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
import {TimesheetSyncComponent} from './timesheet/timesheet-sync.component';
import {TimesheetService} from './timesheet/timesheet-service';
import {ElmahParserComponent} from './elmah/elmah-parser.component';
import {ElmahService} from './elmah/elmah.service';
import {TextDiffComponent} from './textdiff/textdiff.component';
import {TextDiffService} from './textdiff/textdiff.service';

@Component({
    selector: 'reviewer-list-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['ReviewerList']">Reviewer List</a>
            <a [routerLink]="['ContactList']">Contact List</a>
            <a [routerLink]="['Tickets']">Ticket List</a>
            <a [routerLink]="['CodeNotifier']">Code Review Notice</a>
            <a [routerLink]="['TimesheetSync']">Timesheet Sync</a>
            <a [routerLink]="['ElmahParser']">Elmah Parser</a>
            <a [routerLink]="['TextDiff']">Text Diff</a>
            <a [routerLink]="['ReleaseNotes']">Release Notes</a>
        </nav>
        <div *ngIf="!loading">
            <router-outlet></router-outlet>
        </div>

        <div *ngIf="loading">Please wait...</div>
        <div *ngIf="message">{{message}}</div>
    `,
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        ReviewService,
        TicketService,
        TimesheetService,
        ElmahService,
        TextDiffService
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
        path: '/timesheet-sync',
        name: 'TimesheetSync',
        component: TimesheetSyncComponent
    },
    {
        path: '/elmah-parser',
        name: 'ElmahParser',
        component: ElmahParserComponent
    },
    {
        path: '/textdiff',
        name: 'TextDiff',
        component: TextDiffComponent
    },
    {
        path: '/release-notes',
        name: 'ReleaseNotes',
        component: ReleaseNotesComponent
    }
])

export class AppComponent {
    title = 'Reviewer List App';
    loading = true;
    message = '';

    // Cache ticket config
    constructor(private _ticketService: TicketService) {
        console.log('-- app.component: get ticket config');
        _ticketService.pullTicketConfig().subscribe(
            () => {
                this.loading = false;
                this.message = '';
            },
            err => {
                this.loading = false;
                this.message = 'Failed to pull data from server. Press F5 to retry please!';
            });
    }
}
