System.register(['angular2/core', 'angular2/router', 'angular2/http', './reviewers/reviewer-list.component', './reviewers/contact-list.component', './reviewers/contact-detail.component', './reviewers/review.service', './tickets/ticket-list.component', './tickets/ticket.service', './tickets/code-notifier.component', './release-notes.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, reviewer_list_component_1, contact_list_component_1, contact_detail_component_1, review_service_1, ticket_list_component_1, ticket_service_1, code_notifier_component_1, release_notes_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (reviewer_list_component_1_1) {
                reviewer_list_component_1 = reviewer_list_component_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (contact_detail_component_1_1) {
                contact_detail_component_1 = contact_detail_component_1_1;
            },
            function (review_service_1_1) {
                review_service_1 = review_service_1_1;
            },
            function (ticket_list_component_1_1) {
                ticket_list_component_1 = ticket_list_component_1_1;
            },
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            },
            function (code_notifier_component_1_1) {
                code_notifier_component_1 = code_notifier_component_1_1;
            },
            function (release_notes_component_1_1) {
                release_notes_component_1 = release_notes_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                // Cache ticket config
                function AppComponent(_ticketService) {
                    this._ticketService = _ticketService;
                    this.title = 'Reviewer List App';
                    console.log('-- app.component: get ticket config');
                    _ticketService.pullTicketConfig();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'reviewer-list-app',
                        template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['ReviewerList']\">Reviewer List</a>\n            <a [routerLink]=\"['ContactList']\">Contact List</a>\n            <a [routerLink]=\"['Tickets']\">Ticket List</a>\n            <a [routerLink]=\"['CodeNotifier']\">Code Review Notice</a>\n            <a [routerLink]=\"['ReleaseNotes']\">Release Notes</a>\n        </nav>\n        <div>\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            review_service_1.ReviewService,
                            ticket_service_1.TicketService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/reviewer-list',
                            name: 'ReviewerList',
                            component: reviewer_list_component_1.ReviewerListComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/contact-list',
                            name: 'ContactList',
                            component: contact_list_component_1.ContactListComponent
                        },
                        {
                            path: '/contact-detail/:id',
                            name: 'ContactDetail',
                            component: contact_detail_component_1.ContactDetailComponent
                        },
                        {
                            path: '/tickets',
                            name: 'Tickets',
                            component: ticket_list_component_1.TicketListComponent
                        },
                        {
                            path: '/code-notifier',
                            name: 'CodeNotifier',
                            component: code_notifier_component_1.CodeNotifierComponent
                        },
                        {
                            path: '/release-notes',
                            name: 'ReleaseNotes',
                            component: release_notes_component_1.ReleaseNotesComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [ticket_service_1.TicketService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map