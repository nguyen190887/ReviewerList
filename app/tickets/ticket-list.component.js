System.register(['angular2/core', './ticket-detail.component', './ticket.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ticket_detail_component_1, ticket_service_1;
    var TicketListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ticket_detail_component_1_1) {
                ticket_detail_component_1 = ticket_detail_component_1_1;
            },
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            }],
        execute: function() {
            TicketListComponent = (function () {
                function TicketListComponent(_ticketService) {
                    this._ticketService = _ticketService;
                    this.cachedData = [];
                    this.config = {};
                    this.isLoading = false;
                    this.gridGroups = [];
                    this.collapsableGroups = [];
                    this.allDevTeams = [];
                    this.devTeam = '';
                }
                TicketListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.config = this._ticketService.getTicketConfig();
                    if (this.config == null) {
                        this._ticketService.pullTicketConfig().subscribe(function (config) {
                            _this.config = config;
                            _this.bindTicketData(_this.config);
                        });
                    }
                    else {
                        this.bindTicketData(this.config);
                    }
                };
                TicketListComponent.prototype.toggleNotStartedTickets = function (group) {
                    group.show = !group.show;
                };
                TicketListComponent.prototype.bindTicketData = function (config) {
                    var _this = this;
                    if (config && config.StatusGroups) {
                        this.gridGroups = this._ticketService.getStatusGroups(config.StatusGroups, 'grid');
                        this.collapsableGroups = this._ticketService.getStatusGroups(config.StatusGroups, 'collapsable');
                        this._ticketService.getAllDevTeams().then(function (teams) {
                            _this.allDevTeams = teams;
                        });
                        this._ticketService.ajaxGetTickets(true).subscribe(function (tickets) { return _this.onTicketLoaded(tickets); });
                    }
                };
                TicketListComponent.prototype.filterByTeam = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.isLoading = true;
                        _this.onTicketLoaded(_this.cachedData, true);
                    });
                };
                TicketListComponent.prototype.refreshTickets = function () {
                    var _this = this;
                    this.isLoading = true;
                    this._ticketService.ajaxGetTickets(true).subscribe(function (tickets) { return _this.onTicketLoaded(tickets); });
                };
                TicketListComponent.prototype.getTicketGroupCount = function (groupId) {
                    if (this.tickets && this.tickets[groupId]) {
                        return this.tickets[groupId].length;
                    }
                    return 0;
                };
                TicketListComponent.prototype.onTicketLoaded = function (tickets, noCache) {
                    if (noCache === void 0) { noCache = false; }
                    if (!noCache) {
                        this.cachedData = tickets;
                    }
                    this.tickets = this._ticketService.categorizeTickets(tickets, this.config.StatusGroups, this.devTeam);
                    this.isLoading = false;
                };
                TicketListComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket-list',
                        templateUrl: 'app/tickets/ticket-list.component.html',
                        styleUrls: ['app/tickets/ticket-list.component.css'],
                        directives: [ticket_detail_component_1.TicketDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [ticket_service_1.TicketService])
                ], TicketListComponent);
                return TicketListComponent;
            }());
            exports_1("TicketListComponent", TicketListComponent);
        }
    }
});
//# sourceMappingURL=ticket-list.component.js.map