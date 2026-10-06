import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute){
    super(locator.endpoints.INSURANCE, locator, route);
  }
}
