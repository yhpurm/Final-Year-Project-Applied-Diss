"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./LoginComponents/home.component");
var cryptomap_component_1 = require("./MapsComponents/cryptomap.component");
var profile_component_1 = require("./ProfileComponents/profile.component");
var friends_component_1 = require("./ProfileComponents/friends.component");
var trading_component_1 = require("./TradingComponents/trading.component");
var FAQ_component_1 = require("./NavBarComponents/FAQ.component");
var walletrequest_component_1 = require("./WalletComponents/walletrequest.component");
var myWallet_component_1 = require("./WalletComponents/myWallet.component");
var settings_component_1 = require("./NavBarComponents/settings.component");
var register_component_1 = require("./LoginComponents/register.component");
var welcome_component_1 = require("./LoginComponents/welcome.component");
var poststatus_component_1 = require("./StatusComponents/poststatus.component");
var requestbitcoin_component_1 = require("./StatusComponents/requestbitcoin.component");
var blockchainActivity_component_1 = require("./StatusComponents/blockchainActivity.component");
var login_component_1 = require("./LoginComponents/login.component");
var MlabsSearchResults_component_1 = require("./MlabsComponents/MlabsSearchResults.component");
var viewMap_component_1 = require("./MapsComponents/viewMap.component");
var blockstats_component_1 = require("./StatusComponents/blockstats.component");
var postbal_component_1 = require("./StatusComponents/postbal.component");
var postpoolstatus_component_1 = require("./StatusComponents/postpoolstatus.component");
var sendbtc_component_1 = require("./WalletComponents/sendbtc.component");
var flag_component_1 = require("./StatusComponents/flag.component");
var global_component_1 = require("./MlabsComponents/global.component");
var auth_guard_1 = require("./guards/auth.guard");
var notauth_guard_1 = require("./guards/notauth.guard");
var cryptonews_component_1 = require("./NewsComponents/cryptonews.component");
var convert_component_1 = require("./WalletComponents/convert.component");
var viewGlobalMap_component_1 = require("./MapsComponents/viewGlobalMap.component");
var blog_component_1 = require("./blog/blog.component");
var delete_blog_component_1 = require("./blog/delete-blog/delete-blog.component");
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
        path: 'global',
        component: global_component_1.GlobalComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'globalmap',
        component: viewGlobalMap_component_1.GlobalMapComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'convert',
        component: convert_component_1.ConvertComponent,
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
        canActivate: [notauth_guard_1.NotAuthGuard] // User can only view this route if they are logged out
    },
    {
        path: 'FAQ',
        component: FAQ_component_1.FAQComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [notauth_guard_1.NotAuthGuard] // User can only view this route if they are logged out
    },
    {
        path: 'cryptonews',
        component: cryptonews_component_1.CryptonewsComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'blog',
        component: blog_component_1.BlogComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'delete-blog/:id',
        component: delete_blog_component_1.DeleteBlogComponent,
        canActivate: [auth_guard_1.AuthGuard] // User must be logged in to view this route
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map