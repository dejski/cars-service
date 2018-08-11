import { CarsService } from './../cars.service'
import { TotalCostComponent } from './../total-cost/total-cost.component'
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  AfterViewInit,
} from '@angular/core'
import { Car } from '../models/car'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('totalCostRef')
  totalCostRef: TotalCostComponent

  totalCost: number
  grossCost: number

  cars: Car[]

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.loadCars()
  }

  loadCars(): void {
    this.carsService.getCars().subscribe(cars => {
      this.cars = cars
      this.countTotalCost()
    })
  }

  ngAfterViewInit() {
    // this.totalCostRef.showGross()
  }

  showGross(): void {
    this.totalCostRef.showGross()
  }

  countTotalCost(): void {
    this.totalCost = this.cars.map(car => car.cost).reduce((prev, next) => prev + next)
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost
  }
}
