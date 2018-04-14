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
  imagePaths: string [] = ['/app/avatars/0.png', '/app/avatars/1.png', '/app/avatars/2.png'];

  onImgClick(img: number){
    console.log(img)
    this.profileService.patchAvatar(img)
            .subscribe(
                () => alert('Avatar changed!'),
                error => console.error(error)
            );
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