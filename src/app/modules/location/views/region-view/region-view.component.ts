import { Component, OnInit } from '@angular/core'
import { LocationService } from '../../services/location/location.service'
import { RegionInterface } from '../../types-interfaces/region.interface'

@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.scss']
})
export class RegionViewComponent implements OnInit {
  public regions!: RegionInterface[]

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.regions = this.locationService.regions
  }
}
