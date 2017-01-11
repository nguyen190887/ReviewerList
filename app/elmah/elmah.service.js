System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', '../review-data', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, review_data_1;
    var ElmahService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (review_data_1_1) {
                review_data_1 = review_data_1_1;
            },
            function (_1) {}],
        execute: function() {
            ElmahService = (function () {
                function ElmahService(http) {
                    this.elmahApi = review_data_1.API.elmahApi;
                    this.http = http;
                }
                ElmahService.prototype.parse = function (raw) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var data = '{raw: \'' + raw + '\'}';
                    return this.http.post(this.elmahApi + '/parse', data, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ElmahService.prototype.convertTime = function (errorData) {
                    if (errorData && errorData.errors.length) {
                        for (var i = 0; i < errorData.errors.length; i++) {
                            errorData.errors[i].Time = Date.parse(errorData.errors[i].Time);
                        }
                    }
                    return errorData;
                };
                ElmahService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                ElmahService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ElmahService);
                return ElmahService;
            }());
            exports_1("ElmahService", ElmahService);
        }
    }
});
//# sourceMappingURL=elmah.service.js.map