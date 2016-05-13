System.register(['angular2/core', './timesheet-data', './timesheet-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, timesheet_data_1, timesheet_service_1;
    var TimesheetSyncComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (timesheet_data_1_1) {
                timesheet_data_1 = timesheet_data_1_1;
            },
            function (timesheet_service_1_1) {
                timesheet_service_1 = timesheet_service_1_1;
            }],
        execute: function() {
            TimesheetSyncComponent = (function () {
                function TimesheetSyncComponent(_timesheetService) {
                    this._timesheetService = _timesheetService;
                    this.availableProjects = [];
                    this.availableWorkflows = [];
                    this.availableTasks = [];
                    this.isProcessing = false;
                    this.showWarning = true;
                    this.alert = {
                        message: '',
                        type: ''
                    };
                    this.defaultData = {
                        project: 'Development Dev',
                        workflow: 'Implementation',
                        task: 'Implementation'
                    };
                    this.model = new timesheet_data_1.TimesheetSyncEntry();
                    this.model.tsDefaultProject = this.defaultData.project;
                    this.model.tsDefaultWorkflow = this.defaultData.workflow;
                    this.model.tsDefaultTask = this.defaultData.task;
                }
                TimesheetSyncComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._timesheetService.getWorkflow().then(function (workflow) {
                        var timesheetWorkflow = workflow;
                        _this.availableProjects = timesheetWorkflow.projects;
                        _this.onProjectChanged();
                    });
                };
                TimesheetSyncComponent.prototype.sync = function () {
                    var _this = this;
                    this.resetAlert();
                    this.isProcessing = true;
                    // set default data in fallback case
                    if (!this.model.tsDefaultProject)
                        this.model.tsDefaultProject = this.defaultData.project;
                    if (!this.model.tsDefaultWorkflow)
                        this.model.tsDefaultWorkflow = this.defaultData.workflow;
                    if (!this.model.tsDefaultTask)
                        this.model.tsDefaultTask = this.defaultData.task;
                    this._timesheetService.sync(this.model)
                        .subscribe(function (data) {
                        if (data.result == 'OK') {
                            _this.setAlert('Sync successfully! Let open your timesheet to see the magic :)');
                            _this.model.tsPassword = '';
                        }
                        else {
                            _this.setAlert('Failed to sync :(', 'error');
                        }
                        _this.isProcessing = false;
                    }, function (err) {
                        _this.setAlert('Error: ' + err, 'error');
                        _this.isProcessing = false;
                    });
                };
                TimesheetSyncComponent.prototype.toggleWarning = function () {
                    this.showWarning = !this.showWarning;
                };
                TimesheetSyncComponent.prototype.onProjectChanged = function (setDefaultValue) {
                    var _this = this;
                    if (setDefaultValue === void 0) { setDefaultValue = false; }
                    setTimeout(function () {
                        _this.availableWorkflows = _this.getWorkflows(_this.availableProjects, _this.model.tsDefaultProject);
                        if (setDefaultValue) {
                            _this.model.tsDefaultWorkflow = _this.availableWorkflows.length ? _this.availableWorkflows[0].name : '';
                        }
                        _this.onWorkflowChanged(setDefaultValue);
                    });
                };
                TimesheetSyncComponent.prototype.onWorkflowChanged = function (setDefaultValue) {
                    var _this = this;
                    if (setDefaultValue === void 0) { setDefaultValue = false; }
                    setTimeout(function () {
                        _this.availableTasks = _this.getTasks(_this.availableWorkflows, _this.model.tsDefaultWorkflow);
                        if (setDefaultValue) {
                            _this.model.tsDefaultTask = _this.availableTasks.length ? _this.availableTasks[0] : '';
                        }
                    });
                };
                TimesheetSyncComponent.prototype.getWorkflows = function (projects, filter) {
                    for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
                        var project = projects_1[_i];
                        if (project.name === filter) {
                            return project.workflows;
                        }
                    }
                    return [];
                };
                TimesheetSyncComponent.prototype.getTasks = function (workflows, filter) {
                    for (var _i = 0, workflows_1 = workflows; _i < workflows_1.length; _i++) {
                        var workflow = workflows_1[_i];
                        if (workflow.name === filter) {
                            return workflow.tasks;
                        }
                    }
                    return [];
                };
                TimesheetSyncComponent.prototype.resetAlert = function () {
                    this.setAlert('', '');
                };
                TimesheetSyncComponent.prototype.setAlert = function (msg, type) {
                    this.alert.message = msg;
                    this.alert.type = type;
                };
                TimesheetSyncComponent = __decorate([
                    core_1.Component({
                        selector: 'timesheet-sync',
                        templateUrl: 'app/timesheet/timesheet-sync.component.html'
                    }), 
                    __metadata('design:paramtypes', [timesheet_service_1.TimesheetService])
                ], TimesheetSyncComponent);
                return TimesheetSyncComponent;
            }());
            exports_1("TimesheetSyncComponent", TimesheetSyncComponent);
        }
    }
});
//# sourceMappingURL=timesheet-sync.component.js.map