export class TimesheetLogin {
    v1DisplayName: string;
    tsUsername: string;
    tsPassword: string;
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
