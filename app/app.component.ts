import {Component} from 'angular2/core';
import {ReviewTeam} from './review-team';
import {TeamDetailComponent} from './team-detail.component';

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
      (click)="onSelect(team)">
      <div *ngIf="team.name.toLowerCase().indexOf(teamFilter.toLowerCase()) >= 0">
        <h3>{{team.id}} - {{team.name}}</h3>
        <ul>
          <li *ngFor="#reviewer of team.reviewers">{{reviewer.name}}</li>
        </ul>
        </div>
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

    .clearfix {
        clear: both;
    }
  `],
  directives: [TeamDetailComponent]
})
export class AppComponent {
  teamFilter = '';
  reviewTeams = REVIEWLIST;
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
    // if (this.lastSelectedTeam) {
    //   alert(this.lastSelectedTeam.name);
    // }
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

var REVIEWLIST: ReviewTeam[] = [
  {
    id: 1,
    name: 'Super women',
    reviewers: [
      {id: 101, name: 'Tina', email: 'tina@mail.com'},
      {id:102, name: 'Kym', email: 'kym@mail.com'}
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
      { id: 102, name: 'Josh', email: 'josh@mail.com'}
    ],
    selected: false,
    workingProduct: 'Ads',
    manager: 'Cowboys'
  }
];
