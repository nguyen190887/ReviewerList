export class TimesheetSyncEntry {
    v1DisplayName: string;
    tsUsername: string;
    tsPassword: string;
    tsDefaultProject: string;
    tsDefaultWorkflow: string;
    tsDefaultTask: string;
    WeekStartDate: Date;
}

export class TimesheetWorkflow {
    projects: Project[];
}

export class Project {
    name: string;
    workflows: Workflow[];
}

export class Workflow {
    name: string;
    tasks: string[];
}
