import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//nos permite inyectar datos al servicio y este los entregue
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //insert urls
  urlBase = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  //Solo se debe hacer este tipo de codigo para poder conectar la api
  obtenerListadoUsuarios(): Promise <any> {
    return new Promise ((resolve, rejects) => {
      this.httpClient.get(this.urlBase)
      .subscribe(respuesta =>{
        resolve(respuesta);
      }, (err) => {
        rejects(err);
      });
    });
  };
}
