import { CarsModule } from './cars/cars.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { CarsService } from './cars/cars.service'
import { HttpModule } from '@angular/http'
import { HeaderComponent } from './shared-module/header/header.component'
import { CoreModule } from './core-module/core-module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CarsModule, HttpModule, CoreModule],
  providers: [CarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
