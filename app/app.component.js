System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, hasSelectedTeam, REVIEWLIST;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    this.hasSelected = hasSelectedTeam(this.reviewTeams);
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
                        template: "\n    <h1>Review Teams</h1>\n    \n    <div>\n      <label>Type your filter: </label>\n      <input [(ngModel)]=\"teamFilter\" />\n    </div>\n\n    <div *ngFor=\"#team of reviewTeams\"\n      [class.selected]=\"team.selected\"\n      (click)=\"onSelect(team)\">\n      <div *ngIf=\"team.name.toLowerCase().indexOf(teamFilter.toLowerCase()) >= 0\">\n        <h3>{{team.id}} - {{team.name}}</h3>\n        <ul>\n          <li *ngFor=\"#reviewer of team.reviewers\">{{reviewer.name}}</li>\n        </ul>\n        </div>\n    </div>\n\n    <div *ngIf=\"hasSelected\">\n      <div>\n        <!-- You selected: {{selectedTeam.name}} -->\n        <br/>\n        <span *ngIf=\"mailList\">Mail list: {{mailList}}</span>\n      </div>\n      <div>\n        <button (click)=\"generateMailList()\">Generate mail list</button>\n      </div>\n    </div>\n    ",
                        styles: ["\n    .selected {\n      background-color: #ddcc00;\n      color: white;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            hasSelectedTeam = function (teams) {
                for (var i = 0; i < teams.length; i++) {
                    if (teams[i].selected) {
                        return true;
                    }
                }
                return false;
            };
            REVIEWLIST = [
                {
                    id: 1,
                    name: 'Super women',
                    reviewers: [
                        { id: 101, name: 'Tina', email: 'tina@mail.com' },
                        { id: 102, name: 'Kym', email: 'kym@mail.com' }
                    ]
                },
                {
                    id: 2,
                    name: 'Advertiser',
                    reviewers: [
                        { id: 101, name: 'Valentyna', email: 'val@mail.com' },
                        { id: 102, name: 'Josh', email: 'josh@mail.com' }
                    ]
                }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map