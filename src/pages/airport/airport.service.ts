import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AirportService {
    private baseUrl: string  = "https://frypto.somee.com";

    constructor(private _http: HttpClient) { }

    getAirportBy(param) {
        return this._http.get(`${this.baseUrl}/api/airports`, {
                params: new HttpParams({
                    fromObject: {
                        name: "",
                        code: "",
                        location: param
                    }     
                })
            }).map(res =>JSON.parse(JSON.stringify(res)));
    }
}


