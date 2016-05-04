System.register(['angular2/core', 'angular2/router', './ticket.service'], function(exports_1, context_1) {
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
    var core_1, router_1, ticket_service_1;
    var CodeCommentEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ticket_service_1_1) {
                ticket_service_1 = ticket_service_1_1;
            }],
        execute: function() {
            CodeCommentEditComponent = (function () {
                function CodeCommentEditComponent(_ticketService, _routeParams, _router) {
                    this._ticketService = _ticketService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                }
                CodeCommentEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._ticketService.getTicketById(id).subscribe(function (ticket) {
                        _this.model = ticket;
                    });
                };
                CodeCommentEditComponent.prototype.goBack = function () {
                    this._router.parent.navigate(['CodeNotifier']);
                };
                CodeCommentEditComponent.prototype.save = function () {
                    var _this = this;
                    this._ticketService.updateTicketComment(this.model.ticketNo, this.model.codeComment)
                        .subscribe(function (data) {
                        if (data.result == 'OK') {
                            _this.goBack();
                        }
                        else {
                            _this.errorMessage = 'Error: ' + data.error;
                        }
                    });
                };
                CodeCommentEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/tickets/code-comment-edit.component.html'
                    }), 
                    __metadata('design:paramtypes', [ticket_service_1.TicketService, router_1.RouteParams, router_1.Router])
                ], CodeCommentEditComponent);
                return CodeCommentEditComponent;
            }());
            exports_1("CodeCommentEditComponent", CodeCommentEditComponent);
        }
    }
});
//# sourceMappingURL=code-comment-edit.component.js.map