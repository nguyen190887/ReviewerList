import {Pipe, PipeTransform} from 'angular2/core';
import {TicketService} from '../../tickets/ticket.service';

/*
 * Returns code review link based on ticket id
 * Usage:
 *   value
 * Example:
 *   {{ K12345 }}
 *   formats to: http://host.com/ticket/K12345
*/
@Pipe({ name: 'codeReviewLink' })
export class CodeReviewLinkPipe implements PipeTransform {
    config: any;

    constructor(private _ticketService: TicketService) {       
        this.config = this._ticketService.getTicketConfig();
    }

    transform(value: string) {
        if (!value) {
            return '';
        }
        if (!this.config) {
            return value;
        }
        return (this.config.CodeReviewUrlFormat || '').replace('{0}', value);
    }
}
