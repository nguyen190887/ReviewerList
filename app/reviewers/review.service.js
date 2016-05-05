System.register(['angular2/core', '../review-data'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, review_data_1;
    var ReviewService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (review_data_1_1) {
                review_data_1 = review_data_1_1;
            }],
        execute: function() {
            ReviewService = (function () {
                function ReviewService() {
                }
                ReviewService.prototype.getReviewTeams = function () {
                    // Just for test - delay 2 seconds
                    // return new Promise<ReviewTeam[]>(resolve =>
                    //     setTimeout(() => resolve(ReviewData.REVIEWLIST), 2000)
                    // );
                    return Promise.resolve(review_data_1.ReviewData.REVIEWLIST);
                };
                ReviewService.prototype.getAllReviewers = function () {
                    return Promise.resolve(this.internalGetReviewers());
                };
                ReviewService.prototype.getReviewer = function (id) {
                    return Promise.resolve(this.internalGetReviewers(function (reviewer) { return reviewer.id === id; }));
                };
                ReviewService.prototype.internalGetReviewers = function (predicate) {
                    var reviewers = [];
                    for (var _i = 0, _a = review_data_1.ReviewData.REVIEWLIST; _i < _a.length; _i++) {
                        var team = _a[_i];
                        for (var _b = 0, _c = team.reviewers; _b < _c.length; _b++) {
                            var reviewer = _c[_b];
                            if (!predicate || predicate(reviewer)) {
                                reviewer.teamName = team.name;
                                reviewers.push(reviewer);
                            }
                        }
                    }
                    return reviewers;
                };
                ReviewService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ReviewService);
                return ReviewService;
            })();
            exports_1("ReviewService", ReviewService);
        }
    }
});
//# sourceMappingURL=review.service.js.map