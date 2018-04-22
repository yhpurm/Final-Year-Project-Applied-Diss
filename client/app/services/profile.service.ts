import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Profile } from "../DataModals/profile.model";
import { Wallet } from '../DataModals/mywallet.model';
import { Payment } from "../DataModals/payment.modal";

@Injectable()
export class ProfileService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    getProfileByUsername(user: string) {
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

    getFriends() {
        return this.http.get('http://localhost:3000/Friends')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Profile[] = [];
                let message;
                for (let element of extracted.data) {
                    console.log(element.avatar);
                    message = new Profile(element.username, element.aboutMe, element.avatar, element.statusCount ,element.friendCount,element.isOnline,element.bitcoinAddress,element.email,element.lat,element.long);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    getMyWallets() {
        return this.http.get('http://localhost:3000/wallets/all')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Wallet[] = [];
                let message;
                for (let element of extracted.data) {
                    console.log(element.guid);
                    console.log(element.address);
                    console.log(element.label);
                    message = new Wallet(element.guid, element.address, element.label);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    getMyPayments() {
        return this.http.get('http://localhost:3000/Tx/all')
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Payment[] = [];
                let message;
                for (let element of extracted.data) {
                    console.log(element.to, element.from, element.amounts,element.fees,element.txid,element.success,element.lat,element.long);
                    message = new Payment(element.to, element.from, element.amounts,element.fees,element.txid,element.success,element.lat,element.long);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    deleteFriend(val: string): Observable<any> {
        console.log(val);
        return this.http
          .delete('http://localhost:3000/removeFriend/'+ val);
    }

    addFriend(friend: Profile): Observable<any> {
        console.log(friend);
        const body = JSON.stringify(friend);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/AddFriend', body, {headers: headers});
    }

    patchAvatar(img: number): Observable<any> {
        console.log(img);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/settings/avatar/' + img, {headers: headers});
    }

    patchBio(text: string): Observable<any> {
        console.log(text);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:3000/settings/bio/' + text, {headers: headers});
    }
}