System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx', './ticket'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, ticket_1;
    var TicketService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (ticket_1_1) {
                ticket_1 = ticket_1_1;
            }],
        execute: function() {
            TicketService = (function () {
                // devStatusGroup: {[name: string] : number};
                function TicketService(http) {
                    this.ticketApi = 'http://localhost:2149/api/ticket';
                    this.configApi = 'http://localhost:2149/api/configuration';
                    this.http = http;
                }
                TicketService.prototype.ajaxGetTickets = function () {
                    return this.http.get(this.ticketApi)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                TicketService.prototype.getAllTickets = function () {
                };
                TicketService.prototype.categorizeTickets = function (rawData) {
                    var categoriedTickets = {};
                    for (var _i = 0, rawData_1 = rawData; _i < rawData_1.length; _i++) {
                        var rawItem = rawData_1[_i];
                        var ticket = this.mapToTicket(rawItem);
                        if (ticket.devStatus === 'Dev In-progress' || ticket.devStatus === 'Internal Code Review' ||
                            ticket.devStatus === 'QA In-progress' || ticket.devStatus === 'QA Passed' ||
                            ticket.devStatus === 'Internal Code Approved' || ticket.devStatus === '') {
                            this.pushTicketToGroup(categoriedTickets, 1, ticket);
                        }
                        else if (ticket.devStatus === 'Code Submitted' || ticket.devStatus === 'UAT Submitted') {
                            this.pushTicketToGroup(categoriedTickets, 2, ticket);
                        }
                        else if (ticket.devStatus === 'Code Approved' || ticket.devStatus === 'UAT Approved') {
                            this.pushTicketToGroup(categoriedTickets, 3, ticket);
                        }
                        else if (ticket.devStatus === 'Code Merged') {
                            this.pushTicketToGroup(categoriedTickets, 4, ticket);
                        }
                    }
                    return categoriedTickets;
                };
                TicketService.prototype.getTicketConfig = function () {
                    return this.http.get(this.configApi)
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                TicketService.prototype.pushTicketToGroup = function (groups, groupNumber, ticket) {
                    groups[groupNumber] = (groups[groupNumber] || []);
                    groups[groupNumber].push(ticket);
                };
                TicketService.prototype.mapToTicket = function (rawObj) {
                    var ticket = new ticket_1.Ticket();
                    ticket.id = rawObj['id'];
                    ticket.ticketNo = rawObj['number'];
                    ticket.assignee = rawObj['assigned_to_id'];
                    ticket.summary = rawObj['summary'];
                    ticket.status = rawObj['status'];
                    ticket.workId = rawObj['custom_fields']['Work ID'];
                    ticket.kilnId = rawObj['custom_fields']['Kiln ID'];
                    ticket.devStatus = rawObj['custom_fields']['DEV Status'];
                    ticket.reviewTeam = rawObj['custom_fields']['Review Team'];
                    ticket.devTeam = rawObj['custom_fields']['DEV Team'];
                    // ensure devStatus not empty
                    if (ticket.devStatus && ticket.devStatus.trim() === '') {
                        ticket.devStatus = 'None';
                    }
                    return ticket;
                };
                TicketService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TicketService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TicketService);
                return TicketService;
            }());
            exports_1("TicketService", TicketService);
        }
    }
});
//# sourceMappingURL=ticket.service.js.map