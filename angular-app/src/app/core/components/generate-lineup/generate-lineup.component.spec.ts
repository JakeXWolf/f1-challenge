import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLineupComponent } from './generate-lineup.component';

describe('GenerateLineupComponent', () => {
  let component: GenerateLineupComponent;
  let fixture: ComponentFixture<GenerateLineupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateLineupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
