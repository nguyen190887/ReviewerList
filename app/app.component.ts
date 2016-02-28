import {Component} from 'angular2/core';

interface ReviewTeam {
  id: number;
  name: string;
  reviewers: Reviewer[];
  selected: boolean;
}

interface Reviewer {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'review-list',
  template: `
    <h1>Review Teams</h1>
    
    <div>
      <label>Type your filter: </label>
      <input [(ngModel)]="teamFilter" />
    </div>

    <div *ngFor="#team of reviewTeams"
      [class.selected]="team.selected"
      (click)="onSelect(team)">
      <div *ngIf="team.name.toLowerCase().indexOf(teamFilter.toLowerCase()) >= 0">
        <h3>{{team.id}} - {{team.name}}</h3>
        <ul>
          <li *ngFor="#reviewer of team.reviewers">{{reviewer.name}}</li>
        </ul>
        </div>
    </div>

    <div *ngIf="hasSelected">
      <div>
        <!-- You selected: {{selectedTeam.name}} -->
        <br/>
        <span *ngIf="mailList">Mail list: {{mailList}}</span>
      </div>
      <div>
        <button (click)="generateMailList()">Generate mail list</button>
      </div>
    </div>
    `,
  styles: [`
    .selected {
      background-color: #ddcc00;
      color: white;
    }
  `]
})
export class AppComponent {
  teamFilter = '';
  reviewTeams = REVIEWLIST;
  hasSelected: boolean;
  mailList: string;

  onSelect(team: ReviewTeam) {
    team.selected = !team.selected;
    this.mailList = '';
    this.hasSelected = hasSelectedTeam(this.reviewTeams);
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

var hasSelectedTeam = function(teams: Array) {
  for (var i = 0; i < teams.length; i++) {
    if (teams[i].selected) {
      return true;
    }
  }
  return false;
}

var REVIEWLIST: ReviewTeam[] = [
  { 
    id: 1, 
    name: 'Super women', 
    reviewers: [
      {id: 101, name: 'Tina', email: 'tina@mail.com'}, 
      {id:102, name: 'Kym', email: 'kym@mail.com'}
    ]
  },
  { 
    id: 2,
    name: 'Advertiser',
    reviewers: [
      { id: 101, name: 'Valentyna', email: 'val@mail.com' },
      { id: 102, name: 'Josh', email: 'josh@mail.com'}
    ]
  }
];