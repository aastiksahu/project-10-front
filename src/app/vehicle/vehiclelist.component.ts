import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css']
})
export class VehiclelistComponent extends BaseListCtl {

  constructor(locator: ServiceLocatorService, route: ActivatedRoute){
    super(locator.endpoints.VEHICLE, locator, route);
  }
}
