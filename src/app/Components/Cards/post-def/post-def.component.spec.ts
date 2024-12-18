import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDefComponent } from './post-def.component';

describe('PostDefComponent', () => {
  let component: PostDefComponent;
  let fixture: ComponentFixture<PostDefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDefComponent]
    });
    fixture = TestBed.createComponent(PostDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
