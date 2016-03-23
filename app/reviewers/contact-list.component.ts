import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ReviewService} from './review.service';
import {Reviewer} from './reviewer';

@Component({
    selector: 'contact-list',
    templateUrl: 'app/reviewers/contact-list.component.html',
    styleUrls: ['app/reviewers/contact-list.component.css']
})

export class ContactListComponent implements OnInit {
    reviewers = []; 

    constructor(
        private _router: Router,
        private _reviewService: ReviewService) {
    }

    ngOnInit() {
        this._reviewService.getAllReviewers().then(reviewrs => this.reviewers = reviewrs);
    }
    
    goToDetail(reviewer: Reviewer) {
        let link = ['ContactDetail', {id: reviewer.id }];
        this._router.navigate(link);
    }
}