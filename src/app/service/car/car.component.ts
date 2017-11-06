import { Component, OnInit } from '@angular/core'

import { DrivingSerice } from '../driving.service'

@Component({
  selector: 'app-car',
  //providers: [DrivingSerice],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  driverName: string = 'NOT KNOWN'
  constructor(private  drivingService: DrivingSerice) { }

  ngOnInit() {
    this.drivingService.currentMessage.subscribe(message => this.driverName = message)
  }

  getDriverName(){
    return this.driverName = this.drivingService.driverName;
  }

  publishDriverName(){
    this.drivingService.driverName = this.driverName
  }

}
