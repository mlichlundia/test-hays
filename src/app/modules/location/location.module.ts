import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LocationRoutingModule } from './location-routing.module'
import { RegionViewComponent } from './views/region-view/region-view.component'
import { CountryListViewComponent } from './views/country-list-view/country-list-view.component'
import { CountryViewComponent } from './views/country-view/country-view.component';
import { RegionTileComponent } from './views/region-view/components/region-tile/region-tile.component'

@NgModule({
  declarations: [
    RegionViewComponent,
    CountryListViewComponent,
    CountryViewComponent,
    RegionTileComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule {
}
