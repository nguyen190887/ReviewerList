import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common'; 
import {OnInit} from 'angular2/core';
import {TeamDetailComponent} from './team-detail.component';
import {ReviewTeam} from './review-team';
import {ReviewService} from './review.service';

@Component({
    selector: 'reviewer-list',
    templateUrl: 'app/reviewers/reviewer-list.component.html',
    styleUrls: ['app/reviewers/reviewer-list.component.css'],
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

