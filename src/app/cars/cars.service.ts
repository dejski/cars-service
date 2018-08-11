import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Car } from './models/car'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
// import { Observable } from 'rxjs'
// import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiUrl = 'http://localhost:3000/api/cars'
  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    return this.http.get(this.apiUrl).map(res => res.json())
    // return this.http.get(this.apiUrl).pipe(map(res => res.json()))
  }
}
