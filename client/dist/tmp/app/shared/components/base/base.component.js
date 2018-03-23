"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_service_1 = require("../../services/api.service");
var auth_service_1 = require("../../services/auth.service");
var messageservice_1 = require("primeng/components/common/messageservice");
var service_locator_1 = require("../../../service.locator");
var api_1 = require("primeng/api");
var core_1 = require("@ngx-translate/core");
var cache_service_1 = require("../../services/cache.service");
var setting_service_1 = require("../../services/setting.service");
var BaseComponent = (function () {
    function BaseComponent() {
        this.apiService = service_locator_1.ServiceLocator.injector.get(api_service_1.APIService);
        this.authService = service_locator_1.ServiceLocator.injector.get(auth_service_1.AuthService);
        this.messageService = service_locator_1.ServiceLocator.injector.get(messageservice_1.MessageService);
        this.confirmationService = service_locator_1.ServiceLocator.injector.get(api_1.ConfirmationService);
        this.translateService = service_locator_1.ServiceLocator.injector.get(core_1.TranslateService);
        this.cacheService = service_locator_1.ServiceLocator.injector.get(cache_service_1.CacheService);
        this.settingService = service_locator_1.ServiceLocator.injector.get(setting_service_1.SettingService);
    }
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
