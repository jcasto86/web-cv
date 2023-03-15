import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryWorkComponent } from './voluntary-work.component';

describe('VoluntaryWorkComponent', () => {
  let component: VoluntaryWorkComponent;
  let fixture: ComponentFixture<VoluntaryWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluntaryWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntaryWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
