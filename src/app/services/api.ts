import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class Api {
  
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

  constructor(private http:HttpClient){}

  getAPi():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl);
  }

}
