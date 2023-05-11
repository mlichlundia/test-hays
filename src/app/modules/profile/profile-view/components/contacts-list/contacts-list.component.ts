import { Component, Input } from '@angular/core'
import { ContactInterface } from '../../../interfaces/profile.interface'

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  @Input() contacts!: ContactInterface[]
}
