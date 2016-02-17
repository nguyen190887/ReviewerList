import {Component} from 'angular2/core';

interface ReviewTeam {
  id: number;
  name: string;
  reviewers: Reviewer[];
}

interface Reviewer {
  id: number;
  name: string;
}

@Component({
  selector: 'review-list',
  template: `
    <h1>Review Teams</h1>
    
    <div>
      <label>Type your filter: </label>
      <input [(ngModel)]="teamFilter" />
    </div>

    <div *ngFor="#team of reviewTeams">
      <div *ngIf="team.name.toLowerCase().indexOf(teamFilter.toLowerCase()) >= 0">
        <h3>{{team.id}} - {{team.name}}</h3>
        <ul>
          <li *ngFor="#reviewer of team.reviewers">{{reviewer.name}}</li>
        </ul>
        </div>
    </div>
    `
})
export class AppComponent {
  teamFilter = '';
  reviewTeams = REVIEWLIST;
}

var REVIEWLIST: ReviewTeam[] = [
  { 
    id: 1, 
    name: 'Kamikaze', 
    reviewers: [
      {id: 101, name: 'Tina'}, 
      {id:102, name: 'Kym'}
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