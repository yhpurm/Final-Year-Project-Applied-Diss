import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Profile } from "./profile.model";

@Injectable()
export class ProfileService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    // Create a new wallet
    createWallet(): Observable<any> {
        return this.http.get('https://api.blockcypher.com/v1/tokens/$d510526f00b3473582e794287817cd0c')
            .map( (data: Response) => {
                const extracted = data.json();
                const proArray: Profile[] = [];
                let profile;
                for (let element of extracted.data) {
                    console.log(element.firstName);
                    profile = new Profile(element.username, element.firstName, element.lastName, element.bitcoinAddress ,element.email,element.phone, element.lat, element.long);
                    proArray.push(profile);
                }
                return proArray;
            });
    }

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