import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../app/global";
import { environment } from "../environments/environment.development";

@Injectable()
export class ServicePersonas {

    //PARA LAS PETICIONES API VIENE UN OBJETO LLAMADO
    //HttpClient QUE NOS PERMITIRA REALIZAR LAS PETICIONES
    constructor(private _http: HttpClient) { }

    getPersonas(): Observable<any> {
        let request = "api/personas"
        // let url = Global.urlApiPersonas + request;
        let url = environment.urlApiPersonas + request;

        //TENEMOS DOS FORMAS DE REALIZAR LA FUNCIONALIDAD DE DEVOLUCION DE DATOS
        // 1) IGUAL QUE EN VUE, CREANDO UNA PROMESA POR ENCIMA DE ESTE METODO
        // 2) DEVOLVER DIRECTAMENTE LA PETICION PARA QUE SEA EL COMPONENT QUIEN SE SUBSCRIBA
        console.log(url)
        return this._http.get(url);
    }

    getPersonasPromesa(): Promise<any> {
        let request = "api/personas"
        // let url = Global.urlApiPersonas + request;
        let url = environment.urlApiPersonas + request;

        let promise = new Promise((resolve) => {
            this._http.get(url).subscribe((response) => {
                console.log(url)
                resolve(response);
            })
        })
        return promise;
    }
}