System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', '../review-data', '../tickets/ticket.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, review_data_1, ticket_service_1;
    var TimesheetService;
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
            function (review_data_1_1) {
                review_data_1 = review_data_1_1;
            },
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            }],
        execute: function() {
            TimesheetService = (function () {
                function TimesheetService(_http, _ticketService) {
                    this._http = _http;
                    this._ticketService = _ticketService;
                }
                TimesheetService.prototype.sync = function (model) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.put(review_data_1.API.timesheetApi, JSON.stringify(model), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TimesheetService.prototype.getWorkflow = function () {
                    var _this = this;
                    var p = new Promise(function (resolve, reject) {
                        var cachedConfig = _this._ticketService.getTicketConfig();
                        if (cachedConfig) {
                            resolve(cachedConfig.TimesheetWorkflow);
                        }
                        else {
                            _this._ticketService.pullTicketConfig().subscribe(function (config) {
                                resolve(config.TimesheetWorkflow);
                            });
                        }
                    });
                    return p;
                };
                TimesheetService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TimesheetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, ticket_service_1.TicketService])
                ], TimesheetService);
                return TimesheetService;
            }());
            exports_1("TimesheetService", TimesheetService);
        }
    }
});
//# sourceMappingURL=timesheet-service.js.map