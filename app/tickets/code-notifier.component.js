System.register(['angular2/core', './ticket.service', '../common/pipes/code-review-link'], function(exports_1, context_1) {
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
    var core_1, ticket_service_1, code_review_link_1;
    var CodeNotifierComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            },
            function (code_review_link_1_1) {
                code_review_link_1 = code_review_link_1_1;
            }],
        execute: function() {
            CodeNotifierComponent = (function () {
                function CodeNotifierComponent(_ticketService) {
                    this._ticketService = _ticketService;
                    this.tickets = [];
                    this.isLoading = true;
                }
                CodeNotifierComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoading = true;
                    this._ticketService.ajaxGetTickets().subscribe(function (tickets) {
                        _this.tickets = _this._ticketService.filterPendingCodeReviewTickets(tickets);
                        _this.isLoading = false;
                    });
                };
                CodeNotifierComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/tickets/code-notifier.component.html',
                        pipes: [code_review_link_1.CodeReviewLinkPipe]
                    }), 
                    __metadata('design:paramtypes', [ticket_service_1.TicketService])
                ], CodeNotifierComponent);
                return CodeNotifierComponent;
            }());
            exports_1("CodeNotifierComponent", CodeNotifierComponent);
        }
    }
});
//# sourceMappingURL=code-notifier.component.js.map