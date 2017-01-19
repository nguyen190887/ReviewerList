import {ReviewTeam} from './reviewers/review-team';

export module ReviewData {
    export var DEV_TEAMS = ['team1', 'team2'];
    
    export var REVIEWLIST: ReviewTeam[] = [
        {
            id: 1,
            name: 'Super women',
            reviewers: [
                { id: 101, name: 'Anna', email: 'Anna@mail.com', devType: 'BEE' },
                { id: 102, name: 'Juliet', email: 'Juliet@mail.com', devType: 'FED' }
            ],
            selected: false,
            workingProduct: 'Vehicle',
            manager: 'The big one'
        },
        {
            id: 2,
            name: 'Advertiser',
            reviewers: [
                { id: 201, name: 'Rafael', email: 'Rafael@mail.com', devType: 'BEE' },
                { id: 203, name: 'Josh', email: 'josh@mail.com', devType: 'FED' }
            ],
            selected: false,
            workingProduct: 'Ads',
            manager: 'Cowboys'
        }
    ];    
}

export var API = {
    ticketApi: 'http://localhost/reviewdata/api/ticket',
    configApi: 'http://localhost/reviewdata/api/configuration',
    timesheetApi: 'http://localhost/reviewdata/api/timesheet',
    elmahApi: 'http://localhost/reviewdata/api/elmahparser',
    textDiffApi: 'http://localhost/reviewdata/api/textdiff'
};
