import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class DatosService {

  constructor(private http: Http) { }

  getData(): Observable<any>{
    return this.http.get('../assets/listaDatos.json');
  }

}
