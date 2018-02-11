import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Profile } from "./profile.model";
import { Wallet } from "./myWallet.model";

@Injectable()
export class BlockchainService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

    // create new address on blockchain
    createWallet(pass: string, email:string, label:string): Observable<any> {
        return this.http.post('http://localhost:3000/api/v2/create',{ password : pass , email : email , label : label  })
            .map( (data: Response) => {
                const extracted = data.json();
                console.log(extracted);
            });
    }
}