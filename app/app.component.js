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
    var AppComponent, REVIEWLIST;
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
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'review-list',
                        template: "\n    <h1>Review Teams</h1>\n    \n    <div>\n      <label>Type your filter: </label>\n      <input [(ngModel)]=\"teamFilter\" />\n    </div>\n\n    <div *ngFor=\"#team of reviewTeams\">\n      <div *ngIf=\"team.name.toLowerCase().indexOf(teamFilter.toLowerCase()) >= 0\">\n        <h3>{{team.id}} - {{team.name}}</h3>\n        <ul>\n          <li *ngFor=\"#reviewer of team.reviewers\">{{reviewer.name}}</li>\n        </ul>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            REVIEWLIST = [
                {
                    id: 1,
                    name: 'Kamikaze',
                    reviewers: [
                        { id: 101, name: 'Tina' },
                        { id: 102, name: 'Kym' }
                    ] },
                {
                    id: 2,
                    name: 'Cosmo',
                    reviewers: [
                        { id: 101, name: 'Valentyna' },
                        { id: 102, name: 'Josh' }
                    ]
                }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map