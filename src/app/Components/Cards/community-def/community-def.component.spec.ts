import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDefComponent } from './community-def.component';

describe('CommunityDefComponent', () => {
  let component: CommunityDefComponent;
  let fixture: ComponentFixture<CommunityDefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityDefComponent]
    });
    fixture = TestBed.createComponent(CommunityDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
