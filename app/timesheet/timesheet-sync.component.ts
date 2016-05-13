import {Component, OnInit} from 'angular2/core';
import {TimesheetSyncEntry, TimesheetWorkflow, Workflow, Project} from './timesheet-data';
import {TimesheetService} from './timesheet-service';

@Component({
    selector: 'timesheet-sync',
    templateUrl: 'app/timesheet/timesheet-sync.component.html'
})

export class TimesheetSyncComponent implements OnInit {
    model: TimesheetSyncEntry;
    availableProjects: Project[] = [];
    availableWorkflows: Workflow[] = [];
    availableTasks: string[] = [];
    isProcessing = false;
    showWarning = true;
    
    alert = {
        message: '',
        type: ''
    };
    
    defaultData = {
        project: 'Development Dev',
        workflow: 'Implementation',
        task: 'Implementation'
    };

    constructor(private _timesheetService: TimesheetService) {
        this.model = new TimesheetSyncEntry();
        this.model.tsDefaultProject = this.defaultData.project;
        this.model.tsDefaultWorkflow = this.defaultData.workflow;
        this.model.tsDefaultTask = this.defaultData.task;
    }

    ngOnInit() {
        this._timesheetService.getWorkflow().then(workflow => {
            let timesheetWorkflow = <TimesheetWorkflow>workflow;
            this.availableProjects = timesheetWorkflow.projects;
            this.onProjectChanged();
        });
    }

    sync() {
        this.resetAlert();
        this.isProcessing = true;

        // set default data in fallback case
        if (!this.model.tsDefaultProject) this.model.tsDefaultProject = this.defaultData.project;
        if (!this.model.tsDefaultWorkflow) this.model.tsDefaultWorkflow = this.defaultData.workflow;
        if (!this.model.tsDefaultTask) this.model.tsDefaultTask = this.defaultData.task;

        this._timesheetService.sync(this.model)
            .subscribe(
            data => {
                if (data.result == 'OK') {
                    this.setAlert('Sync successfully! Let open your timesheet to see the magic :)');
                    this.model.tsPassword = '';
                } else {
                    this.setAlert('Failed to sync :(', 'error');
                }
                this.isProcessing = false;
            },
            err => {
                this.setAlert('Error: ' + err, 'error');
                this.isProcessing = false;
            });
    }

    toggleWarning() {
        this.showWarning = !this.showWarning;
    }

    onProjectChanged(setDefaultValue = false) {
        setTimeout(() => {
            this.availableWorkflows = this.getWorkflows(this.availableProjects, this.model.tsDefaultProject);
            if (setDefaultValue) {
                this.model.tsDefaultWorkflow = this.availableWorkflows.length ? this.availableWorkflows[0].name : '';
            }
            this.onWorkflowChanged(setDefaultValue);
        });
    }

    onWorkflowChanged(setDefaultValue = false) {
        setTimeout(() => {
            this.availableTasks = this.getTasks(this.availableWorkflows, this.model.tsDefaultWorkflow);
            if (setDefaultValue) {
                this.model.tsDefaultTask = this.availableTasks.length ? this.availableTasks[0] : '';
            }
        });
    }

    private getWorkflows(projects: Project[], filter: string) {
        for (let project of projects) {
            if (project.name === filter) {
                return project.workflows;
            }
        }
        return [];
    }

    private getTasks(workflows: Workflow[], filter: string) {
        for (let workflow of workflows) {
            if (workflow.name === filter) {
                return workflow.tasks;
            }
        }
        return [];
    }

    private resetAlert() {
        this.setAlert('', '');
    }

    private setAlert(msg: string, type?: string) {
        this.alert.message = msg;
        this.alert.type = type;
    }
}
