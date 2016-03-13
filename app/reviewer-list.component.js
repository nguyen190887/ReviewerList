System.register(['angular2/core', 'angular2/common', './team-detail.component', './review.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, team_detail_component_1, review_service_1;
    var ReviewerListComponent, hasSelectedTeam, getFirstSelectedTeam;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (team_detail_component_1_1) {
                team_detail_component_1 = team_detail_component_1_1;
            },
            function (review_service_1_1) {
                review_service_1 = review_service_1_1;
            }],
        execute: function() {
            ReviewerListComponent = (function () {
                function ReviewerListComponent(_reviewService) {
                    this._reviewService = _reviewService;
                    this.teamFilter = '';
                }
                ReviewerListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reviewService.getReviewTeams().then(function (teams) { return _this.reviewTeams = teams; });
                };
                ReviewerListComponent.prototype.onSelect = function (team) {
                    team.selected = !team.selected;
                    this.mailList = '';
                    if (team.selected) {
                        this.lastSelectedTeam = team;
                    }
                    else {
                        this.lastSelectedTeam = getFirstSelectedTeam(this.reviewTeams);
                    }
                };
                ReviewerListComponent.prototype.generateMailList = function () {
                    this.mailList = '';
                    for (var _i = 0, _a = this.reviewTeams; _i < _a.length; _i++) {
                        var team = _a[_i];
                        if (team.selected) {
                            for (var _b = 0, _c = team.reviewers; _b < _c.length; _b++) {
                                var reviewer = _c[_b];
                                this.mailList += reviewer.email + '; ';
                            }
                        }
                    }
                };
                ReviewerListComponent = __decorate([
                    core_1.Component({
                        selector: 'reviewer-list',
                        templateUrl: 'app/reviewer-list.component.html',
                        styleUrls: ['app/reviewer-list.component.css'],
                        directives: [team_detail_component_1.TeamDetailComponent, common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [review_service_1.ReviewService])
                ], ReviewerListComponent);
                return ReviewerListComponent;
            })();
            exports_1("ReviewerListComponent", ReviewerListComponent);
            hasSelectedTeam = function (teams) {
                for (var i = 0; i < teams.length; i++) {
                    if (teams[i].selected) {
                        return true;
                    }
                }
                return false;
            };
            getFirstSelectedTeam = function (teams) {
                for (var i = 0; i < teams.length; i++) {
                    if (teams[i].selected) {
                        return teams[i];
                    }
                }
                return null;
            };
        }
    }
});
//# sourceMappingURL=reviewer-list.component.js.map