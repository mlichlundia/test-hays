import { Component } from '@angular/core'
import { REGION_MOCK } from '../../mock/regions.mock'
import { RegionInterface } from '../../types-interfaces/region.interface'

@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.scss']
})
export class RegionViewComponent {
  public regions: RegionInterface[] = REGION_MOCK
}
