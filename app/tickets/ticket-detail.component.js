System.register(['angular2/core', '../common/pipes/ticket-link'], function(exports_1, context_1) {
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
    var core_1, ticket_link_1;
    var TicketDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ticket_link_1_1) {
                ticket_link_1 = ticket_link_1_1;
            }],
        execute: function() {
            TicketDetailComponent = (function () {
                function TicketDetailComponent() {
                }
                TicketDetailComponent.prototype.isDefectTicket = function (ticket) {
                    return ticket.workId.trim().indexOf('Bug') === 0;
                };
                TicketDetailComponent.prototype.getDevStatusCss = function (ticket) {
                    var uatSubmitted = 'uat-submitted';
                    var qaInProgress = 'qa-in-progress';
                    // treat qa & uat as special case
                    var status = this.getCssClass(ticket.status);
                    if (status.endsWith(uatSubmitted)) {
                        status = uatSubmitted;
                    }
                    else if (status.endsWith(qaInProgress)) {
                        status = qaInProgress;
                    }
                    else {
                        status = this.getCssClass(ticket.devStatus);
                    }
                    return status;
                };
                TicketDetailComponent.prototype.getCssClass = function (value) {
                    return value.toLowerCase().replace(/ /g, '-');
                };
                TicketDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket-detail',
                        templateUrl: 'app/tickets/ticket-detail.component.html',
                        inputs: ['ticketList', 'config'],
                        pipes: [ticket_link_1.TicketLinkPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TicketDetailComponent);
                return TicketDetailComponent;
            }());
            exports_1("TicketDetailComponent", TicketDetailComponent);
        }
    }
});
//# sourceMappingURL=ticket-detail.component.js.map