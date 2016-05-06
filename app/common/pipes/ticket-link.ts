import {Pipe, PipeTransform} from 'angular2/core';
import {Ticket} from '../../tickets/ticket';
import {TicketService} from '../../tickets/ticket.service';

/*
 * Returns code review link based on ticket id
 * Usage:
 *   ticket | ticketLink : args
 * Example:
 *   {{ ticket | ticketLink : 'codereview' }}
 *   formats to: http://codehost.com/ticket/K12345
 *   {{ ticket | ticketLink : 'defect' }}
 *   formats to: http://defecthost.com/ticket/Bug12345
*/
@Pipe({ name: 'ticketLink' })
export class TicketLinkPipe implements PipeTransform {
    config: any;

    constructor(private _ticketService: TicketService) {
        this.config = this._ticketService.getTicketConfig();
    }

    transform(ticket: any, args: any[]) {
        if (!(ticket && ticket instanceof Ticket)) {
            return '';
        }
        if (!this.config) {
            return '';
        }

        return this.getLink(ticket, args && args.length ? args[0] : 'ticket');
    }

    private getLink(ticket: Ticket, linkType: string) {
        switch (linkType) {
            case 'ticket':
                return (this.config.UrlFormat || '').replace('{0}', ticket.ticketNo);
            case 'backlog':
                return (this.config.BacklogUrlFormat || '').replace('{0}', ticket.workId);
            case 'defect':
                return (this.config.DefectUrlFormat || '').replace('{0}', ticket.workId.replace('Bug ', '').trim());
            case 'codereview':
                return (this.config.CodeReviewUrlFormat || '').replace('{0}', ticket.kilnId);
            default:
                return '';
        }
    }
}
