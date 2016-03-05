import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ReviewerListComponent} from './reviewer-list.component';
import {ContactListComponent} from './contact-list.component';
import {ReviewService} from './review.service';

@Component({
    selector: 'reviewer-list-app',
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['ReviewerList']">Reviewer List</a>
        <span> | </span>
        <a [routerLink]="['ContactList']">Contact List</a>
        <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
        ReviewService
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
    }
])

export class AppComponent {
    title = 'Reviewer List App';
}