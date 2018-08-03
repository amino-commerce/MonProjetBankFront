import { Injectable } from '@angular/core';
import { Compte } from '../domain/compte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  // tslint:disable-next-line:no-inferrable-types
  private URL:string = 'http://localhost:4940/api/Comptes';
  constructor(private _http: HttpClient) { }

  getAllComptes():Observable<Compte[]> {
     return this._http.get<Compte[]>(this.URL);
  }
}
