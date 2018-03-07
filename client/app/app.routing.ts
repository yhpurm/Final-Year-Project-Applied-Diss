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
import { LoginComponent } from './login.component';
import { MlabsSearchComponent } from './MlabsSearchResults.component';
import { ViewMapComponent } from './viewMap.component';
import { StatsComponent } from './blockstats.component';
import { PostBalanceComponent } from './postbal.component';
import { PoolComponent } from './postpoolstatus.component';
import { SendBTCComponent } from './sendbtc.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path:'home',
        component: HomeComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path:'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'request',
        component: RequestComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'search',
        component: MlabsSearchComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'postpools',
        component: PoolComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'mapsmenu',
        component: MapsMenuComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'poststats',
        component: StatsComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'activity',
        component: TransactionsComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'poststatus',
        component: PostStatusComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'sendbtc',
        component: SendBTCComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'postbal',
        component: PostBalanceComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'viewMap',
        component: ViewMapComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'map',
        component: CryptoMapComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'trading',
        component: tradingComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'friends',
        component: FriendsComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'linkwallet',
        component: WalletComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'newwallet',
        component: NewWalletComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: 'FAQ',
        component: FAQComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);