import { Component, Input } from '@angular/core'
import { WorkExperienceInterface } from '../../../../../interfaces/profile.interface'

@Component({
  selector: 'app-work-experience-item',
  templateUrl: './work-experience-item.component.html',
  styleUrls: ['./work-experience-item.component.scss']
})
export class WorkExperienceItemComponent {
  @Input() work!: WorkExperienceInterface
}
