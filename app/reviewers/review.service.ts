import {Injectable} from 'angular2/core';
import {ReviewData} from '../review-data';
import {ReviewTeam} from './review-team';
import {Reviewer} from './reviewer';

@Injectable()
export class ReviewService {
    getReviewTeams() {
        // Just for test - delay 2 seconds
        // return new Promise<ReviewTeam[]>(resolve =>
        //     setTimeout(() => resolve(ReviewData.REVIEWLIST), 2000)
        // );

        return Promise.resolve(ReviewData.REVIEWLIST);
    }

    getAllReviewers() {
        return Promise.resolve(this.internalGetReviewers());
    }

    getReviewer(id: number) {
        return Promise.resolve(this.internalGetReviewers(reviewer => reviewer.id === id));
    }

    private internalGetReviewers(predicate?: (Reviewer) => boolean) {
        let reviewers = [];
        for (var team of ReviewData.REVIEWLIST) {
            for (var reviewer of team.reviewers) {
                if (!predicate || predicate(reviewer)) {
                    reviewer.teamName = team.name;
                    reviewers.push(reviewer);
                }
            }
        }
        return reviewers;
    }
}
