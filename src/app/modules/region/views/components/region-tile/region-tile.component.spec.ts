import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionTileComponent } from './region-tile.component';

describe('RegionTileComponent', () => {
  let component: RegionTileComponent;
  let fixture: ComponentFixture<RegionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
