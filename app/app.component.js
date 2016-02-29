System.register(['angular2/core', './team-detail.component'], function(exports_1, context_1) {
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
    var core_1, team_detail_component_1;
    var AppComponent, hasSelectedTeam, getFirstSelectedTeam, REVIEWLIST;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (team_detail_component_1_1) {
                team_detail_component_1 = team_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.teamFilter = '';
                    this.reviewTeams = REVIEWLIST;
                }
                AppComponent.prototype.onSelect = function (team) {
                    team.selected = !team.selected;
                    this.mailList = '';
                    if (team.selected) {
                        this.lastSelectedTeam = team;
                    }
                    else {
                        this.lastSelectedTeam = getFirstSelectedTeam(this.reviewTeams);
                    }
                    // if (this.lastSelectedTeam) {
                    //   alert(this.lastSelectedTeam.name);
                    // }
                };
                AppComponent.prototype.generateMailList = function () {
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
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'review-list',
                        template: "\n    <h1>Review Teams</h1>\n\n    <div class=\"filter\">\n      <label>Type your filter: </label>\n      <input [(ngModel)]=\"teamFilter\" />\n    </div>\n\n    <div class=\"reviewTeam\"\n      *ngFor=\"#team of reviewTeams\"\n      [class.selected]=\"team.selected\"\n      (click)=\"onSelect(team)\">\n      <div *ngIf=\"team.name.toLowerCase().indexOf(teamFilter.toLowerCase()) >= 0\">\n        <h3>{{team.id}} - {{team.name}}</h3>\n        <ul>\n          <li *ngFor=\"#reviewer of team.reviewers\">{{reviewer.name}}</li>\n        </ul>\n        </div>\n    </div>\n\n    <div class=\"clearfix\"></div>\n\n    <div *ngIf=\"lastSelectedTeam\">\n      <div>\n        <team-detail [team]=\"lastSelectedTeam\"></team-detail>\n      </div>\n      <div>\n        <!-- You selected: {{selectedTeam.name}} -->\n        <br/>\n      </div>\n      <div>\n        <button (click)=\"generateMailList()\">Generate mail list</button>\n      </div>\n    </div>\n\n    <div *ngIf=\"mailList\">\n        <textarea class=\"mail-list\">{{mailList}}</textarea>\n    </div>\n    ",
                        styles: ["\n    .selected {\n      background-color: #ddcc00;\n      color: white;\n    }\n\n    .reviewTeam {\n      width: 200px;\n      float: left;\n      cursor: pointer;\n      margin-right: 10px;\n      padding: 5px;\n    }\n\n    .reviewTeam:hover {\n        background-color: yellow;\n    }\n\n    .filter {\n        margin-bottom: 20px;\n    }\n\n    .mail-list {\n        width: 600px;\n        height: 200px;\n        margin-top: 20px;\n    }\n\n    .clearfix {\n        clear: both;\n    }\n  "],
                        directives: [team_detail_component_1.TeamDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
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
            REVIEWLIST = [
                {
                    id: 1,
                    name: 'Super women',
                    reviewers: [
                        { id: 101, name: 'Tina', email: 'tina@mail.com' },
                        { id: 102, name: 'Kym', email: 'kym@mail.com' }
                    ],
                    selected: false,
                    workingProduct: 'Vehicle',
                    manager: 'The big one'
                },
                {
                    id: 2,
                    name: 'Advertiser',
                    reviewers: [
                        { id: 101, name: 'Valentyna', email: 'val@mail.com' },
                        { id: 102, name: 'Josh', email: 'josh@mail.com' }
                    ],
                    selected: false,
                    workingProduct: 'Ads',
                    manager: 'Cowboys'
                }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map