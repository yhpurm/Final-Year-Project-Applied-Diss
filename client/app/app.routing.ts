import {ModuleWithProviders, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {CryptoMapComponent} from './cryptomap.component';
import {ProfileComponent} from './profile.component';
import {FriendsComponent} from './friends.component';
import {tradingComponent} from './trading.component';
import {FAQComponent} from './FAQ.component';
import { NewWalletComponent }  from './walletrequest.component';
import { WalletComponent }  from './myWallet.component';
import { SettingsComponent }  from './settings.component';
import { RegisterComponent } from './register.component';
import { WelcomeComponent } from './welcome.component';
import { MapsMenuComponent } from './mapsmenu.component';
import { PostStatusComponent } from './poststatus.component';
import { RequestComponent } from './requestbitcoin.component';
import { TransactionsComponent } from './blockchainActivity.component';
import { LoginComponent } from './login.component'
import { MlabsSearchComponent } from './MlabsSearchResults.component';
import { ViewMapComponent } from './viewMap.component'
import { StatsComponent } from './blockstats.component'
import { PoolComponent } from './postpoolstatus.component'

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    },
    {
        path: 'request',
        component: RequestComponent
    },
    {
        path: 'search',
        component: MlabsSearchComponent
    },
    {
        path: 'postpools',
        component: PoolComponent
    },
    {
        path: 'mapsmenu',
        component: MapsMenuComponent
    },
    {
        path: 'poststats',
        component: StatsComponent
    },
    {
        path: 'activity',
        component: TransactionsComponent
    },
    {
        path: 'poststatus',
        component: PostStatusComponent
    },
    {
        path: 'viewMap',
        component: ViewMapComponent
    },
    {
        path: 'map',
        component: CryptoMapComponent
    },
    {
        path: 'trading',
        component: tradingComponent
    },
    {
        path: 'friends',
        component: FriendsComponent
    },
    {
        path: 'linkwallet',
        component: WalletComponent
    },
    {
        path: 'newwallet',
        component: NewWalletComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'FAQ',
        component: FAQComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);