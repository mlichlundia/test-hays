import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { LocationRoutingModule } from './location-routing.module'
import { RegionViewComponent } from './views/region-view/region-view.component'
import { CountryListViewComponent } from './views/country-list-view/country-list-view.component'
import { CountryViewComponent } from './views/country-view/country-view.component';
import { RegionTileComponent } from './views/region-view/components/region-tile/region-tile.component';
import { CountryCardComponent } from './views/country-view/components/country-card/country-card.component';
import { CardSkeletonComponent } from './views/country-view/components/card-skeleton/card-skeleton.component'

@NgModule({
  declarations: [
    RegionViewComponent,
    CountryListViewComponent,
    CountryViewComponent,
    RegionTileComponent,
    CountryCardComponent,
    CardSkeletonComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    NgxSkeletonLoaderModule
  ]
})
export class LocationModule {
}
