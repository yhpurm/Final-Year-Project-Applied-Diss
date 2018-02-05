import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Status } from "./status.model";

@Injectable()
export class StatusService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    getAllStatus(): Observable<any> {
        return this.http.get('http://localhost:3000/Tx/Local/All')
            .map( (data: Response) => {
                console.log("got here 1!");
                const extracted = data.json();
                const msgArray: Status[] = [];
                console.log("got extracted here!");
                let status;
                for (let element of extracted.data) {
                    status = new Status(element.username, element.date, element.text, element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getStatusByUsername(user: string) {
        return this.http.get('http://localhost:3000/Tx/Local/' + user)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let status;
                for (let element of extracted.data) {
                    console.log(element.firstName);
                    status = new Status(element.username, element.date, element.text, element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                    msgArray.push(status);
                }
                return msgArray;
            });
    }

    getTxById(id: string): Observable<any> {
        return this.http.get('http://localhost:3000/Tx/' + id)
            .map( (data: Response) => {
                const extracted = data.json();
                const msgArray: Status[] = [];
                let message;
                for (let element of extracted.data) {
                    console.log(element.firstName);
                    message =new Status(element.username, element.text, element.date, element.bitcoinAddress ,element.receivingAddress , element.lat, element.long);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }

    saveTx(Tx: Status): Observable<any> {
        console.log(Tx);
        const body = JSON.stringify(Tx);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/Tx/Status', body, {headers: headers});
    }
}