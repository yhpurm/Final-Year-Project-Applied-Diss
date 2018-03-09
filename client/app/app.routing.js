"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var cryptomap_component_1 = require("./cryptomap.component");
var profile_component_1 = require("./profile.component");
var friends_component_1 = require("./friends.component");
var trading_component_1 = require("./trading.component");
var FAQ_component_1 = require("./FAQ.component");
var walletrequest_component_1 = require("./walletrequest.component");
var myWallet_component_1 = require("./myWallet.component");
var settings_component_1 = require("./settings.component");
var register_component_1 = require("./register.component");
var welcome_component_1 = require("./welcome.component");
var mapsmenu_component_1 = require("./mapsmenu.component");
var poststatus_component_1 = require("./poststatus.component");
var requestbitcoin_component_1 = require("./requestbitcoin.component");
var blockchainActivity_component_1 = require("./blockchainActivity.component");
var login_component_1 = require("./login.component");
var MlabsSearchResults_component_1 = require("./MlabsSearchResults.component");
var viewMap_component_1 = require("./viewMap.component");
var blockstats_component_1 = require("./blockstats.component");
var postbal_component_1 = require("./postbal.component");
var postpoolstatus_component_1 = require("./postpoolstatus.component");
var sendbtc_component_1 = require("./sendbtc.component");
var flag_component_1 = require("./flag.component");
var auth_guard_1 = require("./guards/auth.guard");
var notauth_guard_1 = require("./guards/notauth.guard");
var appRoutes = [
    {
        path: '',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'flaglocation',
        component: flag_component_1.FlagComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'request',
        component: requestbitcoin_component_1.RequestComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'search',
        component: MlabsSearchResults_component_1.MlabsSearchComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'postpools',
        component: postpoolstatus_component_1.PoolComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'mapsmenu',
        component: mapsmenu_component_1.MapsMenuComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'poststats',
        component: blockstats_component_1.StatsComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'activity',
        component: blockchainActivity_component_1.TransactionsComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'poststatus',
        component: poststatus_component_1.PostStatusComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'sendbtc',
        component: sendbtc_component_1.SendBTCComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'postbal',
        component: postbal_component_1.PostBalanceComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'viewMap',
        component: viewMap_component_1.ViewMapComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'map',
        component: cryptomap_component_1.CryptoMapComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'trading',
        component: trading_component_1.TradingComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'friends',
        component: friends_component_1.FriendsComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'linkwallet',
        component: myWallet_component_1.WalletComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'newwallet',
        component: walletrequest_component_1.NewWalletComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'settings',
        component: settings_component_1.SettingsComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
        canActivate: [notauth_guard_1.NotAuthGuard]
    },
    {
        path: 'FAQ',
        component: FAQ_component_1.FAQComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [notauth_guard_1.NotAuthGuard]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map