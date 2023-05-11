import { Component, Input } from '@angular/core'
import { LanguageInterface } from '../../../interfaces/profile.interface'

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent {
  @Input() languages!: LanguageInterface[]
}
