import { Component } from '@angular/core';
import { Profile } from "../DataModals/profile.model";
import { Wallet } from "../DataModals/mywallet.model";
import { ProfileService } from "../services/profile.service";

@Component({
  moduleId: module.id,
  selector: 'Settings',
  templateUrl: 'settings.component.html',
  styles: [`
  	ul { padding:0; width:780px; margin:20px auto}
  	li { display:inline;}
        .tn{ 
	   margin:2px 0px;
	   box-shadow:#999 1px 1px 3px 1px; 
	   cursor: pointer 
        }
  `],
  providers: [ProfileService]
})

export class SettingsComponent {

  constructor(private profileService: ProfileService) {}
  imagePaths: string [] = ['/app/avatars/0.png', '/app/avatars/1.png', '/app/avatars/2.png',
'/app/avatars/3.png','/app/avatars/4.png','/app/avatars/5.png',
'/app/avatars/6.png', '/app/avatars/7.png', '/app/avatars/8.png',
'/app/avatars/9.png', '/app/avatars/10.png','/app/avatars/11.png',
'/app/avatars/12.png','/app/avatars/13.png','/app/avatars/14.png',
'/app/avatars/15.png'];

  onImgClick(img: number){
    console.log(img)
    var retVal = confirm("Do you want to update your bio ?");
    if( retVal == true ){
    this.profileService.patchAvatar(img)
            .subscribe(
                () => alert('Avatar changed!'),
                error => console.error(error)
            );
          }else{
            alert("submission cancled");
        }
  }

  onEnter(text: string){
    console.log(text)
    var retVal = confirm("Do you want to update your bio ?");
    if( retVal == true ){
        this.profileService.patchBio(text)
            .subscribe(
                () => alert('Bio changed!'),
                error => console.error(error)
            );
          }else{
            alert("submission cancled");
        }
  }

}