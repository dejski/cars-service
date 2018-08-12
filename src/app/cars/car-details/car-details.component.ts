import { Car } from './../models/car'
import { CarsService } from '../cars.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'cs-cars-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less'],
})
export class CarDetailsComponent implements OnInit {
  car: Car
  constructor(private carsService: CarsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadCar()
  }

  loadCar() {
    this.car = this.route.snapshot.data['car']
    // const id = +this.route.snapshot.params['id']
    // this.carsService.getCar(id).subscribe(car => (this.car = car))
  }
}
