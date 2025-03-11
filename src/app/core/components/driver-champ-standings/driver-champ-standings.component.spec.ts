import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverChampStandingsComponent } from './driver-champ-standings.component';

describe('DriverChampStandingsComponent', () => {
  let component: DriverChampStandingsComponent;
  let fixture: ComponentFixture<DriverChampStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverChampStandingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverChampStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
