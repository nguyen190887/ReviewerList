import {Component, OnInit} from 'angular2/core';
import {ReviewService} from './review.service';
import {Reviewer} from './reviewer';

@Component({
    selector: 'contact-list',
    template: `
        <h3>Contact List</h3>
        <table class="table">
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr *ngFor="#reviewer of reviewers">
                <td>{{reviewer.name}}</td>
                <td>{{reviewer.email}}</td>
            </tr>
        </table>
    `,
    styles: [`
        /* To remove once adding Bootstrap */
        .table {
            border-collapse: collapse;
        }
        .table, th, td {
            border: solid 1px #dcdcdc;
        }
        th, td {
            padding: 5px;
        }
    `]
})

export class ContactListComponent {
    reviewers = []; 

    constructor(private _reviewService: ReviewService) {
    }

    ngOnInit() {
        this._reviewService.getAllReviewers().then(reviewrs => this.reviewers = reviewrs);
    }
}