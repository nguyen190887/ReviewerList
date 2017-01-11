System.register(['angular2/core', './elmah.service'], function(exports_1, context_1) {
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
    var core_1, elmah_service_1;
    var ElmahParserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (elmah_service_1_1) {
                elmah_service_1 = elmah_service_1_1;
            }],
        execute: function() {
            ElmahParserComponent = (function () {
                function ElmahParserComponent(_elmahService) {
                    this._elmahService = _elmahService;
                }
                ElmahParserComponent.prototype.ngOnInit = function () {
                };
                ElmahParserComponent.prototype.parse = function () {
                    var _this = this;
                    this._elmahService.parse(this.input)
                        .subscribe(function (data) { return _this.output = data.errors; });
                };
                ElmahParserComponent = __decorate([
                    core_1.Component({
                        selector: 'elmah-parser',
                        templateUrl: 'app/elmah/elmah-parser.component.html'
                    }), 
                    __metadata('design:paramtypes', [elmah_service_1.ElmahService])
                ], ElmahParserComponent);
                return ElmahParserComponent;
            }());
            exports_1("ElmahParserComponent", ElmahParserComponent);
        }
    }
});
//# sourceMappingURL=elmah-parser.component.js.map