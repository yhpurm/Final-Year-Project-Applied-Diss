import {ModuleWithProviders, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './LoginComponents/home.component';
import {CryptoMapComponent} from './MapsComponents/cryptomap.component';
import {ProfileComponent} from './ProfileComponents/profile.component';
import {FriendsComponent} from './ProfileComponents/friends.component';
import {TradingComponent} from './TradingComponents/trading.component';
import {FAQComponent} from './NavBarComponents/FAQ.component';
import { NewWalletComponent }  from './WalletComponents/walletrequest.component';
import { WalletComponent }  from './WalletComponents/myWallet.component';
import { SettingsComponent }  from './NavBarComponents/settings.component';
import { RegisterComponent } from './LoginComponents/register.component';
import { WelcomeComponent } from './LoginComponents/welcome.component';
import { PostStatusComponent } from './StatusComponents/poststatus.component';
import { RequestComponent } from './StatusComponents/requestbitcoin.component';
import { TransactionsComponent } from './StatusComponents/blockchainActivity.component';
import { LoginComponent } from './LoginComponents/login.component';
import { MlabsSearchComponent } from './MlabsComponents/MlabsSearchResults.component';
import { ViewMapComponent } from './MapsComponents/viewMap.component';
import { StatsComponent } from './StatusComponents/blockstats.component';
import { PostBalanceComponent } from './StatusComponents/postbal.component';
import { PoolComponent } from './StatusComponents/postpoolstatus.component';
import { SendBTCComponent } from './WalletComponents/sendbtc.component';
import { FlagComponent } from './StatusComponents/flag.component';
import { GlobalComponent } from './MlabsComponents/global.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';
import { CryptonewsComponent } from './NewsComponents/cryptonews.component';

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
        path:'flaglocation',
        component: FlagComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path:'global',
        component: GlobalComponent,
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
        component: TradingComponent,
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
        canActivate: [NotAuthGuard] // User can only view this route if they are logged out
    },
    {
        path: 'FAQ',
        component: FAQComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthGuard] // User can only view this route if they are logged out
    },
    {
        path: 'cryptonews',
        component: CryptonewsComponent,
        canActivate: [AuthGuard] // User must be logged in to view this route
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);