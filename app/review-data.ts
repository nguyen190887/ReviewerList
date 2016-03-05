import {ReviewTeam} from './review-team';

export module ReviewData {
    export var REVIEWLIST: ReviewTeam[] = [
        {
            id: 1,
            name: 'Super women',
            reviewers: [
                { id: 101, name: 'Tina', email: 'tina@mail.com', devType: 'BEE' },
                { id: 102, name: 'Kym', email: 'kym@mail.com', devType: 'FED' }
            ],
            selected: false,
            workingProduct: 'Vehicle',
            manager: 'The big one'
        },
        {
            id: 2,
            name: 'Advertiser',
            reviewers: [
                { id: 101, name: 'Valentyna', email: 'val@mail.com', devType: 'BEE' },
                { id: 102, name: 'Josh', email: 'josh@mail.com', devType: 'FED' }
            ],
            selected: false,
            workingProduct: 'Ads',
            manager: 'Cowboys'
        }
    ];
}
