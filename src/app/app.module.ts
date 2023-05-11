import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './core/layout/footer/footer.component'
import { HeaderComponent } from './core/layout/header/header.component'
import { ProfileModule } from './modules/profile/profile.module'
import { RegionModule } from './modules/region/region.module'
import { BasicModalComponent } from './shared/components/modals/basic-modal/basic-modal.component'
import { PrimaryButtonComponent } from './shared/components/UI/buttons/primary-button/primary-button.component'
import { SecondaryButtonComponent } from './shared/components/UI/buttons/secondary-button/secondary-button.component'
import { LogoComponent } from './shared/components/UI/logo/logo.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicModalComponent,
    LogoComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RegionModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
