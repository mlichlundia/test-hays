import { Component } from '@angular/core'
import { Profile } from '../constants/profile'
import { ProfileInterface } from '../interfaces/profile.interface'

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  public profile: ProfileInterface = Profile
}
