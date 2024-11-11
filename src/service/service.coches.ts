import { Coche } from "../app/components/models/Coche";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServiceCohes {
    constructor(private _http: HttpClient) {}

    getCoches(): Observable<any> {
        let request = "webresources/coches";
        let url = environment.urlApiCoches + request;
        console.log(url);

        return this._http.get(url);
    }
}