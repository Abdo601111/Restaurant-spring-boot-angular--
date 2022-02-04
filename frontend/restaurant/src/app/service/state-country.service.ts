import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../model/country';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class StateCountryService {

 
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }


  getAllCountry(): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.baseUrl}countries`).pipe(
      map(
        response => response
      )
    )
  }
  getAllStates(): Observable<State[]>{
    return this.http.get<State[]>(`${this.baseUrl}states`).pipe(
      map(
        response => response
      )
    )
  }

  getStatesByCode(code): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}statescode?code=${code}`).pipe(
      map(
        response => response
      )
    )
  }
}


