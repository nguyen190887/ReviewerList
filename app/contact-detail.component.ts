import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Reviewer} from './reviewer';
import {ReviewService} from './review.service';

@Component({
    selector: 'contact-detail',
    templateUrl: 'app/contact-detail.component.html'
})

export class ContactDetailComponent implements OnInit {
    contact: Reviewer;

    constructor(
        private _reviewService: ReviewService,
        private _routeParams: RouteParams) {
            //
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._reviewService.getReviewer(id)
            .then(reviewer => this.contact = reviewer);
    }

    goBack() {
        return window.history.back();
    }
}
