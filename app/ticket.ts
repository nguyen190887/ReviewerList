export class Ticket {
    id: number;
    summary: string;
    status: string;
    devStatus: string;
    assignee: string;
    kilnId: string;
    workId: string;
    displayedColumn: number; // the column this ticket will be put on UI
}