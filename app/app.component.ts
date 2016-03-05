import {Component} from 'angular2/core';
import {ReviewTeam} from './review-team';
import {TeamDetailComponent} from './team-detail.component';
import {ReviewData} from './review-data';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'review-list',
    template: `
        <h1>Review Teams</h1>

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
export class AppComponent {
    teamFilter = '';
    reviewTeams = ReviewData.REVIEWLIST;
    hasSelected: boolean;
    mailList: string;
    lastSelectedTeam: ReviewTeam;

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

