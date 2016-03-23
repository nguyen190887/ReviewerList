System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx', './ticket', '../review-data'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, ticket_1, review_data_1;
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
            },
            function (review_data_1_1) {
                review_data_1 = review_data_1_1;
            }],
        execute: function() {
            TicketService = (function () {
                function TicketService(http) {
                    this.ticketApi = review_data_1.API.ticketApi;
                    this.configApi = review_data_1.API.configApi;
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
                TicketService.prototype.categorizeTickets = function (rawData, statusGroups) {
                    var categoriedTickets = {};
                    var _loop_1 = function() {
                        var ticket = this_1.mapToTicket(rawItem);
                        var foundGroup = statusGroups.find(function (s) { return s.statuses.indexOf(ticket.devStatus.toLowerCase()) >= 0; });
                        if (foundGroup) {
                            this_1.pushTicketToGroup(categoriedTickets, foundGroup.groupId, ticket);
                        }
                    };
                    var this_1 = this;
                    for (var _i = 0, rawData_1 = rawData; _i < rawData_1.length; _i++) {
                        var rawItem = rawData_1[_i];
                        _loop_1();
                    }
                    console.log('categorized tickets: ' + JSON.stringify(categoriedTickets));
                    return categoriedTickets;
                };
                TicketService.prototype.filterPendingCodeReviewTickets = function (rawData) {
                    var pendingTickets = [];
                    for (var _i = 0, rawData_2 = rawData; _i < rawData_2.length; _i++) {
                        var rawItem = rawData_2[_i];
                        var ticket = this.mapToTicket(rawItem);
                        if (ticket.devStatus.toLowerCase() === 'code submitted') {
                            pendingTickets.push(ticket);
                        }
                    }
                    return pendingTickets;
                };
                TicketService.prototype.getTicketConfig = function () {
                    return this.http.get(this.configApi)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TicketService.prototype.getStatusGroups = function (statusGroups, filteredDisplay) {
                    var groups = [];
                    statusGroups.forEach(function (s) {
                        if (s.display === filteredDisplay) {
                            groups.push({
                                id: s.groupId,
                                name: s.groupName,
                                show: s.showOnLoad || false });
                        }
                    });
                    console.log('status group - ' + filteredDisplay + ': ' + JSON.stringify(groups));
                    return groups;
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
                    ticket.durableTeam = rawObj['custom_fields']['Durable Team'];
                    ticket.comment = rawObj['custom_fields']['Comment'];
                    ticket.codeReviewStartDate = rawObj['custom_fields']['Code Review Start Date']
                        ? new Date(rawObj['custom_fields']['Code Review Start Date'])
                        : new Date(0);
                    // ensure devStatus not empty
                    if (ticket.devStatus != null && ticket.devStatus.trim() === '') {
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