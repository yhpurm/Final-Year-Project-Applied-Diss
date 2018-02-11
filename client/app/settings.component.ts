import { Component } from '@angular/core';
import { Profile } from "./profile.model";
import { Wallet } from "./mywallet.model";
import { ProfileService } from "./profile.service";

@Component({
  moduleId: module.id,
  selector: 'Settings',
  templateUrl: 'settings.component.html',
  providers: [ProfileService]
})

export class SettingsComponent {

 }