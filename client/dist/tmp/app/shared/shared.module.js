"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var core_2 = require("@ngx-translate/core");
var auth_guard_1 = require("./guards/auth.guard");
var admin_guard_1 = require("./guards/admin.guard");
var teacher_guard_1 = require("./guards/teacher.guard");
var supervisor_guard_1 = require("./guards/supervisor.guard");
var api_service_1 = require("./services/api.service");
var auth_service_1 = require("./services/auth.service");
var lang_service_1 = require("./services/lang.service");
var cache_service_1 = require("./services/cache.service");
var excel_service_1 = require("./services/excel.service");
var setting_service_1 = require("./services/setting.service");
var meeting_service_1 = require("./services/meeting.service");
var windonw_ref_1 = require("./helpers/windonw.ref");
var tree_utils_1 = require("./helpers/tree.utils");
var syllabus_utils_1 = require("./helpers/syllabus.utils");
var match_input_directive_1 = require("./validators/match-input.directive");
var map_pipe_1 = require("./pipes/map.pipe");
var map_pipe_2 = require("./pipes/map.pipe");
var group_pipe_1 = require("./pipes/group.pipe");
var time_pipe_1 = require("./pipes/time.pipe");
var image_base64_pipe_1 = require("./pipes/image-base64.pipe");
var image_base64_component_1 = require("./components/image-base64/image-base64.component");
var group_dialog_component_1 = require("./components/group-dialog/group-dialog.component");
var group_list_component_1 = require("./components/group-list/group-list.component");
var select_course_dialog_component_1 = require("./components/select-course-dialog/select-course-dialog.component");
var select_question_dialog_component_1 = require("./components/select-question-dialog/select-question-dialog.component");
var select_group_dialog_component_1 = require("./components/select-group-dialog/select-group-dialog.component");
var select_user_dialog_component_1 = require("./components/select-user-dialog/select-user-dialog.component");
var primeng_1 = require("primeng/primeng");
var primeng_2 = require("primeng/primeng");
var primeng_3 = require("primeng/primeng");
var blockui_1 = require("primeng/blockui");
var primeng_4 = require("primeng/primeng");
var card_1 = require("primeng/card");
var primeng_5 = require("primeng/primeng");
var primeng_6 = require("primeng/primeng");
var primeng_7 = require("primeng/primeng");
var primeng_8 = require("primeng/primeng");
var primeng_9 = require("primeng/primeng");
var primeng_10 = require("primeng/primeng");
var primeng_11 = require("primeng/primeng");
var primeng_12 = require("primeng/primeng");
var api_1 = require("primeng/api");
var primeng_13 = require("primeng/primeng");
var primeng_14 = require("primeng/primeng");
var primeng_15 = require("primeng/primeng");
var primeng_16 = require("primeng/primeng");
var primeng_17 = require("primeng/primeng");
var primeng_18 = require("primeng/primeng");
var primeng_19 = require("primeng/primeng");
var primeng_20 = require("primeng/primeng");
var primeng_21 = require("primeng/primeng");
var primeng_22 = require("primeng/primeng");
var primeng_23 = require("primeng/primeng");
var primeng_24 = require("primeng/primeng");
var primeng_25 = require("primeng/primeng");
var primeng_26 = require("primeng/primeng");
var primeng_27 = require("primeng/primeng");
var primeng_28 = require("primeng/primeng");
var primeng_29 = require("primeng/primeng");
var primeng_30 = require("primeng/primeng");
var primeng_31 = require("primeng/primeng");
var primeng_32 = require("primeng/primeng");
var inplace_1 = require("primeng/inplace");
var primeng_33 = require("primeng/primeng");
var primeng_34 = require("primeng/primeng");
var primeng_35 = require("primeng/primeng");
var primeng_36 = require("primeng/primeng");
var primeng_37 = require("primeng/primeng");
var primeng_38 = require("primeng/primeng");
var primeng_39 = require("primeng/primeng");
var primeng_40 = require("primeng/primeng");
var primeng_41 = require("primeng/primeng");
var primeng_42 = require("primeng/primeng");
var primeng_43 = require("primeng/primeng");
var primeng_44 = require("primeng/primeng");
var primeng_45 = require("primeng/primeng");
var primeng_46 = require("primeng/primeng");
var primeng_47 = require("primeng/primeng");
var progressspinner_1 = require("primeng/progressspinner");
var primeng_48 = require("primeng/primeng");
var primeng_49 = require("primeng/primeng");
var primeng_50 = require("primeng/primeng");
var scrollpanel_1 = require("primeng/scrollpanel");
var primeng_51 = require("primeng/primeng");
var primeng_52 = require("primeng/primeng");
var primeng_53 = require("primeng/primeng");
var primeng_54 = require("primeng/primeng");
var primeng_55 = require("primeng/primeng");
var primeng_56 = require("primeng/primeng");
var primeng_57 = require("primeng/primeng");
var primeng_58 = require("primeng/primeng");
var table_1 = require("primeng/table");
var primeng_59 = require("primeng/primeng");
var primeng_60 = require("primeng/primeng");
var primeng_61 = require("primeng/primeng");
var primeng_62 = require("primeng/primeng");
var primeng_63 = require("primeng/primeng");
var primeng_64 = require("primeng/primeng");
var primeng_65 = require("primeng/primeng");
var primeng_66 = require("primeng/primeng");
var messageservice_1 = require("primeng/components/common/messageservice");
var ErpSharedModule = (function () {
    function ErpSharedModule() {
    }
    ErpSharedModule.forRoot = function () {
        return {
            ngModule: primeng_14.SharedModule,
            providers: [
                auth_guard_1.AuthGuard,
                admin_guard_1.AdminGuard,
                teacher_guard_1.TeacherGuard,
                supervisor_guard_1.SupervisorGuard,
                api_service_1.APIService,
                auth_service_1.AuthService,
                messageservice_1.MessageService,
                lang_service_1.LangService,
                cache_service_1.CacheService,
                meeting_service_1.MeetingService,
                tree_utils_1.TreeUtils,
                windonw_ref_1.WindowRef,
                syllabus_utils_1.SyllabusUtils,
                excel_service_1.ExcelService,
                setting_service_1.SettingService,
                api_1.ConfirmationService
            ]
        };
    };
    ErpSharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                http_1.HttpModule,
                primeng_1.AccordionModule,
                primeng_2.AutoCompleteModule,
                blockui_1.BlockUIModule,
                primeng_3.BreadcrumbModule,
                primeng_4.ButtonModule,
                primeng_5.CalendarModule,
                primeng_6.CarouselModule,
                card_1.CardModule,
                primeng_8.ChartModule,
                primeng_9.CheckboxModule,
                primeng_10.ChipsModule,
                primeng_11.CodeHighlighterModule,
                primeng_12.ConfirmDialogModule,
                primeng_13.ColorPickerModule,
                primeng_14.SharedModule,
                primeng_15.ContextMenuModule,
                primeng_16.DataGridModule,
                primeng_17.DataListModule,
                primeng_18.DataScrollerModule,
                primeng_19.DataTableModule,
                primeng_20.DialogModule,
                primeng_21.DragDropModule,
                primeng_22.DropdownModule,
                primeng_23.EditorModule,
                primeng_24.FieldsetModule,
                primeng_25.FileUploadModule,
                primeng_26.GalleriaModule,
                primeng_27.GMapModule,
                primeng_28.GrowlModule,
                primeng_29.InputMaskModule,
                primeng_30.InputSwitchModule,
                primeng_31.InputTextModule,
                primeng_32.InputTextareaModule,
                inplace_1.InplaceModule,
                primeng_7.KeyFilterModule,
                primeng_33.LightboxModule,
                primeng_34.ListboxModule,
                primeng_35.MegaMenuModule,
                primeng_36.MenuModule,
                primeng_37.MenubarModule,
                primeng_38.MessagesModule,
                primeng_39.MultiSelectModule,
                primeng_40.OrderListModule,
                primeng_41.OrganizationChartModule,
                primeng_42.OverlayPanelModule,
                primeng_43.PaginatorModule,
                primeng_44.PanelModule,
                primeng_45.PanelMenuModule,
                primeng_46.PasswordModule,
                primeng_47.PickListModule,
                primeng_48.ProgressBarModule,
                progressspinner_1.ProgressSpinnerModule,
                primeng_49.RadioButtonModule,
                primeng_50.RatingModule,
                scrollpanel_1.ScrollPanelModule,
                primeng_51.ScheduleModule,
                primeng_52.SelectButtonModule,
                primeng_53.SlideMenuModule,
                primeng_54.SliderModule,
                primeng_55.SpinnerModule,
                primeng_56.SplitButtonModule,
                primeng_57.StepsModule,
                primeng_58.TabMenuModule,
                primeng_59.TabViewModule,
                table_1.TableModule,
                primeng_60.TerminalModule,
                primeng_61.TieredMenuModule,
                primeng_62.ToggleButtonModule,
                primeng_63.ToolbarModule,
                primeng_64.TooltipModule,
                primeng_65.TreeModule,
                primeng_66.TreeTableModule,
                core_2.TranslateModule
            ],
            declarations: [
                match_input_directive_1.MatchInputValidatorDirective,
                map_pipe_1.ValuesPipe,
                map_pipe_2.KeysPipe,
                group_pipe_1.GroupsPipe,
                time_pipe_1.TimeConvertPipe,
                time_pipe_1.ClockPipe,
                image_base64_pipe_1.ImageBase64Pipe,
                image_base64_component_1.ImageBase64Component,
                group_dialog_component_1.GroupDialog,
                group_list_component_1.GroupListComponent,
                select_user_dialog_component_1.SelectUsersDialog,
                select_course_dialog_component_1.SelectCoursesDialog,
                select_question_dialog_component_1.SelectQuestionsDialog,
                select_group_dialog_component_1.SelectGroupDialog
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                router_1.RouterModule,
                http_1.HttpModule,
                map_pipe_1.ValuesPipe,
                map_pipe_2.KeysPipe,
                group_pipe_1.GroupsPipe,
                image_base64_pipe_1.ImageBase64Pipe,
                time_pipe_1.TimeConvertPipe,
                time_pipe_1.ClockPipe,
                match_input_directive_1.MatchInputValidatorDirective,
                image_base64_component_1.ImageBase64Component,
                group_dialog_component_1.GroupDialog,
                group_list_component_1.GroupListComponent,
                select_course_dialog_component_1.SelectCoursesDialog,
                select_user_dialog_component_1.SelectUsersDialog,
                select_group_dialog_component_1.SelectGroupDialog,
                select_question_dialog_component_1.SelectQuestionsDialog,
                primeng_1.AccordionModule,
                primeng_2.AutoCompleteModule,
                blockui_1.BlockUIModule,
                primeng_3.BreadcrumbModule,
                primeng_4.ButtonModule,
                primeng_5.CalendarModule,
                primeng_6.CarouselModule,
                card_1.CardModule,
                primeng_8.ChartModule,
                primeng_9.CheckboxModule,
                primeng_10.ChipsModule,
                primeng_11.CodeHighlighterModule,
                primeng_12.ConfirmDialogModule,
                primeng_13.ColorPickerModule,
                primeng_14.SharedModule,
                primeng_15.ContextMenuModule,
                primeng_16.DataGridModule,
                primeng_17.DataListModule,
                primeng_18.DataScrollerModule,
                primeng_19.DataTableModule,
                primeng_20.DialogModule,
                primeng_21.DragDropModule,
                primeng_22.DropdownModule,
                primeng_23.EditorModule,
                primeng_24.FieldsetModule,
                primeng_25.FileUploadModule,
                primeng_26.GalleriaModule,
                primeng_27.GMapModule,
                primeng_28.GrowlModule,
                primeng_29.InputMaskModule,
                primeng_30.InputSwitchModule,
                primeng_31.InputTextModule,
                primeng_32.InputTextareaModule,
                inplace_1.InplaceModule,
                primeng_7.KeyFilterModule,
                primeng_33.LightboxModule,
                primeng_34.ListboxModule,
                primeng_35.MegaMenuModule,
                primeng_36.MenuModule,
                primeng_37.MenubarModule,
                primeng_38.MessagesModule,
                primeng_39.MultiSelectModule,
                primeng_40.OrderListModule,
                primeng_41.OrganizationChartModule,
                primeng_42.OverlayPanelModule,
                primeng_43.PaginatorModule,
                primeng_44.PanelModule,
                primeng_45.PanelMenuModule,
                primeng_46.PasswordModule,
                primeng_47.PickListModule,
                primeng_48.ProgressBarModule,
                progressspinner_1.ProgressSpinnerModule,
                primeng_49.RadioButtonModule,
                primeng_50.RatingModule,
                primeng_51.ScheduleModule,
                scrollpanel_1.ScrollPanelModule,
                primeng_52.SelectButtonModule,
                primeng_53.SlideMenuModule,
                primeng_54.SliderModule,
                primeng_55.SpinnerModule,
                primeng_56.SplitButtonModule,
                primeng_57.StepsModule,
                primeng_58.TabMenuModule,
                table_1.TableModule,
                primeng_59.TabViewModule,
                primeng_60.TerminalModule,
                primeng_61.TieredMenuModule,
                primeng_62.ToggleButtonModule,
                primeng_63.ToolbarModule,
                primeng_64.TooltipModule,
                primeng_65.TreeModule,
                primeng_66.TreeTableModule,
                core_2.TranslateModule
            ],
        })
    ], ErpSharedModule);
    return ErpSharedModule;
}());
exports.ErpSharedModule = ErpSharedModule;
