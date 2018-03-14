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
var home_component_1 = require("./LoginComponents/home.component");
var friends_component_1 = require("./ProfileComponents/friends.component");
var FAQ_component_1 = require("./NavBarComponents/FAQ.component");
var profile_component_1 = require("./ProfileComponents/profile.component");
var cryptomap_component_1 = require("./MapsComponents/cryptomap.component");
var trading_component_1 = require("./TradingComponents/trading.component");
var myWallet_component_1 = require("./WalletComponents/myWallet.component");
var walletrequest_component_1 = require("./WalletComponents/walletrequest.component");
var settings_component_1 = require("./NavBarComponents/settings.component");
var register_component_1 = require("./LoginComponents/register.component");
var app_routing_1 = require("./app.routing");
var auth_service_1 = require("./services/auth.service");
var welcome_component_1 = require("./LoginComponents/welcome.component");
var poststatus_component_1 = require("./StatusComponents/poststatus.component");
var requestbitcoin_component_1 = require("./StatusComponents/requestbitcoin.component");
var blockchainActivity_component_1 = require("./StatusComponents/blockchainActivity.component");
var login_component_1 = require("./LoginComponents/login.component");
var MlabsSearchResults_component_1 = require("./MlabsComponents/MlabsSearchResults.component");
var viewMap_component_1 = require("./MapsComponents/viewMap.component");
var blockstats_component_1 = require("./StatusComponents/blockstats.component");
var postpoolstatus_component_1 = require("./StatusComponents/postpoolstatus.component");
var sendbtc_component_1 = require("./WalletComponents/sendbtc.component");
var postbal_component_1 = require("./StatusComponents/postbal.component");
var flag_component_1 = require("./StatusComponents/flag.component");
var global_component_1 = require("./MlabsComponents/global.component");
var auth_guard_1 = require("./guards/auth.guard");
var notauth_guard_1 = require("./guards/notauth.guard");
var cryptonews_component_1 = require("./NewsComponents/cryptonews.component");
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
                blockstats_component_1.StatsComponent,
                myWallet_component_1.WalletComponent,
                requestbitcoin_component_1.RequestComponent,
                postpoolstatus_component_1.PoolComponent,
                postbal_component_1.PostBalanceComponent,
                global_component_1.GlobalComponent,
                MlabsSearchResults_component_1.MlabsSearchComponent,
                poststatus_component_1.PostStatusComponent,
                viewMap_component_1.ViewMapComponent,
                sendbtc_component_1.SendBTCComponent,
                flag_component_1.FlagComponent,
                blockchainActivity_component_1.TransactionsComponent,
                walletrequest_component_1.NewWalletComponent,
                FAQ_component_1.FAQComponent,
                trading_component_1.TradingComponent,
                settings_component_1.SettingsComponent,
                register_component_1.RegisterComponent,
                welcome_component_1.WelcomeComponent,
                login_component_1.LoginComponent,
                cryptonews_component_1.CryptonewsComponent],
            exports: [],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, auth_service_1.AuthService, auth_guard_1.AuthGuard, notauth_guard_1.NotAuthGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map