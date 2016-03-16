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
    var ContactListComponent;
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
            ContactListComponent = (function () {
                function ContactListComponent(_router, _reviewService) {
                    this._router = _router;
                    this._reviewService = _reviewService;
                    this.reviewers = [];
                }
                ContactListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reviewService.getAllReviewers().then(function (reviewrs) { return _this.reviewers = reviewrs; });
                };
                ContactListComponent.prototype.goToDetail = function (reviewer) {
                    var link = ['ContactDetail', { id: reviewer.id }];
                    this._router.navigate(link);
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        templateUrl: 'app/contact-list.component.html',
                        styleUrls: ['app/contact-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, review_service_1.ReviewService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});
//# sourceMappingURL=contact-list.component.js.map