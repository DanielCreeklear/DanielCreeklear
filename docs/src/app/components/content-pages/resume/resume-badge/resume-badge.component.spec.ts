import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBadgeComponent } from './resume-badge.component';

describe('ResumeBadgeComponent', () => {
  let component: ResumeBadgeComponent;
  let fixture: ComponentFixture<ResumeBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
