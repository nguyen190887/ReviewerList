import {Component} from 'angular2/core';
import {ReviewTeam} from './review-team';

@Component({
    selector: 'team-detail',
    templateUrl: 'app/team-detail.component.html',
    inputs: ['team']
})

export class TeamDetailComponent {
    team: ReviewTeam;
}
