import {Component, OnInit} from 'angular2/core';
import {TextDiffService} from './textdiff.service';

@Component({
    selector: 'textdiff',
    templateUrl: 'app/textdiff/textdiff.component.html'
})

export class TextDiffComponent implements OnInit {
    input: string;
    ignoredParams: string = 'vehicleid';
    output: any = {};

    constructor(private _textDiffService: TextDiffService) {
    }

    ngOnInit() {
    }

    process() {
        this._textDiffService.process(this.input, this.ignoredParams)
            .subscribe(data => {
                this.output.leftText = data.LeftText;
                this.output.rightText = data.RightText;
            });
    }
}
