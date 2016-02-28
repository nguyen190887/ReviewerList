import {Component} from 'angular2/core';
import {ReviewTeam} from './review-team';

@Component({
  selector: 'team-detail',
  template: `
    
      <h2>Details of {{team.name}}</h2>
      <div>Working product: {{team.workingProduct}}</div>
      <div>Manager: {{team.manager}}</div>
    `,
  styles: [`
    
  `],
  inputs: ['team']
})

export class TeamDetailComponent {
  team: ReviewTeam;
}
