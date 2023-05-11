import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SkillTagComponent } from './profile-view/components/skill-list/components/skill-tag/skill-tag.component';
import { SkillListComponent } from './profile-view/components/skill-list/skill-list.component';
import { ContactsListComponent } from './profile-view/components/contacts-list/contacts-list.component';
import { LanguagesListComponent } from './profile-view/components/languages-list/languages-list.component';
import { WorkExperienceListComponent } from './profile-view/components/work-expirience-list/work-experience-list.component';
import { WorkExperienceItemComponent } from './profile-view/components/work-expirience-list/components/work-experience-item/work-experience-item.component'

@NgModule({
  declarations: [ProfileViewComponent, SkillTagComponent, SkillListComponent, ContactsListComponent, LanguagesListComponent, WorkExperienceListComponent, WorkExperienceItemComponent],
  exports: [
    ProfileViewComponent
  ],
  imports: [CommonModule]
})
export class ProfileModule {
}
