import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/layout/header/header.component'
import { FooterComponent } from './components/layout/footer/footer.component'
import { LogoComponent } from './components/UI/logo/logo.component'
import { PrimaryButtonComponent } from './components/UI/buttons/primary-button/primary-button.component'
import { SecondaryButtonComponent } from './components/UI/buttons/secondary-button/secondary-button.component'
import { BasicModalComponent } from './components/modals/basic-modal/basic-modal.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    BasicModalComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BasicModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
