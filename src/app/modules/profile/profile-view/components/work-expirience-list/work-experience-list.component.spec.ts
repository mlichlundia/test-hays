import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceListComponent } from './work-experience-list.component';

describe('WorkExpirienceListComponent', () => {
  let component: WorkExperienceListComponent;
  let fixture: ComponentFixture<WorkExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
