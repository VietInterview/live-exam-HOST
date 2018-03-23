"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var group_model_1 = require("../../../shared/models/group.model");
var base_component_1 = require("../../../shared/components/base/base.component");
var question_model_1 = require("../../../shared/models/question.model");
var option_model_1 = require("../../../shared/models/option.model");
var _ = require("underscore");
var constants_1 = require("../../../shared/models/constants");
var excel_service_1 = require("../../../shared/services/excel.service");
var QuestionImportDialog = (function (_super) {
    __extends(QuestionImportDialog, _super);
    function QuestionImportDialog(excelService) {
        var _this = _super.call(this) || this;
        _this.excelService = excelService;
        _this.onImportCompleteReceiver = new Rx_1.Subject();
        _this.onImportComplete = _this.onImportCompleteReceiver.asObservable();
        _this.display = false;
        _this.importing = false;
        _this.records = [];
        _this.fileType = excel_service_1.EXCEL_TYPE;
        return _this;
    }
    QuestionImportDialog.prototype.show = function () {
        this.display = true;
    };
    QuestionImportDialog.prototype.hide = function () {
        this.importing = false;
        this.display = false;
    };
    QuestionImportDialog.prototype.import = function () {
        var _this = this;
        var subscriptions = [];
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.QUESTION).subscribe(function (groups) {
            _this.importing = true;
            for (var i = 0; i < _this.records.length;) {
                var record = _this.records[i];
                var question = new question_model_1.Question();
                Object.assign(question, record);
                var group = _.find(groups, function (obj) {
                    return obj.code == record["group_code"];
                });
                var type = record["type"];
                if (group && type) {
                    question.group_id = group.id;
                    var options = [];
                    var optionLength = record["option"] ? +record["option"] : 0;
                    if (type == "sc" && optionLength) {
                        for (var j = 1; j <= optionLength && i < _this.records.length; j++) {
                            var optionRecord = _this.records[j + i];
                            var option = new option_model_1.QuestionOption();
                            option.is_correct = j == 0;
                            option.content = optionRecord["option"];
                            options.push(option);
                        }
                        var subscription = question.save(_this).flatMap(function () {
                            var optionSubscription = [];
                            _.each(options, function (obj) {
                                obj.question_id = question.id;
                                optionSubscription.push(option.save(_this));
                            });
                            return Rx_1.Observable.forkJoin.apply(Rx_1.Observable, optionSubscription);
                        });
                        subscriptions.push(subscription);
                    }
                    else
                        subscriptions.push(question.save(_this));
                    i += optionLength + 1;
                }
                else
                    i++;
            }
            Rx_1.Observable.forkJoin.apply(Rx_1.Observable, subscriptions).subscribe(function () {
                _this.importing = false;
                _this.hide();
                _this.onImportCompleteReceiver.next();
            });
        });
    };
    QuestionImportDialog.prototype.changeListner = function (event) {
        var _this = this;
        var file = event.files[0];
        this.fileName = file.name;
        this.excelService.importFromExcelFile(file).subscribe(function (data) {
            _this.records = data;
        });
    };
    QuestionImportDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-question-import-dialog',
            template: "<p-dialog header=\"{{'Import from Excel'|translate}}\" [(visible)]=\"display\"  #importDialog modal=\"true\" width=\"300\" [responsive]=\"true\">   <div class=\"ui-g\">     <div class=\"ui-g-12\">     <p-fieldset legend=\"{{'Sample template'|translate}}\">     <a href=\"/assets/templates/question_import.xlsx\" target=\"_blank\">question_import.xlsx</a> </p-fieldset> </div>     <div class=\"ui-g-12\">       <p-fileUpload name=\"userlist\" mode=\"basic\" chooseLabel=\"{{'Select file'|translate}}\" (onSelect)=\"changeListner($event)\" accept=\"{{fileType}}\" maxFileSize=\"1024*16\" showUploadButton=\"false\" >       </p-fileUpload>     <label [hidden]=\"!fileName\">{{fileName}}</label>     </div>   </div>   <p-progressSpinner [hidden]=\"!importing\"></p-progressSpinner>   <p-footer>     <button type=\"button\" pButton icon=\"fa-check\" label=\"{{'Import'|translate}}\" (click)=\"import()\" [disabled]=\"!records.length\"></button>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [excel_service_1.ExcelService])
    ], QuestionImportDialog);
    return QuestionImportDialog;
}(base_component_1.BaseComponent));
exports.QuestionImportDialog = QuestionImportDialog;
