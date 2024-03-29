import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePostComponent } from './resume-post.component';

describe('ResumePostComponent', () => {
  let component: ResumePostComponent;
  let fixture: ComponentFixture<ResumePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
