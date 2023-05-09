import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CountryListViewComponent } from './views/country-list-view/country-list-view.component'
import { CountryViewComponent } from './views/country-view/country-view.component'
import { RegionViewComponent } from './views/region-view/region-view.component'

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: RegionViewComponent},
      {path: 'countries', component: CountryListViewComponent},
      {path: 'country/:name', component: CountryViewComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LocationRoutingModule {
}
