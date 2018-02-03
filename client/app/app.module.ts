import { NgModule, ApplicationRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent }  from './home.component';
import { FriendsComponent }  from './friends.component';
import { ProfileComponent }  from './profile.component';
import { CryptoMapComponent }  from './cryptomap.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, FormsModule],
  declarations: [AppComponent, HomeComponent, ProfileComponent, CryptoMapComponent, FriendsComponent ],
  exports: [  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
