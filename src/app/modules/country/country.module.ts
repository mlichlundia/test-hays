import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { CountryRoutingModule } from './country-routing.module'
import { CountryListViewComponent } from './views/country-list-view/country-list-view.component'
import { CountryViewComponent } from './views/country-view/country-view.component';
import { CountryCardComponent } from './views/country-view/components/country-card/country-card.component';
import { CardSkeletonComponent } from './views/country-view/components/card-skeleton/card-skeleton.component'

@NgModule({
  declarations: [
    CountryListViewComponent,
    CountryViewComponent,
    CountryCardComponent,
    CardSkeletonComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    NgxSkeletonLoaderModule
  ]
})
export class CountryModule {
}
