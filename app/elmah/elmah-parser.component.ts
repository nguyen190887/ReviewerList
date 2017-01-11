import {Component, OnInit} from 'angular2/core';
import {ElmahService} from './elmah.service';

@Component({
    selector: 'elmah-parser',
    templateUrl: 'app/elmah/elmah-parser.component.html'
})

export class ElmahParserComponent implements OnInit {
    input: string;
    output: any;

    constructor(private _elmahService: ElmahService) {
    }

    ngOnInit() {
    }

    parse() {
        this._elmahService.parse(this.input)
            .subscribe(data => this.output = data.errors);
    }
}
