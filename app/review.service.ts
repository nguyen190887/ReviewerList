import {Injectable} from 'angular2/core';
import {ReviewData} from './review-data';
import {ReviewTeam} from './review-team';

@Injectable()
export class ReviewService {
    getReviewTeams() {       
        // Just for test - delay 2 seconds
        // return new Promise<ReviewTeam[]>(resolve =>
        //     setTimeout(() => resolve(ReviewData.REVIEWLIST), 2000)
        // );

        return Promise.resolve(ReviewData.REVIEWLIST);
    }
}
