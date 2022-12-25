import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCuriositiesComponent } from './my-curiosities.component';

describe('MyCuriositiesComponent', () => {
  let component: MyCuriositiesComponent;
  let fixture: ComponentFixture<MyCuriositiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCuriositiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCuriositiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
