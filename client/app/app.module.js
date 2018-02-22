"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var friends_component_1 = require("./friends.component");
var FAQ_component_1 = require("./FAQ.component");
var profile_component_1 = require("./profile.component");
var cryptomap_component_1 = require("./cryptomap.component");
var trading_component_1 = require("./trading.component");
var myWallet_component_1 = require("./myWallet.component");
var walletrequest_component_1 = require("./walletrequest.component");
var settings_component_1 = require("./settings.component");
var register_component_1 = require("./register.component");
var modal_component_1 = require("./_directives/modal.component");
var index_1 = require("./_services/index");
var app_routing_1 = require("./app.routing");
var auth_service_1 = require("./services/auth.service");
var welcome_component_1 = require("./welcome.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                forms_2.FormsModule
            ],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                profile_component_1.ProfileComponent,
                cryptomap_component_1.CryptoMapComponent,
                friends_component_1.FriendsComponent,
                myWallet_component_1.WalletComponent,
                walletrequest_component_1.NewWalletComponent,
                FAQ_component_1.FAQComponent,
                trading_component_1.tradingComponent,
                modal_component_1.ModalComponent,
                settings_component_1.SettingsComponent,
                register_component_1.RegisterComponent,
                welcome_component_1.WelcomeComponent],
            exports: [],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, auth_service_1.AuthService, index_1.ModalService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map