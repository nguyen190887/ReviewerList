System.register(['angular2/core', '../../tickets/ticket', '../../tickets/ticket.service'], function(exports_1, context_1) {
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
    var core_1, ticket_1, ticket_service_1;
    var TicketLinkPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ticket_1_1) {
                ticket_1 = ticket_1_1;
            },
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            }],
        execute: function() {
            /*
             * Returns code review link based on ticket id
             * Usage:
             *   ticket | ticketLink : args
             * Example:
             *   {{ ticket | ticketLink : 'codereview' }}
             *   formats to: http://codehost.com/ticket/K12345
             *   {{ ticket | ticketLink : 'defect' }}
             *   formats to: http://defecthost.com/ticket/Bug12345
            */
            TicketLinkPipe = (function () {
                function TicketLinkPipe(_ticketService) {
                    this._ticketService = _ticketService;
                    this.config = this._ticketService.getTicketConfig();
                }
                TicketLinkPipe.prototype.transform = function (ticket, args) {
                    if (!(ticket && ticket instanceof ticket_1.Ticket)) {
                        return '';
                    }
                    if (!this.config) {
                        return '';
                    }
                    return this.getLink(ticket, args && args.length ? args[0] : 'ticket');
                };
                TicketLinkPipe.prototype.getLink = function (ticket, linkType) {
                    switch (linkType) {
                        case 'ticket':
                            return (this.config.UrlFormat || '').replace('{0}', ticket.ticketNo);
                        case 'backlog':
                            return (this.config.BacklogUrlFormat || '').replace('{0}', ticket.workId);
                        case 'defect':
                            return (this.config.DefectUrlFormat || '').replace('{0}', ticket.workId.replace('Bug ', '').trim());
                        case 'codereview':
                            return (this.config.CodeReviewUrlFormat || '').replace('{0}', ticket.kilnId);
                        default:
                            return '';
                    }
                };
                TicketLinkPipe = __decorate([
                    core_1.Pipe({ name: 'ticketLink' }), 
                    __metadata('design:paramtypes', [ticket_service_1.TicketService])
                ], TicketLinkPipe);
                return TicketLinkPipe;
            }());
            exports_1("TicketLinkPipe", TicketLinkPipe);
        }
    }
});
//# sourceMappingURL=ticket-link.js.map