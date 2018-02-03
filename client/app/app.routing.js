"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var cryptomap_component_1 = require("./cryptomap.component");
var profile_component_1 = require("./profile.component");
var friends_component_1 = require("./friends.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'map',
        component: cryptomap_component_1.CryptoMapComponent
    },
    {
        path: 'friends',
        component: friends_component_1.FriendsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map