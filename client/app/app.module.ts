import { NgModule, ApplicationRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent }  from './home.component';
import { FriendsComponent }  from './friends.component';
import { ProfileComponent }  from './profile.component';
import { CryptoMapComponent }  from './cryptomap.component';
import { tradingComponent} from './trading.component';
import { WalletComponent }  from './myWallet.component';
import { NewWalletComponent }  from './walletrequest.component';
import { SettingsComponent }  from './settings.component';
import { RegisterComponent }  from './register.component';
import { ModalComponent }  from './_directives/modal.component';
import { ModalService } from './_services/index';
import { routing } from './app.routing';

@NgModule({
  imports:      [
     BrowserModule,
     routing,
     HttpModule,
     ReactiveFormsModule,
     FormsModule],
  declarations: 
  [ AppComponent,
    HomeComponent, 
    ProfileComponent,
    CryptoMapComponent,
    FriendsComponent,
    WalletComponent,
    NewWalletComponent,
    tradingComponent,
    ModalComponent,
    SettingsComponent,
    RegisterComponent ],
  exports: [  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
