System.register(['angular2/core', './ticket.service'], function(exports_1, context_1) {
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
    var core_1, ticket_service_1;
    var TicketListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            }],
        execute: function() {
            TicketListComponent = (function () {
                function TicketListComponent(_ticketService) {
                    this._ticketService = _ticketService;
                    this.tickets = {};
                    this.config = {};
                    this.isLoading = false;
                }
                TicketListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoading = true;
                    this._ticketService.getTicketConfig().subscribe(function (config) {
                        _this.config = config;
                    });
                    this._ticketService.ajaxGetTickets().subscribe(function (tickets) {
                        _this.tickets = _this._ticketService.categorizeTickets(tickets);
                        _this.isLoading = false;
                    });
                    console.log('on init');
                };
                TicketListComponent.prototype.getTicketUrl = function (ticket) {
                    return (this.config.UrlFormat || '').replace('{0}', ticket.ticketNo);
                };
                TicketListComponent.prototype.getBacklogUrl = function (ticket) {
                    return (this.config.BacklogUrlFormat || '').replace('{0}', ticket.workId);
                };
                TicketListComponent.prototype.getDefectUrl = function (ticket) {
                    return (this.config.DefectUrlFormat || '').replace('{0}', ticket.workId.replace('Bug ', '').trim());
                };
                TicketListComponent.prototype.getCodeReviewUrl = function (ticket) {
                    return (this.config.CodeReviewUrlFormat || '').replace('{0}', ticket.kilnId);
                };
                TicketListComponent.prototype.isDefectTicket = function (ticket) {
                    return ticket.workId.trim().indexOf('Bug') === 0;
                };
                TicketListComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket-list',
                        templateUrl: 'app/ticket-list.component.html',
                        styleUrls: ['app/ticket-list.component.css']
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