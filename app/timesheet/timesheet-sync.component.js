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
                    this.isProcessing = false;
                    this.showWarning = true;
                    this.alert = {
                        message: '',
                        type: ''
                    };
                    this.model = new timesheet_data_1.TimesheetLogin();
                }
                TimesheetSyncComponent.prototype.ngOnInit = function () {
                };
                TimesheetSyncComponent.prototype.sync = function () {
                    var _this = this;
                    this.resetAlert();
                    this.isProcessing = true;
                    this._timesheetService.sync(this.model)
                        .subscribe(function (data) {
                        if (data.result == 'OK') {
                            _this.setAlert('Sync successfully! Let open your timesheet to see the magic :)');
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