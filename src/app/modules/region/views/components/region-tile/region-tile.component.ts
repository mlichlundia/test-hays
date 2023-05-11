import { Component, Input } from '@angular/core'
import { RegionInterface } from '../../../interface/region.interface'

@Component({
  selector: 'app-region-tile',
  templateUrl: './region-tile.component.html',
  styleUrls: ['./region-tile.component.scss']
})
export class RegionTileComponent {
  @Input() public region!: RegionInterface
}
