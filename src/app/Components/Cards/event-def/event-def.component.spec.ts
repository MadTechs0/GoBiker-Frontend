import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDefComponent } from './event-def.component';

describe('EventDefComponent', () => {
  let component: EventDefComponent;
  let fixture: ComponentFixture<EventDefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDefComponent]
    });
    fixture = TestBed.createComponent(EventDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
