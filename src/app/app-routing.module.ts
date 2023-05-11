import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { RegionViewComponent } from './modules/region/views/region-view.component'

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: RegionViewComponent},
      {path: ':name', loadChildren: () => import('src/app/modules/country/country.module').then(m => m.CountryModule)}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
