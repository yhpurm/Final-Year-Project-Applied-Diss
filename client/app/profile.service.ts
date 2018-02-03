import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Profile } from "./profile.model";

@Injectable()
export class ProfileService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    createWallet(): Observable<any> {
        return this.http.get('http://localhost:3000/api/v2/create')
            .map( (data: Response) => {
                const extracted = data.json();
                console.log(extracted);
            });
    }
}