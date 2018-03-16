import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Profile } from "../DataModals/profile.model";
import { Status } from "../DataModals/status.model";

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
                for (let element of extracted) {
                    console.log(element.username);
                    message = new Profile(element.username, element.aboutMe, element.avatar, element.statusCount ,element.friendCount,element.isOnline,element.bitcoinAddress,element.email,element.lat,element.long);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    getGlobalStatus() {
        return this.http.get('http://localhost:3000/globalstatus')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted.data) {
                    status = new Status(element.username, element.date, element.title, element.text,element.valueAtTime, element.sentAmount,  element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    searchUsers(username: string) {
        return this.http.get('http://localhost:3000/globalusers/' + username )
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Profile[] = [];
                let message;
                console.log(extracted);
                console.log(extracted.username);
                for (let element of extracted) {
                    console.log(element.username);
                    message = new Profile(element.username, element.aboutMe, element.avatar, element.statusCount ,element.friendCount,element.isOnline,element.bitcoinAddress,element.email,element.lat,element.long);
                    msgArray.push(message);
                }
                return  msgArray;
            });
    }
}
