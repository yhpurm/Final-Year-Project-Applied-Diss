import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Profile } from "./profile.model";

@Injectable()
export class MlabsService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    getGlobalUsers() {
        return this.http.get('http://localhost:3000/globalusers')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Profile[] = [];
                let message;
                for (let element of extracted.data) {
                    console.log(element.firstName);
                    message = new Profile(element.username, element.aboutMe, element.avatar, element.statusCount ,element.friendCount,element.isOnline,element.bitcoinAddress,element.email,element.lat,element.long);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    searchUsers(user: string) {
        return this.http.get('http://localhost:3000/globalusers/' + user )
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Profile[] = [];
                let message;
                for (let element of extracted.data) {
                    console.log(element.firstName);
                    message = new Profile(element.username, element.aboutMe, element.avatar, element.statusCount ,element.friendCount,element.isOnline,element.bitcoinAddress,element.email,element.lat,element.long);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }
}
