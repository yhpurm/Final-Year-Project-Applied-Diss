import { Component } from '@angular/core';
import { Profile } from "../DataModals/profile.model";
import { Wallet } from "../DataModals/mywallet.model";
import { ProfileService } from "../services/profile.service";

@Component({
  moduleId: module.id,
  selector: 'Settings',
  templateUrl: 'settings.component.html',
  providers: [ProfileService]
})

export class SettingsComponent {

 }