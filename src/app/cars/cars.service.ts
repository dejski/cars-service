import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Car } from './models/car'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiUrl = 'http://localhost:3000/api/cars'
  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    return this.http.get(this.apiUrl).map(res => res.json())
  }
}
