import { Component, Input } from '@angular/core'
import { WorkExperienceInterface } from '../../../interfaces/profile.interface'

@Component({
  selector: 'app-work-expirience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.scss']
})
export class WorkExperienceListComponent {
  @Input() list!: WorkExperienceInterface[]
}
