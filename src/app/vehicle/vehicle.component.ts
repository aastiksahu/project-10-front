import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute){
    super(locator.endpoints.VEHICLE, locator, route);
  }
}
