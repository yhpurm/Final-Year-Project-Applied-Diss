import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Profile } from "./profile.model";

@Injectable()
export class ProfileService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    getProfileByUsername(user: string): Observable<any> {
        return this.http.get('http://localhost:3000/login/profile/' + user)
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

    createWallet(): Observable<any> {
        return this.http.get('http://localhost:3000/api/v2/create')
            .map( (data: Response) => {
                const extracted = data.json();
                console.log(extracted);
            });
    }
}