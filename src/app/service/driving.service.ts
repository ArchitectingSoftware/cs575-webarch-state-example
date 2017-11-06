import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

//you need to register the service in the core app model, or in any components that will use it

@Injectable()
export class DrivingSerice {
    public sharedValue: string = "NOT SET YET"
    public carType: string = "NOT SET YET";
    public driverName: string = "NOT SET YET";

    private messageSource = new BehaviorSubject<string>('')
    currentMessage = this.messageSource.asObservable();

    constructor() {}

    publishMessage(updatedDriverName: string){
        this.driverName = updatedDriverName
        this.messageSource.next(updatedDriverName)
    }
}