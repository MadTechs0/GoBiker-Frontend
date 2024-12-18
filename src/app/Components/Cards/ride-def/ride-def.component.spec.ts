import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideDefComponent } from './ride-def.component';

describe('RideDefComponent', () => {
  let component: RideDefComponent;
  let fixture: ComponentFixture<RideDefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RideDefComponent]
    });
    fixture = TestBed.createComponent(RideDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
