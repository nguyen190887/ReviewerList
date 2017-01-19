System.register(['angular2/core', './textdiff.service'], function(exports_1, context_1) {
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
    var core_1, textdiff_service_1;
    var TextDiffComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (textdiff_service_1_1) {
                textdiff_service_1 = textdiff_service_1_1;
            }],
        execute: function() {
            TextDiffComponent = (function () {
                function TextDiffComponent(_textDiffService) {
                    this._textDiffService = _textDiffService;
                    this.ignoredParams = 'vehicleid';
                    this.output = {};
                }
                TextDiffComponent.prototype.ngOnInit = function () {
                };
                TextDiffComponent.prototype.process = function () {
                    var _this = this;
                    this._textDiffService.process(this.input, this.ignoredParams)
                        .subscribe(function (data) {
                        _this.output.leftText = data.LeftText;
                        _this.output.rightText = data.RightText;
                    });
                };
                TextDiffComponent = __decorate([
                    core_1.Component({
                        selector: 'textdiff',
                        templateUrl: 'app/textdiff/textdiff.component.html'
                    }), 
                    __metadata('design:paramtypes', [textdiff_service_1.TextDiffService])
                ], TextDiffComponent);
                return TextDiffComponent;
            }());
            exports_1("TextDiffComponent", TextDiffComponent);
        }
    }
});
//# sourceMappingURL=textdiff.component.js.map