import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Profile } from "./profile.model";

@Injectable()
export class ProfileService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    getDetailsByUsername(username: string): Observable<any> {
        return this.http.get('http://localhost:3000/Crypto/profile' + username)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Profile[] = [];
                let message;
                for (let element of extracted.data) {
                    console.log(element.firstName);
                    message =new Profile(element.username, element.firstName, element.lastName, element.bitcoinAddress ,element.email,element.phone, element.lat, element.long);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }
}