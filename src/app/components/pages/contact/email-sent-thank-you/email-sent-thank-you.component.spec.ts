import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSentThankYouComponent } from './email-sent-thank-you.component';

describe('EmailSentThankYouComponent', () => {
  let component: EmailSentThankYouComponent;
  let fixture: ComponentFixture<EmailSentThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSentThankYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSentThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
