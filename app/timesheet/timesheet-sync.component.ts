import {Component, OnInit} from 'angular2/core';
import {TimesheetLogin, TimesheetWorkflow, Workflow, Project} from './timesheet-data';
import {TimesheetService} from './timesheet-service';

@Component({
    selector: 'timesheet-sync',
    templateUrl: 'app/timesheet/timesheet-sync.component.html'
})

export class TimesheetSyncComponent implements OnInit {
    model: TimesheetLogin;
    // timesheetWorkflow: TimesheetWorkflow;
    availableProjects: Project[] = [];
    availableWorkflows: Workflow[] = [];
    availableTasks: string[] = [];
    currentProject = 'Development Dev';
    currentWorkflow = 'Implementation';
    currentTask = 'Implementation';

    isProcessing = false;
    showWarning = true;
    alert = {
        message: '',
        type: ''
    };

    constructor(private _timesheetService: TimesheetService) {
        this.model = new TimesheetLogin();
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
            this.availableWorkflows = this.getWorkflows(this.availableProjects, this.currentProject);
            if (setDefaultValue) {
                this.currentWorkflow = this.availableWorkflows.length ? this.availableWorkflows[0].name : '';
            }
            this.onWorkflowChanged(setDefaultValue);
        });
    }

    onWorkflowChanged(setDefaultValue = false) {
        setTimeout(() => {
            this.availableTasks = this.getTasks(this.availableWorkflows, this.currentWorkflow);
            if (setDefaultValue) {
                this.currentTask = this.availableTasks.length ? this.availableTasks[0] : '';
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
