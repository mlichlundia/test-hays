import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { RegionTileComponent } from './views/components/region-tile/region-tile.component'
import { RegionViewComponent } from './views/region-view.component'

@NgModule({
  declarations: [RegionViewComponent, RegionTileComponent],
  imports: [CommonModule, RouterModule]
})
export class RegionModule {
}
