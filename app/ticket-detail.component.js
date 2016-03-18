System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TicketDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TicketDetailComponent = (function () {
                function TicketDetailComponent() {
                }
                TicketDetailComponent.prototype.getTicketUrl = function (ticket) {
                    return (this.config.UrlFormat || '').replace('{0}', ticket.ticketNo);
                };
                TicketDetailComponent.prototype.getBacklogUrl = function (ticket) {
                    return (this.config.BacklogUrlFormat || '').replace('{0}', ticket.workId);
                };
                TicketDetailComponent.prototype.getDefectUrl = function (ticket) {
                    return (this.config.DefectUrlFormat || '').replace('{0}', ticket.workId.replace('Bug ', '').trim());
                };
                TicketDetailComponent.prototype.getCodeReviewUrl = function (ticket) {
                    return (this.config.CodeReviewUrlFormat || '').replace('{0}', ticket.kilnId);
                };
                TicketDetailComponent.prototype.isDefectTicket = function (ticket) {
                    return ticket.workId.trim().indexOf('Bug') === 0;
                };
                TicketDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'ticket-detail',
                        templateUrl: 'app/ticket-detail.component.html',
                        inputs: ['ticketList', 'config']
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