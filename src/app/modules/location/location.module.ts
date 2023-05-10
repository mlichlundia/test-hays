import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { LocationRoutingModule } from './location-routing.module'
import { RegionViewComponent } from './views/region-view/region-view.component'
import { CountryListViewComponent } from './views/country-list-view/country-list-view.component'
import { CountryViewComponent } from './views/country-view/country-view.component';
import { RegionTileComponent } from './views/region-view/components/region-tile/region-tile.component';
import { CountryCardComponent } from './views/country-view/components/country-card/country-card.component'

@NgModule({
  declarations: [
    RegionViewComponent,
    CountryListViewComponent,
    CountryViewComponent,
    RegionTileComponent,
    CountryCardComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    NgOptimizedImage
  ]
})
export class LocationModule {
}
