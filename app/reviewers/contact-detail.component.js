System.register(['angular2/core', 'angular2/router', './review.service'], function(exports_1, context_1) {
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
    var core_1, router_1, review_service_1;
    var ContactDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (review_service_1_1) {
                review_service_1 = review_service_1_1;
            }],
        execute: function() {
            ContactDetailComponent = (function () {
                function ContactDetailComponent(_reviewService, _routeParams) {
                    this._reviewService = _reviewService;
                    this._routeParams = _routeParams;
                }
                ContactDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._reviewService.getReviewer(id)
                        .then(function (reviewers) { return _this.contact = reviewers.length ? reviewers[0] : null; });
                };
                ContactDetailComponent.prototype.goBack = function () {
                    return window.history.back();
                };
                ContactDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-detail',
                        templateUrl: 'app/reviewers/contact-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [review_service_1.ReviewService, router_1.RouteParams])
                ], ContactDetailComponent);
                return ContactDetailComponent;
            }());
            exports_1("ContactDetailComponent", ContactDetailComponent);
        }
    }
});
//# sourceMappingURL=contact-detail.component.js.map