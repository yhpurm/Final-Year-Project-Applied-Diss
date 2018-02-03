import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {CryptoMapComponent} from './cryptomap.component';
import {ProfileComponent} from './profile.component';
import {FriendsComponent} from './friends.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    },
    {
        path: 'map',
        component: CryptoMapComponent
    },
    {
        path: 'friends',
        component: FriendsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);