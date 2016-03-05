import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common'; 
import {OnInit} from 'angular2/core';
import {TeamDetailComponent} from './team-detail.component';
import {ReviewTeam} from './review-team';
import {ReviewService} from './review.service';

@Component({
    selector: 'reviewer-list',
    template: `
        <h3>Review Teams</h3>

        <div class="filter">
            <label>Type your filter: </label>
            <input [(ngModel)]="teamFilter" />
        </div>

        <div class="reviewTeam"
            *ngFor="#team of reviewTeams"
            [class.selected]="team.selected"
            (click)="onSelect(team)"
            [ngClass]="{hidden: teamFilter && team.name.toLowerCase().indexOf(teamFilter.toLowerCase()) < 0}">
                <h3>{{team.id}} - {{team.name}}</h3>
                <ul>
                    <li *ngFor="#reviewer of team.reviewers"
                            [ngClass]="{
                                    'the-fed': reviewer.devType === 'FED',
                                    'the-bee': reviewer.devType === 'BEE'}">
                            {{reviewer.name}} ({{reviewer.devType}})
                    </li>
                </ul>
        </div>

        <div class="clearfix"></div>

        <div *ngIf="lastSelectedTeam">
            <div>
                <team-detail [team]="lastSelectedTeam"></team-detail>
            </div>
            <div>
                <!-- You selected: {{selectedTeam.name}} -->
                <br/>
            </div>
            <div>
                <button (click)="generateMailList()">Generate mail list</button>
            </div>
        </div>

        <div *ngIf="mailList">
                <textarea class="mail-list">{{mailList}}</textarea>
        </div>
        `,
    styles: [`
        .selected {
            background-color: #ddcc00;
            color: white;
        }

        .reviewTeam {
            width: 200px;
            float: left;
            cursor: pointer;
            margin-right: 10px;
            padding: 5px;
        }

        .reviewTeam:hover {
                background-color: yellow;
        }

        .filter {
                margin-bottom: 20px;
        }

        .mail-list {
                width: 600px;
                height: 200px;
                margin-top: 20px;
        }

        .hidden {
                display: none;
        }

        .clearfix {
                clear: both;
        }

        .the-bee {
                color: brown;
        }

        .the-fed {
                color: green;
        }
    `],
    directives: [TeamDetailComponent, NgClass]
})
export class ReviewerListComponent implements OnInit {
    teamFilter = '';
    reviewTeams: ReviewTeam[];
    hasSelected: boolean;
    mailList: string;
    lastSelectedTeam: ReviewTeam;

    constructor(private _reviewService: ReviewService) {}

    ngOnInit() {
        this._reviewService.getReviewTeams().then(teams => this.reviewTeams = teams);
    }

    onSelect(team: ReviewTeam) {
        team.selected = !team.selected;
        this.mailList = '';

        if (team.selected) {
            this.lastSelectedTeam = team;
        } else {
            this.lastSelectedTeam = getFirstSelectedTeam(this.reviewTeams);
        }
    }

    generateMailList() {
        this.mailList = '';
        for (var team of this.reviewTeams) {
            if (team.selected) {
                for (var reviewer of team.reviewers) {
                    this.mailList += reviewer.email + '; ';
                }
            }
        }
    }
}

var hasSelectedTeam = function(teams: ReviewTeam[]) {
    for (var i = 0; i < teams.length; i++) {
        if (teams[i].selected) {
            return true;
        }
    }
    return false;
}

var getFirstSelectedTeam = function(teams: ReviewTeam[]) {
    for (var i = 0; i < teams.length; i++) {
        if (teams[i].selected) {
            return teams[i];
        }
    }
    return null;
}

