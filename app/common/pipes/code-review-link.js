System.register(['angular2/core', '../../tickets/ticket.service'], function(exports_1) {
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
    var CodeReviewLinkPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            }],
        execute: function() {
            /*
             * Returns code review link based on ticket id
             * Usage:
             *   value
             * Example:
             *   {{ K12345 }}
             *   formats to: http://host.com/ticket/K12345
            */
            CodeReviewLinkPipe = (function () {
                function CodeReviewLinkPipe(_ticketService) {
                    this._ticketService = _ticketService;
                    this.config = this._ticketService.getTicketConfig();
                }
                CodeReviewLinkPipe.prototype.transform = function (value) {
                    if (!value) {
                        return '';
                    }
                    if (!this.config) {
                        return value;
                    }
                    return (this.config.CodeReviewUrlFormat || '').replace('{0}', value);
                };
                CodeReviewLinkPipe = __decorate([
                    core_1.Pipe({ name: 'codeReviewLink' }), 
                    __metadata('design:paramtypes', [ticket_service_1.TicketService])
                ], CodeReviewLinkPipe);
                return CodeReviewLinkPipe;
            })();
            exports_1("CodeReviewLinkPipe", CodeReviewLinkPipe);
        }
    }
});
//# sourceMappingURL=code-review-link.js.map